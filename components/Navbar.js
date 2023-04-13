import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faBars, faTimes, faMoon } from "@fortawesome/free-solid-svg-icons";
import userData from "@constants/data";
import { useTheme } from "next-themes";

const Navbar = () => {
	const { theme, setTheme } = useTheme();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleDarkMode = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};
	const [menuIcon, setMenuIcon] = useState(faBars);

	const toggleMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
		setMenuIcon(menuIcon === faBars ? faTimes : faBars);
	};

	const iconStyle = {
		width: "20px",
		height: "20px",
	};

	const menuItems = ["About", "Projects", "Blog", "Trips", "Contact"].map(
		(item) => (
			<li key={item}>
				<Link href={`/${item.toLowerCase()}`}>
					<a className="text-sm text-black cursor-pointer hover:text-synthPink hover:border-b hover:border-black dark:hover:border-synthPink dark:text-white">
						{item}
					</a>
				</Link>
			</li>
		)
	);

	return (
		<nav className="relative flex flex-col items-start justify-between max-w-6xl mx-auto my-4 md:my-8 md:items-center md:flex-row">
			<Link href="/">
				<a>
					<h1 className="text-xl font-semibold text-black dark:text-white">
						{userData.name}
					</h1>
					<p className="text-base font-light text-black dark:text-white">
						{userData.designation}
					</p>
				</a>
			</Link>
			<div className="absolute right-0 mt-[25px] md:hidden">
				<button
					onClick={toggleMenu}
					className="relative right-0 text-gray-900 transform -translate-x-1/2 -translate-y-1/2 top-1/2 dark:text-gray-100 focus:outline-none"
				>
					<FontAwesomeIcon icon={menuIcon} style={iconStyle} />
				</button>
			</div>
			<div className="items-center hidden space-x-4 md:flex">
				<ul className="flex space-x-8">{menuItems}</ul>
				<button
					onClick={toggleDarkMode}
					className="text-gray-900 dark:text-gray-100 focus:outline-none"
					style={{
						"--tw-text-opacity": "1",
						color: `rgba(251, 100, 160, var(--tw-text-opacity))`,
					}}
				>
					<FontAwesomeIcon
						icon={theme === "dark" ? faLightbulb : faMoon}
						style={iconStyle}
					/>
				</button>
				<a
					href="https://github.com/nettmaker-lasse"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-900 dark:text-gray-100 hover:hover:text-synthPink dark:hover:text-synthPink"
				>
					<FontAwesomeIcon icon={faGithub} style={iconStyle} />
				</a>
			</div>
			{mobileMenuOpen && (
				<div className="flex flex-col w-full mt-4 space-y-4 text-center md:hidden">
					<ul>{menuItems}</ul>
					<div className="flex items-center justify-center space-x-4">
						<button
							onClick={toggleDarkMode}
							className="text-gray-900 dark:text-gray-100 focus:outline-none"
							style={{
								"--tw-text-opacity": "1",
								color: `rgba(251, 100, 160, var(--tw-text-opacity))`,
							}}
						>
							<FontAwesomeIcon
								icon={theme === "dark" ? faLightbulb : faMoon}
								style={iconStyle}
							/>
						</button>
						<a
							href="https://github.com/nettmaker-lasse"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-900 dark:text-gray-100 hover:hover:text-synthPink dark:hover:text-synthPink"
						>
							<FontAwesomeIcon
								icon={faGithub}
								style={iconStyle}
								className="dark:invert"
							/>
						</a>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
