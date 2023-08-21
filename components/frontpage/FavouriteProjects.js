import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowButton from "@components/ArrowButton";

export default function FavouriteProjects({ projects }) {
	const [allFields, setFields] = useState([null]);
	useEffect(async () => {
		setFields(projects);
	}, []);

	const linkRef = useRef(null);

	return (
		<div>
			<div className="max-w-6xl mx-auto">
				<div className="flex flex-col items-center justify-between md:flex-row">
					<h2 className="max-w-lg my-10 text-5xl font-bold text-black md:my-0 md:text-black dark:text-white">
						Projects
					</h2>
					<div className="flex-1 md:mr-8">
						<span className="block font-mono text-sm text-right text-synthPink dark:text-white">
							View all projects
						</span>
					</div>
					<Link href="/projects">
						<ArrowButton
							text="View all"
							href="/projects"
							ref={linkRef}
						/>
					</Link>
				</div>

				{/* Grid starts here */}
				<div className="grid gap-8 mt-8 md:grid-cols-3">
					{projects.projectsData
						.slice(0, 3)
						.sort((a, b) => (a.title > b.title ? 1 : -1))
						.map((item, i) => (
							<Link
								href={"/projects/" + item.slug.current}
								key={item.slug.current}
							>
								<div className="relative flex flex-col w-full cursor-pointer group">
									<div className="relative block h-full">
										<Image
											src={item.image.url}
											layout="responsive"
											width={400}
											height={400}
											quality={70}
											className="relative object-cover transition ease-out transform hover:scale-125 duration-2000"
										/>
										{/* Overlay */}
										<div className="absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out opacity-100 sm:backdrop-blur sm:bg-synthPink/20 group-hover:opacity-0"></div>
										{/* Centered Title */}
										<h3 className="absolute inset-0 items-center justify-center hidden text-2xl font-medium text-white transition-opacity duration-500 ease-in-out rounded-sm opacity-100 sm:flex dark:text-white group-hover:opacity-0">
											{item.title}
										</h3>
									</div>
									{/* Status */}
									<div className="relative block">
										<div className="sm:hidden">
											<h3 className="flex items-center justify-start pt-4 text-2xl font-medium text-black transition-opacity duration-500 ease-in-out rounded-sm opacity-100 dark:text-white group-hover:opacity-0">
												{item.title}
											</h3>
										</div>
										<h4 className="absolute top-[-55px] bg-synthPink px-4 rounded-none py-2 text-white right-5 text-sm font-normal dark:text-white">
											{item.status}
										</h4>
									</div>
								</div>
							</Link>
						))}
				</div>
			</div>
		</div>
	);
}
