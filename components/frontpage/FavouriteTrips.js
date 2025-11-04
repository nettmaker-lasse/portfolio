import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import client from "@lib/sanity";
import moment from "moment";
import ArrowButton from "@components/ArrowButton";

export default function FavouriteTrips({ trips }) {
	const [data, setData] = useState([]);
	const builder = imageUrlBuilder(client);

	const urlFor = (source) => builder.image(source);

	useEffect(() => {
		setData(trips?.tripsData ?? []);
	}, [trips]);

	return (
		<div className="grid-pattern">
			<div className="max-w-6xl p-8 mx-auto">
				<div className="flex flex-col items-center justify-between md:flex-row">
					<h2 className="max-w-lg my-10 text-5xl font-bold text-black md:my-0 dark:text-white">
						Trips
					</h2>

					{/* ✅ Use ArrowButton directly (no surrounding <Link>) */}
					<ArrowButton text="View all trips" href="/trips" />
				</div>

				{/* Grid */}
				<div className="grid gap-8 mt-8 md:grid-cols-3">
					{data
						.slice()
						.sort(
							(a, b) =>
								new Date(b.releaseDate).getTime() -
								new Date(a.releaseDate).getTime()
						)
						.slice(0, 3)
						.map((item) => {
							const hero = item?.images?.[0];
							const src = hero ? urlFor(hero).url() : null;

							return (
								<Link
									href={`/trips/${item.slug.current}`}
									key={item.slug.current}
									className="relative flex flex-col w-full cursor-pointer group"
								>
									<div className="relative block w-full h-[300px] md:h-[500px] dark:border">
										{src ? (
											<Image
												src={src}
												alt={item.title}
												fill
												sizes="(max-width: 768px) 100vw, 33vw"
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
										<h4 className="absolute px-4 py-2 text-[12px] font-normal text-white top-6 right-6">
											{item.releaseDate
												? moment(
														item.releaseDate
												  ).format("Do MMMM YYYY")
												: "—"}
										</h4>
									</div>
								</Link>
							);
						})}
				</div>
			</div>
		</div>
	);
}
