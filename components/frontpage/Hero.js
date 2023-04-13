import React, { useEffect, useState, useCallback, memo } from "react";
import imageUrlBuilder from "@sanity/image-url";
import client from "@lib/sanity";
import Image from "next/image";
import PlayingNow from "../spotify/PlayingNow";

function Hero({ hero }) {
	const [fields, setFields] = useState([]);

	// Get a pre-configured url-builder from your sanity client
	const builder = imageUrlBuilder(client);

	// Then we like to make a simple function like this that gives the
	// builder an image and returns the builder for you to specify additional
	// parameters:
	const urlFor = useCallback(
		(source) => {
			return builder.image(source);
		},
		[builder]
	);

	useEffect(() => {
		setFields(hero);
	}, [hero]);

	const { title, subtitle, image, imagecaption } = hero.heroData;

	return (
		<div className="max-w-6xl mx-auto">
			<div className="flex flex-col items-start justify-between overflow-hidden md:flex-row sm:items-center">
				{/* Text container */}
				<div className="relative w-full mb-5 md:w-1/2">
					<div>
						<div className="ml-0 text-left md:mb-4 max-w-[385px]">
							<h1 className="block text-4xl font-bold text-black md:text-7xl dark:text-synthPink">
								{title}
							</h1>
						</div>
						<div className="ml-0 text-left max-w-[385px]">
							<h1 className="block w-full text-4xl font-bold text-black md:text-7xl dark:text-synthPink">
								{subtitle}
							</h1>
						</div>
					</div>
					{/* Spotify Playing now */}
					<span className="block mt-10 mb-4 text-xl font-bold text-black dark:text-white sm:inline-block">
						Currently listening to:
					</span>
					<PlayingNow />
				</div>
				{/* Image container */}
				<div className="relative w-full lg:block md:w-1/2">
					<div className="relative w-full">
						<Image
							src={image.url}
							layout="responsive"
							width={640}
							height={570}
							alt={subtitle}
							className="object-cover w-full shadow dark:border border-synthPink"
						/>
						<div className="flex flex-row justify-between mt-4">
							<div className="flex flex-row space-x-4 text-synthPink dark:text-synthPink">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-arrow-90deg-up"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
									/>
								</svg>
								<p className="font-mono">{imagecaption}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default memo(Hero);
