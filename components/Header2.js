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
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold"> Oferujemy Profesjonalne Okna</h1>
							<Card.Text>
								Nasi doświadczeni specjaliści służą fachowym doradztwem na
								każdym etapie wyboru i instalacji okien. Dzięki naszemu
								zaangażowaniu w jakość i precyzję wykonania, możesz mieć
								pewność, że otrzymasz nie tylko wysokiej klasy produkty, ale
								także profesjonalną obsługę. Dbamy o każdy detal, aby zapewnić
								naszym klientom nie tylko doskonałą funkcjonalność, ale także
								trwałość i estetykę na lata. Z nami wymiana okien to nie tylko
								inwestycja w komfort Twojego domu, ale również w jego wartość.
							</Card.Text>
							<Card.Text className="text-center">
								<span className="text-uppercase text-bold ">
									SPRZEDAZ MONTAZ DORADZTWO
								</span>
							</Card.Text>

							<div className="text-center">
								<Link href="#okna2" className="m-1">
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
						width={400}
						height={400}
						className="responsive-image shadow-lg rounded"
						alt="Sanity Image"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Header2;
