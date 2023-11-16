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
							<h1>Spuitpleister prijs</h1>
							<Card.Text>
								Pleister spuiten is een van de goedkoopste soorten stucwerk.
								Gemiddeld zul je tussen de €15 en €25 per vierkante meter kwijt
								zijn voor dit type stucwerk op een plafond of wand. De plek
								waarop het aangebracht moet worden zal weinig verschil in de
								prijs geven. Je kunt het nog goedkoper maken als je geen
								stukadoor inschakelt, maar dan moet je wel het benodigde
								materieel hebben. Helemaal als je de plafonds in huis wilt laten
								spuiten, is het echt slimmer om iemand in te huren. Vergelijking
								met andere soorten Voor spuitpleister heb je al een relatief
								egale ondergrond nodig. Als er grote oneffenheden zijn, zoals
								vaker gebeurd in een huis dat gerenoveerd moet worden, zal er
								eerder voor raapwerk worden gekozen. Dit egaliseert de wanden en
								plafonds erg goed, maar deze soort stucwerk wordt in een dikke
								laag van tot wel 5 cm aangebracht door de stukadoor. Hierna moet
								de afwerking nog glad worden gemaakt. Je hebt dan dus niet
								meteen behangklare wanden. Door de extra dikte kan raapwerk €15
								tot €35 per vierkante meter kosten. Speciaal stucwerk
								Sierpleister geeft een mooie, maar redelijk standaard afwerking.
								De gladde wanden en plafonds, of juist met structuur van
								spackspuitwerk, passen in bijna elke stijl. Maar als je iets
								unieks wilt, is dat natuurlijk ook mogelijk. Door eerst een laag
								spuitpleister aan te brengen en daarna bijvoorbeeld beton ciré
								op de wanden te laten plaatsen, krijg je een unieke uitstraling.
								Maar daar betaal je ook wel voor. Dit soort betonstuc begint
								vanaf €80 per vierkante meter.
							</Card.Text>
							<Card.Text></Card.Text>
						</Card.Body>
					</Card>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 text-center ">
					{" "}
					<Image
						src="/assets/tynki8.png"
						width={400}
						height={400}
						className="responsive-image shadow-lg"
						alt="Sanity Image"
					/>
				</Col>{" "}
			</Row>
		</Container>
	);
}

export default Tynki6;
