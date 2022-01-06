import React from "react";
import useSWR from "swr";
import { SiSpotify } from "react-icons/si";

export default function PlayingNow() {
	const fetcher = (url) => fetch(url).then((r) => r.json());
	const { data } = useSWR("/api/spotify", fetcher);

	return (
		<section className="mb-5">
			<main className="flex flex-col items-start justify-center">
				<a
					target="_blank"
					rel="noopener noreferer"
					href={
						data?.isPlaying
							? data.songUrl
							: "https://open.spotify.com/user/113671250?si=73f1c554e0544785"
					}
					className="relative flex items-center p-4 space-x-4 w-[100%] transition-shadow border rounded-md hover:shadow-md md:w-[70%] dark:border-synthPink dark:shadow-3xl"
				>
					<div className="w-16">
						{data?.isPlaying ? (
							<img
								className="w-16 shadow-sm"
								src={data?.albumImageUrl}
								alt={data?.album}
							/>
						) : (
							<SiSpotify size={64} color={"#ff5caa"} />
						)}
					</div>

					<div className="flex-1">
						<p className="font-bold component">
							{data?.isPlaying ? data.title : "Not Listening"}
						</p>
						<p className="text-xs font-dark">
							{data?.isPlaying ? data.artist : "Spotify"}
						</p>
					</div>
				</a>
			</main>
		</section>
	);
}
