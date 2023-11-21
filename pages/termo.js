import React from "react";
import Head from "next/head";
import Termo1 from "@/components/Termo1";
import Termo2 from "@/components/Termo2";
import Termo3 from "@/components/Termo3";
import Termo4 from "@/components/Termo4";
import Testimonials from "@/components/Testimonials";
import Termo5 from "@/components/Termo5";
import Header3 from "@/components/Header3";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import TermoGlowny from "@/components/TermoGlowny";
import Header10 from "@/components/Header10";

function termo() {
	return (
		<div>
			<Head>
				<title>Warmte Isolatie</title>
				<meta name="" content="" />
				<meta name="robots" content="index, follow" />
			</Head>
			<TermoGlowny />
			<Header10 />
		</div>
	);
}

export default termo;
