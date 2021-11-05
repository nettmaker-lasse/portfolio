import React from "react";
import postData from "@constants/dataPosts";

export default function Posts() {
  return (
    <section className="bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-black">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left dark:text-white">
          Blog
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {postData.projects.map((proj, idx) => (
            <PostCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const PostCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            srcSet={imgUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-white font-bold text-xl bg-red rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-white font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};
