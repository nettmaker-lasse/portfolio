import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function FavouritePosts({ posts }) {
  const [allFields, setFields] = useState([null]);
  const router = useRouter();

  useEffect(async () => {
    setFields(posts);
    // console.log(posts);
  }, []);

  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center md:my-20 lg:mt-15 mb-30">
          <h1 className="text-6xl lg:text-7xl max-w-lg font-bold text-gray-500 my-10 md:my-0 md:text-black dark:text-white">
            Articles
          </h1>
          <div className="flex-1 md:mr-8">
            <span className="font-mono block text-right dark:text-white">
              View all articles
            </span>
          </div>
          <Link href="/blog">
            <a className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-black">
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
              <p>View all</p>
            </a>
          </Link>
        </header>

        {/* Grid starts here */}
        <div className="grid md:grid-cols-3 gap-8 lg:-mt-8">
          {Object.keys(posts.postsData)
		  .slice(0, 3)
		  .sort(posts.postsData.title)
		  .map((item, i) => (
            <Link
              href={`/blog/${posts.postsData[item].slug.current}`}
              key={posts.postsData[item].slug.current}
            >
              <div
                className="single-post rounded-md  relative overflow-hidden w-full block shadow-2xl cursor-pointer dark:border border-white"
                key={item + posts.postsData[item].slug.current}
              >
                <img
                  srcSet={posts.postsData[item].image.url}
                  className="transform hover:scale-125 transition duration-2000 ease-out favourite-img"
                />
                <h2 className="absolute top-10 left-10 text-white font-bold text-base bg-red shadow-xl rounded-md px-2 py-1">
                  {posts.postsData[item].title}
                </h2>
                <h3 className="absolute bottom-10 right-10 text-white font-semibold bold text-sm bg-red shadow-lg rounded-md px-2 py-1">
                  {posts.postsData[item].status}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
