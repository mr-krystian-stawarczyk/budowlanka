import React from "react";
import Head from "next/head";
import Glazura1 from "@/components/Glazura1";
import Glazura2 from "@/components/Glazura2";
import Glazura3 from "@/components/Glazura3";
import Glazura4 from "@/components/Glazura4";
import Testimonials from "@/components/Testimonials";
import Glazura5 from "@/components/Glazura5";
import Header5 from "@/components/Header5";

function glazuur() {
	return (
		<div className="">
			<Head>
				<title>Glazuur</title>
				<meta name="" content="" />
				<meta name="robots" content="index, follow" />
			</Head>
			<Header5 />
			<Glazura1 />
			<Glazura2 />
			<Glazura3 />
			<Glazura4 />
			<Testimonials />
			<Glazura5 />
		</div>
	);
}

export default glazuur;