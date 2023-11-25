import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Tynki3() {
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
			className="d-flex py-3 bg-white text-dark align-items-center justify-content-center "
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Hoe werkt pleister spuiten</h1>
							<Card.Text>
								Voordat het pleisteren begint, is voorbereiding van de
								ondergrond nodig, hoewel spuitpleister het voordeel heeft dat er
								minder voorbereiding vereist is.
							</Card.Text>
							<Card.Text>
								Belangrijk is vooral het verstevigen van naden tussen gipsplaten
								of zwakkere plekken in nieuwbouwwoningen. De ondergrond kan
								variëren van gasbeton, gips, verschillende betonsoorten tot
								metselwerk.
							</Card.Text>
							<Card.Text>
								Pleister wordt aangebracht door vakmensen met een spuitmachine
								onder hoge druk, wat aanzienlijk sneller gaat dan handmatig
								aanbrengen. Vooraf dienen ramen, kozijnen en andere delen
								afgeplakt te worden.
							</Card.Text>
							<Card.Text>
								De pleister wordt onverdund in een egale laag gespoten en
								vervolgens gladgestreken met speciale pleistermessen voordat het
								droogt.
							</Card.Text>
							<Card.Text>
								Na deze eerste laag spuitpleister zijn de wanden gereed voor
								behang en hebben ze een gladde afwerking. Soms wordt er nog een
								tweede laag aangebracht voor een optimaal resultaat.
							</Card.Text>
							<Card.Text>
								In nieuwbouw wordt vaak spack spuitwerk op het plafond
								toegepast. De muren zijn dan klaar voor behang of latexverf,
								maar kunnen ook afgewerkt worden met een grove of fijne
								korrelstructuur.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="mx-auto my-2 text-center ">
					{" "}
					<Image
						src="/assets/tynki6.png"
						width={500}
						height={500}
						className="responsive-image shadow-lg"
						alt="pleister6"
					/>
				</Col>{" "}
			</Row>
		</Container>
	);
}

export default Tynki3;
