import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Ogolne1() {
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
			className="d-flex py-3 bg-light text-dark align-items-center justify-content-center"
			id="bouwwerkzaamheden2"
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/ogolne7.png"
						width={500}
						height={500}
						className="responsive-image shadow-lg"
						alt="bouw2"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">
								Verander uw ruimtes in ware kunstwerken
							</h1>
							<Card.Text>
								Wil je dat jouw huis niet alleen een woonplek is, maar een ware
								weerspiegeling van jouw persoonlijkheid?
							</Card.Text>
							<Card.Text>
								Bij DG BOUWGROEP geloven we dat elke ruimte het potentieel heeft
								om een uniek kunstwerk te worden. Wat ons onderscheidt, is de
								passie voor creatie.
							</Card.Text>
							<Card.Text></Card.Text>
							<Card.Text>
								Ons team van ervaren vakmensen bundelt hun kennis en
								creativiteit om zelfs de kleinste details om te zetten in
								bijzondere elementen. Van eenvoudige reparaties tot uitgebreide
								renovaties zien we elk project als een kans om ruimtes te
								creëren die niet alleen esthetisch zijn, maar ook functioneel.
								Laten jouw dromen van het perfecte huis ons gezamenlijke doel
								worden.
							</Card.Text>
							<Card.Text></Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Ogolne1;
