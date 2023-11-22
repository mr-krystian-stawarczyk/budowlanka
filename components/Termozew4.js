import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Termozew4() {
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
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/termozew3.png"
						width={400}
						height={400}
						className="responsive-image shadow-lg"
						alt="Sanity Image"
					/>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Besparingen</h1>
							<Card.Text>
								Het isoleren van een huis resulteert in aanzienlijke
								energiebesparingen, wat zich vertaalt naar lagere verwarmings-
								en koelingskosten. Dankzij het professioneel isoleren van het
								dak, dat we aanbieden, kunnen we aanzienlijk warmteverlies
								vanuit het gebouw tijdens de wintermaanden verminderen en de
								blootstelling aan zonnestraling in de zomer beperken. Dit
								betekent minder energieverbruik om het hele jaar door een
								optimale temperatuur in huis te behouden. Onze
								isolatieoplossingen vormen een beschermende barrière die
								warmteverliezen effectief vermindert en een betere
								energie-efficiëntie mogelijk maakt. Het verbeteren van de
								isolatie van het dak kan aanzienlijke financiële voordelen
								opleveren door het verminderen van energieverbruik en kosten
								voor het handhaven van een comfortabele temperatuur in huis.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Termozew4;
