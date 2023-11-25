import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Termo4() {
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
						src="/assets/termo6.png"
						width={500}
						height={500}
						className="responsive-image shadow-lg"
						alt="termoisolatie6"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">
								{" "}
								Kies een isolatiemateriaal met een hoge isolatiewaarde{" "}
							</h1>
							<Card.Text>
								Met name isolatieplaten werken gemakkelijk en snel. Probeer een
								zo hoog mogelijke isolatiewaarde te behalen. Een nieuwbouwwoning
								heeft op dit moment een dak met een isolatiewaarde (Rc-waarde)
								van 6.0; Let er in de toekomst op dat je niet onnodig gaten in
								het dak gaat boren.
							</Card.Text>
							<Card.Text>
								Hiermee doorboor je hoogstwaarschijnlijk ook de dampdichte
								folie; Zorg er tijdens het isoleren voor dat de isolatieplaten
								of het isolatiemateriaal naadloos op elkaar zijn aangesloten,
								mochten er toch nog wat naden en kieren tussen de isolatie
								bevinden, zorg er dan voor dat deze naden en kieren goed
								afgedicht, afgeplakt of opgevuld worden; Voorkom ten allen tijde
								dat de isolatie vóór de uitvoering en/of na de uitvoering
								vochtig wordt.
							</Card.Text>
							<Card.Text>
								{" "}
								Wanneer het isolatiemateriaal namelijk nat of vochtig wordt,
								vermindert dit de isolerende werking; Isoleren zorgt in veel
								gevallen voor een stuk minder (natuurlijke) ventilatie. Let er
								daarom op dat je voldoende blijft ventileren. Schaf eventueel
								een CO2 meter aan om goed en bewust te ventileren.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Termo4;
