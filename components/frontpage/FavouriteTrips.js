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
	useEffect(async () => {
		setFields(trips);
	}, []);

	return (
		<div className="">
			<div className="max-w-6xl mx-auto mt-8 md:mt-20">
				<div className="flex flex-col items-center justify-between md:flex-row">
					<h2 className="max-w-lg my-10 text-5xl font-bold text-black md:my-0 md:text-black dark:text-white">
						Trips
					</h2>
					<div className="flex-1 md:mr-8">
						<span className="block font-mono text-sm text-right text-synthPink dark:text-white">
							View all trips
						</span>
					</div>
					<Link href="/trips">
						<ArrowButton
							text="View all"
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
									className="relative flex flex-col w-full cursor-pointer"
									key={i + item.slug.current}
								>
									<Image
										src={urlFor(item.images[0]).url()}
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
												{moment(
													item.releaseDate
												).format("Do MMMM YYYY")}
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
