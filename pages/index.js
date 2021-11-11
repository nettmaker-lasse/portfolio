import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import FavouritePosts from "../components/FavouritePosts";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import client from '@lib/sanity';


export default function Home({ hero, projects, posts, repositories }) {

  return (
	<>
    <ContainerBlock
      title="Lasse Buus - Developer, Designer"
      description="This is my portfolio"
    >
      <Hero hero={hero} />
      <FavouriteProjects projects={projects} />
      <LatestCode repositories={repositories} />
      <FavouritePosts posts={posts} />
    </ContainerBlock>
	</>
  );
}
  
// Create a query called heroQuery
const heroQuery = `*[_type == "hero"][0] {
title,
subtitle,
"ctaUrl": cta {
	current
		},
image {
	...asset->
},
imagecaption
}`;

// Create a query called projectsQuery
const projectsQuery = `*[_type == "projects"] {
	title,
	subtitle,
	"ctaUrl": cta {
		current
			},
	image {
		...asset->
	},
	imagecaption,
	blockText,
	slug,
	status
	}`;
  
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
	blockText,
	slug,
	status
	}`;

  export async function getStaticProps() {
	const heroData = await client.fetch(heroQuery);
	const projectsData = await client.fetch(projectsQuery);
	const postsData = await client.fetch(postsQuery);
	
	// console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

	const hero = { heroData };
	const projects = { projectsData };
	const posts = { postsData };
  
	return {
	  props: {
		hero,
		repositories,
		projects,
		posts
	  },
	  revalidate: 1,
	};
  }
