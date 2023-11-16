import React from "react";
import Head from "next/head";
import Tynki1 from "@/components/Tynki1";
import Tynki2 from "@/components/Tynki2";
import Tynki3 from "@/components/Tynki3";
import Tynki4 from "@/components/Tynki4";
import Testimonials from "@/components/Testimonials";
import Tynki5 from "@/components/Tynki5";
import Header4 from "@/components/Header4";

function tynki() {
	return (
		<div className="">
			<Head>
				<title>Tynki</title>
				<meta name="" content="" />
				<meta name="robots" content="index, follow" />
			</Head>
			<Header4 />
			<Tynki1 />
			<Tynki2 />
			<Tynki3 />
			<Tynki4 />
			<Testimonials />
			<Tynki5 />
		</div>
	);
}

export default tynki;
