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
			id="glazuur2"
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent">
						<Card.Body>
							<h1 className="text-bold">Tegelwerk van Vakmanschap</h1>
							<Card.Text>
								Onze tegelmeesters zijn ware kunstenaars in hun vak. Hun werk is
								niet alleen het leggen van tegels, maar het creëren van
								composities waarin details tot leven komen.
							</Card.Text>
							<Card.Text>
								Elke stap in het tegelzetten is uiterst belangrijk voor ons. We
								streven naar perfectie in uitvoering, zodat het eindresultaat
								niet alleen esthetisch, maar ook functioneel is.{" "}
							</Card.Text>
							<Card.Text>
								Met DG BOUWGROEP krijg je een service waar precisie en zorg hand
								in hand gaan met de passie voor het creëren van ruimtes die zich
								onderscheiden door hun unieke karakter.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/glazura7.png"
						width={500}
						height={500}
						className="responsive-image shadow-lg"
						alt="glazuur1"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Glazura1;
