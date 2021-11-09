import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto h-48">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-left md:text-left dark:text-white">
          About
        </h1>
      </div>
      <div className="-mt-10">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold dark:text-white"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}. Currently working at {" "}
            <a
              className="bg-red-500 rounded-md px-2 py-1 text-red hover:underline"
              href={userData.about.currentWorkUrl}
            >
              {userData.about.currentWork} 
            </a>🇳🇴
          </p>
        </div>
      </div>
      <div className="">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200 dark:text-white">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300 dark:text-white">
                For any sort help / enquiry, shoot a{" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300 hover:text-red"
                >
                  mail
                </a>{" "}
                and I'll get back to you.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200 dark:text-white">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300 dark:text-white">
                I'm currently not looking for a job, If you see me as a good fit anyways,
                checkout my{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300 hover:text-red"
                >
                  CV
                </a>{" "}
                and reach out to me.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200 dark:text-white">
              Social Links
            </h1>
            <div className="mt-4">
              <div className="flex flex-row justify-start items-center dark:text-white">
                <a
                  href={userData.socialLinks.facebook}
                  className="flex flex-row items-center space-x-4 group hover:text-red"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300 hover:underline">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Facebook
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center dark:text-white">
                <a
                  href={userData.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group hover:text-red"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300 hover:underline">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Twitter
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center dark:text-white">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group hover:text-red"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300 hover:underline">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center dark:text-white">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group hover:text-red"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300 hover:underline">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center dark:text-white">
                <a
                  href={userData.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group hover:text-red"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300 hover:underline">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                    Instagram
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2 ">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-black mb-4 dark:text-white leading-8"
              >
                {desc}
				</p>
	
            ))}

			<h3 
			className="text-2xl md:text-3xl font-semibold text-black dark:text-white mt-8 mb-2"
			>
			{userData.about.descriptionSeparator}
			</h3>
			<p 
			className="text-black mb-4 dark:text-white leading-8"
			>
			{userData.about.descriptionTwo}
			</p>
          </div>
        </div>
      </div>
    </section>
  );
}
