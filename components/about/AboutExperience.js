import React from "react";
import userData from "@constants/data";

export default function AboutExperience() {
	return (
		<div>
			<div className="max-w-6xl mx-auto mt-20">
				<div className="flex flex-wrap content-between">
					<div className="w-full max-w-3xl mx-auto mb-14">
						<h3 className="inline-block text-3xl font-medium text-black dark:text-white">
							Experiences
						</h3>
						<div className="flex flex-wrap items-center gap-10">
							{userData.aboutExperience.map((info, idx) => (
								<ExperienceCard
									key={idx}
									title={info.title}
									date={info.date}
									company={info.company}
									content={info.content}
								/>
							))}
						</div>
					</div>
					<div className="w-full max-w-3xl mx-auto my-8">
						<h3 className="inline-block mb-8 text-3xl font-medium text-black dark:text-white">
							Education
						</h3>
						<div className="flex flex-col flex-wrap items-center w-full gap-10">
							{userData.aboutSchool.map((info, idx) => (
								<SchoolCard
									key={idx}
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
		<div className="relative mt-8">
			<h4 className="relative inline-block px-2 py-1 pl-0 text-sm font-normal bg-white text-synthPink bold dark:bg-transparent">
				<div className="flex self-start">{date}</div>
			</h4>
			<h3 className="my-4 text-xl font-semibold leading-none text-black dark:text-white">
				{title}
			</h3>
			<h4 className="mb-2 text-sm font-light text-gray-700 text-md dark:text-gray-100">
				{company}
			</h4>
			<p className="font-sans text-base text-black font-regular dark:text-white">
				{content}
			</p>
		</div>
	);
};

const SchoolCard = ({ title, date, school, content, degree }) => {
	return (
		<div className="relative w-full mt-6">
			{degree ? (
				<span className="relative top-0 right-0 inline-block p-2 mb-4 text-xs font-light text-white bg-black dark:bg-synthPink dark:text-white">
					{degree}
				</span>
			) : (
				""
			)}
			<h4 className="relative block px-2 py-1 pl-0 text-sm font-semibold text-black bold dark:text-white">
				<div className="flex self-start">{date}</div>
			</h4>
			<h3 className="relative my-4 text-xl font-light leading-none text-black dark:text-white">
				{title}
			</h3>
			<h4 className="mb-2 font-light text-md text-synthPink">{school}</h4>
			<p className="font-sans text-base text-black font-regular dark:text-white">
				{content}
			</p>
		</div>
	);
};
