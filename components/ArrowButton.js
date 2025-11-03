import React, { forwardRef } from "react";
import Link from "next/link";

const baseClasses =
	"inline-flex items-center gap-4 px-8 py-4 my-4 text-xl font-semibold border border-synthPink md:my-0 hover:bg-synthPink hover:text-white";

const ArrowIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		fill="currentColor"
		className="bi bi-arrow-up-right-square"
		strokeWidth="4"
		viewBox="0 0 16 16"
		aria-hidden="true"
	>
		<path
			fillRule="evenodd"
			d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
		/>
	</svg>
);

const ArrowButton = forwardRef(function ArrowButton(
	{ text, href, className = "", target, rel, ...rest },
	ref
) {
	const classes = `${baseClasses} ${className}`;
	if (href) {
		const safeRel =
			target === "_blank"
				? [rel, "noopener", "noreferrer"].filter(Boolean).join(" ")
				: rel;

		return (
			<Link
				ref={ref}
				href={href}
				className={classes}
				target={target}
				rel={safeRel}
				{...rest}
			>
				<ArrowIcon />
				<span className="text-sm">{text}</span>
			</Link>
		);
	}

	return (
		<button ref={ref} type="button" className={classes} {...rest}>
			<ArrowIcon />
			<span className="text-sm">{text}</span>
		</button>
	);
});

export default ArrowButton;
