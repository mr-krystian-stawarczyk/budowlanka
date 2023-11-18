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
								Odkryj Potencjał Twojego Domu z Naszymi Remontami
							</h1>
							<Card.Text>
								Twój dom jest miejscem, które powinno odzwierciedlać Twoje
								unikalne życie i styl. W DG BOUWGROEP doskonale rozumiemy tę
								potrzebę. Nasza praca nie polega jedynie na remontach czy
								malowaniu ścian. To historia każdego projektu, w której
								odnajdujemy niepowtarzalność i potencjał.
							</Card.Text>
							<Card.Text>
								Dlatego nasz zespół specjalistów angażuje się w każdy etap prac,
								zawsze kierując się troską o Twoje potrzeby. Nasza precyzja
								wykonania idzie w parze z nieustannym poszukiwaniem najlepszych
								rozwiązań. Pozwól nam wprowadzić zmiany, które nie tylko
								odświeżą wygląd Twojego domu, ale także sprawią, że będzie on
								idealnie dopasowany do Twojego życia.
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
						alt="Sanity Image"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Ogolne2;
