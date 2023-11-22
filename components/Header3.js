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
							<h1 className="text-bold">Professionele Thermische Isolatie</h1>
							<Card.Text>
								Ons bedrijf is een geavanceerd team van specialisten
								gespecialiseerd in professionele dakisolatie. Al jarenlang
								bieden we onze klanten ongeëvenaarde kwaliteit en precisie op
								het gebied van thermische isolatie.
							</Card.Text>
							<Card.Text>
								Onze diensten zijn gebaseerd op het gebruik van innovatieve
								technologieën en hoogwaardige materialen, wat effectieve
								bescherming biedt tegen warmteverlies, vocht en andere
								weersinvloeden. Ongeacht het type dak of de grootte ervan, ons
								team neemt elke taak met volledige toewijding aan, met oog voor
								isolatie die niet alleen functioneel is, maar ook duurzaam en
								esthetisch verantwoord.
							</Card.Text>

							<Card.Text>
								De geavanceerde isolatietechnieken die we gebruiken, vormen een
								essentieel onderdeel van onze activiteiten. Ons team zorgt niet
								alleen voor professionele dakisolatie, maar biedt ook een breed
								scala aan materialen die voldoen aan de specifieke behoeften van
								elke klant.
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
