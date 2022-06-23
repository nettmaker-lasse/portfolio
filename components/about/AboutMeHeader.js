import React from "react";
import { RainbowHighlight } from "@components/frontpage/RainbowHighlight";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function AboutMeHeader() {
	const colors = ["#161616", "#ff5caa", "#000", "#E7E5E4"];

	return (
		<div className="max-w-6xl mx-auto sm:mt-[100px] mb-[50px]">
			<div className="max-w-3xl mx-auto">
				<span className="block font-light text-lg text-synthPink dark:text-white">
					Hey, I'm
				</span>
				<RoughNotationGroup show={true}>
							<RainbowHighlight color={colors[1]}>
				<h1 className="text-7xl font-bold text-black dark:text-white mb-4 inline-block">
					Lasse Buus Nielsen
				</h1>
				</RainbowHighlight>
				</RoughNotationGroup>
				<p className="font-light text-base dark:text-white leading-relaxed text-justify">
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
