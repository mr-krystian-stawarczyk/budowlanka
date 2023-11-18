import React from "react";
import Head from "next/head";
import Okna1 from "@/components/Okna1";
import Okna2 from "@/components/Okna2";
import Okna3 from "@/components/Okna3";
import Okna4 from "@/components/Okna4";
import Testimonials from "@/components/Testimonials";
import Okna5 from "@/components/Okna5";
import Header2 from "@/components/Header2";
import Okna2n from "@/components/Okna2n";
import Okna6 from "@/components/Okna6";

function okna() {
	return (
		<div className="">
			<Head>
				<title>Okna</title>
				<meta name="" content="" />
				<meta name="robots" content="index, follow" />
			</Head>
			<Header2 />
			<Okna2 />
			<Okna3 />
			<Okna4 />

			<Okna1 />

			<Okna2n />
			<Testimonials />

			<Okna5 />
		</div>
	);
}

export default okna;
