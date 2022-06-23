import React from "react";
import userData from "@constants/data";
import Image from "next/image";
import { RainbowHighlight } from "@components/frontpage/RainbowHighlight";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function CodeStack() {
	const colors = ["#161616", "#ff5caa", "#000", "#E7E5E4"];

	return (
		<div className="">
			<div className="max-w-6xl mx-auto">
				<div className="flex flex-wrap content-between">
					<div className="mb-4 w-full max-w-3xl mx-auto">
						<RoughNotationGroup show={true}>
							<RainbowHighlight color={colors[1]}>
								<h3 className="text-3xl font-medium text-black dark:text-white mb-12 inline-block">
									Code stack
								</h3>
							</RainbowHighlight>
						</RoughNotationGroup>
						<div className="grid grid-cols-4 sm:grid-cols-7 items-center gap-10 justify-between">
							{userData.frontendCode.map((skill, idx) => (
								<SkillCard
									title={skill.language}
									url={skill.url}
								/>
							))}
						</div>
					</div>
					<div className="mb-4 w-full max-w-3xl mx-auto mt-12">
						<RoughNotationGroup show={true}>
							<RainbowHighlight color={colors[1]}>
								<h3 className="text-3xl font-medium text-black dark:text-white mb-12 inline-block">
									Design tools
								</h3>
							</RainbowHighlight>
						</RoughNotationGroup>
						<div className="grid grid-cols-4 sm:grid-cols-7 items-center gap-10 justify-between">
							{userData.frontendDesign.map((skill, idx) => (
								<ToolCard
									title={skill.language}
									url={skill.url}
								/>
							))}
						</div>
					</div>
					<div className="mb-4 w-full max-w-3xl mx-auto mt-12">
						<RoughNotationGroup show={true}>
							<RainbowHighlight color={colors[1]}>
								<h3 className="text-3xl font-medium text-black dark:text-white mb-12 inline-block">
									Productive tools
								</h3>
							</RainbowHighlight>
						</RoughNotationGroup>
						<div className="grid grid-cols-4 sm:grid-cols-7 items-center gap-10 justify-between">
							{userData.frontendOthers.map((skill, idx) => (
								<OtherCard
									title={skill.language}
									url={skill.url}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const SkillCard = ({ title, url }) => {
	return (
		<div className="relative w-[60px]">
			<Image src={url} layout="responsive" width="full" height="50" />
		</div>
	);
};

const ToolCard = ({ title, url }) => {
	return (
		<div className="relative w-[60px]">
			<Image src={url} layout="responsive" width="full" height="50" />
		</div>
	);
};

const OtherCard = ({ title, url }) => {
	return (
		<div className="relative w-[60px]">
			<Image src={url} layout="responsive" width="full" height="50" />
		</div>
	);
};
