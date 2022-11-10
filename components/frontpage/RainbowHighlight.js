import React from "react";
import { RoughNotation } from "react-rough-notation";

export const RainbowHighlight = ({ color, children }) => {
	// Change the animation duration depending on length of text we're animating (speed = distance / time)
	const animationDuration = Math.floor(5 * children.length);

	return (
		<RoughNotation
			type="box"
			multiline={true}
			padding={[5, 0, 5, 0]}
			iterations={2}
			strokeWidth={3}
			animationDuration={animationDuration}
			color={color}
		>
			{children}
		</RoughNotation>
	);
};
