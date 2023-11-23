import React from "react";
import Head from "next/head";
import Testimonials from "@/components/Testimonials";
import Ogrzewanie1 from "@/components/Ogrzewanie1";
import Ogrzewanie2 from "@/components/Ogrzewanie2";
import Ogrzewanie3 from "@/components/Ogrzewanie3";
import Ogrzewanie4 from "@/components/Ogrzewanie4";
import Ogrzewanie6 from "@/components/Ogrzewanie6";
import Ogrzewanie7 from "@/components/Ogrzewanie7";

function vloerverwarming() {
	return (
		<div className="">
			<Head>
				<title>Vloerverwarming</title>
				<meta name="" content="" />
				<meta name="robots" content="index, follow" />
			</Head>
			<Ogrzewanie1 />
			<Ogrzewanie2 />
			<Ogrzewanie3 />
			<Ogrzewanie4 />

			<Ogrzewanie6 />
			<Testimonials />
			<Ogrzewanie7 />
		</div>
	);
}

export default vloerverwarming;
