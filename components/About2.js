import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import Link from "next/link";

import Image from "next/image";

import imageUrlBuilder from "@sanity/image-url";
function About2() {
	const [ref1, inView1] = useInView({
		threshold: 0.4,
		triggerOnce: false,
	});

	const [ref2, inView2] = useInView({
		threshold: 0.3,
		triggerOnce: false,
	});
	const [ref3, inView3] = useInView({
		threshold: 0.2,
		triggerOnce: false,
	});

	const [ref4, inView4] = useInView({
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

	const controls1 = useAnimation();
	const controls2 = useAnimation();
	const controls3 = useAnimation();
	const controls4 = useAnimation();

	useEffect(() => {
		if (inView1) {
			controls1.start(animateIn);
		}
	}, [inView1, controls1, animateIn]);

	useEffect(() => {
		let timeout;
		if (inView2) {
			timeout = setTimeout(() => {
				controls2.start(animateIn);
			}, 500);
		}

		return () => clearTimeout(timeout);
	}, [inView2, controls2, animateIn]);

	useEffect(() => {
		let timeout;
		if (inView3) {
			timeout = setTimeout(() => {
				controls3.start(animateIn);
			}, 1000);
		}

		return () => clearTimeout(timeout);
	}, [inView3, controls3, animateIn]);

	useEffect(() => {
		let timeout;
		if (inView4) {
			timeout = setTimeout(() => {
				controls4.start(animateIn);
			}, 1900);
		}

		return () => clearTimeout(timeout);
	}, [inView4, controls4, animateIn]);

	return (
		<Container
			fluid
			className={`d-flex flex-column bg-white text-dark  justify-content-center align-items-center min-vh-100`}
		>
			<Row className="text-center d-row my-2">
				<h1>Proces Realizacji</h1>
				<h3>Zapewniamy obsluge od poczatku do konca</h3>
			</Row>
			<Row className=" text-center  ">
				<Col lg={3} className="mx-auto">
					<motion.div
						ref={ref1}
						animate={controls1}
						initial={{ opacity: 0 }}
						transition={{ delay: 1 }}
					>
						<Card className="border-0 bg-transparent ">
							<Card.Body>
								<h1>1</h1>
								<Card.Text className="text-bold">Kontakt</Card.Text>
								<Card.Text>
									Kontaktujesz się z nami: Zadzwoń, napisz e-mail lub skorzystaj
									z formularza kontaktowego na stronie.
								</Card.Text>
								<Card.Text>
									Spotykamy się, by poznać Twoje potrzeby: Umów się na
									spotkanie, podczas którego szczegółowo omówimy Twoje
									oczekiwania odnośnie usług.
								</Card.Text>
								<Card.Text>
									Rozpoczynamy dialog: Chcemy zrozumieć Twoje preferencje i
									wypracować najlepsze rozwiązania dla Twojego projektu.
								</Card.Text>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
				<Col lg={3} className="mx-auto">
					<motion.div
						ref={ref2}
						animate={controls2}
						initial={{ opacity: 0 }}
						transition={{ delay: 1 }}
					>
						<Card className="border-0 bg-transparent ">
							<Card.Body>
								<h1>2</h1>
								<Card.Text className="text-bold">
									Planowanie i Realizacja
								</Card.Text>
								<Card.Text>
									Przygotowujemy spersonalizowaną ofertę: Analizujemy Twoje
									wymagania i przygotowujemy dopasowaną ofertę, uwzględniającą
									wszystkie aspekty prac.
								</Card.Text>
								<Card.Text>
									Koordynujemy harmonogram prac: Po zaakceptowaniu oferty
									planujemy terminy i dostosowujemy harmonogram prac do Twoich
									preferencji.
								</Card.Text>
								<Card.Text>
									Zapewniamy klarowność i jasność: Jesteśmy otwarci na Twoje
									sugestie i dbamy o transparentność w procesie planowania.
								</Card.Text>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
				<Col lg={3} className="mx-auto ">
					<motion.div
						ref={ref3}
						animate={controls3}
						initial={{ opacity: 0 }}
						transition={{ delay: 0.1 }}
					>
						<Card className="border-0 bg-transparent ">
							<Card.Body>
								<h1>3</h1>
								<Card.Text className="text-bold">
									Realizacja i Satysfakcja
								</Card.Text>
								<Card.Text>
									Rzetelnie wykonujemy prace: Nasz doświadczony zespół
									przystępuje do realizacji, dbając o każdy szczegół.
								</Card.Text>
								<Card.Text>
									Sprawdzamy finalne efekty: Po zakończeniu prac dokładnie
									weryfikujemy rezultaty, aby upewnić się, że spełniają Twoje
									oczekiwania.
								</Card.Text>
								<Card.Text>
									Zależy nam na Twojej satysfakcji: Jesteśmy gotowi na dialog i
									zawsze dążymy do zapewnienia pełnej satysfakcji z naszych
									usług.
								</Card.Text>
							</Card.Body>
						</Card>{" "}
					</motion.div>
				</Col>
			</Row>
		</Container>
	);
}

export default About2;
