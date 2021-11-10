import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Projects from "../components/Projects";
import client from '@lib/sanity';

export default function projects({projects}) {
  return (
    <ContainerBlock title="Lasse Buus - Projects">
      <Projects projects={projects} />
    </ContainerBlock>
  );
}

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
	projectcontent,
	slug
	}`;

	export async function getStaticProps() {
		const projectsData = await client.fetch(projectsQuery);
	
		const projects = { projectsData };
	  
		return {
		  props: {
			projects,
		  },
		  revalidate: 1,
		};
	  }