import React from "react";
import useSWR from "swr";
import { SiSpotify } from "react-icons/si";

export default function PlayingNowFooter() {
	const fetcher = (url) => fetch(url).then((r) => r.json());
	const { data } = useSWR("/api/spotify", fetcher);

	return (
		<section className="w-50 lg:w-4/12">
			<main className="flex flex-col items-start justify-center">
				<a
					target="_blank"
					rel="noopener noreferer"
					href={
						data?.isPlaying
							? data.songUrl
							: "https://open.spotify.com/user/113671250?si=73f1c554e0544785"
					}
					className="relative flex items-center p-4 space-x-4 w-[100%] transition-shadow rounded-md"
				>
					<div className="w-6">
						<SiSpotify size={24} color={"#ff2975"} />
					</div>

					<div className="flex-1">
						<p className="font-bold component dark:text-white">
							{data?.isPlaying ? data.title : "Not Listening"}
						</p>
						<p className="text-xs font-dark dark:text-white">
							{data?.isPlaying ? data.artist : "Spotify"}
						</p>
					</div>
				</a>
			</main>
		</section>
	);
}
