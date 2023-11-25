import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Ogrzewanie1() {
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
			className="mt-5 pt-4 align-items-center bg-light text-dark justify-content-center"
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/ogrzewanie5.png"
						width={500}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="verwarming"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Vloerverwarming</h1>
							<Card.Text>
								Een economische en gemakkelijk te installeren oplossing, zoals
								een vloerverwarmingsmat, is een moderne manier om een warme
								vloer door het hele huis te hebben.
							</Card.Text>
							<Card.Text>
								De toenemende populariteit van dit soort verwarmingssystemen
								komt door de universele aard van de installatie en de
								gegarandeerde, snelle opwarming van vloeren bedekt met tegels,
								keramische tegels, terracotta of marmer.
							</Card.Text>

							<Card.Text>
								Een constante vermogensniveau van 150W/m2 zorgt voor optimale
								warmteparameters, en het systeem is op geen enkele manier
								afhankelijk van het bestaande centrale verwarmingssysteem,
								waardoor het op verschillende manieren kan worden aangestuurd.
							</Card.Text>

							<div className="text-center">
								<Link href="#vloerverwarming2" className="m-1">
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

export default Ogrzewanie1;
