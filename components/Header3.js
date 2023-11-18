import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Header3() {
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
			duration: 0.1,
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
			className={`d-flex py-3 align-items-center bg-light text-dark justify-content-center ${
				isMobile ? "min-vh-100" : "vh-100"
			}`}
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/thermo3.jpg"
						width={400}
						height={400}
						className="responsive-image rounded shadow-lg"
						alt="Sanity Image"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold"> Profesjonalna Termoizolacja</h1>
							<Card.Text>
								Nasza firma to zaawansowany zespół specjalistów, którzy
								specjalizują się w profesjonalnych izolacjach dachów. Od lat
								zapewniamy klientom niezrównaną jakość i precyzję w dziedzinie
								termoizolacji.
							</Card.Text>
							<Card.Text>
								Nasze usługi opierają się na zastosowaniu innowacyjnych
								technologii oraz wysokiej jakości materiałów, co gwarantuje
								skuteczną ochronę przed utratą ciepła, wilgocią i innymi
								czynnikami atmosferycznymi. Niezależnie od rodzaju dachu czy
								jego wielkości, nasz zespół podejmuje każde zadanie z pełnym
								zaangażowaniem, dbając o to, by izolacja była nie tylko
								funkcjonalna, ale także trwała i estetyczna.
							</Card.Text>

							<Card.Text>
								wansowane techniki izolacyjne, których używamy, są kluczowym
								elementem naszej działalności. Nasz zespół nie tylko dba o
								profesjonalne wykonanie izolacji dachów, ale także oferuje
								szeroki wybór materiałów do konkretnych potrzeb każdego klienta.
							</Card.Text>

							<div className="text-center">
								<Link href="#termo2" className="m-1">
									<Button className="btn-nav btn-lg">
										{" "}
										<MdDoubleArrow
											style={{
												fontSize: "2rem",
												color: "black",
												backgroundColor: "transparent",
												rotate: "90deg",
											}}
										/>
									</Button>
								</Link>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Header3;
