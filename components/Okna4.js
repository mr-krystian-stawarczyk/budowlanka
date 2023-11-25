import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Okna4() {
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
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/okna44.png"
						width={500}
						height={500}
						className="responsive-image shadow-lg"
						alt="ramen44"
					/>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Kunststof kozijnen</h1>
							<Card.Text>
								Een aantal jaar geleden waren houten kozijnen de meest verkochte
								kozijnen in Nederland. Inmiddels zijn de houten kozijnen
								ingehaald door de kunststof kozijnen.
							</Card.Text>
							<Card.Text>
								De laatste jaren ondervinden de kunststof kozijnen een enorme
								opmars. Kunststof is een materiaal met een aantal belangrijke
								eigenschappen. Het materiaal is niet elektrostatisch wat tot
								gevolg heeft dat stofdeeltjes en vuildeeltjes niet worden
								aangetrokken.{" "}
							</Card.Text>
							<Card.Text>
								Daarnaast heeft het materiaal een goede isolatiewaarde. Een
								kunststof kozijn in combinatie met de juiste beglazing kan er
								tevens voor zorgen dat uw energierekening flink om laag gaat. De
								voordelen van kunststof kozijnen.
							</Card.Text>
							<Card.Text>
								- Zeer onderhoudsarm en tevens onderhoudsvriendelijk
							</Card.Text>
							<Card.Text>- Goed isolerend vermogen</Card.Text>
							<Card.Text>- Brandveilig</Card.Text>
							<Card.Text>- In veel verschillende kleuren mogelijk</Card.Text>
							<Card.Text>- Lange levensduur</Card.Text>
							<Card.Text>- Relatief goedkoop</Card.Text>
							<Card.Text>- Kindvriendelijk</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Okna4;
