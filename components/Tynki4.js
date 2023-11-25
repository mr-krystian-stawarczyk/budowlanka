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
						width={500}
						height={500}
						className="responsive-image shadow-lg"
						alt="pleister7"
					/>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Meest voordelige afwerking</h1>
							<Card.Text>
								Pleister spuiten is voordelig vanwege minder arbeidskosten en
								het levert stevig en glad pleisterwerk op, waardoor het veel
								wordt gebruikt in nieuwbouw. Na droging kun je gemakkelijk je
								eigen stijl toepassen, bijvoorbeeld met behang of latex.
							</Card.Text>
							<Card.Text>
								Het kan in het hele huis worden toegepast, verstevigt naden van
								plafonds en wanden voor een mooie afwerking. Vroeger kon
								nieuwbouw nog tot 5 jaar na de bouw uitzetten, wat scheurtjes
								veroorzaakte, maar tegenwoordig is dit risico minder, waardoor
								spuitpleister direct na bouw kan worden aangebracht, soms zelfs
								om beschadigingen te voorkomen.
							</Card.Text>
							<Card.Text>
								Slechts een dunne laag is nodig voor de voordelen ervan,
								waardoor het een kostenefficiënte keuze is voor plafond- en
								muurafwerking, vanwege het minimale materiaalgebruik.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Tynki4;
