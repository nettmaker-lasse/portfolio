import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ContainerBlock from "../components/ContainerBlock";
import Image from "next/dist/client/image";

export default function Home({ posts }) {
	const router = useRouter();
	const [mappedPosts, setMappedPosts] = useState([]);

	useEffect(() => {
		if (posts.length) {
		  const imgBuilder = imageUrlBuilder({
			projectId: "vn88o3gc",
			dataset: "production",
		  });
	  
		  const sortedPosts = posts.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt));
	  
		  setMappedPosts(
			sortedPosts.map((p) => {
			  return {
				...p,
				image: imgBuilder.image(p.image),
			  };
			})
		  );
		} else {
		  setMappedPosts([]);
		}
	  }, [posts]);

	return (
		<ContainerBlock title="Lasse Buus - Blog">
			<section>
				<div className="max-w-6xl mx-auto mt-10 md:mt-20">
					<h1 className="block text-5xl font-bold text-black dark:text-white">
						Blog
					</h1>
				</div>
				<div className="grid max-w-6xl grid-cols-1 gap-8 pt-10 pb-20 mx-auto sm:grid-cols-2 md:grid-cols-3">
					{mappedPosts.length ? (
						mappedPosts
							.map((posts, item) => (
								<div
									onClick={() =>
										router.push(
											`/blog/${posts.slug.current}`
										)
									}
									key={item + posts.slug.current}
									className="relative block w-full overflow-hidden cursor-pointer"
								>
									<div className="relative h-[400px]">
										<img
											src={posts.image}
											alt={posts.title}
											quality={70}
											layout="fill"
											className="w-full md:w-[400px] h-[400px] object-cover"
										/>
									</div>
									<div>
										<h3 className="relative px-2 py-1 pl-0 mt-2 text-lg font-bold text-black rounded-sm dark:text-white">
											<div className="flex self-start">
												{posts.title}
											</div>
										</h3>
										<h4 className="relative px-2 py-1 pl-0 text-sm font-normal text-black rounded-sm dark:text-white">
											<div className="flex self-start">
												{posts.status}
											</div>
										</h4>
									</div>
								</div>
							))
					) : (
						<>No Projects Yet</>
					)}
				</div>
			</section>
		</ContainerBlock>
	);
}

export const getServerSideProps = async (pageContext) => {
	const query = encodeURIComponent('*[ _type == "posts" ]');
	const url = `https://vn88o3gc.api.sanity.io/v1/data/query/production?query=${query}`;
	const result = await fetch(url).then((res) => res.json());

	if (!result.result || !result.result.length) {
		return {
			props: {
				posts: [],
			},
		};
	} else {
		return {
			props: {
				posts: result.result,
			},
		};
	}
};
