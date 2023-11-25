import React from "react";
import Head from "next/head";
import Testimonials from "@/components/Testimonials";
import Termo5 from "@/components/Termo5";
import Termowew1 from "@/components/Termowew1";
import Termowew2 from "@/components/Termowew2";
import Termowew3 from "@/components/Termowew3";
import Termowew4 from "@/components/Termowew4";
import Termowew5 from "@/components/Termowew5";
import TermoPlus from "@/components/TermoPlus";

function binnenisolatie() {
	return (
		<div className="">
			<Head>
				<title>Isolatie van Binnenmuren | DG Bouwgroep</title>
				<meta
					name="description"
					content="Verbeter het comfort van uw huis met isolatie van binnenmuren door DG Bouwgroep. Ontdek onze hoogwaardige isolatiediensten voor binnenmuren, die helpen bij geluidsreductie, temperatuurregulatie en het verbeteren van de energie-efficiëntie van uw woning."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Termowew1 />
			<Termowew2 />
			<Termowew3 />

			<Termowew5 />
			<TermoPlus />
			<Testimonials />

			<Termo5 />
		</div>
	);
}

export default binnenisolatie;
