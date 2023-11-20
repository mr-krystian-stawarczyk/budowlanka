import React from "react";
import Navbar from "./Navbar";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import CookieConsent from "./CookieConsent";
{
	/* 	import ContactForm from "./ContactForm";  */
}
import Footer from "./Footer";

const poppins = Poppins({
	weight: ["400", "700"],
	subsets: ["latin"],
});

const Layout = ({ children, pageProps }) => {
	const [alertContent, setAlertContent] = useState({});
	const [showAlert, setShowAlert] = useState(false);

	const handleFormSubmit = (formData) => {
		emailjs
			.send(
				process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_TEMPLATE_ID,
				formData,
				process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_USER_ID,
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
		<div className="layout">
			<div className={poppins.className}>
				<header>
					<Navbar {...pageProps} />
					<CookieConsent />
				</header>
				<main className="main-container">{children}</main>
				<footer>
					{/* 	<ContactForm {...pageProps} /> */}
					<Footer onSubmit={handleFormSubmit} />
				</footer>
			</div>
		</div>
	);
};
export default Layout;
