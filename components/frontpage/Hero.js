import React, { useEffect, useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import imageUrlBuilder from "@sanity/image-url";
import client from "@lib/sanity";
import PlayingNow from "../spotify/PlayingNow";

export default function Hero({ hero }) {
	const [fields, setFields] = useState([]);
	const colors = ["#161616", "#ff5caa", "#000"];

	// Get a pre-configured url-builder from your sanity client
	const builder = imageUrlBuilder(client);

	// Then we like to make a simple function like this that gives the
	// builder an image and returns the builder for you to specify additional
	// parameters:
	function urlFor(source) {
		return builder.image(source);
	}

	useEffect(async () => {
		setFields(hero);
		// console.log(hero);
	}, []);

	return (
		<div className="max-w-6xl mx-auto">
			<div className="flex flex-col sm:flex-row justify-between sm:items-center items-start overflow-hidden">
				{/* Text container */}
				<div className="relative w-[100%] md:w-1/2 mb-5">
					<RoughNotationGroup show={true}>
						<RainbowHighlight color={colors[0]}>
							<h1 className="text-6xl my-4 md:text-7xl font-bold text-synthPink dark:text-synthPink my-2 block sm:inline-block">
								{hero.heroData.title}.
							</h1>
						</RainbowHighlight>
						<RainbowHighlight color={colors[1]}>
							<h1 className="text-6xl my-4 md:text-7xl font-bold text-black dark:text-white my-2 block sm:inline-block">
								{hero.heroData.subtitle}.
							</h1>
						</RainbowHighlight>
					</RoughNotationGroup>
					{/* Spotify Playing now */}
					<span className="text-xl mt-10 mb-4 font-bold text-black dark:text-white block sm:inline-block">
						Currently listening to:
					</span>
					<PlayingNow />
				</div>
				{/* Image container */}
				<div className="lg:block relative w-full md:w-1/2">
					<div className="">
						<img
							srcSet={urlFor(hero.heroData.image.url)
								.quality(80)
								.width(575)
								.height(765)}
							width="575"
							height="765"
							alt={hero.heroData.subtitle}
							className="shadow rounded-md dark:border border-synthPink"
						/>
						<div className="flex flex-row justify-between mt-4">
							<div className="flex text-synthPink flex-row space-x-4 dark:text-synthPink">
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
								<p className="font-mono">{hero.heroData.imagecaption}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
