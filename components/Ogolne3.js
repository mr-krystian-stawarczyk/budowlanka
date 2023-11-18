import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Ogolne3() {
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
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/ogolne6.png"
						width={400}
						height={400}
						className="responsive-image shadow-lg"
						alt="Sanity Image"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">
								Poznaj Naszą Siłę: Doskonałość w Budowie Twoich Marzeń
							</h1>
							<Card.Text>
								Każdy dom jest jak pusta kartka, gotowa na nowe historie. DG
								BOUWGROEP to nie tylko firma budowlana - to zespół pasjonatów,
								którzy zarażają się Twoją wizją. Z naszej strony otrzymasz
								więcej niż standardową usługę. Oferujemy zaangażowanie, które
								sprawia, że Twój dom staje się projektem życiowym dla nas. Nasza
								solidność i precyzja to fundamenty, na których budujemy każdy
								projekt.
							</Card.Text>
							<Card.Text>
								Niezależnie od tego, czy chcesz zbudować nowy dom od podstaw,
								czy odświeżyć obecne wnętrza, nasza determinacja i zaangażowanie
								są niezmienne. Zaufaj nam, by razem stworzyć wnętrza, które
								opowiedzą historię o Twoich marzeniach i spełnią Twoje
								oczekiwania w pełni.
							</Card.Text>
							<Card.Text></Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Ogolne3;
