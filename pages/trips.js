import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ContainerBlock from "../components/ContainerBlock";
import client from "@lib/sanity";
import moment from "moment";
import Image from "next/dist/client/image";

export default function Home({ trips }) {
	const router = useRouter();
	const [mappedTrips, setMappedTrips] = useState([]);
	const builder = imageUrlBuilder(client);

	function urlFor(source) {
		return builder.image(source);
	}

	useEffect(() => {
		if (trips.length) {
			// console.log(trips);
			setMappedTrips(
				trips.map((t) => {
					return {
						...t,
					};
				})
			);
		} else {
			setMappedTrips([]);
		}
	}, [trips]);

	return (
		<ContainerBlock title="Lasse Buus - Trips">
			<section>
				<div className="max-w-6xl mx-auto mt-10 md:mt-20">
					<h1 className="block text-5xl font-bold text-black dark:text-white">
						Trips
					</h1>
				</div>
				<div className="grid max-w-6xl grid-cols-1 gap-8 pt-10 pb-10 mx-auto sm:grid-cols-2 md:grid-cols-3">
					{trips.length ? (
						mappedTrips
						.sort(
							(a, b) =>
								new Date(b.releaseDate) -
								new Date(a.releaseDate)
						)
							.map((trips, item) => (
								<div
								onClick={() =>
									router.push(
										`/trips/${trips.slug.current}`
									)
								}
									key={item + trips.slug.current}
									className="relative block w-full overflow-hidden cursor-pointer"
								>
									<div className="relative h-[400px]">
									<Image
										src={urlFor(trips.images[0]).url()}
										alt={trips.title}
										quality={70}
										layout="fill"
										className="w-full md:w-[400px] h-[400px] object-cover"
									/>
									</div>
									<div>
										<h3 className="relative px-2 py-1 pl-0 mt-2 text-lg font-bold text-black rounded-sm dark:text-white">
											<div className="flex self-start">
											{trips.title}
											</div>
										</h3>
										<h4 className="relative px-2 py-1 pl-0 text-sm font-normal text-black rounded-sm dark:text-white">
											<div className="flex self-start">
											{moment(trips.releaseDate).format(
											"Do MMMM YYYY"
										)}
											</div>
										</h4>
									</div>
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
	const query = encodeURIComponent('*[ _type == "gallery" ]');
	const url = `https://vn88o3gc.api.sanity.io/v1/data/query/production?query=${query}`;
	const result = await fetch(url).then((res) => res.json());

	if (!result.result || !result.result.length) {
		return {
			props: {
				trips: [],
			},
		};
	} else {
		return {
			props: {
				trips: result.result,
			},
		};
	}
};
