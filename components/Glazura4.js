import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Glazura4() {
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
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/glazura8.png"
						width={500}
						height={500}
						className="responsive-image shadow-lg"
						alt="Sanity Image"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent">
						<Card.Body>
							<h1 className="text-bold">Hulp bij Materiaalkeuze </h1>
							<Card.Text>
								Ons team van deskundigen beschikt over uitgebreide kennis van
								materialen en hun toepassingen. We luisteren naar uw behoeften
								en voorkeuren om samen met u de beste keuzes te maken voor een
								optimaal resultaat.
							</Card.Text>
							<Card.Text>
								Van hoogwaardige tegelsoorten tot andere benodigdheden, we zijn
								er om u te adviseren en te helpen bij het selecteren van
								materialen die passen bij uw smaak en de vereisten van uw
								project. Ieder project is uniek en verdient een op maat gemaakt
								advies.{" "}
							</Card.Text>
							<Card.Text>
								Onze toewijding aan het leveren van hoogwaardige materialen gaat
								hand in hand met onze wens om u te helpen bij het realiseren van
								uw visie. Wij bieden niet alleen een breed scala aan opties,
								maar ook persoonlijk advies om ervoor te zorgen dat de gekozen
								materialen perfect aansluiten bij uw specifieke behoeften en
								esthetiek.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Glazura4;
