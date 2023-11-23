import Contact1 from "@/components/Contact1";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";

init(process.env.NEXT_PUBLIC_REACT_APP_PUBLIC_KEY);
function contact() {
	const [alertContent, setAlertContent] = useState({});
	const [showAlert, setShowAlert] = useState(false);

	const handleFormSubmit = (formData) => {
		emailjs
			.send(
				"service_y1k37xn",
				"template_i4ptcrc",
				formData,
				process.env.NEXT_PUBLIC_REACT_APP_PUBLIC_KEY
			)
			.then(
				(result) => {
					// Handle success
					setAlertContent({
						heading: "Thank you for contacting me.",
						message: "I will respond to your message as soon as I can.",
					});
					setShowAlert(true);
				},
				(error) => {
					// Handle error
					setAlertContent({
						heading: "Something went wrong.",
						message: error.text,
					});
					setShowAlert(true);
				}
			);
	};
	return (
		<div className="">
			<Head>
				<title>Contact</title>
				<meta name="" content="" />
				<meta name="robots" content="index, follow" />
			</Head>
			<Contact1 onSubmit={handleFormSubmit} />
		</div>
	);
}

export default contact;
