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

function ramen() {
	return (
		<div className="">
			<Head>
				<title>Verkoop en Installatie van Ramen | DG Bouwgroep</title>
				<meta
					name="description"
					content="Zoek niet verder voor hoogwaardige ramen. DG Bouwgroep biedt professionele verkoop en installatie van ramen aan. Ontdek ons assortiment hoogwaardige ramen en profiteer van vakkundige plaatsing en service op maat."
				/>
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

export default ramen;
