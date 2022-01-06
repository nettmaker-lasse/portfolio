import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import ContainerBlock from "../../components/ContainerBlock";
import moment from "moment";
import client from "@lib/sanity";

export const Project = ({ title, images, date, slug }) => {
	const builder = imageUrlBuilder(client);

	function urlFor(source) {
		return builder.image(source);
	}

	return (
		<ContainerBlock title="Lasse Buus - Blog">
			<div>
				<div className="">
					<img
						className="max-w-6xl rounded-md full-w-image mx-auto dark:border border-synthPink dark:shadow-3xl"
						src={urlFor(images[0]).url()}
					/>
					<div className="max-w-6xl mx-auto relative -top-14">
						<span className="relative bottom-0 my-4 text-white font-semibold bold text-sm bg-synthPink shadow-lg rounded-md px-2 py-1">
							{moment(date).format("Do MMMM YYYY")}
						</span>
					</div>
					<div className="max-w-6xl mx-auto">
						<h1 className=" text-5xl md:text-8xl my-12 font-bold text-left dark:text-white">
							{title}
						</h1>
					</div>
					<div className="container grid grid-cols sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
						{Object.keys(images)
							.filter((e, i) => i != 0)
							.map((item, i) => (
								<div
									className="w-full rounded-md relative overflow-hidden shadow-2xl dark:border border-synthPink dark:shadow-3xl"
									key={images[item]._key}
								>
									<img
										src={urlFor(images[item]).url()}
										className="transform hover:scale-125 transition duration-2000 ease-out favourite-img"
									/>
								</div>
							))}
					</div>
				</div>
			</div>
		</ContainerBlock>
	);
};

export const getServerSideProps = async (pageContext) => {
	const pageSlug = pageContext.query.slug;

	if (!pageSlug) {
		return {
			notFound: true,
		};
	}

	const query = encodeURIComponent(
		`*[ _type == "gallery" && slug.current == "${pageSlug}" ]`
	);
	const url = `https://vn88o3gc.api.sanity.io/v1/data/query/production?query=${query}`;

	const result = await fetch(url).then((res) => res.json());
	const trips = result.result[0];
	console.log(trips);

	if (!trips) {
		return {
			notFound: true,
		};
	} else {
		return {
			props: {
				title: trips.title,
				images: trips.images,
				date: trips.releaseDate,
				slug: trips.slug,
			},
		};
	}
};

export default Project;
