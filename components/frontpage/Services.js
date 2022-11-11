import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RoughNotationGroup } from "react-rough-notation";
import { ServiceHighlight, LabelHighlight } from "./Highlight";

export default function Services() {
	const colors = ["#161616", "#ff2975", "#a5edb6", "#fae85a", "#ff5c00", "#5179fe"];

	return (
		<div className="">
			<div className="max-w-6xl mx-auto my-20">
				<div>
					<span className="font-mono block text-blue-600">
						Services
					</span>
					<h2 className="text-3xl md:text-5xl font-bold dark:text-white">
						Specialized in
					</h2>
				</div>
				<RoughNotationGroup show={true} isShowing={true}>
					<div className="flex flex-col md:flex-row gap-8 md:gap-8 mt-8 items-center ">
					<div className="w-full md:w-1/3 md:h-[300px] text-center bg-white shadow-black rounded-md dark:bg-black dark:bg-opacity-50">
						<LabelHighlight
									color={colors[4]}
									padding={[5, 0, 5, 0]}
									animate={true}
								>
							<div className="flex flex-col justify-center items-center h-full p-6">
								<ServiceHighlight
									color={colors[4]}
									padding={[5, 0, 5, 0]}
									animate={true}
								>
									<div>
										<div className="flex bg-transparent items-center justify-center rounded-xl h-[50px] w-[50px]">
											<Image
												src="/services/crown.svg"
												width="25"
												height="25"
												className="dark:invert"
											/>
										</div>
									</div>
								</ServiceHighlight>

								<h3 className="font-bold my-4 dark:text-white">
									UI/UX Design
								</h3>
								<p className="text-sm font-sans dark:text-white">
									Turn what you have in mind of a digital
									product into reality. For any platform you
									consider.
								</p>
							</div>
							</LabelHighlight>
						</div>
						<div className="w-full md:w-1/3 md:h-[300px] text-center bg-white shadow-black rounded-md dark:bg-black dark:bg-opacity-50">
						<LabelHighlight
									color={colors[3]}
									padding={[5, 0, 5, 0]}
									animate={true}
								>
							<div className="flex flex-col justify-center items-center h-full p-6">
								<ServiceHighlight
									color={colors[3]}
									padding={[5, 0, 5, 0]}
									animate={true}
								>
									<div>
										<div className="flex bg-transparent items-center justify-center rounded-xl h-[50px] w-[50px]">
											<Image
												src="/services/app.svg"
												width="25"
												height="25"
												className="dark:invert"
											/>
										</div>
									</div>
								</ServiceHighlight>

								<h3 className="font-bold my-4 dark:text-white">
									Application Development
								</h3>
								<p className="text-sm font-sans dark:text-white">
									Standard designing, building, and
									implementing your applications with
									documentation.
								</p>
							</div>
							</LabelHighlight>
						</div>
						<div className="w-full md:w-1/3 md:h-[300px] text-center bg-white shadow-black rounded-md dark:bg-black dark:bg-opacity-50">
						<LabelHighlight
									color={colors[2]}
									padding={[5, 0, 5, 0]}
									animate={true}
								>
							<div className="flex flex-col justify-center items-center h-full p-6">
								<ServiceHighlight
									color={colors[2]}
									padding={[5, 0, 5, 0]}
									animate={true}
								>
									<div>
										<div className="flex bg-transparent items-center justify-center rounded-xl h-[50px] w-[50px]">
											<Image
												src="/services/globe.svg"
												width="25"
												height="25"
												className="dark:invert"
											/>
										</div>
									</div>
								</ServiceHighlight>

								<h3 className="font-bold my-4 dark:text-white">
									Web Development
								</h3>
								<p className="text-sm font-sans dark:text-white">
									Create and maintain your websites and also
									take care of its performance and traffic
									capacity.
								</p>
							</div>
							</LabelHighlight>
						</div>
					</div>
				</RoughNotationGroup>
			</div>
		</div>
	);
}
