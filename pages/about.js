import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import AboutMe from "@components/AboutMe";
import Skills from "@components/Skills";

export default function about() {
	return (
		<ContainerBlock title="Lasse Buus - About me">
			<AboutMe />
			<Skills />
		</ContainerBlock>
	);
}
