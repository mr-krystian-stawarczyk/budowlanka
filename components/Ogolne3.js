import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Ogolne3() {
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
						src="/assets/ogolne6.png"
						width={400}
						height={400}
						className="responsive-image shadow-lg"
						alt="bouw6"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">
								Ontdek Onze Kracht Uitmuntendheid in het Bouwen van Jouw Dromen
							</h1>
							<Card.Text>
								Elk huis is als een leeg vel papier, klaar voor nieuwe verhalen.
								DG BOUWGROEP is niet alleen een bouwbedrijf - het is een team
								van enthousiastelingen die zich laten inspireren door jouw
								visie. Bij ons krijg je meer dan alleen een standaard service.
								We bieden betrokkenheid die jouw huis tot een levensproject
								maakt voor ons. Onze betrouwbaarheid en precisie vormen de basis
								voor elk project dat we uitvoeren.
							</Card.Text>
							<Card.Text>
								Of je nu een nieuw huis vanaf nul wilt bouwen of je huidige
								interieur wilt vernieuwen, onze vastberadenheid en betrokkenheid
								blijven onveranderd. Vertrouw op ons om samen ruimtes te creëren
								die het verhaal van jouw dromen vertellen en volledig aan jouw
								verwachtingen voldoen.
							</Card.Text>
							<Card.Text></Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Ogolne3;
