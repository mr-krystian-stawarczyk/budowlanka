import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Okna4() {
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
		<motion.div ref={ref} animate={controls} id="header2">
			<Container
				fluid
				className={`d-flex bg-light text-dark py-3 align-items-center justify-content-center ${
					isMobile ? "min-vh-100" : "vh-100"
				}`}
			>
				<Row className="justify-content-center  align-items-center">
					<Col lg={5} className="mx-auto my-2 ">
						<Card className="border-0 bg-transparent ">
							<Card.Body>
								<h1 className="text-bold"> Okna 4</h1>
								<Card.Text></Card.Text>
								<Card.Text></Card.Text>
								<Card.Text></Card.Text>
								<div className="text-center">
									<Link href="/" className="m-1">
										<Button className="btn-nav btn-lg"></Button>
									</Link>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={5} className="mx-auto my-2 text-center ">
						<Image
							src="/assets/11.png"
							width={400}
							height={400}
							className="responsive-image shadow-lg"
							alt="Sanity Image"
						/>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Okna4;
