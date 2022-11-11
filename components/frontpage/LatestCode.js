import React, { useEffect, useState } from "react";
import userData from "@constants/data";
import moment from "moment";
import { RoughNotationGroup } from "react-rough-notation";
import { UnderlineHighlight, LabelHighlight } from "./Highlight";

export default function LatestCode({ repositories }) {
	const [repos, setRepos] = useState([]);

	useEffect(async () => {
		setRepos(repositories);
		// console.log(repositories);
	}, []);

	return (
		<section className="lg:mt-10 mb-10 py-14">
			<div className="max-w-6xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-center lg:my-10">
					<h1 className="text-5xl max-w-lg font-bold text-black my-10 md:my-0 md:text-black dark:text-white text-center lg:text-left">
						Code
					</h1>
					<div className="flex-1 md:mr-8">
						<span className="font-mono text-sm block text-synthPink text-right dark:text-white bg">
							View all repositories
						</span>
					</div>
					<a
						href={`https://github.com/${userData.githubUsername}`}
						target="_blank"
						className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-white dark:bg-synthPink dark:shadow-xl"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-arrow-up-right-square"
							stroke="4"
							strokeWidth="4"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
							/>
						</svg>
						<p className="text-sm">View GitHub</p>
					</a>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto gap-y-10">
				{/* Single github Repo */}

				{repos &&
					repos.map((latestRepo, idx) => (
						<GithubRepoCard
							latestRepo={latestRepo}
							key={idx + latestRepo.id}
						/>
					))}
			</div>
		</section>
	);
}

const GithubRepoCard = ({ latestRepo }) => {
	const colors = [
		"#161616",
		"#ff2975",
		"#a5edb6",
		"#fae85a",
		"#ff5c00",
		"#5179fe",
	];

	return (
		<RoughNotationGroup show={true}>
			<div className="bg-white rounded-md flex gap-2 flex-col dark:bg-black dark:bg-opacity-50 justify-between">
				<LabelHighlight
					color={colors[5]}
					padding={[5, 5]}
					animate={true}
				>
					<div className="p-6 h-[245px]">
					<span className="text-[10px] text-black my-2 dark:text-white self-start">
						{moment(latestRepo.pushed_at).format("Do MMMM YYYY")}
					</span>
					<h3 className="font-bold capitalize text-xl text-black dark:text-white leading-none">
						{latestRepo.name}
					</h3>
					<p className="text-sm font-normal leading-normal mt-6 text-black dark:text-white font-sans">
						{latestRepo.description}
					</p>
					<div className="flex mt-4 self-start">
						<UnderlineHighlight
							color={colors[2]}
							padding={[2, 8, 2, 8]}
							animate={true}
						>
							<div>
								<a
									href={latestRepo.clone_url}
									className="font-normal inline-block text-[12px] text-black dark:text-white"
								>
									<p>View Repository </p>
								</a>
							</div>
						</UnderlineHighlight>
					</div>
					</div>
				</LabelHighlight>
			</div>
		</RoughNotationGroup>
	);
};
