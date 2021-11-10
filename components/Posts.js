import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Posts({posts}) {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto h-48">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left dark:text-white">
          Blog
        </h1>
      </div>
		{/* Grid starts here */}
		<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {Object.keys(posts.postsData).map((item, i) => (
            <Link
              href={"/blog/" + posts.postsData[item].slug.current}
              key={posts.postsData[item].slug.current}
            >
              <div
                className="single-post rounded-md  relative overflow-hidden w-full block shadow-2xl cursor-pointer"
                key={i + posts.postsData[item].slug.current}
              >
                <img
                  srcSet={posts.postsData[item].image.url}
                  className="transform hover:scale-125 transition duration-2000 ease-out favourite-img"
                />
                <h2 className="absolute top-10 left-10 text-white font-bold text-base bg-red shadow-xl rounded-md px-2 py-1">
                  {posts.postsData[item].title}
                </h2>
                <h3 className="absolute bottom-10 right-10 text-white font-semibold bold text-sm bg-red shadow-lg rounded-md px-2 py-1">
                  {posts.postsData[item].postcontent}
                </h3>
              </div>
            </Link>
          ))}
        </div>
    </section>
  );
}
