import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Glazura1() {
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
			id="glazura2"
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Glazura Mistrzostwo Detalu</h1>
							<Card.Text>
								Nasi mistrzowie glazurnictwa to artyści w swoim fachu. Ich praca
								to nie tylko ułożenie kafelków - to tworzenie kompozycji, w
								których detale nabierają życia. Każdy krok w procesie układania
								glazury jest dla nas niezwykle istotny. Dbamy o doskonałość
								wykonania, by efekt końcowy był nie tylko estetyczny, ale też
								funkcjonalny. Z DG BOUWGROEP otrzymujesz usługę, w której
								precyzja i staranność idą w parze z pasją do tworzenia
								przestrzeni, które wyróżniają się niepowtarzalnym charakterem.
							</Card.Text>
							<Card.Text></Card.Text>
							<Card.Text></Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/glazura7.png"
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

export default Glazura1;
