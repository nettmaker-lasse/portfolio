import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import ContainerBlock from "../../components/ContainerBlock";
import moment from "moment";
import client from "@lib/sanity";
import Image from "next/dist/client/image";
import { SRLWrapper } from "simple-react-lightbox";

export const Project = ({ title, images, date, slug }) => {
	const builder = imageUrlBuilder(client);

	function urlFor(source) {
		return builder.image(source);
	}

	return (
		<ContainerBlock title="Lasse Buus - Blog">
			<div>
				<div>
					<div className="relative max-w-6xl mx-auto">
						<div className="relative border full-w-image max-h-[400px] md:max-h-full">
							<Image
								className="object-cover h-[400px] sm:h-full"
								src={urlFor(images[0]).url()}
								quality={70}
								layout="fill"
							/>
						</div>
						<div className="absolute bottom-8 left-8">
							<span className="relative p-3 my-6 text-sm font-semibold text-white bottom-3 bold bg-synthPink">
								{moment(date).format("Do MMMM YYYY")}
							</span>
						</div>
					</div>
					<div className="max-w-6xl mx-auto">
						<h1 className="my-6 text-3xl font-bold text-left md:text-5xl md:my-12 dark:text-white">
							{title}
						</h1>
					</div>
					<SRLWrapper>
						<div className="container grid max-w-6xl gap-8 mx-auto grid-cols sm:grid-cols-3">
							{Object.keys(images)
								.filter((e, i) => i != 0)
								.map((item, i) => (
									<div
										className="relative w-full overflow-hidden border shadow-2xl aspect-w-1 aspect-h-1 bg-synthPink bg-opacity-30"
										key={images[item]._key}
									>
										<Image
											src={urlFor(images[item]).url()}
											layout="fill"
											objectFit="cover"
											className="transition ease-out transform hover:scale-125 duration-2000"
											placeholder="blur"
											quality={30}
										/>
									</div>
								))}
						</div>
					</SRLWrapper>
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
