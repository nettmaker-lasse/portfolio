import React from "react";
import userData from "@constants/data";
import { RainbowHighlight } from "@components/frontpage/RainbowHighlight";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function AboutExperience() {

	const colors = ["#161616", "#ff5caa", "#000", "#E7E5E4"];

	return (
		<div className="">
			<div className="max-w-6xl mx-auto mt-8">
				<div className="flex flex-wrap content-between">
					<div className="w-full max-w-3xl mx-auto mb-8">
					<RoughNotationGroup show={true}>
							<RainbowHighlight color={colors[3]}>
								<h3 className="text-3xl font-medium text-black dark:text-white mb-8 inline-block">
									Experiences
								</h3>
							</RainbowHighlight>
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
						<RoughNotationGroup show={true}>
							<RainbowHighlight color={colors[3]}>
								<h3 className="text-3xl font-medium text-black dark:text-white mb-8 inline-block">
									Education
								</h3>
							</RainbowHighlight>
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
	return (
		<div className="relative">
			<span className="inline-block font-light text-xs text-white bg-black dark:bg-white dark:text-black p-2 mb-2 rounded-lg">{date}</span>
			<h3 className="font-light text-2xl my-2 leading-none text-black dark:text-white">{title}</h3>
			<h4 className="font-light text-sm text-synthPink mb-2">{company}</h4>
			<p className="font-light text-base text-black dark:text-white">{content}</p>
		</div>
	);
};

const SchoolCard = ({ title, date, school, content, degree }) => {
	return (
		<div className="relative w-full">
			<span className="inline-block font-light text-xs text-white bg-black dark:bg-white dark:text-black p-2 mb-2 rounded-lg">{date}</span>
			<h3 className="relative font-light text-2xl my-2 leading-none text-black dark:text-white">{title}</h3>
			{ degree ? <span className="absolute right-0 top-0 font-light text-xs text-white bg-black dark:bg-white dark:text-black p-2 mb-4 rounded-lg">{degree}</span> : ""}
			<h4 className="font-light text-sm text-synthPink mb-2">{school}</h4>
			<p className="font-light text-base text-black dark:text-white">{content}</p>
		</div>
	);
};
