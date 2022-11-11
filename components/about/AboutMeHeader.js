import React from "react";
import { HeroHighlight } from "@components/frontpage/Highlight";
import { RoughNotationGroup } from "react-rough-notation";

export default function AboutMeHeader() {
	const colors = ["#161616", "#ff2975", "#a5edb6", "#fae85a", "#ff5c00", "#5179fe"];

	return (
		<div className="max-w-6xl mx-auto sm:mt-[100px] mb-[50px]">
			<div className="max-w-3xl mx-auto">
				<span className="block font-light text-lg text-synthPink dark:text-white">
					Hey, I'm
				</span>
				<div className="ml-5 my-4">
				<RoughNotationGroup show={true}>
					<HeroHighlight color={colors[2]} padding={[16, 10, 4]}>
						<h1 className="px-2 text-6xl font-bold text-black dark:text-white pb-4 inline-block mb-0">
							Lasse Buus Nielsen
						</h1>
					</HeroHighlight>
				</RoughNotationGroup>
				</div>
				<p className="font-sans font-regular text-base dark:text-white leading-relaxed text-justify">
					I am a Digital Concept Developer specializing in UI/UX and
					web development, with a focus for details. I'm currently
					working as a Frontend Developer for a company called
					Nettmaker in Oslo, Norway where I have been for the past 2
					year by starting out as an intern through the AIESEC
					program. I'm passionate about making sure that the
					solutions, interfaces, graphics are user-friendly,
					aesthetically pleasing, clear, on-brand and usable by the
					clients of Nettmaker. Every solution is different and
					therefore focusing on the details is an important step, for
					making on-brand and usable solutions.
				</p>
			</div>
		</div>
	);
}
