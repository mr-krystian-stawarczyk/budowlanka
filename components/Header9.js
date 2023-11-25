import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdDoubleArrow } from "react-icons/md";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Header9() {
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

	const sectionPaths = {
		contact: "contact", // Mapuj wybór do odpowiednich ścieżek
		about: "about",
		blog: "blog",
		werk: "werk",
		dienste: "dienste",
	};

	return (
		<Container
			fluid
			className="mt-5 py-3 align-items-center bg-white text-dark justify-content-center"
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Alles Voor Jouw Huis</h1>
							<Card.Text>
								Ons ervaren team bestaat uit hooggekwalificeerde vakmensen die
								klaar staan voor diverse taken, van kleine reparaties tot
								uitgebreide renovaties.
							</Card.Text>
							<Card.Text>
								We zijn voorbereid om verschillende bouwprojecten uit te voeren
								met professionele kennis, precisie in uitvoering en aandacht
								voor detail.
							</Card.Text>
							<Card.Text>
								Ongeacht de complexiteit of aard van het werk, ons aanbod omvat
								een allesomvattende service, waarbij we proberen aan de
								verwachtingen van klanten te voldoen door professionaliteit en
								betrouwbaarheid in onze diensten.{" "}
							</Card.Text>
							<Card.Text>
								Ons doel is niet alleen om aan technische eisen te voldoen, maar
								ook om ruimtes te creëren die voldoen aan de behoeften en
								verwachtingen van onze klanten.
							</Card.Text>

							<Card.Text></Card.Text>

							<div className="text-center">
								<Link href="#bouwwerkzaamheden2" className="m-1">
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

				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/ogolne3.jpg"
						width={500}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="allesvoorhuis"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Header9;
