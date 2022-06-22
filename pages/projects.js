import Head from "next/head";
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ContainerBlock from "../components/ContainerBlock";

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
				<div className="max-w-6xl mx-auto h-48">
					<h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left dark:text-white">
						Projects
					</h1>
				</div>
				<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
					{projects.length ? (
						mappedProjects
							.sort((a, b) => (a.title > b.title ? 1 : -1))
							.map((projects, item) => (
								<div
									onClick={() =>
										router.push(`/projects/${projects.slug.current}`)
									}
									key={item + projects.slug.current}
									className="single-post rounded-md relative overflow-hidden w-full block shadow-2xl cursor-pointer dark:border border-white dark:shadow-3xl"
								>
									<img
										className="transform hover:scale-125 transition duration-2000 ease-out favourite-img"
										src={projects.image}
									/>
									<h2 className="absolute top-10 left-10 text-white font-bold text-base bg-synthPink shadow-xl rounded-md px-2 py-1">
										{projects.title}
									</h2>
									<h3 className="absolute bottom-10 right-10 text-white font-semibold bold text-sm bg-synthPink shadow-lg rounded-md px-2 py-1">
										{projects.status}
									</h3>
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
