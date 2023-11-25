import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Ogrzewanie4() {
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
			className=" bg-white text-dark py-3 align-items-center justify-content-center"
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">ONBEPERKTE MOGELIJKHEDEN</h1>
							<Card.Text>
								Wat betreft interieurdesign bieden elektrische vloermatten vele
								extra inrichtingsopties. Door te kiezen voor dit soort
								oplossingen, kunt u - zonder ingewikkelde aanpassingen aan het
								verwarmingssysteem - een intelligent en tegelijkertijd
								betrouwbaar en energiezuinig verwarmingssysteem in huis creëren.
							</Card.Text>
							<Card.Text>
								Voor optimaal thermisch comfort is het aan te raden een
								hoogwaardige thermostaat met vloersensor te gebruiken.
							</Card.Text>

							<Card.Text>
								Elektrische thermostaten met tijdsprogrammering maken
								nauwkeurige instellingen van de verwarmingstijd mogelijk.
								Hierdoor blijft de vloerverwarming altijd efficiënt en blijven
								de operationele kosten onder controle.
							</Card.Text>

							<Card.Text>
								De installatie van elektrische vloermatten als vloerverwarming
								wordt niet belemmerd door de constructie van het gebouw. Het
								systeem kan zowel direct op een oude vloer worden geplaatst
								(tijdens renovatie) als in nieuw gebouwde huizen, vóór de
								afwerking met tegels, parket of keramische tegels.
							</Card.Text>
							<Card.Text>
								Elektrische verwarmingsmatten verbeteren het thermisch comfort
								van het gebouw zonder extra belasting voor het plafond, waardoor
								ze zowel op de begane grond als op zolder of op elke verdieping
								van het gebouw kunnen worden gelegd.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/ogrzewanie5.png"
						width={500}
						height={500}
						className="responsive-image shadow-lg"
						alt="verwarming5"
					/>
				</Col>{" "}
			</Row>
		</Container>
	);
}

export default Ogrzewanie4;
