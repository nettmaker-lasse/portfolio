import imageUrlBuilder from "@sanity/image-url";
import ContainerBlock from "../../components/ContainerBlock";
import moment from "moment";
import client from "@lib/sanity";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

const DISPLAY_MODES = {
	inline: "inline",
	stacked: "stacked",
	carousel: "carousel",
};

export const Project = ({ title, images = [], date, slug, zoom }) => {
	const builder = imageUrlBuilder(client);

	function urlFor(source) {
		return builder.image(source);
	}

	const safeImages = Array.isArray(images)
		? images.filter((image) => image && image.asset)
		: [];
	const heroImage = safeImages[0] ?? null;
	const galleryImages = safeImages.slice(1);
	const hasGalleryImages = galleryImages.length > 0;
	const zoomEnabled = Boolean(zoom);

	const getAlt = (image, index) =>
		image?.alt?.trim() || `${title || "Trip"} image ${index + 1}`;

	const getOriginalSrc = (image) =>
		urlFor(image).auto("format").fit("max").width(2200).quality(85).url();

	const getThumbSrc = (image) =>
		urlFor(image).auto("format").fit("crop").width(1200).quality(75).url();

	const galleryClassName = "grid grid-cols-1 gap-6 md:grid-cols-3";

	const cardClassName =
		"relative w-full h-[260px] sm:h-[300px] lg:h-[340px] overflow-hidden border shadow-2xl bg-synthPink bg-opacity-30";

	const renderImageCard = (image, index) => {
		const alt = getAlt(image, index + 1);
		const thumbSrc = getThumbSrc(image);

		if (!zoomEnabled) {
			return (
				<div className={cardClassName} key={image._key || `${slug}-${index}`}>
					<Image
						src={thumbSrc}
						fill
						sizes="(max-width: 768px) 100vw, 33vw"
						quality={75}
						style={{ objectFit: "cover" }}
						className="object-cover"
						alt={alt}
					/>
				</div>
			);
		}

		const lightboxWidth = image?.dimensions?.width || 1600;
		const lightboxHeight = image?.dimensions?.height || 1067;

		return (
			<Item
				key={image._key || `${slug}-${index}`}
				original={getOriginalSrc(image)}
				thumbnail={thumbSrc}
				width={lightboxWidth}
				height={lightboxHeight}
				alt={alt}
			>
				{({ ref, open }) => (
					<button
						type="button"
						className={`${cardClassName} cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-synthPink focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black`}
						onClick={open}
						ref={ref}
						aria-label={`Open ${alt} in lightbox`}
					>
						<Image
							src={thumbSrc}
							fill
							sizes="(max-width: 768px) 100vw, 33vw"
							quality={75}
							style={{ objectFit: "cover" }}
							className="object-cover"
							alt={alt}
						/>
					</button>
				)}
			</Item>
		);
	};

	return (
		<ContainerBlock title="Lasse Buus - Blog">
			<div>
				<div>
					<div className="relative max-w-6xl mx-auto">
						<div className="relative border full-w-image max-h-[400px] md:max-h-full">
							{heroImage ? (
								<Image
									className="object-cover h-[400px] sm:h-full"
									src={getOriginalSrc(heroImage)}
									quality={75}
									sizes="100vw"
									fill
									style={{ objectFit: "cover" }}
									alt={getAlt(heroImage, 0)}
									priority
								/>
							) : (
								<div className="flex items-center justify-center h-[400px] text-sm text-black bg-gray-200 dark:text-white dark:bg-gray-800">
									No images available for this trip
								</div>
							)}
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
					{hasGalleryImages ? (
						<div className="container max-w-6xl mx-auto">
							{zoomEnabled ? (
								<Gallery>
									<div className={galleryClassName}>
										{galleryImages.map((image, index) =>
											renderImageCard(image, index)
										)}
									</div>
								</Gallery>
							) : (
								<div className={galleryClassName}>
									{galleryImages.map((image, index) =>
										renderImageCard(image, index)
									)}
								</div>
							)}
						</div>
					) : null}
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

	const query = encodeURIComponent(`*[ _type == "gallery" && slug.current == "${pageSlug}" ]{
		...,
		images[]{
			...,
			"dimensions": asset->metadata.dimensions
		}
	}`);
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
				images: Array.isArray(trips.images) ? trips.images : [],
				date: trips.releaseDate,
				slug: trips.slug,
				display: trips.display || DISPLAY_MODES.inline,
				zoom: Boolean(trips.zoom),
			},
		};
	}
};

export default Project;
