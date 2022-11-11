import React from "react";
import { useState, useEffect } from "react";
import userData from "@constants/data";
import {
	LabelHighlight,
	UnderlineHighlight,
} from "@components/frontpage/Highlight";
import { RoughNotationGroup } from "react-rough-notation";

export default function AboutExperience() {
	const colors = ["#161616", "#ff2975", "#000", "#E7E5E4"];

	return (
		<div className="">
			<div className="max-w-6xl mx-auto mt-8">
				<div className="flex flex-wrap content-between">
					<div className="w-full max-w-3xl mx-auto mb-14">
						<RoughNotationGroup show={true}>
							<UnderlineHighlight
								color={colors[1]}
								padding={[8, 8]}
							>
								<h3 className="text-3xl font-medium text-black dark:text-white mb-8 inline-block">
									Experiences
								</h3>
							</UnderlineHighlight>
						</RoughNotationGroup>
						<div className="flex flex-wrap items-center gap-10">
							{userData.aboutExperience.map((info, idx) => (
								<ExperienceCard
									title={info.title}
									date={info.date}
									company={info.company}
									content={info.content}
								/>
							))}
						</div>
					</div>
					<div className="w-full max-w-3xl mx-auto my-8">
						<RoughNotationGroup show={true} padding={[8, 8]}>
							<UnderlineHighlight color={colors[1]}>
								<h3 className="text-3xl font-medium text-black dark:text-white mb-8 inline-block">
									Education
								</h3>
							</UnderlineHighlight>
						</RoughNotationGroup>
						<div className="flex flex-col w-full flex-wrap items-center gap-10">
							{userData.aboutSchool.map((info, idx) => (
								<SchoolCard
									degree={info.degree}
									title={info.title}
									date={info.date}
									school={info.school}
									content={info.content}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const ExperienceCard = ({ title, date, company, content }) => {
	const colors = ["#161616", "#ff2975", "#000", "#E7E5E4"];

	return (
		<div className="relative mt-8">
			<h4 className="relative inline-block text-black font-semibold bold text-sm bg-white shadow-lg rounded-md px-2 py-1">
				<RoughNotationGroup show={true}>
					<div className="flex self-start">
						<LabelHighlight
							color={colors[1]}
							padding={[4, 8, 4, 8]}
							animate={true}
						>
							{date}
						</LabelHighlight>
					</div>
				</RoughNotationGroup>
			</h4>
			<h3 className="font-light text-xl my-4 leading-none text-black dark:text-white">
				{title}
			</h3>
			<h4 className="font-light text-sm text-synthPink mb-2">
				{company}
			</h4>
			<p className="font-regular font-sans text-base text-black dark:text-white">
				{content}
			</p>
		</div>
	);
};

const SchoolCard = ({ title, date, school, content, degree }) => {
	const colors = ["#161616", "#ff2975", "#000", "#E7E5E4"];

	return (
		<div className="relative w-full mt-6">
			{degree ? (
				<span className="relative inline-block right-0 top-0 font-light text-xs text-white bg-black dark:bg-synthPink dark:text-white p-2 mb-4 rounded-lg">
					{degree}
				</span>
			) : (
				""
			)}
			<h4 className="relative block text-black font-semibold bold text-sm bg-white rounded-md px-2 py-1">
				<RoughNotationGroup show={true}>
					<div className="flex self-start">
						<LabelHighlight
							color={colors[1]}
							padding={[4, 8, 4, 8]}
							animate={true}
						>
							{date}
						</LabelHighlight>
					</div>
				</RoughNotationGroup>
			</h4>
			<h3 className="relative font-light text-xl my-4 leading-none text-black dark:text-white">
				{title}
			</h3>
			<h4 className="font-light text-sm text-synthPink mb-2">{school}</h4>
			<p className="font-regular font-sans text-base text-black dark:text-white">
				{content}
			</p>
		</div>
	);
};
