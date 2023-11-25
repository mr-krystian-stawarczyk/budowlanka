import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Tynki6() {
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
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Spuitpleister prijs</h1>
							<Card.Text>
								Pleister spuiten is een van de goedkoopste stucwerkopties,
								doorgaans tussen €15 en €25 per vierkante meter voor plafonds of
								wanden. De locatie van toepassing heeft weinig invloed op de
								prijs. Zelf doen kan goedkoper zijn, maar als het om plafonds
								gaat, is het raadzaam een professional in te huren.
							</Card.Text>{" "}
							<Card.Text>
								Bij ernstige oneffenheden wordt vaak voor raapwerk gekozen,
								waarbij tot wel €15 tot €35 per vierkante meter kan worden
								berekend voor een dikkere laag en extra afwerking.
							</Card.Text>
							<Card.Text>
								Speciale opties, zoals sierpleister of unieke afwerkingen zoals
								beton ciré na een laag spuitpleister, bieden weliswaar een
								unieke uitstraling, maar zijn duurder. Betonstuc begint
								bijvoorbeeld vanaf €80 per vierkante meter, terwijl standaard
								spuitpleister een meer gebruikelijke, kostenefficiënte keuze
								blijft.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 text-center ">
					{" "}
					<Image
						src="/assets/tynki8.png"
						width={500}
						height={500}
						className="responsive-image shadow-lg"
						alt="pleister8"
					/>
				</Col>{" "}
			</Row>
		</Container>
	);
}

export default Tynki6;
