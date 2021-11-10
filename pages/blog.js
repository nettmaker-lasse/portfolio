import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Posts from "../components/Posts";
import client from '@lib/sanity';

export default function blog({posts}) {
  return (
    <ContainerBlock title="Lasse Buus - Blog">
      <Posts posts={posts} />
    </ContainerBlock>
  );
}

// Create a query called projectsQuery
const postsQuery = `*[_type == "posts"] {
	title,
	subtitle,
	"ctaUrl": cta {
		current
			},
	image {
		...asset->
	},
	imagecaption,
	postcontent,
	slug
	}`;

  export async function getStaticProps() {
	const postsData = await client.fetch(postsQuery);

	const posts = { postsData };
  
	return {
	  props: {
		posts
	  },
	  revalidate: 1,
	};
  }