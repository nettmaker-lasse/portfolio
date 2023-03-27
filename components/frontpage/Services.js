import React from "react";
import Image from "next/image";

export default function Services() {
	const colors = [
		"#161616",
		"#ff2975",
		"#a5edb6",
		"#fae85a",
		"#ff5c00",
		"#5179fe",
	];

	return (
		<div className="">
			<div className="max-w-6xl mx-auto my-10">
				<div className="flex flex-col items-center gap-8 mt-8 md:flex-row md:gap-8 ">
					<div className="w-full md:w-1/3 md:h-[300px] text-center text-black dark:text-white shadow-black rounded-md">
						<div className="flex flex-col items-center justify-center h-full p-6">
							<div>
								<div className="bg-black dark:bg-white flex items-center justify-center h-[50px] w-[50px]">
									<Image
										src="/services/crown.svg"
										width="25"
										height="25"
										className="text-white dark:invert"
									/>
								</div>
							</div>

							<h3 className="my-4 text-xl font-bold">
								UI/UX Design
							</h3>
							<p className="font-sans text-sm">
								Turn what you have in mind of a digital product
								into reality. For any platform you consider.
							</p>
						</div>
					</div>
					<div className="w-full md:w-1/3 md:h-[300px] text-center shadow-black rounded-md">
						<div className="flex flex-col items-center justify-center h-full p-6">
							<div>
								<div className="bg-black dark:bg-white flex items-center justify-center h-[50px] w-[50px]">
									<Image
										src="/services/app.svg"
										width="25"
										height="25"
										className="text-white dark:invert"
									/>
								</div>
							</div>

							<h3 className="my-4 text-xl font-bold">
								Application Development
							</h3>
							<p className="font-sans text-sm">
								Standard designing, building, and implementing
								your applications with documentation.
							</p>
						</div>
					</div>
					<div className="w-full md:w-1/3 md:h-[300px] text-center shadow-black rounded-md">
						<div className="flex flex-col items-center justify-center h-full p-6">
							<div>
								<div className="bg-black dark:bg-white flex items-center justify-center h-[50px] w-[50px]">
									<Image
										src="/services/globe.svg"
										width="25"
										height="25"
										className="text-white dark:invert"
									/>
								</div>
							</div>

							<h3 className="my-4 text-xl font-bold">
								Web Development
							</h3>
							<p className="font-sans text-sm">
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
