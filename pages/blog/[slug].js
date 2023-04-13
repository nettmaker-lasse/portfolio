import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import ContainerBlock from "../../components/ContainerBlock";
import client from "@lib/sanity";

export const Post = ({ title, body, image, poststatus, content, caption }) => {
	const builder = imageUrlBuilder(client);

	function urlFor(source) {
		return builder.image(source);
	}

	const serializers = {
		marks: {
			internalLink: ({ mark, children }) => {
				const { slug = {} } = mark;
				const href = `/${slug.current}`;
				return <a href={href}>{children}</a>;
			},
			link: ({ mark, children }) => {
				// Read https://css-tricks.com/use-target_blank/
				const { blank, href } = mark;
				return blank ? (
					<a href={href} target="_blank" rel="noopener">
						{children}
					</a>
				) : (
					<a href={href}>{children}</a>
				);
			},
		},
	};

	return (
		<ContainerBlock title="Lasse Buus - Blog">
			<div>
				<div>
					<div className="relative max-w-6xl mx-auto">
						<div className="relative border full-w-image max-h-[400px] md:max-h-full">
							<Image
								className="object-cover h-[400px] sm:h-full"
								src={urlFor(image).url()}
								quality={70}
								layout="fill"
							/>
						</div>
						<div className="absolute bottom-8 left-8">
							<span className="relative p-3 my-6 text-sm font-semibold text-white bottom-3 bold bg-synthPink">
								{caption}
							</span>
							<span className="relative p-3 my-6 ml-2 text-sm font-semibold text-black bg-white bottom-3 bold">
								{poststatus}
							</span>
						</div>
					</div>
				</div>
				<div className="max-w-[92%] lg:max-w-2xl mx-auto">
					<h1 className="my-6 text-3xl font-bold text-left md:text-5xl md:my-12 dark:text-white">
						{title}
					</h1>
				</div>
				<div className="max-w-[92%] lg:max-w-2xl mx-auto font-sans">
					<BlockContent
						blocks={content}
						serializers={serializers}
						className="text-lg dark:text-white blog-content"
					/>
				</div>
			</div>
		</ContainerBlock>
	);
};

export const getServerSideProps = async (pageContext) => {
	const pageSlug = pageContext.query.slug;

	if (!pageSlug) {
		return {
			notFound: true,
		};
	}

	const query = encodeURIComponent(
		`*[ _type == "posts" && slug.current == "${pageSlug}" ]`
	);
	const url = `https://vn88o3gc.api.sanity.io/v1/data/query/production?query=${query}`;

	const result = await fetch(url).then((res) => res.json());
	const post = result.result[0];

	if (!post) {
		return {
			notFound: true,
		};
	} else {
		return {
			props: {
				poststatus: post.status,
				title: post.title,
				image: post.image,
				content: post.blockText,
				caption: post.imagecaption,
			},
		};
	}
};

export default Post;
