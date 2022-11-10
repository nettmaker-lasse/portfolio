import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/frontpage/FavouriteProjects";
import FavouritePosts from "../components/frontpage/FavouritePosts";
import FavouriteTrips from "../components/frontpage/FavouriteTrips";
import LatestCode from "../components/frontpage/LatestCode";
import Hero from "../components/frontpage/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import client from "@lib/sanity";
import Services from "@components/frontpage/Services";

export default function Home({ hero, projects, repositories, posts, trips }) {
	return (
		<>
			<ContainerBlock
				title="Lasse Buus - Developer, Designer"
				description="This is my portfolio"
			>
				<Hero hero={hero} />
				<Services />
				<FavouriteProjects projects={projects} />
				<LatestCode repositories={repositories} />
				<FavouritePosts posts={posts} />
				<FavouriteTrips trips={trips} />
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

// Create a query called postQuery
const postsQuery = `*[_type == "posts"] {
	title,
	subtitle,
	"ctaUrl": cta {
		current
			},
	image {
		...asset->
	},
	imagefrontpage {
		...asset->
	},
	imagecaption,
	blockText,
	slug,
	status
	}`;

// Create a query called tripsQuery
const tripsQuery = `*[_type == "gallery"] {
	title,
	slug,
	images,
	releaseDate
	}`;

export async function getStaticProps() {
	const heroData = await client.fetch(heroQuery);
	const projectsData = await client.fetch(projectsQuery);
	const postsData = await client.fetch(postsQuery);
	const tripsData = await client.fetch(tripsQuery);

	// console.log(process.env.GITHUB_AUTH_TOKEN);
	let token = process.env.GITHUB_AUTH_TOKEN;

	const repositories = await getLatestRepos(userData, token);
	// console.log("REPOSITORIES", repositories);

	const hero = { heroData };
	const projects = { projectsData };
	const posts = { postsData };
	const trips = { tripsData };

	return {
		props: {
			hero,
			repositories,
			projects,
			posts,
			trips,
		},
		revalidate: 1,
	};
}
