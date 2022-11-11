import React from "react";
import { RoughNotation } from "react-rough-notation";

export const HeroHighlight = ({ color, children, padding, animate }) => {
	// Change the animation duration depending on length of text we're animating (speed = distance / time)
	const animationDuration = Math.floor(5 * children.length);

	return (
		<RoughNotation
			type="bracket"
			padding={padding}
			brackets={['left', 'right']}
			strokeWidth={5}
			animationDuration={animationDuration}
			color={color}
			animate={animate}
		>
			{children}
		</RoughNotation>
	);
};

export const ServiceHighlight = ({ color, children, padding, animate }) => {
	// Change the animation duration depending on length of text we're animating (speed = distance / time)
	const animationDuration = Math.floor(5 * children.length);

	return (
		<RoughNotation
			type="circle"
			multiline={true}
			padding={padding}
			iterations={2}
			strokeWidth={3}
			animationDuration={animationDuration}
			color={color}
			animate={animate}
		>
			{children}
		</RoughNotation>
	);
};

export const UnderlineHighlight = ({ color, children, padding, animate }) => {
	// Change the animation duration depending on length of text we're animating (speed = distance / time)
	const animationDuration = Math.floor(5 * children.length);

	return (
		<RoughNotation
			type="underline"
			multiline={true}
			padding={padding}
			iterations={2}
			strokeWidth={3}
			animationDuration={animationDuration}
			color={color}
			animate={animate}
		>
			{children}
		</RoughNotation>
	);
};

export const LabelHighlight = ({ color, children, padding, animate }) => {
	// Change the animation duration depending on length of text we're animating (speed = distance / time)
	const animationDuration = Math.floor(5 * children.length);

	return (
		<RoughNotation
			type="box"
			multiline={true}
			padding={padding}
			iterations={2}
			strokeWidth={3}
			animationDuration={animationDuration}
			color={color}
			animate={animate}
		>
			{children}
		</RoughNotation>
	);
};