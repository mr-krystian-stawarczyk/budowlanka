import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Termo2() {
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
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/termo4.png"
						width={400}
						height={400}
						className="responsive-image shadow-lg"
						alt="Sanity Image"
					/>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold"> il je graag een gasloze woning? </h1>
							<Card.Text>
								Dan adviseren wij je om bij de dakisolatie voor hoge
								isolatiewaarden te kiezen. Met de keuze voor hoogwaardige
								isolatiewaarden beperk je de energievraag in de woning. Hierdoor
								kan je op termijn ook met lagere temperaturen de woning
								comfortabel krijgen. Bij nieuwbouwwoningen wordt inmiddels een
								isolatiewaarde (Rc-waarde) van 6.0 aangehouden.
							</Card.Text>
							<Card.Text>
								Bij het isoleren van een schuin dak is het zeer belangrijk dat
								je geen vocht opsluit in de constructie. Controleer of er een
								dampdichte of dampremmende laag in de constructie aanwezig. Dit
								kan een dun laagje pur zijn aan de buitenzijde van het
								dakbeschot of een (plastic) laag. Til een dakpan op om dit te
								controleren en/of controleer de bouwtekeningen van de woning.
							</Card.Text>
							<Card.Text>
								{" "}
								Indien er een dampdicht materiaal aanwezig is, dan adviseren wij
								om te werken met een speciale klimaatfolie Er zijn verschillende
								producten die toegepast kunnen worden als isolatiemateriaal.
								Hierbij kan je denken aan een minerale (glas of steen)wol,
								hardschuim isolatieplaten (PIR) of een natuurlijk alternatief
								zoals vlas- of hennep wol. Let hierbij op de Rd-waarde
								(isolatiewaarde) van het isolatiemateriaal. Met het ene
								materiaal heb je minder centimeters dikte nodig om tot eenzelfde
								isolatiewaarde te komen dan bij een ander materiaal. Uiteraard
								is er ook een prijsverschil tussen de verschillende materialen.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Termo2;
