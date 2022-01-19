import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function FavouriteProjects({ projects }) {
	const [allFields, setFields] = useState([null]);

	useEffect(async () => {
		setFields(projects);
		// console.log(projects);
	}, []);

	return (
		<div className="">
			<div className="max-w-6xl mx-auto">
				<header className="flex flex-col md:flex-row justify-between items-center md:my-20 lg:mt-40 mb-30">
					<h1 className="text-6xl lg:text-7xl max-w-lg font-bold text-gray-500 my-10 md:my-0 md:text-black dark:text-white">
						Projects
					</h1>
					<div className="flex-1 md:mr-8">
						<span className="font-mono block text-right text-synthPink dark:text-white">
							View all projects
						</span>
					</div>
					<Link href="/projects">
						<a className="mb-20 md:mb-0 px-8 py-4 rounded-md shadow-lg bg-white text-xl font-semibold flex flex-row space-x-4 items-center dark:text-white dark:bg-synthPink dark:shadow-3xl">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-arrow-up-right-square"
								stroke="4"
								strokeWidth="4"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
								/>
							</svg>
							<p>View all</p>
						</a>
					</Link>
				</header>

				{/* Grid starts here */}
				<div className="grid md:grid-cols-3 gap-8 lg:-mt-8">
					{projects.projectsData
						.slice(0, 3)
						.sort((a, b) => (a.title > b.title ? 1 : -1))
						.map((item, i) => (
							<Link
								href={"/projects/" + item.slug.current}
								key={item.slug.current}
							>
								<div
									className="rounded-md relative overflow-hidden w-full block shadow-2xl cursor-pointer dark:border border-synthPink dark:shadow-3xl"
									key={i + item.slug.current}
								>
									<Image
										src={item.image.url}
										layout="responsive"
										width="365"
										height="500"
										className="transform object-cover hover:scale-125 transition duration-2000 ease-out favourite-img"
									/>
									<h2 className="absolute top-10 left-10 text-white font-bold text-base bg-synthPink shadow-lg rounded-md px-2 py-1">
										{item.title}
									</h2>
									<h3 className="absolute bottom-10 right-10 text-white font-semibold bold text-sm bg-synthPink shadow-lg rounded-md px-2 py-1">
										{item.status}
									</h3>
								</div>
							</Link>
						))}
				</div>
			</div>
		</div>
	);
}
