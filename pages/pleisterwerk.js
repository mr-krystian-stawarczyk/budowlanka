import React from "react";
import Head from "next/head";
import Tynki1 from "@/components/Tynki1";
import Tynki2 from "@/components/Tynki2";
import Tynki3 from "@/components/Tynki3";
import Tynki4 from "@/components/Tynki4";
import Testimonials from "@/components/Testimonials";
import Tynki5 from "@/components/Tynki5";
import Header4 from "@/components/Header4";
import Tynki6 from "@/components/Tynki6";

function pleisterwerk() {
	return (
		<div className="">
			<Head>
				<title>Kunst van Stukadoorswerk | DG Bouwgroep</title>
				<meta
					name="description"
					content="Ontdek de kunst van stukadoorswerk bij DG Bouwgroep. Wij bieden hoogwaardige pleisterdiensten aan voor uw woning, met vakmanschap en precisie, om uw muren te transformeren en een perfecte afwerking te garanderen."
				/>
				<meta name="robots" content="index, follow" />
			</Head>

			<Header4 />

			<Tynki2 />
			<Tynki3 />
			<Tynki4 />
			<Tynki6 />
			<Tynki1 />
			<Testimonials />
			<Tynki5 />
		</div>
	);
}

export default pleisterwerk;
