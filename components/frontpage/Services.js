import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";

export default function Services() {

	const colors = ["#161616", "#ff2975", "#000"];

	return (
		<div className="">
			<div className="max-w-6xl mx-auto my-20">
				<div>
					<span className="font-mono block text-synthPink">
						Services
					</span>
					<h2 className="text-3xl md:text-5xl font-bold dark:text-white">Specialized in</h2>
				</div>
				<div className="flex flex-col md:flex-row gap-8 md:gap-8 mt-8 items-center ">
				<div className="w-full md:w-1/3 md:h-[300px] text-center bg-white shadow-black shadow-lg sm:shadow-lg rounded-md p-2 lg:p-6 dark:bg-black dark:bg-opacity-50 dark:border dark:border-white dark:shadow-3xl">
						<div className="flex flex-col justify-center items-center h-full p-6">
							<RoughNotationGroup show={true}>
								<div>
									<RainbowHighlight color={colors[1]} padding={[5, 0, 5, 0]} animate={false}>
									<div className="flex bg-transparent items-center justify-center rounded-xl h-[50px] w-[50px]">
										<Image
											src="/services/crown.svg"
											width="25"
											height="25"
											className="dark:invert"
										/>
									</div>
									</RainbowHighlight>
								</div>
							</RoughNotationGroup>
							<h3 className="font-bold my-4 dark:text-white">UI/UX Design</h3>
							<p className="text-sm font-sans dark:text-white">
								Turn what you have in mind of a digital product
								into reality. For any platform you consider.
							</p>
						</div>
					</div>
					<div className="w-full md:w-1/3 h-[300px] text-center bg-white shadow-black shadow-lg sm:shadow-lg rounded-md p-6 dark:bg-black dark:bg-opacity-50 dark:border dark:border-white dark:shadow-3xl">
						<div className="flex flex-col justify-center items-center h-full p-6">
						<RoughNotationGroup show={true}>
								<div>
									<RainbowHighlight color={colors[1]} padding={[5, 0, 5, 0]} animate={false}>
									<div className="flex bg-transparent items-center justify-center rounded-xl h-[50px] w-[50px]">
										<Image
											src="/services/app.svg"
											width="25"
											height="25"
											className="dark:invert"
										/>
									</div>
									</RainbowHighlight>
								</div>
							</RoughNotationGroup>
							<h3 className="font-bold my-4 dark:text-white">
								Application Development
							</h3>
							<p className="text-sm font-sans dark:text-white">
								Standard designing, building, and implementing
								your applications with documentation.
							</p>
						</div>
					</div>
					<div className="w-full md:w-1/3 h-[300px] text-center bg-white shadow-black shadow-lg sm:shadow-lg rounded-md p-6 dark:bg-black dark:bg-opacity-50 dark:border dark:border-white dark:shadow-3xl">
						<div className="flex flex-col justify-center items-center h-full p-6">
							<RoughNotationGroup show={true}>
								<div>
									<RainbowHighlight color={colors[1]} padding={[5, 0, 5, 0]} animate={false}>
									<div className="flex bg-transparent items-center justify-center rounded-xl h-[50px] w-[50px]">
										<Image
											src="/services/globe.svg"
											width="25"
											height="25"
											className="dark:invert"
										/>
									</div>
									</RainbowHighlight>
								</div>
							</RoughNotationGroup>
							<h3 className="font-bold my-4 dark:text-white">Web Development</h3>
							<p className="text-sm font-sans dark:text-white">
								Create and maintain your websites and also take
								care of its performance and traffic capacity.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
