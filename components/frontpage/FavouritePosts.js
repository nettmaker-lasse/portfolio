import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import client from "@lib/sanity";
import ArrowButton from "@components/ArrowButton";

export default function FavouritePosts({ posts }) {
	const [allFields, setFields] = useState([]);
	const builder = imageUrlBuilder(client);

	function urlFor(source) {
		return builder.image(source);
	}

	useEffect(() => {
		setFields(posts);
	}, [posts]);

	return (
		<div className="grid-pattern">
			<div className="max-w-6xl p-8 mx-auto">
				<div className="flex flex-col items-center justify-between md:flex-row">
					<h2 className="max-w-lg my-10 text-5xl font-bold text-black md:my-0 dark:text-white">
						Articles
					</h2>

					{/* ✅ Use ArrowButton directly — no <Link> wrapper */}
					<ArrowButton text="View all articles" href="/blog" />
				</div>

				{/* Grid starts here */}
				<div className="grid gap-8 mt-8 md:grid-cols-3">
					{posts?.postsData?.length ? (
						posts.postsData
							.slice(0, 3)
							.sort((a, b) => (a.title > b.title ? 1 : -1))
							.map((item, i) => (
								<Link
									href={`/blog/${item.slug.current}`}
									key={item.slug.current}
									className="relative flex flex-col w-full cursor-pointer group md:col-span-1"
								>
									<div className="relative block w-full h-[300px] md:h-[500px] dark:border">
										<Image
											src={item.imagefrontpage.url}
											alt={item.title}
											fill
											sizes="(max-width: 768px) 100vw, 33vw"
											className="object-cover object-center"
											quality={75}
										/>
										<h3 className="absolute items-center justify-start px-4 py-2 text-[12px] font-normal text-black bg-white top-6 left-2 sm:left-6 mr-6">
											{item.title}
										</h3>
									</div>
								</Link>
							))
					) : (
						<p className="text-center text-gray-500 dark:text-gray-400">
							No articles available
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
