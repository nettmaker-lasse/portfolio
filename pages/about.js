import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import AboutMeHeader from "@components/about/AboutMeHeader";
import CodeStack from "@components/about/CodeStack";
import AboutExperience from "@components/about/AboutExperience";

export default function about() {
	return (
		<ContainerBlock title="Lasse Buus - About me">
			{/* <AboutMe />
			<Skills /> */}
			<AboutMeHeader />
			<CodeStack />
			<AboutExperience />
		</ContainerBlock>
	);
}
