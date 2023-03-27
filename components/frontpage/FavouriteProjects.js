import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowButton from "@components/ArrowButton";

export default function FavouriteProjects({ projects }) {
	const [allFields, setFields] = useState([null]);
	useEffect(async () => {
		setFields(projects);
		// console.log(projects);
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
								<div
									className="relative flex flex-col w-full cursor-pointer"
									key={i + item.slug.current}
								>
									<Image
										src={item.image.url}
										layout="responsive"
										width={400}
										height={400}
										quality={70}
										className="object-cover transition ease-out transform hover:scale-125 duration-2000"
									/>
									<div>
										<h3 className="relative px-2 py-1 pl-0 mt-2 text-lg font-bold text-black rounded-sm dark:text-white">
											<div className="flex self-start">
												{item.title}
											</div>
										</h3>
										<h4 className="relative px-2 py-1 pl-0 text-sm font-normal text-black rounded-sm dark:text-white">
											<div className="flex self-start">
												{item.status}
											</div>
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
