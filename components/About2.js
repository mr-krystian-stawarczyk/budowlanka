import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import Link from "next/link";

import Image from "next/image";

import imageUrlBuilder from "@sanity/image-url";
function About2() {
	const [ref1, inView1] = useInView({
		threshold: 0.4,
		triggerOnce: false,
	});

	const [ref2, inView2] = useInView({
		threshold: 0.3,
		triggerOnce: false,
	});
	const [ref3, inView3] = useInView({
		threshold: 0.2,
		triggerOnce: false,
	});

	const [ref4, inView4] = useInView({
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

	const controls1 = useAnimation();
	const controls2 = useAnimation();
	const controls3 = useAnimation();
	const controls4 = useAnimation();

	useEffect(() => {
		if (inView1) {
			controls1.start(animateIn);
		}
	}, [inView1, controls1, animateIn]);

	useEffect(() => {
		let timeout;
		if (inView2) {
			timeout = setTimeout(() => {
				controls2.start(animateIn);
			}, 500);
		}

		return () => clearTimeout(timeout);
	}, [inView2, controls2, animateIn]);

	useEffect(() => {
		let timeout;
		if (inView3) {
			timeout = setTimeout(() => {
				controls3.start(animateIn);
			}, 1000);
		}

		return () => clearTimeout(timeout);
	}, [inView3, controls3, animateIn]);

	useEffect(() => {
		let timeout;
		if (inView4) {
			timeout = setTimeout(() => {
				controls4.start(animateIn);
			}, 1900);
		}

		return () => clearTimeout(timeout);
	}, [inView4, controls4, animateIn]);

	return (
		<Container
			fluid
			className={`d-flex flex-column bg-white text-dark justify-content-center align-items-center min-vh-100`}
		>
			<Row className="text-center d-row my-2">
				<h1 className="text-bold">Uitvoeringsproces</h1>
				<h3>Wij bieden service van begin tot eind</h3>
			</Row>
			<Row className="text-center">
				<Col lg={3} className="mx-auto">
					<motion.div
						ref={ref1}
						animate={controls1}
						initial={{ opacity: 0 }}
						transition={{ delay: 1 }}
					>
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1>1</h1>
								<Card.Text className="text-bold">Contact</Card.Text>
								<Card.Text>
									Neem contact met ons op: Bel ons, stuur een e-mail of gebruik
									het contactformulier op de website.
								</Card.Text>
								<Card.Text>
									We ontmoeten elkaar om uw behoeften te begrijpen: Maak een
									afspraak waarbij we uw verwachtingen met betrekking tot onze
									diensten gedetailleerd bespreken.
								</Card.Text>
								<Card.Text>
									We beginnen een dialoog: We willen uw voorkeuren begrijpen en
									de beste oplossingen voor uw project uitwerken.
								</Card.Text>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
				<Col lg={3} className="mx-auto">
					<motion.div
						ref={ref2}
						animate={controls2}
						initial={{ opacity: 0 }}
						transition={{ delay: 1 }}
					>
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1>2</h1>
								<Card.Text className="text-bold">
									Planning en Uitvoering
								</Card.Text>
								<Card.Text>
									We stellen een gepersonaliseerd aanbod op: We analyseren uw
									vereisten en stellen een passend aanbod op dat alle aspecten
									van het werk omvat.
								</Card.Text>
								<Card.Text>
									We coördineren het werkschema: Na acceptatie van het aanbod
									plannen we data en passen we het werkschema aan naar uw
									voorkeuren.
								</Card.Text>
								<Card.Text>
									We zorgen voor duidelijkheid en helderheid: We staan open voor
									uw suggesties en zorgen voor transparantie in het
									planningsproces.
								</Card.Text>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
				<Col lg={3} className="mx-auto">
					<motion.div
						ref={ref3}
						animate={controls3}
						initial={{ opacity: 0 }}
						transition={{ delay: 0.1 }}
					>
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1>3</h1>
								<Card.Text className="text-bold">
									Uitvoering en Tevredenheid
								</Card.Text>
								<Card.Text>
									We voeren het werk nauwgezet uit: Ons ervaren team gaat aan de
									slag met oog voor elk detail.
								</Card.Text>
								<Card.Text>
									We controleren de eindresultaten: Na afronding van het werk
									verifiëren we de resultaten zorgvuldig om ervoor te zorgen dat
									ze aan uw verwachtingen voldoen.
								</Card.Text>
								<Card.Text>
									We hechten waarde aan uw tevredenheid: We staan open voor
									dialoog en streven altijd naar volledige tevredenheid met onze
									diensten.
								</Card.Text>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
			</Row>
		</Container>
	);
}

export default About2;
