import React from "react";
import Head from "next/head";
import Termo1 from "@/components/Termo1";
import Termo2 from "@/components/Termo2";
import Termo3 from "@/components/Termo3";
import Termo4 from "@/components/Termo4";
import Testimonials from "@/components/Testimonials";
import Termo5 from "@/components/Termo5";
import Header3 from "@/components/Header3";
import TermoPlus from "@/components/TermoPlus";

function dakisolatie() {
	return (
		<div className="">
			<Head>
				<title>Dakisolatie | DG Bouwgroep</title>
				<meta
					name="description"
					content="Ontdek de voordelen van dakisolatie door DG Bouwgroep. Wij bieden hoogwaardige isolatiediensten voor uw dak, met professionele installatie voor een betere energie-efficiëntie en temperatuurregeling in uw woning."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Header3 />
			<Termo1 />
			<Termo2 />
			<Termo3 />
			<Termo4 /> <TermoPlus />
			<Testimonials />
			<Termo5 />
		</div>
	);
}

export default dakisolatie;
