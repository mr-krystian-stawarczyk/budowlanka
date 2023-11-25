import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Dienste1() {
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
			className={`d-flex py-5 bg-light text-dark align-items-center justify-content-center ${
				isMobile ? "min-vh-100" : "vh-100"
			}`}
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">We presenteren onze nieuwste werk</h1>
							<Card.Text>
								Met genoegen laten we onze nieuwste prestaties zien waar we
								buitengewoon trots op zijn. Elk project dat we aan u
								overhandigen, is het resultaat van onze passie, toewijding en
								voortdurende inspanningen van ons team.
							</Card.Text>
							<Card.Text>
								We streven naar innovatie en kwaliteit, en proberen
								verwachtingen te overtreffen door een creatieve benadering en
								aandacht voor elk detail. Elk van onze recente prestaties is het
								resultaat van inspanning, vastberadenheid en samenwerking, wat
								maakt dat we met trots onze nieuwste werken aan u presenteren.
							</Card.Text>

							<div className="text-center">
								<Link href="#realizacje" className="m-1">
									<Button className="btn-nav ">Werk</Button>
								</Link>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="mx-auto my-2 text-center ">
					{" "}
					<Image
						src="/assets/werk1.jpg"
						width={500}
						height={500}
						className="responsive-image shadow-lg rounded "
						alt="werk1"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Dienste1;
