import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import Header3 from "./Header3";
import Header4 from "./Header4";
import Header5 from "./Header5";

function Testowy() {
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
			className=" pt-5 align-items-center bg-light justify-content-center "
		>
			<Row className="text-center py-3 text-dark">
				<h1 className="text-bold text-uppercase py-3">Nasze Usługi</h1>
			</Row>
			<Row className="align-items-center justify-content-center text-center  text-dark">
				<Col lg={3} className="mx-auto m-1 ">
					<Row className="justify-content-center  align-items-center">
						<Col className="mx-auto my-2 ">
							<Card className="border-sm shadow-lg p-2 bg-transparent align-items-center ">
								<Image
									src="/assets/okna2.jpg"
									width={200}
									height={130}
									className="shadow-lg rounded responsive-image "
									alt="Sanity Image"
								/>

								<Card.Body>
									<h4 className="text-bold">Profesjonalne Okna</h4>
									<Card.Text>
										Zapewniamy nie tylko wysokiej jakości okna, ale również
										kompleksowy montaż, gwarantując doskonałe rozwiązania i
										pełne zadowolenie naszych klientów.
									</Card.Text>

									<div className="text-center">
										<Link href="okna" className="m-1">
											<Button className="btn-nav btn-sm">
												<span className="text-bold">Okna</span>
											</Button>
										</Link>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Col>
				<Col lg={3} className="mx-auto m-1 ">
					<Row className="justify-content-center  align-items-center">
						<Col className="mx-auto my-2 ">
							<Card className="border-sm shadow-lg p-2 bg-transparent  align-items-center">
								<Image
									src="/assets/termo2.jpg"
									width={200}
									height={130}
									className="shadow-lg rounded responsive-image "
									alt="Sanity Image"
								/>

								<Card.Body>
									<h4 className="text-bold"> Profesjonalna Termoizolacja</h4>
									<Card.Text>
										Oferujemy profesjonalne usługi termoizolacji, które nie
										tylko zapewniają oszczędność energii, ale także komfort
										termiczny, dbając o efektywność każdego projektu
										budowlanego.
									</Card.Text>

									<div className="text-center">
										<Link href="termo" className="m-1">
											<Button className="btn-nav btn-sm">
												<span className="text-bold">Termo</span>
											</Button>
										</Link>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Col>
				<Col lg={3} className="mx-auto m-1 ">
					<Row className="justify-content-center  align-items-center">
						<Col className="mx-auto my-2 ">
							<Card className="border-sm shadow-lg p-2 bg-transparent align-items-center">
								<Image
									src="/assets/tynki2.jpg"
									width={200}
									height={130}
									className="shadow-lg rounded responsive-image "
									alt="Sanity Image"
								/>

								<Card.Body>
									<h4 className="text-bold"> Tynki Dla Twojego Domu</h4>
									<Card.Text>
										Stwórz wyjątkowy klimat w swoim domu dzięki naszym wysokiej
										jakości tynkom, które nie tylko nadadzą unikalny charakter
										wnętrzom, lecz także zapewnią trwałość i estetykę na lata.
									</Card.Text>

									<div className="text-center">
										<Link href="tynki" className="m-1">
											<Button className="btn-nav btn-sm">
												<span className="text-bold">Tynki</span>
											</Button>
										</Link>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Col>
				<Row></Row>
				<Col lg={3} className="mx-auto m-1 ">
					<Row className="justify-content-center  align-items-center">
						<Col className="mx-auto my-2 ">
							<Card className="border-sm shadow-lg p-2 bg-transparent align-items-center">
								<Image
									src="/assets/glazura2.jpg"
									width={200}
									height={130}
									className="shadow-lg rounded responsive-image "
									alt="Sanity Image"
								/>
								<Card.Body>
									<h4 className="text-bold">Przepiekna Glazura </h4>
									<Card.Text>
										Nadaj swoim przestrzeniom osobisty charakter dzięki naszym
										różnorodnym wzorom i wysokiej jakości glazurze, która dodaje
										wyjątkowego uroku każdemu pomieszczeniu.
									</Card.Text>

									<div className="text-center">
										<Link href="glazura" className="m-1">
											<Button className="btn-nav btn-sm">
												<span className="text-bold">Glazura</span>
											</Button>
										</Link>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Col>
				<Col lg={3} className="mx-auto m-1 ">
					<Row className="justify-content-center  align-items-center">
						<Col className="mx-auto my-2 ">
							<Card className="border-sm p-2 shadow-lg bg-transparent align-items-center">
								<Image
									src="/assets/ogolne2.jpg"
									width={200}
									height={130}
									className="shadow-lg rounded responsive-image "
									alt="Sanity Image"
								/>
								<Card.Body>
									<h4 className="text-bold">Wszystko Dla Twojego Domu</h4>
									<Card.Text>
										Oferujemy kompleksowe usługi ogólnobudowlane, zapewniając
										nie tylko solidność konstrukcji, ale także dbałość o każdy
										detal, by stworzyć wymarzone wnętrza zgodnie z oczekiwaniami
										naszych klientów.
									</Card.Text>

									<div className="text-center">
										<Link href="ogolne" className="m-1">
											<Button className="btn-nav btn-sm">
												<span className="text-bold">Ogolne</span>
											</Button>
										</Link>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Col>
			</Row>{" "}
		</Container>
	);
}

export default Testowy;
