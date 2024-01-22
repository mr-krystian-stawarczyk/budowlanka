import React from "react";
import Head from "next/head";
import Werk1 from "@/components/Werk1";

import Werk4 from "@/components/Werk4";
import Werk5 from "@/components/Werk5";
import Werk6 from "@/components/Werk6";
import Werk7 from "@/components/Werk7";
import Werk8 from "@/components/Werk8";
import Testimonials from "@/components/Testimonials";

function werk() {
	return (
		<div className="">
			<Head>
				<title>Onze Realisaties | DG Bouwgroep</title>
				<meta
					name="description"
					content="Bekijk onze gerealiseerde projecten en ontdek de hoogwaardige bouw- en renovatiewerkzaamheden uitgevoerd door DG Bouwgroep. Wij tonen trots onze voltooide projecten en vakmanschap op het gebied van ramen, isolatie, pleisterwerk en meer."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Werk1 />
			<Werk4 />

			<Testimonials />
		</div>
	);
}

export default werk;
