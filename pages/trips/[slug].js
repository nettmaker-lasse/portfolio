import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import ContainerBlock from "../../components/ContainerBlock";
import moment from "moment";
import client from "@lib/sanity";
import Image from "../../components/Image";
import { SRLWrapper } from "simple-react-lightbox";

export const Project = ({ title, images, date, slug }) => {
	const builder = imageUrlBuilder(client);
	const [toggler, setToggler] = useState(false);

	function urlFor(source) {
		return builder.image(source);
	}

	return (
		<ContainerBlock title="Lasse Buus - Blog">
			<div>
				<div className="">
					<img
						className="max-w-6xl mx-auto border full-w-image border-synthPink dark:shadow-3xl"
						src={urlFor(images[0]).url()}
					/>
					<div className="relative max-w-6xl mx-auto -top-14">
						<span className="relative bottom-0 px-2 py-1 my-4 text-sm font-semibold text-white rounded-md shadow-lg bold bg-synthPink">
							{moment(date).format("Do MMMM YYYY")}
						</span>
					</div>
					<div className="max-w-6xl mx-auto">
						<h1 className="my-12 text-5xl font-bold text-left md:text-8xl dark:text-white">
							{title}
						</h1>
					</div>
					<SRLWrapper>
						<div className="container grid max-w-6xl gap-8 mx-auto grid-cols sm:grid-cols-3">
							{Object.keys(images)
								.filter((e, i) => i != 0)
								.map((item, i) => (
									<div
										className="relative w-full overflow-hidden border shadow-2xl aspect-w-1 aspect-h-1 border-synthPink dark:shadow-3xl bg-synthPink bg-opacity-30"
										key={images[item]._key}
									>
										<Image
											src={urlFor(images[item]).url()}
											layout="fill"
											objectFit="cover"
											className="transition ease-out transform hover:scale-125 duration-2000 favourite-img"
											placeholder="blur"
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
	// console.log(trips);

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
