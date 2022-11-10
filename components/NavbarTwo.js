import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import userData from "@constants/data";
import { ThemeSelect, ThemeToggle } from "@components/ThemeToggle";
import clsx from "clsx";
import { Dialog } from "@headlessui/react";
import Router from "next/router";


export default function Navbar() {
	const router = useRouter();
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className="max-w-6xl mx-auto relative py-6 lg:py-8 flex items-center justify-between text-slate-700 font-light text-sm leading-6 dark:text-synthPink">
			<Link href="/">
				<a>
					<h1 className="font-semibold text-xl text-black dark:text-white">
						{userData.name}
					</h1>
					<p className="text-base font-light text-black dark:text-white">
						{userData.designation}
					</p>
				</a>
			</Link>
			<div className="flex items-center">
				<NavPopover className="-my-1 ml-2 -mr-1" display="sm:hidden" />
				<div className="hidden sm:flex items-center">
					<nav>
						<ul className="flex items-center space-x-8">
							<NavItems />
						</ul>
					</nav>
					<div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800 dark:text-white">
						<ThemeToggle />
						<a
							href="https://github.com/nettmaker-lasse"
							className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
							target="_blank"
						>
							<span className="sr-only">
								Tailwind CSS on GitHub
							</span>
							<svg
								viewBox="0 0 16 16"
								className="w-5 h-5"
								fill="currentColor"
								aria-hidden="true"
							>
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export function NavPopover({ display = "md:hidden", className, ...props }) {
	let [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!isOpen) return;
		function handleRouteChange() {
			setIsOpen(false);
		}
		Router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			Router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [isOpen]);

	return (
		<div className={clsx(className, display)} {...props}>
			<button
				type="button"
				className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
				onClick={() => setIsOpen(true)}
			>
				<span className="sr-only">Navigation</span>
				<svg width="24" height="24" fill="#ff2975" aria-hidden="true">
					<path
						d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
						stroke="currentColor"
						strokeWidth="0"
						strokeLinecap="butt"
						strokeLinejoin="butt"
					/>
				</svg>
			</button>
			<Dialog
				as="div"
				className={clsx("fixed z-50 inset-0", display)}
				open={isOpen}
				onClose={setIsOpen}
			>
				<Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
				<div className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5">
					<button
						type="button"
						className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
						onClick={() => setIsOpen(false)}
					>
						<span className="sr-only">Close navigation</span>
						<svg
							viewBox="0 0 10 10"
							className="w-2.5 h-2.5 overflow-visible"
							aria-hidden="true"
						>
							<path
								d="M0 0L10 10M10 0L0 10"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</svg>
					</button>
					<ul className="space-y-6">
						<NavItems />
						<li>
							<a
								href="https://github.com/nettmaker-lasse"
								className="text-black dark:text-synthPink"
							>
								GitHub
							</a>
						</li>
					</ul>
					<div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10">
						<ThemeSelect />
					</div>
				</div>
			</Dialog>
		</div>
	);
}

export function NavItems() {
	return (
		<>
			<li>
				<Link href="/about">
					<a className="text-black hover:text-synthPink cursor-pointer hover:border-b hover:border-black dark:hover:border-synthPink dark:text-white">
						About
					</a>
				</Link>
			</li>
			<li>
				<Link href="/projects">
					<a className="text-black hover:text-synthPink cursor-pointer hover:border-b hover:border-black dark:hover:border-synthPink dark:text-white">
						Projects
					</a>
				</Link>
			</li>
			<li>
				<Link href="/blog">
					<a className="text-black hover:text-synthPink cursor-pointer hover:border-b hover:border-black dark:hover:border-synthPink dark:text-white">
						Blog
					</a>
				</Link>
			</li>
			<li>
				<Link href="/trips">
					<a className="text-black hover:text-synthPink cursor-pointer hover:border-b hover:border-black dark:hover:border-synthPink dark:text-white">
						Trips
					</a>
				</Link>
			</li>
			<li>
				<Link href="/contact">
					<a className="text-black hover:text-synthPink cursor-pointer hover:border-b hover:border-black dark:hover:border-synthPink dark:text-white">
						Contact
					</a>
				</Link>
			</li>
		</>
	);
}
