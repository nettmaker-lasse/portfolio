import React, { useRef } from 'react';
import userData from "@constants/data";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const SERVICE_ID = "service_7l79lu8";
const TEMPLATE_ID = "template_lmq8h7e";
const USER_ID = "user_GKSqvXwQ0S6kq6qLtlc7W";

export default function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
		  .then((result) => {
			console.log(result.text);
			Swal.fire({
			  icon: 'success',
			  title: 'Message sent successfully',
			  text: 'I will get in touch with you soon!',
			})
		  }, (error) => {
			console.log(error.text);
			Swal.fire({
			  icon: 'error',
			  title: 'Ooops, something went wrong',
			  text: error.text,
			})
		  });
		e.target.reset()
	};

	return (
		<section>
			<div className="max-w-6xl mx-auto antialiased">
				<h1 className="text-5xl md:text-9xl font-bold py-20 text-left md:text-left dark:text-white">
					Contact
				</h1>
			</div>
			<div className="relative z-10 rounded-md p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4 dark:border border-synthPink dark:shadow-3xl">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="md:ml-4">
						<header className="">
							<h1 className="text-gray-50 font-semibold text-2xl dark:text-white">
								Get in touch, let's talk.
							</h1>
							<p className="font-light text-base text-gray-200 mt-2 dark:text-white">
								Fill in the details and I'll get back to you as soon as I can.
							</p>
						</header>
						<div className="icons-container w-full inline-flex flex-col my-10 md:w-auto md:my-20">
							<div className="flex flex-row items-center space-x-6 rounded-md mb-4 border border-black hover:border hover:border-synthPink p-4 dark:border-synthPink">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-telephone-fill h-4 w-4 text-synthPink"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
									/>
								</svg>
								<p className="text-gray-50 font-light text-sm dark:text-white">
									{userData.phone}
								</p>
							</div>
							<div className="flex flex-row items-center space-x-6 rounded-md mb-4 border border-black hover:border hover:border-synthPink p-4 dark:border-synthPink">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-envelope-fill h-4 w-4 text-synthPink"
									viewBox="0 0 16 16"
								>
									<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
								</svg>
								<p className="text-gray-50 font-light text-sm dark:text-white">
									{userData.email}
								</p>
							</div>
							<div className="flex flex-row items-center space-x-6 rounded-md mb-4 border border-black hover:border hover:border-synthPink p-4 dark:border-synthPink">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-pin-fill h-4 w-4 text-synthPink"
									viewBox="0 0 16 16"
								>
									<path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
								</svg>
								<p className="text-gray-50 font-light text-sm dark:text-white">
									{userData.address}
								</p>
							</div>
						</div>
						<div className="social-icons flex flex-row space-x-8">
							<a
								href={userData.socialLinks.instagram}
								className="text-base font-normal dark:text-gray-300"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-instagram h-5 w-5 text-synthPink"
									viewBox="0 0 16 16"
								>
									<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
								</svg>
							</a>
							<a
								href={userData.socialLinks.twitter}
								className="text-base font-normal text-gray-600 dark:text-gray-300"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-twitter h-5 w-5 text-blue-500"
									viewBox="0 0 16 16"
								>
									<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
								</svg>
							</a>
							<a
								href={userData.socialLinks.linkedin}
								className="text-base font-normal dark:text-gray-300"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-linkedin h-5 w-5 text-blue-700"
									viewBox="0 0 16 16"
								>
									<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
								</svg>
							</a>
						</div>
					</div>
					<div className="contactform mt-10 md:mt-0">
						<h2 className="text-2xl font-bold mb-6">Contact me</h2>
						<form ref={form} onSubmit={sendEmail} className="form rounded-lg flex flex-col">
							<label className="text-sm text-black dark:text-white">Your Name</label>
							<input className="font-light bg-white text-black text-sm rounded-md border focus:outline-none py-2 mt-2 mb-6 px-3 focus:ring-2 focus:border-none ring-synthPink dark:border-black" type="text" name="user_name" />
							<label className="text-sm text-black dark:text-white">Email</label>
							<input className="font-light bg-white text-black text-sm rounded-md border focus:outline-none py-2 mt-2 mb-6 px-3 focus:ring-2 focus:border-none ring-synthPink dark:border-black" type="email" name="user_email" required />
							<labe className="text-sm text-black dark:text-white">Message</labe>
							<textarea className="font-light bg-white text-black text-sm rounded-md border focus:outline-none py-2 mt-2 mb-6 px-3 focus:ring-2 focus:border-none ring-synthPink dark:border-black" name="message" required />
							<input className="border-black border-solid bg-white border cursor-pointer rounded-md w-1/2 mt-8 py-2 text-black text-xs font-bold hover:bg-synthPink hover:text-white dark:text-white dark:bg-synthPink" type="submit" value="Send Message" />
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
