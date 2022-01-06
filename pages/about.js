import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import AboutMe from "@components/about/AboutMe";
import Skills from "@components/about/Skills";

export default function about() {
	return (
		<ContainerBlock title="Lasse Buus - About me">
			<AboutMe />
			<Skills />
		</ContainerBlock>
	);
}
