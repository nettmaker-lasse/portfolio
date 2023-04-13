import React from "react";
import userData from "@constants/data";
import Image from "next/image";
import { UnderlineHighlight, LabelHighlight } from "@components/frontpage/Highlight";
import { RoughNotationGroup } from "react-rough-notation";

export default function CodeStack() {

	return (
		<div className="">
			<div className="block max-w-6xl mx-auto my-14">
				<div className="flex flex-wrap content-between">
					<div className="w-full max-w-2xl mx-auto mb-4">
						<div className="relative">
									<h3 className="inline-block mb-6 text-3xl font-medium text-black dark:text-white">
										Code stack
									</h3>
						</div>
						<div className="grid items-center justify-between grid-cols-4 gap-10 sm:grid-cols-7">
							{userData.frontendCode.map((skill, idx) => (
								<SkillCard key={idx}
									title={skill.language}
									url={skill.url}
								/>
							))}
						</div>
					</div>
					<div className="w-full max-w-2xl mx-auto mt-20 mb-4">
								<h3 className="inline-block mb-6 text-3xl font-medium text-black dark:text-white">
									Design tools
								</h3>
						<div className="grid items-center justify-between grid-cols-4 gap-10 sm:grid-cols-7">
							{userData.frontendDesign.map((skill, idx) => (
								<ToolCard
									key={idx}
									title={skill.language}
									url={skill.url}
								/>
							))}
						</div>
					</div>
					<div className="w-full max-w-2xl mx-auto mt-20 mb-4">
								<h3 className="inline-block mb-6 text-3xl font-medium text-black dark:text-white">
									Productive tools
								</h3>
						<div className="grid items-center justify-between grid-cols-4 gap-10 sm:grid-cols-7">
							{userData.frontendOthers.map((skill, idx) => (
								<OtherCard
									key={idx}
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
