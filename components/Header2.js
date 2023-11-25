import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Header2() {
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
			id="header2"
			className={`d-flex  align-items-center bg-white  text-dark justify-content-center ${
				isMobile ? "min-vh-100" : "vh-100"
			}`}
		>
			<Row className="justify-content-center mt-5 align-items-center">
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold"> Professionele Ramen</h1>
							<Card.Text>
								Onze ervaren specialisten bieden deskundig advies in elke fase
								van het kiezen en installeren van ramen.
							</Card.Text>
							<Card.Text>
								{" "}
								Dankzij onze toewijding aan kwaliteit en precisie in uitvoering,
								kun je er zeker van zijn dat je niet alleen producten van
								topklasse ontvangt, maar ook professionele service.
							</Card.Text>
							<Card.Text>
								We zorgen voor elk detail om onze klanten niet alleen
								uitstekende functionaliteit te bieden, maar ook duurzaamheid en
								esthetiek voor jaren. Met ons is het vervangen van ramen niet
								alleen een investering in het comfort van je huis, maar ook in
								de waarde ervan.{" "}
							</Card.Text>
							<Card.Text className="text-center">
								<span className="text-uppercase text-bold ">
									VERKOOP INSTALLATIE ADVIES{" "}
								</span>
							</Card.Text>

							<div className="text-center">
								<Link href="#ramen2" className="m-1">
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
						src="/assets/okna3.png"
						width={500}
						height={500}
						className="responsive-image shadow-lg rounded"
						alt="ramen3"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Header2;
