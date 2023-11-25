import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { MdDoubleArrow } from "react-icons/md";
function Header5() {
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
			className="mt-5 py-3 align-items-center bg-light text-dark justify-content-center "
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/glazura3.jpg"
						width={500}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="tegelwerk"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent">
						<Card.Body>
							<h1 className="text-bold">Prachtig Tegelwerk</h1>
							<Card.Text>
								Ongeacht de grootte van het oppervlak of de specificiteit van
								het project, nemen we zowel eenvoudige als meer veeleisende
								tegelwerkzaamheden aan.
							</Card.Text>
							<Card.Text>
								Door het gebruik van de beste materialen en legtechnieken zorgen
								we niet alleen voor een esthetische en elegante afwerking, maar
								ook voor duurzaamheid en stevigheid van het werk.{" "}
							</Card.Text>
							<Card.Text>
								Ons doel is niet alleen de tevredenheid van de klant, maar ook
								het leveren van oplossingen die zowel esthetische als
								functionele verwachtingen vervullen, door een oppervlak te
								creëren dat uniek is in uiterlijk en kwaliteit.
							</Card.Text>
							<div className="text-center">
								<Link href="#glazuur2" className="m-1">
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

export default Header5;
