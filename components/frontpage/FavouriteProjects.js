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
					<Link href="/projects">
						<ArrowButton
							text="View all projects"
							href="/projects"
							ref={linkRef}
						/>
					</Link>
				</div>

				{/* Grid starts here */}
				<div className="grid gap-8 mt-8 md:grid-cols-2">
					{projects.projectsData
						.slice(0, 3)
						.sort((a, b) => (a.title > b.title ? 1 : -1))
						.map((item, i) => (
							<Link
								href={"/projects/" + item.slug.current}
								key={item.slug.current}
							>
								<div
									className={`relative flex flex-col w-full cursor-pointer group ${
										i === 0
											? "md:col-span-2"
											: "md:col-span-1"
									}`}
								>
									<div className="relative block w-full h-[300px] md:h-[500px] dark:border">
										<Image
											src={item.image.url}
											layout="fill"
											className="object-cover object-center"
											alt={item.title}
										/>
										<div>
											<h3 className="absolute items-center justify-start px-4 py-2 text-[12px] font-normal text-black bg-white top-6 left-6">
												{item.title}
											</h3>
										</div>
										{/* <h4 className="absolute px-4 py-2 text-sm font-normal text-white bottom-6 bg-synthPink right-6 dark:text-white">
											{item.status}
										</h4> */}
									</div>
								</div>
							</Link>
						))}
				</div>
			</div>
		</div>
	);
}
