import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Ogolne2() {
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
							<h1 className="text-bold">
								Ontdek het Potentieel van Jouw Huis met Onze Renovaties
							</h1>
							<Card.Text>
								Jouw huis moet een plek zijn die jouw unieke leven en stijl
								weerspiegelt. Bij DG BOUWGROEP begrijpen we die behoefte heel
								goed. Ons werk gaat niet alleen over renovaties of het
								schilderen van muren. Het is het verhaal van elk project waarin
								we uniciteit en potentieel vinden.
							</Card.Text>
							<Card.Text>
								Daarom betrekt ons team van specialisten zich bij elke fase van
								het werk, altijd met zorg voor jouw behoeften. Onze precisie
								gaat hand in hand met het voortdurend zoeken naar de beste
								oplossingen. Laat ons veranderingen aanbrengen die niet alleen
								de uitstraling van jouw huis vernieuwen, maar er ook voor zorgen
								dat het perfect past bij jouw leven.
							</Card.Text>
							<Card.Text></Card.Text>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/ogolne5.jpg"
						width={400}
						height={400}
						className="responsive-image shadow-lg"
						alt="bouw3"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Ogolne2;
