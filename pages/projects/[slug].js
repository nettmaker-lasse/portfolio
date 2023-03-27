import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import BlockContent from "@sanity/block-content-to-react";
import ContainerBlock from "../../components/ContainerBlock";
import projects from "cmsportfolio/schemas/projects";
import Image from "next/dist/client/image";
import client from "@lib/sanity";

export const Project = ({
	title,
	body,
	image,
	projectstatus,
	content,
	caption,
}) => {
	const builder = imageUrlBuilder(client);

	function urlFor(source) {
		return builder.image(source);
	}

	return (
		<ContainerBlock title="Lasse Buus - Blog">
			<div>
				<div className="">
					<div className="relative max-w-6xl mx-auto">
						<div className="relative border full-w-image border-synthPink max-h-[400px] md:max-h-full">
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
								{projectstatus}
							</span>
						</div>
					</div>
					<div></div>
					<div className="max-w-3xl mx-auto">
						<h1 className="my-6 text-3xl font-bold text-left md:text-5xl md:my-12 dark:text-white">
							{title}
						</h1>
					</div>
					<div className="max-w-3xl mx-auto font-sans leading-6 tracking-tight">
						<BlockContent
							blocks={content}
							className="dark:text-white"
						/>
					</div>
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
		`*[ _type == "projects" && slug.current == "${pageSlug}" ]`
	);
	const url = `https://vn88o3gc.api.sanity.io/v1/data/query/production?query=${query}`;

	const result = await fetch(url).then((res) => res.json());
	const project = result.result[0];

	if (!project) {
		return {
			notFound: true,
		};
	} else {
		return {
			props: {
				projectstatus: project.status,
				title: project.title,
				image: project.image,
				content: project.blockText,
				caption: project.imagecaption,
			},
		};
	}
};

export default Project;
