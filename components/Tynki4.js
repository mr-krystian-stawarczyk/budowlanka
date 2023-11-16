import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Tynki4() {
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
					{" "}
					<Image
						src="/assets/tynki7.png"
						width={400}
						height={400}
						className="responsive-image shadow-lg"
						alt="Sanity Image"
					/>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1>Meest voordelige afwerking</h1>
							<Card.Text>
								Zoals je ziet, is pleister spuiten geen ingewikkelde klus voor
								een stukadoor. Hierdoor is het een stuk goedkoper dan andere
								soorten stucwerk, omdat je minder voor de arbeid hoeft te
								betalen. Pleisterwerk is een glad stucwerk met een stevig
								eindresultaat, waardoor het veel wordt gebruikt in nieuwbouw.
								Ook is het makkelijk om na het drogen je eigen stijl toe te
								passen, bijvoorbeeld door behang aanbrengen of latex spuiten.
								Het hele huis Je kunt pleisterwerk door het hele huis toepassen.
								Het verstevigt de naden van de plafonds en wanden en maakt deze
								glad, zodat je een mooie afwerking krijgt. Vroeger was er een
								kans dat een nieuwbouwwoning tot 5 jaar na de bouw nog kon
								uitzetten, waardoor er scheurtjes in de muren, plafonds en
								pleisterwerk konden ontstaan. Hierdoor werd pleister spuiten
								vaak afgeraden in deze eerste jaren, ook al is spuitpleister erg
								makkelijk bij te werken indien nodig. Plafonds en muren
								Tegenwoordig is dit risico een stuk minder, waardoor de pleister
								gewoon kan worden aangebracht op de plafonds en muren na het
								bouwen. Soms kan het aanbrengen van spuitpleister zelfs deze
								beschadigingen voorkomen. Er is maar een dunne laag van het
								spuitpleister nodig op het plafond en de muur om de voordelen
								hiervan te krijgen. Ook hierdoor is dit pleisterwerk een van de
								meest voordelige keuzes voor de afwerking van plafonds en muren,
								omdat je weinig materiaal nodig hebt.
							</Card.Text>
							<Card.Text></Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Tynki4;
