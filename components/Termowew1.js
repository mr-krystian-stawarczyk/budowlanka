import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Termowew1() {
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
			className="d-flex bg-light text-dark py-5 align-items-center justify-content-center"
			id="termo2"
		>
			<Row className="justify-content-center mt-3  align-items-center">
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold"> Binnengevelisolatie</h1>
							<Card.Text>
								Als je een gasloze woning wil, is het isoleren van de binnenkant
								van je gevel een goede eerste stap. Het is een ingrijpende
								maatregel, maar het kan je energieverbruik flink terugdringen.
								Een gemiddeld huis verliest 20% tot 40% warmte via de muren.
								Daarmee is de muur, na het dak, de grootste factor in het
								bepalen van de energiezuinigheid van uw huis. Dit betekent bij
								een gemiddeld gasverbruik van 1.900 m3 gas een verlies van €550
								tot ongeveer €1.100 per jaar (€1,45 per m3, prijspeil januari
								2023). Dat is een flink bedrag wat u kunt besparen door
								muurisolatie toe te passen. Daarnaast verhoogt u het comfort in
								de woning. Koude muren en daarbijbehorende koudeval zijn
								verleden tijd. Koudeval is een belangrijke veroorzaker van tocht
								in huis.
							</Card.Text>
							<Card.Text>
								Het isoleren aan de binnenkant van de woning wordt steeds vaker
								toegepast. Door van binnenuit te isoleren kun je prima
								isolatiewaarden realiseren, vaak een stuk hoger dan met alleen
								spouwmuurisolatie. Je kunt de klus laten uitvoeren door een
								aannemer of klusbedrijf of als je handig bent, kun je het ook
								zelf uitvoeren.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/termowew1.png"
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

export default Termowew1;
