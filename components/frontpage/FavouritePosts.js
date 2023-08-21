import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import client from "@lib/sanity";
import ArrowButton from "@components/ArrowButton";

export default function FavouritePosts({ posts }) {
	const [allFields, setFields] = useState([null]);
	const builder = imageUrlBuilder(client);

	function urlFor(source) {
		return builder.image(source);
	}

	const linkRef = useRef(null);

	useEffect(async () => {
		setFields(posts);
	}, []);

	return (
		<div className="">
			<div className="max-w-6xl mx-auto mt-8 md:mt-20">
				<div className="flex flex-col items-center justify-between md:flex-row">
					<h2 className="max-w-lg my-10 text-5xl font-bold text-black md:my-0 md:text-black dark:text-white">
						Articles
					</h2>
					<div className="flex-1 md:mr-8">
						<span className="block font-mono text-sm text-right text-synthPink dark:text-white">
							View all articles
						</span>
					</div>
					<Link href="/blog">
						<ArrowButton
							text="View all"
							href="/blog"
							ref={linkRef}
						/>
					</Link>
				</div>

				{/* Grid starts here */}
				<div className="grid gap-8 mt-8 md:grid-cols-3">
					{posts.postsData
						.slice(0, 3)
						.sort((a, b) => (a.title > b.title ? 1 : -1))
						.map((item, i) => (
							<Link
								href={`/blog/${item.slug.current}`}
								key={item.slug.current}
							>
								<div
									className="relative flex flex-col w-full cursor-pointer group"
									key={i + item.slug.current}
								>
									<div className="relative block">
										<Image
											src={item.imagefrontpage.url}
											layout="responsive"
											width={400}
											height={400}
											quality={70}
											className="relative object-cover transition"
										/>
										<div className="absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out opacity-100 sm:backdrop-blur sm:bg-synthPink/20 group-hover:opacity-0"></div>
										<h3 className="absolute inset-0 items-center justify-center hidden text-2xl font-medium text-center text-white transition-opacity duration-500 ease-in-out rounded-sm opacity-100 sm:flex dark:text-white group-hover:opacity-0">
											{item.title}
										</h3>
									</div>
									<div className="relative block">
										<div className="sm:hidden">
											<h3 className="flex items-center justify-start pt-4 text-2xl font-medium text-black transition-opacity duration-500 ease-in-out rounded-sm opacity-100 dark:text-white group-hover:opacity-0">
												{item.title}
											</h3>
										</div>
										<h4 className="absolute top-[-55px] bg-synthPink px-4 rounded-none py-2 text-white right-5 text-sm font-normal dark:text-white">
											{item.status}
										</h4>
									</div>
								</div>
							</Link>
						))}
				</div>
			</div>
		</div>
	);
}
