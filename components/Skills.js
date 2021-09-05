import React from "react";
import Link from "next/link";
import userData from "@constants/data";

export default function Skills() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center md:mt-20 mb-10 lg:mt-20">
          <h2 className="text-6xl lg:text-7xl max-w-lg font-bold text-gray-500 my-10 md:my-0 md:text-black dark:text-white">
            Skills
          </h2>
        </header>
		<div className="flex flex-wrap content-between">
			<div className="mb-4 w-full sm:w-1/3">
				<h3 className="text-red text-lg mb-2">Code</h3>
				<div className="flex flex-wrap">
				{userData.frontendCode.map((skill, idx) => (
					<SkillCard
					title={skill.language}
					/>
				))}
				</div>
			</div>
			<div className="mb-4 w-full sm:w-1/3">
				<h3 className="text-red text-lg mb-2">Design</h3>
				<div className="flex flex-wrap">
				{userData.frontendDesign.map((skill, idx) => (
					<ToolCard
					title={skill.design}
					/>
				))}
				</div>
			</div>
			<div className="mb-4 w-full sm:w-1/3">
				<h3 className="text-red text-lg mb-2">Tools</h3>
				<div className="flex flex-wrap">
				{userData.frontendOthers.map((skill, idx) => (
					<OtherCard
					title={skill.other}
					/>
				))}
				</div>
			</div>
		</div>
      </div>
    </div>
  );
}

const SkillCard = ({ title }) => {
	return (
	<div className="relative">
		<h4 className="text-black dark:text-white border-2 p-2 mr-2 mb-2 border-borderBlue rounded-sm text-xs hover:border-red hover:cursor-default">
		{title}
		</h4>
	</div>
	);
  };

const ToolCard = ({ title }) => {
	return (
	<div className="relative flex">
		<h4 className="text-black dark:text-white border-2 p-2 mr-2 mb-2 border-borderBlue rounded-sm text-xs hover:border-red hover:cursor-default">
		{title}
		</h4>
	</div>
	);
  };

const OtherCard = ({ title }) => {
	return (
	<div className="relative flex">
		<h4 className="text-black dark:text-white border-2 p-2 mr-2 mb-2 border-borderBlue rounded-sm text-xs hover:border-red hover:cursor-default">
		{title}
		</h4>
	</div>
	);
  };
