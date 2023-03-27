import React, { useEffect, useState, useRef } from "react";
import userData from "@constants/data";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import ArrowButton from "@components/ArrowButton";

export default function LatestCode({ repositories }) {
	const [repos, setRepos] = useState([]);
	const linkRef = useRef(null);
	useEffect(() => {
		setRepos(repositories);
	}, [repositories]);

	return (
		<section>
			<div className="max-w-6xl mx-auto mt-8 md:mt-20">
				<div className="flex flex-col items-center justify-between md:flex-row lg:my-10">
					<h1 className="max-w-lg my-6 text-5xl font-bold text-center text-black md:my-10 md:text-black dark:text-white lg:text-left">
						Code
					</h1>
					<div className="flex-1 md:mr-8">
						<span className="block font-mono text-sm text-right text-synthPink dark:text-white bg">
							View all repositories
						</span>
					</div>
					<Link
						href={`https://github.com/${userData.githubUsername}`}
						target="_blank"
					>
						<div>
							<ArrowButton
								text="View GitHub"
								href={`https://github.com/${userData.githubUsername}`}
								ref={linkRef}
							/>
						</div>
					</Link>
				</div>
			</div>
			<div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto mt-6 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:mt-0">
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
	return (
		<div className="flex flex-col gap-2 align-top bg-white rounded-md dark:bg-transparent">
			<Image
				src="/github.jpg"
				layout="responsive"
				width={400}
				height={400}
				quality={70}
				className="object-cover transition ease-out transform hover:scale-125 duration-2000"
			/>

			<div className="">
				<span className="block text-[10px] text-black my-2 dark:text-white self-end">
					{moment(latestRepo.pushed_at).format("Do MMMM YYYY")}
				</span>
				<h3 className="my-2 text-xl font-bold leading-none text-black capitalize dark:text-white">
					{latestRepo.name}
				</h3>
				<p className="font-sans text-sm font-normal leading-normal text-black dark:text-white">
					{latestRepo.description}
				</p>
				<div className="flex self-start mt-4">
					<div>
						<a
							href={latestRepo.clone_url}
							className="font-normal inline-block text-[12px] text-black dark:text-white border-b border-black hover:border-synthPink"
						>
							<p>View Repository </p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
