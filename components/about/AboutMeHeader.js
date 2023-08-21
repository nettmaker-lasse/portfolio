import React from "react";
import { HeroHighlight } from "@components/frontpage/Highlight";
import { RoughNotationGroup } from "react-rough-notation";

export default function AboutMeHeader() {

	return (
		<div className="max-w-6xl mx-auto sm:mt-[100px] mb-[50px]">
			<div className="max-w-2xl mx-auto">
				<span className="block text-lg font-light text-synthPink dark:text-white">
					Hey, I'm
				</span>
				<div className="my-4 ml-0">
						<h1 className="inline-block px-2 pb-4 pl-0 mb-0 text-4xl font-bold text-black dark:text-synthPink">
							Lasse Buus Nielsen
						</h1>
				</div>
				<p className="font-sans text-base leading-relaxed text-justify font-regular dark:text-white">
					I am a Digital Concept Developer specializing in UI/UX and
					web development, with a focus for details. I'm currently
					working as a Frontend Developer for a company called
					Nettmaker in Oslo, Norway where I have been for the past 4
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
