import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import FavouritePosts from "../components/FavouritePosts";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import client from '../lib/sanity';


export default function Home({ dataFields, repositories }) {

	const { homepageData } = dataFields;

  return (
	  <>
	{/* <img className="homepage-img" src={homepageData.image.url} alt={homepageData.subtitle} /> */}
    <ContainerBlock
      title="Lasse Buus - Developer, Designer"
      description="This is my portfolio"
    >
      <Hero dataFields={dataFields} />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
      <FavouritePosts />
    </ContainerBlock>
	</>
  );
}
  
// Create a query called homepageQuery
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
  
  export async function getStaticProps() {
	const homepageData = await client.fetch(heroQuery);
	// const siteHeaderData = await client.fetch(siteHeaderQuery);
	
	console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

	const dataFields = { homepageData };
  
	return {
	  props: {
		dataFields,
		repositories,
	  },
	  revalidate: 1,
	};
  }
