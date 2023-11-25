import React from "react";
import Head from "next/head";
import About1 from "@/components/About1";
import About2 from "@/components/About2";
import About3 from "@/components/About3";
import About4 from "@/components/About4";

function overons() {
	return (
		<div className=" ">
			<Head>
				<title>Over Ons DG Bouwgroep Geschiedenis</title>
				<meta
					name="description"
					content="Ontdek meer over de geschiedenis van DG Bouwgroep - onze activiteiten, prestaties en ontwikkeling. Wij zijn een team van gepassioneerde bouwprofessionals."
				/>

				<meta name="robots" content="index, follow" />
			</Head>
			<About1 />

			<About2 />
			<About3 />
			<About4 />
		</div>
	);
}

export default overons;
