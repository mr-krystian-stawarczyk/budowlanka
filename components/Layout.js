import React from "react";
import Navbar from "./Navbar";

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
					<Footer />
				</footer>
			</div>
		</div>
	);
};
export default Layout;
