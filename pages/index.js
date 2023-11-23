import { useTheme } from "next-themes";
import Head from "next/head";
import React from "react";
import Header6 from "@/components/Header6";
import Werk2 from "@/components/Werk2";
import Header10 from "@/components/Header10";
import Testimonials from "@/components/Testimonials";
import Header9 from "@/components/Header9";
import Testowy from "@/components/Testowy";

export default function Home() {
	const { theme } = useTheme();
	return (
		<>
			<Head>
				<title>DG BOUWGROEP</title>
				<meta name="" content="" />
				<meta name="robots" content="index, follow" />
			</Head>

			<Testowy />
			<Header10 />

			<Testimonials />
			<Werk2 />
			<Header6 />
		</>
	);
}
