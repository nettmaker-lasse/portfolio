import Head from 'next/head'
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ContainerBlock from "../components/ContainerBlock";
import client from '@lib/sanity';
import moment from 'moment';

export default function Home({ trips }) {
  const router = useRouter();
  const [mappedTrips, setMappedTrips] = useState([]);
  const builder = imageUrlBuilder(client)

  function urlFor(source) {
	return builder.image(source)
  }

  useEffect(() => {
    if (trips.length) {

	  console.log(trips)
      setMappedTrips(
        trips.map(t => {
          return {
            ...t
          }
		  
        })
      );
    } else {
      setMappedTrips([]);
    }
  }, [trips]);

  return (
	 <ContainerBlock title="Lasse Buus - Trips">
	 <section>
      <div className="max-w-6xl mx-auto h-48">
	  <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left dark:text-white">
          Trips
        </h1>
		</div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          	{trips.length ? mappedTrips
			.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
		  	.map((trips, item) => (
            <div onClick={() => router.push(`/trips/${trips.slug.current}`)} key={item + trips.slug.current} className="single-post rounded-md relative overflow-hidden w-full block shadow-2xl cursor-pointer dark:border border-synthPink dark:shadow-3xl">
              <img className="transform hover:scale-125 transition duration-2000 ease-out favourite-img" src={urlFor(trips.images[0]).url()} />
			  <h2 className="absolute top-10 left-10 text-white font-bold text-base bg-synthPink shadow-xl rounded-md px-2 py-1">
                  {trips.title}
                </h2>
                <h3 className="absolute bottom-10 right-10 text-white font-semibold bold text-sm bg-synthPink shadow-lg rounded-md px-2 py-1">
					{moment(trips.releaseDate).format("Do MMMM YYYY")}
                </h3>
            </div>
          )) : <>No Trips Yet</>}
        </div>
    </section>
	</ContainerBlock>
  );
}

export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent('*[ _type == "gallery" ]');
  const url = `https://vn88o3gc.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        trips: [],
      }
    }
  } else {
    return {
      props: {
        trips: result.result,
      }
    }
  }
};

