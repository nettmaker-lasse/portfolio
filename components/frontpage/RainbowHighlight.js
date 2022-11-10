import React from "react";
import { RoughNotation } from "react-rough-notation";

export const RainbowHighlight = ({ color, children, padding, animate }) => {
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
