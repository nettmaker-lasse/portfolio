import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowButton from "@components/ArrowButton";

export default function FavouriteProjects({ projects }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(projects?.projectsData ?? []);
	}, [projects]);

	return (
		<div>
			<div className="max-w-6xl mx-auto">
				<div className="flex flex-col items-center justify-between md:flex-row">
					<h2 className="max-w-lg my-10 text-5xl font-bold text-black md:my-0 dark:text-white">
						Projects
					</h2>

					{/* Use ArrowButton directly — don’t wrap it in another <Link> */}
					<ArrowButton text="View all projects" href="/projects" />
				</div>

				{/* Grid */}
				<div className="grid gap-8 mt-8 md:grid-cols-2">
					{data
						.slice()
						.sort((a, b) => (a.title > b.title ? 1 : -1))
						.slice(0, 3)
						.map((item, i) => {
							const imgSrc = item?.image?.url || "";
							const cardCols =
								i === 0 ? "md:col-span-2" : "md:col-span-1";

							return (
								<Link
									href={`/projects/${item.slug.current}`}
									key={item.slug.current}
									className={`relative flex flex-col w-full cursor-pointer group ${cardCols}`}
								>
									<div className="relative block w-full h-[300px] md:h-[500px] dark:border">
										{imgSrc ? (
											<Image
												src={imgSrc}
												alt={item.title}
												fill
												sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
												className="object-cover object-center"
												quality={75}
											/>
										) : (
											<div className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-800">
												<span className="text-sm text-gray-600 dark:text-gray-300">
													No image
												</span>
											</div>
										)}

										<h3 className="absolute px-4 py-2 text-[12px] font-normal text-black bg-white top-6 left-6">
											{item.title}
										</h3>
										{/* If you want status later:
                    <h4 className="absolute px-4 py-2 text-sm font-normal text-white bottom-6 right-6 bg-synthPink">
                      {item.status}
                    </h4>
                    */}
									</div>
								</Link>
							);
						})}
				</div>
			</div>
		</div>
	);
}
