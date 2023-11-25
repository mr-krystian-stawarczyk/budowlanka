import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Okna3() {
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
			className="d-flex bg-white text-dark py-3 align-items-center justify-content-center"
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">
								Bij ons is de uitwisseling de moeite waard
							</h1>
							<Card.Text>
								De kosten voor het vervangen van kozijnen in combinatie met het
								vervangen van glas zijn van zeer veel factoren afhankelijk. Laat
								de kozijnen ter plaatse inmeten voor de definitieve opdracht.
							</Card.Text>
							<Card.Text>
								De belangrijkste invloed factoren op de prijs zijn onder andere
								het type materiaal van het kozijn (hout, kunststof of
								aluminium), type beglazing (HR++ of HR+++ glas),
								ventilatievoorzieningen in het kozijn, schuifpui, vaste of
								draaiende delen en uiteraard de afmeting van het kozijn. In de
								praktijk zien we daarnaast ook grote verschillen tussen
								aanbieders in prijs.
							</Card.Text>
							<Card.Text>
								Over het algemeen is het daarom niet mogelijk een eenduidige
								vaste vierkante meter prijs aan te geven. Wij zien inmiddels
								vaak een bandbreedte van circa € 800,- tot € 1200,- per
								vierkante meter kozijnoppervlak uitgaande van toepassing van
								HR++ glas. Echter, wanneer je nu voor de keuze staat om de
								kozijnen te vervangen adviseren wij ten zeerste om de kozijnen
								met HR+++ glas (triple glas) uit te voeren.
							</Card.Text>{" "}
							<Card.Text>
								De meerkosten hiervan liggen rond de 20%, maar hierdoor is een
								extra besparing van 25% mogelijk op de stookkosten ten opzichte
								van HR++ glas.Om te anticiperen op strengere regelgeving op het
								gebied van isolatie en de woning tevens geschikt te maken om van
								het aardgas af te sluiten adviseren wij triple glas toe te
								passen.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/okna34.png"
						width={500}
						height={500}
						className="responsive-image shadow-lg"
						alt="ramen34"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Okna3;
