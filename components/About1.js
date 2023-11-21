import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";

import imageUrlBuilder from "@sanity/image-url";

function About1() {
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
		<motion.div ref={ref} animate={controls}>
			<Container
				fluid
				className={`d-flex bg-light text-dark pt-5 align-items-center justify-content-center ${
					isMobile ? "min-vh-100" : "vh-100"
				}`}
			>
				<Row className="justify-content-center  align-items-center">
					<Col lg={5} className="mx-auto my-2 ">
						<Card className="border-0 bg-transparent ">
							<Card.Body>
								<h1 className="text-bold">
									{" "}
									Ons Bedrijf Vertrouwt op Vertrouwen
								</h1>

								<Card.Text>
									Al tientallen jaren leveren we hoogwaardige bouw, renovatie en
									afwerkingsdiensten. Gestart als een bescheiden familiebedrijf
									zijn we uitgegroeid tot een betrouwbare marktleider, waarbij
									we klanttevredenheid en de kwaliteit van onze diensten hoog in
									het vaandel dragen.
								</Card.Text>
								<Card.Text>
									Door de jaren heen hebben we veel bereikt, waarbij we talloze
									projecten met de grootste zorg hebben voltooid en erkenning
									hebben gekregen van klanten en zakelijke partners.
								</Card.Text>
								<Card.Text>
									Met trots kunnen we zeggen dat ons netwerk van tevreden
									klanten voortdurend groeit. Voor ons is dit de belangrijkste
									aanbeveling en een bevestiging van de kwaliteit van ons werk.
								</Card.Text>
								<div className="text-center">
									<Link href="#story" className="m-1">
										<Button className="btn-nav btn-lg">Geschiedenis</Button>
									</Link>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={5} className="mx-auto my-2 text-center ">
						<Image
							src="/assets/onas1.jpg"
							width={400}
							height={400}
							className="responsive-image shadow-lg rounded"
							alt="Sanity Image"
						/>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default About1;
