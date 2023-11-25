import React from "react";
import Head from "next/head";
import TermoGlowny from "@/components/TermoGlowny";
import Header10 from "@/components/Header10";

function termo() {
	return (
		<div>
			<Head>
				<title>Thermische Isolatie | DG Bouwgroep</title>
				<meta
					name="description"
					content="Ontdek de voordelen van thermische isolatie door DG Bouwgroep. Wij bieden hoogwaardige isolatiediensten om de energie-efficiëntie van uw woning te verbeteren en u te helpen bij het reguleren van de binnentemperatuur, waardoor u energie bespaart en het comfort verhoogt."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<TermoGlowny />
			<Header10 />
		</div>
	);
}

export default termo;
