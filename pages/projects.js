import Head from "next/head";
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ContainerBlock from "../components/ContainerBlock";
import Image from "next/dist/client/image";

export default function Home({ projects }) {
	const router = useRouter();
	const [mappedProjects, setMappedProjects] = useState([]);

	useEffect(() => {
		if (projects.length) {
			const imgBuilder = imageUrlBuilder({
				projectId: "vn88o3gc",
				dataset: "production",
			});

			//   console.log(projects)
			setMappedProjects(
				projects.map((p) => {
					return {
						...p,
						image: imgBuilder.image(p.image),
					};
				})
			);
		} else {
			setMappedProjects([]);
		}
	}, [projects]);

	return (
		<ContainerBlock title="Lasse Buus - Projects">
			<section>
				<div className="max-w-6xl mx-auto mt-10 md:mt-20">
				<h1 className="block text-5xl font-bold text-black dark:text-white">
						Projects
					</h1>
				</div>
				<div className="grid max-w-6xl grid-cols-1 gap-8 pt-10 pb-10 mx-auto sm:grid-cols-2 md:grid-cols-3">
					{projects.length ? (
						mappedProjects
							.sort((a, b) => (a.title > b.title ? 1 : -1))
							.map((project, index) => (
								<div
									onClick={() =>
										router.push(
											`/projects/${project.slug.current}`
										)
									}
									key={index + project.slug.current}
									className="relative block w-full overflow-hidden cursor-pointer"
								>
									<div className="relative h-[400px]">
									<img
										src={project.image}
										alt={project.title}
										quality={70}
										layout="fill"
										className="w-full md:w-[400px] h-[400px] object-cover"
									/>
									</div>
									<div>
										<h3 className="relative px-2 py-1 pl-0 mt-2 text-lg font-bold text-black rounded-sm dark:text-white">
											<div className="flex self-start">
												{project.title}
											</div>
										</h3>
										<h4 className="relative px-2 py-1 pl-0 text-sm font-normal text-black rounded-sm dark:text-white">
											<div className="flex self-start">
												{project.status}
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
	const query = encodeURIComponent('*[ _type == "projects" ]');
	const url = `https://vn88o3gc.api.sanity.io/v1/data/query/production?query=${query}`;
	const result = await fetch(url).then((res) => res.json());

	if (!result.result || !result.result.length) {
		return {
			props: {
				projects: [],
			},
		};
	} else {
		return {
			props: {
				projects: result.result,
			},
		};
	}
};
