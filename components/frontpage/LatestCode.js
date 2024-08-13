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
				<div className="flex flex-col items-center justify-between md:flex-row">
					<h1 className="max-w-lg my-6 text-5xl font-bold text-center text-black md:my-10 md:text-black dark:text-white lg:text-left">
						Code
					</h1>
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
			<div className="grid max-w-6xl grid-cols-2 gap-6 mx-auto mt-6 md:grid-cols-3 gap-y-6 md:mt-0">
				{repos &&
					repos.map((latestRepo, idx) => (
						<div
							key={idx + latestRepo.id}
							className={`${
								(idx % 6 === 0 || idx % 6 === 3 || idx % 6 == 4 ) ? "col-span-2 md:col-span-2" : "col-span-2 md:col-span-1"
							}`}
						>
							<GithubRepoCard latestRepo={latestRepo} />
						</div>
					))}
			</div>
		</section>
	);
}

const GithubRepoCard = ({ latestRepo }) => {
	return (
		<div className="relative flex flex-col align-top bg-white rounded-md cursor-pointer dark:bg-transparent group">
			<div className="relative block w-full h-[350px] dark:border">
				<Image
					src="/github.jpg"
					layout="fill"
					className="relative object-cover"
				/>
				{/* Centered Title */}
				<h3 className="absolute p-2 text-[12px] font-normal text-black bg-white left-6 top-6 sm:flex">
					{latestRepo.name}
				</h3>
				<span className="absolute self-end block my-2 text-sm text-white top-6 right-6 dark:text-white">
					{moment(latestRepo.pushed_at).format("Do MMMM YYYY")}
				</span>
			</div>
			<div className="relative">
				<div className="flex self-start">
					<div>
						<a
							href={latestRepo.clone_url}
							className="absolute bottom-6 right-6 bg-white p-2 font-normal inline-block text-[12px] text-black hover:bg-synthPink hover:text-white"
						>
							View Repository
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
