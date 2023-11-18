import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Termo1() {
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
			className="d-flex bg-light text-dark py-3 align-items-center justify-content-center"
			id="termo2"
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold"> Isoleren van een schuin dak</h1>
							<Card.Text>
								Is je huidige dak nog niet voorzien van isolatie? In dat geval
								is het isoleren van je dak een interessante stap om mee te
								beginnen. Er zijn verschillende opties om je dak te isoleren.
								Dit kan bijvoorbeeld aan de buitenkant van het dakbeschot en aan
								de binnenkant van het dakbeschot.
							</Card.Text>
							<Card.Text>
								De beste methode om je dak te isoleren is aan de buitenkant van
								het dakbeschot. Bij deze methode zijn echter wel een aantal
								belangrijke aandachtspunten en randvoorwaarden.  
							</Card.Text>
							<Card.Text>
								Als je besluit om de binnenkant van het (schuine) dak te
								isoleren dien je de juiste folies te gebruiken. Vraag de
								factsheet aan voor meer informatie over de aandachtspunten,
								randvoorwaarden, kosten en opbrengsten bij dakisolatie.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/termo3.png"
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

export default Termo1;
