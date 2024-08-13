import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import client from "@lib/sanity";
import moment from "moment";
import ArrowButton from "@components/ArrowButton";

export default function FavouriteTrips({ trips }) {
	const [allFields, setFields] = useState([null]);
	const builder = imageUrlBuilder(client);

	function urlFor(source) {
		return builder.image(source);
	}

	const linkRef = useRef(null);
	useEffect(() => {
		setFields(trips);
	}, [trips]);

	return (
		<div className="">
			<div className="max-w-6xl mx-auto mt-8 md:mt-20">
				<div className="flex flex-col items-center justify-between md:flex-row">
					<h2 className="max-w-lg my-10 text-5xl font-bold text-black md:my-0 md:text-black dark:text-white">
						Trips
					</h2>
					<Link href="/trips">
						<ArrowButton
							text="View all trips"
							href="/trips"
							ref={linkRef}
						/>
					</Link>
				</div>

				{/* Grid starts here */}
				<div className="grid gap-8 mt-8 md:grid-cols-3">
					{trips.tripsData
						.sort(
							(a, b) =>
								new Date(b.releaseDate) -
								new Date(a.releaseDate)
						)
						.slice(0, 3)
						.map((item, i) => (
							<Link
								href={`/trips/${item.slug.current}`}
								key={item.slug.current}
							>
								<div
									className="relative flex flex-col w-full cursor-pointer group"
									key={i + item.slug.current}
								>
									<div className="relative block w-full h-[500px] dark:border">
										<Image
											src={urlFor(item.images[0]).url()}
											layout="fill"
											className="object-cover object-center"
											alt={item.title}
										/>
										<div>
											<h3 className="absolute items-center justify-start px-4 py-2 text-[12px] font-normal text-black bg-white top-6 left-6">
												{item.title}
											</h3>
											<h4 className="absolute px-4 py-2 text-[12px] font-normal text-white rounded-none top-6 right-6 dark:text-white">
											{moment(item.releaseDate).format(
												"Do MMMM YYYY"
											)}
										</h4>
										</div>
									</div>
								</div>
							</Link>
						))}
				</div>
			</div>
		</div>
	);
}
