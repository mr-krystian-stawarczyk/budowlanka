import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Termowew5() {
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
						src="/assets/termowew4.png"
						width={400}
						height={400}
						className="responsive-image shadow-lg"
						alt="binnenisolatie4"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">
								{" "}
								Je kunt de binnenkant van de woning op een aantal manieren
								isoleren.
							</h1>
							<Card.Text>
								De meest voorkomende wijze waarop dit gebeurt, is door middel
								van houten- of metalen profielen waartussen isolatie (platen)
								worden geplaatst, waarover vervolgens een dampremmende folie en
								afwerkingsplaat wordt gemonteerd. Er zijn ook verschillende
								alles-in-één producten verkrijgbaar. Dit is isolatieplaat
								bekleedt met een gipsplaat afwerking. Deze materialen kunnen met
								een kleine luchtspouw of rechtstreeks tegen de gevel geplaatst
								worden en zijn dan isolatie en afwerking in één. Hierbij zijn
								ook speciale profielen beschikbaar voor afwerking rondom
								kozijnen. Andere veelgebruikte materialen zijn houtvezelplaten,
								extra isolerend cellenbeton of reflecterende folie.
							</Card.Text>
							<Card.Text>
								- De binnenkant van de muur dient droog te zijn en er mogen geen
								tekenen van vochtdoorslag zijn. Indien de binnenwand te vochtig
								is of is aangetast met schimmel, zorg er dan eerst voor dat deze
								problemen zijn opgelost. Eerder kun je beter niet van binnenuit
								isoleren, omdat de kans op vochtproblemen in de toekomst dan
								groot is. Mocht je twijfelen of je de muur wel kunt isoleren,
								neem dan contact op met de uitvoerende partij of met een
								(gespecialiseerd) bouwkundig adviseur;
							</Card.Text>
							<Card.Text>
								- Er dienen geen grove scheurvormingen of andere tekenen van
								eventuele verzakkingen te zijn in de binnenmuur. Kleine scheuren
								hebben geen gevolgen met betrekking tot het isoleren aan de
								binnenzijde van de gevel. Op het moment dat je te maken hebt met
								grote scheuren, is het verstandig om een bouwkundig adviseur in
								te schakelen.
							</Card.Text>
							<Card.Text></Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Termowew5;
