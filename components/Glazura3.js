import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Glazura3() {
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
					<Card className="border-0 bg-transparent">
						<Card.Body>
							<h1 className="text-bold">Tegelwerk Zonder Compromissen</h1>
							<Card.Text>
								Ons werk is niet alleen het leggen van tegels - het is een uniek
								proces waarin we elk detail koesteren.
							</Card.Text>
							<Card.Text>
								Ons team bestaat niet alleen uit vakmensen, maar uit
								gepassioneerde individuen die hun hart en ziel in elk project
								steken. We begrijpen dat tegelwerk niet alleen een
								afwerkingsdetail is, maar een essentieel element dat karakter
								geeft aan ruimtes.{" "}
							</Card.Text>
							<Card.Text>
								Daarom is onze aanpak gebaseerd op betrouwbaarheid,
								professionaliteit en voortdurende aandacht voor kwaliteit in
								uitvoering. Met DG BOUWGROEP krijg je niet alleen een dienst,
								maar een echt ambachtelijk kunstwerk dat jouw verwachtingen
								weerspiegelt en een uniek karakter aan jouw ruimtes geeft.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/glazura5.png"
						width={500}
						height={500}
						className="responsive-image shadow-lg"
						alt="glazuur3"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Glazura3;
