import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import imageUrlBuilder from '@sanity/image-url';
import client from '@lib/sanity';
import moment from 'moment';

export default function FavouriteTrips({ trips }) {
  const [allFields, setFields] = useState([null]);
  const router = useRouter();
  const builder = imageUrlBuilder(client)

  // Sort the trips
  // trips.tripsData.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))

  function urlFor(source) {
	return builder.image(source)
  }

  useEffect(async () => {
    setFields(trips);
    console.log(trips);
  }, []);

  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center md:my-20 lg:mt-15 mb-30">
          <h1 className="text-6xl lg:text-7xl max-w-lg font-bold text-gray-500 my-10 md:my-0 md:text-black dark:text-white">
            Trips
          </h1>
          <div className="flex-1 md:mr-8">
            <span className="font-mono block text-right dark:text-white">
              View all trips
            </span>
          </div>
          <Link href="/trips">
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
          {trips.tripsData
			.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
			.slice(0, 3)
			.map((item, i) => (
            <Link
              href={`/trips/${item.slug.current}`}
              key={item.slug.current}
            >
              <div
                className="single-post rounded-md relative overflow-hidden w-full block shadow-2xl cursor-pointer dark:border dark:border-white"
                key={item + item.slug.current}
              >
                <img
                  src={urlFor(item.images[0]).quality(50).url()}
                  className="block transform hover:scale-125 transition duration-2000 ease-out favourite-img"
                />
                <h2 className="absolute top-10 left-10 text-white font-bold text-base bg-red shadow-xl rounded-md px-2 py-1">
                  {item.title}
                </h2>
				<h3 className="absolute bottom-10 right-10 text-white font-semibold bold text-sm bg-red shadow-lg rounded-md px-2 py-1">
                  {moment(item.releaseDate).format("Do MMMM YYYY")}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
