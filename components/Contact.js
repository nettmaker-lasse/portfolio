import React, { useRef } from "react";
import userData from "@constants/data";
// import emailjs from "@emailjs/browser";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const USER_ID = process.env.NEXT_PUBLIC_USER_ID;

export default function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
			(result) => {
				Swal.fire({
					icon: "success",
					title: "Message sent successfully",
					text: "I will get in touch with you soon!",
				});
			},
			(error) => {
				Swal.fire({
					icon: "error",
					title: "Ooops, something went wrong",
					text: error.text,
				});
			}
		);
		e.target.reset();
	};

	return (
		<section>
			<div className="max-w-2xl mx-auto antialiased">
				<h1 className="py-20 text-5xl font-bold text-left md:text-left dark:text-white">
					Contact
				</h1>
			</div>
			<div className="relative z-10 max-w-2xl mx-auto mb-20 dark:shadow-3xl">
				<div className="grid grid-cols-1 gap-2 md:gap-6">
					<div className="flex flex-col gap-6">
						<header className="">
							<h1 className="text-2xl font-semibold text-black dark:text-white">
								Get in touch, let's talk.
							</h1>
							<p className="mt-2 text-base font-light text-black dark:text-white">
								Fill in the details and I'll get back to you as
								soon as I can.
							</p>
						</header>
						<div className="inline-flex flex-col w-full mt-4 mb-10 icons-container md:full">
							<div className="flex flex-row items-center h-12 p-4 mb-4 space-x-6 border border-black hover:border hover:border-synthPink dark:border-synthPink">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="w-4 h-4 bi bi-telephone-fill text-synthPink"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
									/>
								</svg>
								<p className="text-sm font-light text-black dark:text-white">
									{userData.phone}
								</p>
							</div>
							<div className="flex flex-row items-center h-12 p-4 mb-4 space-x-6 border border-black hover:border hover:border-synthPink dark:border-synthPink">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="w-4 h-4 bi bi-envelope-fill text-synthPink"
									viewBox="0 0 16 16"
								>
									<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
								</svg>
								<p className="text-sm font-light text-black dark:text-white">
									{userData.email}
								</p>
							</div>
							<div className="flex flex-row items-center h-12 p-4 mb-4 space-x-6 border border-black hover:border hover:border-synthPink dark:border-synthPink">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="w-4 h-4 bi bi-pin-fill text-synthPink"
									viewBox="0 0 16 16"
								>
									<path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
								</svg>
								<p className="text-sm font-light text-black dark:text-white">
									{userData.address}
								</p>
							</div>
						</div>
					</div>
					<div className="contactform md:mt-0">
						<h2 className="mb-6 text-2xl font-bold">Contact me</h2>
						<form
							ref={form}
							onSubmit={sendEmail}
							className="flex flex-col form"
						>
							<label className="text-sm text-black dark:text-white">
								Your Name
							</label>
							<input
								className="h-12 px-3 py-2 mt-2 mb-6 text-sm font-light text-black bg-white border border-black focus:outline-none focus:ring-2 focus:border-none ring-synthPink dark:border-black"
								type="text"
								name="user_name"
							/>
							<label className="flex text-sm text-black dark:text-white">
								Email <p className="text-synthPink">*</p>
							</label>
							<input
								className="h-12 px-3 py-2 mt-2 mb-6 text-sm font-light text-black bg-white border border-black focus:outline-none focus:ring-2 focus:border-none ring-synthPink dark:border-black"
								type="email"
								name="user_email"
								required
							/>
							<label className="flex text-sm text-black dark:text-white">
								Message <p className="text-synthPink">*</p>
							</label>
							<textarea
								className="h-40 px-3 py-2 mt-2 mb-6 text-sm font-light text-black bg-white border border-black focus:outline-none focus:ring-2 focus:border-none ring-synthPink dark:border-black"
								name="message"
								required
							/>
							<input
								className="w-1/2 py-4 mt-8 text-xs font-bold text-black bg-white border border-black border-solid cursor-pointer hover:bg-synthPink hover:text-white dark:text-white dark:bg-synthPink dark:border-synthPink dark:hover:border-white"
								type="submit"
								value="Send Message"
							/>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
