import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Ogolne4() {
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
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">
								Waar Innovatie de Traditie Ontmoet in Jouw Huis
							</h1>
							<Card.Text>
								Bij DG BOUWGROEP leggen we de nadruk op harmonie tussen moderne
								technologieën en traditioneel vakmanschap. Elk project waar we
								aan werken is een mix van innovatie en klassieke stijl, wat
								unieke interieurs creëert.
							</Card.Text>
							<Card.Text>
								Onze passie voor perfectie betekent dat we geen ruimte laten
								voor willekeurigheid.
							</Card.Text>{" "}
							<Card.Text>
								Ons team bestaat uit mensen die gepassioneerd zijn over het
								creëren van ruimtes die niet alleen visueel aantrekkelijk zijn,
								maar bovenal functioneel aansluiten bij jouw behoeften.
							</Card.Text>
							<Card.Text>
								Sta ons toe deel uit te maken van het creatieproces - van
								concept tot het laatste detail - en laten we samen het
								potentieel van jouw huis ontdekken.
							</Card.Text>
							<Card.Text></Card.Text>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/ogolne8.png"
						width={500}
						height={500}
						className="responsive-image shadow-lg"
						alt="bouw8"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Ogolne4;
