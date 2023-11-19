import { useTheme } from "next-themes";
import Head from "next/head";
import React from "react";
import { useState } from "react";
import Header1 from "@/components/Header1";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Header4 from "@/components/Header4";
import Header5 from "@/components/Header5";
import Header6 from "@/components/Header6";
import Werk2 from "@/components/Werk2";

import Header10 from "@/components/Header10";
import Testimonials from "@/components/Testimonials";
import Header9 from "@/components/Header9";
import Testowy from "@/components/Testowy";
import ContactForm from "@/components/ContactForm";

export default function Home() {
	const [alertContent, setAlertContent] = useState({});
	const [showAlert, setShowAlert] = useState(false);

	const handleFormSubmit = (formData) => {
		emailjs
			.send(
				process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_TEMPLATE_ID,
				formData,
				process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_USER_ID
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
	const { theme } = useTheme();
	return (
		<>
			<Head>
				<title>DB BOUWGROEP</title>
				<meta name="" content="" />
				<meta name="robots" content="index, follow" />
			</Head>

			<Testowy />
			<Header10 />

			<Testimonials />
			<Werk2 />
			<Header6 />
			<ContactForm onSubmit={handleFormSubmit} />
		</>
	);
}
