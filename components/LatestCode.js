import React, { useEffect, useState } from "react";
import Link from "next/link";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function LatestCode({ repositories }) {
  const [repos, setRepos] = useState([]);

  useEffect(async () => {
    setRepos(repositories);
  }, []);

  return (
    <section className="lg:mt-10 mb-10 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center  lg:my-10">
          <h1 className="text-6xl lg:text-7xl max-w-lg font-bold text-gray-500 my-10 md:my-0 md:text-black dark:text-white text-center lg:text-left">
            Code
          </h1>
          <div className="flex-1 md:mr-8">
            <span className="font-mono block text-right dark:text-white">
              View all repositories
            </span>
          </div>
          <a
            href={`https://github.com/${userData.githubUsername}`}
            target="_blank"
            className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-black"
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
            <p>View GitHub</p>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto gap-y-10">
        {/* Single github Repo */}

        {repos &&
          repos.map((latestRepo, idx) => (
            <GithubRepoCard
              latestRepo={latestRepo}
              key={"idx" + latestRepo.id}
            />
          ))}
      </div>
    </section>
  );
}

const GithubRepoCard = ({ latestRepo }) => {
  return (
    <div className="github-repo bg-white shadow sm:shadow-lg rounded-md p-6 flex justify-between flex-col dark:bg-black border border-white">
      <h1 className="font-semibold text-3xl dark:text-gray-200 text-gray-700 dark:text-white">
        {latestRepo.name}
      </h1>
      <p className="text-base font-normal my-8 text-gray-500 dark:text-white">
        {latestRepo.description}
      </p>
      <a
        href={latestRepo.clone_url}
        className="font-semibold bg-black shadow-xl rounded-md px-2 py-1 text-white group max-width-50 flex flex-row space-x-2 items-center dark:text-black dark:bg-white"
      >
        <p>View Repository </p>
        <div className="transform  group-hover:translate-x-2 transition duration-300">
          &rarr;
        </div>
      </a>
    </div>
  );
};
