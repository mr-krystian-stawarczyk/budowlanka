import React from "react";
import Head from "next/head";
import Testimonials from "@/components/Testimonials";
import Termo5 from "@/components/Termo5";
import Termozew1 from "@/components/Termozew1";
import Termozew2 from "@/components/Termozew2";
import Termozew5 from "@/components/Termozew5";
import Termozew3 from "@/components/Termozew3";
import Termozew4 from "@/components/Termozew4";
import TermoPlus from "@/components/TermoPlus";

function buitenisolatie() {
	return (
		<div className="">
			<Head>
				<title>Buitengevelisolatie</title>
				<meta name="" content="" />
				<meta name="robots" content="index, follow" />
			</Head>
			<Termozew1 />
			<Termozew2 />
			<Termozew3 />
			<Termozew4 />
			<TermoPlus />

			<Testimonials />
			<Termo5 />
		</div>
	);
}

export default buitenisolatie;
