import userData from "@constants/data";
import React from "react";

export default function Experience() {
	return (
		<section className="bg-white dark:bg-black">
			<div className="max-w-6xl mx-auto h-38 bg-white dark:bg-black">
				<h1 className="text-5xl md:text-9xl font-bold py-10 text-center md:text-left dark:text-white">
					Experience
				</h1>
			</div>
			<div className="bg-white dark:bg-black">
				<div className="grid sm:grid-cols-2 grid-cols gap-x-10 gap-y-20 dark:bg-gray-900 max-w-6xl mx-auto pt-20">
					{/* Experience card */}
					{userData.experience.map((exp, idx) => (
						<>
							<ExperienceCard
								key={idx}
								title={exp.title}
								desc={exp.desc}
								year={exp.year}
								company={exp.company}
								companyLink={exp.companyLink}
							/>
						</>
					))}
				</div>
			</div>
		</section>
	);
}

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
	return (
		<div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-black dark:text-white z-10 mt-10">
			<h1 className="absolute -top-14 left-0 md:-top-14 text-4xl text-gray-200 font-bold dark:text-gray-800">
				{year}
			</h1>
			<h1 className="font-semibold text-xl">{title}</h1>
			<a href={companyLink} className="text-gray-500">
				{company}
			</a>
			<p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
		</div>
	);
};
