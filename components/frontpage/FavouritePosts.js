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

	useEffect(() => {
		setFields(posts);
	}, [posts]);

	return (
		<div className="">
			<div className="max-w-6xl mx-auto mt-8 md:mt-20">
				<div className="flex flex-col items-center justify-between md:flex-row">
					<h2 className="max-w-lg my-10 text-5xl font-bold text-black md:my-0 md:text-black dark:text-white">
						Articles
					</h2>
					<Link href="/blog">
						<ArrowButton
							text="View all articles"
							href="/blog"
							ref={linkRef}
						/>
					</Link>
				</div>

				{/* Grid starts here */}
				<div className="grid gap-8 mt-8 md:grid-cols-2">
					{posts.postsData
						.slice(0, 3)
						.sort((a, b) => (a.title > b.title ? 1 : -1))
						.map((item, i) => (
							<Link
								href={`/blog/${item.slug.current}`}
								key={item.slug.current}
							>
								<div
									className={`relative flex flex-col w-full cursor-pointer group ${
										i === 2
											? "md:col-span-2"
											: "md:col-span-1"
									}`}
								>
									<div className="relative block w-full h-[500px] dark:border">
										<Image
											src={item.imagefrontpage.url}
											layout="fill"
											className="object-cover object-center"
											alt={item.title}
										/>
										<div className="">
											<h3 className="absolute items-center justify-start px-4 py-2 text-[12px] font-normal text-black bg-white top-6 left-2 sm:left-6 mr-2">
												{item.title}
											</h3>
										</div>
									</div>
								</div>
							</Link>
						))}
				</div>
			</div>
		</div>
	);
}
