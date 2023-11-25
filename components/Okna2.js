import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Okna2() {
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

	const sectionPaths = {
		contact: "contact", // Mapuj wybór do odpowiednich ścieżek
		about: "about",
		blog: "blog",
		werk: "werk",
		dienste: "dienste",
	};

	return (
		<Container
			fluid
			className="d-flex bg-white text-dark py-3 align-items-center justify-content-center"
			id="ramen2"
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/okna33.png"
						width={500}
						height={500}
						className="responsive-image shadow-lg"
						alt="ramen33"
					/>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">
								{" "}
								Is dit de juiste stap om mee te beginnen?
							</h1>
							<Card.Text>
								Of het vervangen van de kozijnen de juiste stap is om mee te
								beginnen is afhankelijk van een aantal factoren. Wij raden het
								aan om de kozijnen direct te vervangen op het moment dat je nog
								in het bezit bent van oude kozijnen met enkele beglazing.
							</Card.Text>
							<Card.Text>
								Je gaat dit gelijk merken in het comfort en op de energienota.
								Daarnaast zorgt het ook voor een betere woningwaarde. Als de
								kozijnen nog in een goede staat zijn adviseren wij om eerst te
								kijken naar andere isolerende maatregelen of enkel het vervangen
								van de beglazing.
							</Card.Text>
							<Card.Text>
								Met het oog op een gasloze woning adviseren wij om te kiezen
								voor kozijnen met driedubbele beglazing. Met de keuze voor
								drievoudige beglazing beperk je de energievraag in de woning.
							</Card.Text>
							<Card.Text>
								Dit zorgt er voor dat je minder energie nodig hebt om de woning
								op de juiste temperatuur te krijgen. Een goed geïsoleerde woning
								zorgt er voor dat je op termijn ook met lagere temperaturen de
								woning kan verwarmen. 
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Okna2;
