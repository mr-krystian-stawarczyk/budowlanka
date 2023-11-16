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
							<h1>Hoe werkt pleister spuiten</h1>
							<Card.Text>
								Voordat de stukadoor met het pleisteren kan beginnen, moet de
								ondergrond worden voorbereid. Het grote voordeel van spuitwerk
								is dat er niet veel voorbereidingen hoeven worden gemaakt.
								Vooral de naden tussen gipsplaten of zwakkere stukken in de
								nieuwbouwwoningen moeten worden verstevigd. De ondergrond zelf
								maakt weinig uit, of deze nu van gasbeton, gips, andere soorten
								beton of metselwerk is. Pleister spuiten De pleister brengen de
								vakmensen aan door middel van een spuitmachine die met hoge druk
								werkt. Dit gaan een stuk sneller dan het handmatig doen,
								waardoor je snel de pleisterlaag kunt aanbrengen. Wel is het
								belangrijk dat ramen, kozijnen en andere delen eerst worden
								afgeplakt. De pleister wordt onverdund in een egale laag
								gespoten, waarna het glad wordt gestreken met speciale
								pleistermessen en het kan drogen. Eindresultaat Na deze eerste
								laag spuitpleister heb je behangklare wanden die mooi glad zijn.
								Soms wordt er hier nog een tweede laag voor gebruikt om het
								beste resultaat te krijgen. Voor nieuwbouw wordt vaak nog spack
								spuitwerk op het plafond aangebracht. De muren zijn nu klaar
								voor behang of latex verf, maar kunnen ook nog worden afgewerkt
								met een grove structuur of fijne structuur korrel.
							</Card.Text>
							<Card.Text></Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="mx-auto my-2 text-center ">
					{" "}
					<Image
						src="/assets/tynki6.png"
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

export default Tynki3;
