import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Tynki1() {
	const [windowWidth, setWindowWidth] = useState(0);
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		// Attach the event listener only on the client side
		if (typeof window !== "undefined") {
			setWindowWidth(window.innerWidth);
			window.addEventListener("resize", handleResize);
		}

		// Clean up the event listener when the component unmounts
		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("resize", handleResize);
			}
		};
	}, []);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const isMobile = windowWidth <= 768;

	const [ref, inView] = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});

	const animateIn = {
		opacity: 1,
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	};

	const animateOut = {
		opacity: 0,
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	};

	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start(animateIn);
		} else {
			controls.start(animateOut);
		}
	}, [inView, controls, animateIn, animateOut]);

	return (
		<Container
			fluid
			className="bg-white text-dark py-3 align-items-center justify-content-center"
			id="tynki2"
		>
			<Row className="text-center">
				<h1 className="text-bold text-uppercase">Rodzaje Tynków</h1>
			</Row>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold"> Tynki gipsowe</h1>
							<Card.Text>
								Gips należy do najstarszych materiałów budowlanych ludzkości.
								Niezależnie od stylów i trendów w architekturze pozostawał przez
								wieki innowacyjnym materiałem budowlanym z licznymi
								możliwościami zastosowania. Współcześnie gips znajdujemy głównie
								w materiałach przeznaczonych do wykańczania wnętrz: w płytach
								gipsowo-kartonowych i tynkach wewnętrznych. Gips jest materiałem
								bardzo przyjaznym dla zdrowia człowieka. Dzięki właściwościom
								higroskopijnym chłonie we wnętrzach nadmiar wilgoci i oddaje ją,
								kiedy powietrze staje się zbyt suche. Tym samym reguluje
								stężenie wilgoci w powietrzu, które staje się najbardziej
								korzystne dla ludzi. We wnętrzach wykończonych materiałami
								gipsowymi panuje optymalny klimat. Cechują się przede wszystkim
								dobrą izolacyjnością cieplną i akustyczną wyróżniającym się
								utrzymaniem odpowiedniego mikroklimatu przyjaznego dla człowieka
								(gips wchłania nadmiar wilgoci, i oddaje ją gdy w pomieszczeniu
								jest zbyt sucho) Tynki gipsowe to doskonałe podłoże pod
								malowanie bądź tapety jak również okładziny ceramiczne. Zaletą
								tynków gipsowych jest również fakt, że nie odpryskują podczas
								wiercenia w nich otworów czy wbijaniu gwoździ. Nie można tez
								zapomnieć o właściwościach ognioodpornych wynikających przede
								wszystkim ze struktury materiału jakim jest gips. (zawartość
								cząsteczek wody, które pod działaniem wysokiej temperatury
								przechodzi w parę wodną co w znaczny sposób spowalnia
								nagrzewanie się tynku i elementów konstrukcyjnych budynku). 
							</Card.Text>
							<Card.Text></Card.Text>
							<Card.Text></Card.Text>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/knauf1.png"
						width={400}
						height={400}
						className="responsive-image shadow-lg"
						alt="Sanity Image"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Tynki1;
