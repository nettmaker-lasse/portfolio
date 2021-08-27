import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#000", "#E03050", "#000"];
  const colors_dark = ["#000", "#E03050", "#000"];
  return (
	<div className="max-w-6xl mx-auto pb-20">
		<div className="flex flex-row justify-center items-center items-start overflow-hidden">
		{/* Text container */}

		<div className="w-full md:w-1/2">
			<RoughNotationGroup show={true}>
			<RainbowHighlight color={colors[0]}>
				<h1 className="text-4xl md:text-7xl font-bold text-red dark:text-red my-2 inline-block">
				Developer.
				</h1>
			</RainbowHighlight>
			<RainbowHighlight color={colors[1]}>
				<h1 className="text-4xl md:text-7xl font-bold text-black dark:text-white my-2 inline-block">
				Designer.
				</h1>
			</RainbowHighlight>
			{/* <RainbowHighlight color={colors[2]}>
				<h1 className="text-4xl md:text-7xl font-bold text-red dark:text-red my-2 inline-block">
				Programmer.
				</h1>
			</RainbowHighlight> */}
			</RoughNotationGroup>
		</div>
		{/* Image container */}
		<div className="hidden lg:block relative w-full md:w-1/2">
			<div className="">
			<img src={userData.avatarUrl} alt="avatar" className="shadow grayscale" />
			<div className="flex flex-row justify-between mt-4">
				<div className="flex flex-row space-x-4">
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
				<p className="font-mono">That's me</p>
				</div>
			</div>
			</div>
		</div>
		</div>
	</div>
  );
}
