import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RoughNotationGroup } from "react-rough-notation";
import { LabelHighlight } from "./Highlight";

export default function FavouriteProjects({ projects }) {
	const [allFields, setFields] = useState([null]);
	const colors = ["#161616", "#ff2975", "#a5edb6", "#fae85a", "#ff5c00", "#5179fe"];

	useEffect(async () => {
		setFields(projects);
		// console.log(projects);
	}, []);

	return (
		<div className="">
			<div className="max-w-6xl mx-auto">
				<header className="flex flex-col md:flex-row justify-between items-center md:my-20 lg:mt-40 mb-30">
					<h2 className="text-5xl max-w-lg font-bold text-black my-10 md:my-0 md:text-black dark:text-white">
						Projects
					</h2>
					<div className="flex-1 md:mr-8">
						<span className="font-mono block text-sm text-right text-synthPink dark:text-white">
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
							<p className="text-sm">View all</p>
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
									className="relative rounded-md relative overflow-hidden w-full block shadow-2xl cursor-pointer dark:border border-white dark:shadow-3xl h-[400px]"
									key={i + item.slug.current}
								>
									<Image
										src={item.image.url}
										layout="fill"
										className="transform object-cover hover:scale-125 transition duration-2000 ease-out favourite-img"
									/>
									<h3 className="absolute top-5 left-5 text-black font-bold text-base bg-white shadow-lg rounded-md px-2 py-1">
										<RoughNotationGroup show={true}>
											<div className="flex self-start">
												<LabelHighlight
													color={colors[5]}
													padding={[3, 8, 3, 8]}
													animate={true}
												>
													{item.title}
												</LabelHighlight>
											</div>
										</RoughNotationGroup>
									</h3>
									<h4 className="absolute bottom-5 right-5 text-black font-semibold bold text-sm bg-white shadow-lg rounded-md px-2 py-1">
										<RoughNotationGroup show={true}>
											<div className="flex self-start">
												<LabelHighlight
													color={colors[2]}
													padding={[3, 8, 3, 8]}
													animate={true}
												>
													{item.status}
												</LabelHighlight>
											</div>
										</RoughNotationGroup>
									</h4>
								</div>
							</Link>
						))}
				</div>
			</div>
		</div>
	);
}
