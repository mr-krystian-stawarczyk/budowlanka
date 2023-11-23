import React from "react";
import Head from "next/head";
import Ogolne1 from "@/components/Ogolne1";
import Ogolne2 from "@/components/Ogolne2";
import Ogolne3 from "@/components/Ogolne3";
import Ogolne4 from "@/components/Ogolne4";
import Testimonials from "@/components/Testimonials";
import Ogolne5 from "@/components/Ogolne5";
import Header9 from "@/components/Header9";

function bouwwerkzaamheden() {
	return (
		<div className="">
			<Head>
				<title>Bouwwerkzaamheden</title>
				<meta name="" content="" />
				<meta name="robots" content="index, follow" />
			</Head>
			<Header9 />
			<Ogolne1 />
			<Ogolne2 />
			<Ogolne3 />
			<Ogolne4 />
			<Testimonials />
			<Ogolne5 />
		</div>
	);
}

export default bouwwerkzaamheden;
