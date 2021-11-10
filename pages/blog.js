import Head from 'next/head'
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ContainerBlock from "../components/ContainerBlock";

export default function Home({ posts }) {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: 'vn88o3gc',
  		dataset: 'production',
      });

	  console.log(posts)
      setMappedPosts(
        posts.map(p => {
          return {
            ...p,
            image: imgBuilder.image(p.image),
          }
		  
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (
	 <ContainerBlock title="Lasse Buus - Blog">
	 <section>
      <div className="max-w-6xl mx-auto h-48">
	  <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left dark:text-white">
          Blog
        </h1>
		</div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {mappedPosts.length ? mappedPosts.map((posts, item) => (
            <div onClick={() => router.push(`/blog/${posts.slug.current}`)} key={item + posts.slug.current} className="single-post rounded-md  relative overflow-hidden w-full block shadow-2xl cursor-pointer">
              <img className="transform hover:scale-125 transition duration-2000 ease-out favourite-img" src={posts.image} />
			  <h2 className="absolute top-10 left-10 text-white font-bold text-base bg-red shadow-xl rounded-md px-2 py-1">
                  {posts.title}
                </h2>
                <h3 className="absolute bottom-10 right-10 text-white font-semibold bold text-sm bg-red shadow-lg rounded-md px-2 py-1">
                  {posts.postcontent}
                </h3>
            </div>
          )) : <>No Posts Yet</>}
        </div>
    </section>
	</ContainerBlock>
  );
}

export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent('*[ _type == "posts" ]');
  const url = `https://vn88o3gc.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      }
    }
  } else {
    return {
      props: {
        posts: result.result,
      }
    }
  }
};

