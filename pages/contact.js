import Contact1 from "@/components/Contact1";

import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";

function contact() {
	return (
		<div className="">
			<Head>
				<title>Contacteer Ons | DG Bouwgroep</title>
				<meta
					name="description"
					content="Neem contact met ons op voor al uw bouw- en renovatiebehoeften. DG Bouwgroep staat klaar om u te helpen met hoogwaardige diensten op het gebied van ramen, isolatie, pleisterwerk en meer. Wij staan garant voor professioneel advies en uitvoering van uw projecten."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Contact1 />
		</div>
	);
}

export default contact;
