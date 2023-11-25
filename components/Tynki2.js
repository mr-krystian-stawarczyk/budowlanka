import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Tynki2() {
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
			className="d-flex bg-light text-dark py-3 align-items-center justify-content-center "
			id="pleisterwerk2"
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 text-center ">
					{" "}
					<Image
						src="/assets/tynki5.png"
						width={500}
						height={500}
						className="responsive-image shadow-lg"
						alt="pleister5"
					/>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Spuit pleisterwerk</h1>
							<Card.Text>
								Spuitpleister, ook wel pleisterwerk genoemd, is een dunne laag
								gips die op de ondergrond wordt gespoten. Het zorgt voor een
								gladde afwerking van wanden, waardoor deze gereed zijn voor
								verdere behandeling zoals verven, spack aanbrengen of behangen.
							</Card.Text>
							<Card.Text>
								Het heeft diverse voordelen, zoals kostenefficiëntie,
								gemakkelijke reparatie van scheurtjes en de mogelijkheid om
								oneffenheden niet vooraf te hoeven herstellen, waardoor het
								onderhoudsvriendelijk is.
							</Card.Text>
							<Card.Text>
								{" "}
								Bovendien kan spuitpleister in elke gewenste kleur worden
								aangebracht en geverfd, waardoor het aan jouw voorkeuren kan
								worden aangepast.
							</Card.Text>
							<Card.Text>
								Ook biedt het de mogelijkheid om verschillende afwerkingen te
								kiezen, zoals een gladde verflaag met latex of een korrelige
								structuur met spack, waarbij je kunt variëren tussen grove en
								fijne structuren.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Tynki2;
