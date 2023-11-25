import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Ogrzewanie3() {
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
			className="bg-white text-dark py-3 align-items-center justify-content-center"
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/ogrzewanie4.png"
						width={500}
						height={500}
						className="responsive-image shadow-lg"
						alt="Sanity Image"
					/>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">
								TOEPASSING VAN HET ELEKTRISCHE MATSysteem
							</h1>
							<Card.Text>
								De elektrische vloermatten zijn een uitstekende keuze als
								vloerverwarming en bieden een handig alternatief voor de
								klassieke, met de cv-installatie geïntegreerde vloerverwarming.
								Ze kunnen zowel worden gebruikt voor primaire als aanvullende
								verwarming in badkamers, keukens, woonkamers, gangen en vele
								andere ruimtes in huizen, kantoren en commerciële panden.
							</Card.Text>
							<Card.Text>
								De verwarmingsmat bestaat uit een systeem van kabels die op een
								speciaal glasvezelnetwerk zijn geplaatst. De installatie ervan
								verhoogt de vloer niet, wat een aangenaam gevoel van een warme
								vloer oplevert en het comfort van elke ruimte verhoogt.
							</Card.Text>
							<Card.Text>
								{" "}
								De verwarmingsmatten TERMOFOL in ons assortiment worden verkocht
								in complete installatiekits voor zelfinstallatie. Het systeem is
								intuïtief te monteren en kan thuis door uzelf worden
								geïnstalleerd.
							</Card.Text>
							<Card.Text>
								Dankzij de duidelijke en overzichtelijke instructies bijgevoegd
								bij de verwarmingselementen kunnen alle stappen worden
								uitgevoerd zonder de noodzaak van een specialist.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Ogrzewanie3;
