import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Termozew1() {
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
			className="d-flex bg-light text-dark py-5 align-items-center justify-content-center"
			id="termo2"
		>
			<Row className="justify-content-center mt-5 align-items-center">
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold"> Buitengevelisolatie</h1>
							<Card.Text>
								Het isoleren van je buitengevel kan bijdragen aan je
								wooncomfort, woonwaarde en aan een vermindering van de
								energiekosten.
							</Card.Text>
							<Card.Text>
								Buitengevelisolatie zorgt voor isolatie én een nieuwe look van
								de buitenmuur. Dit is interessant wanneer spouwmuurisolatie geen
								mogelijkheid is, of voldoende resultaat geeft. Ook als de gevel
								in slechte staat is, biedt gevelisolatie een uitkomt. Als
								isolatiemateriaal gebruikt men meestal kunststof platen van
								polystyreen hardschuim(XPS). Dit materiaal heeft een hoge
								isolatiewaarde en is goed bestand tegen vocht. De isolatieplaten
								worden vervolgens gepleisterd, afgewerkt met steen strips,
								houten gevelbekleding of voorzien van metalen of kunststof
								gevelpanelen.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/termozew1.png"
						width={400}
						height={400}
						className="responsive-image shadow-lg"
						alt="buitenisolatie1"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Termozew1;
