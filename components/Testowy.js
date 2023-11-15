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
									<Card.Text>Sprzedaz</Card.Text>
									<Card.Text>Montaz</Card.Text>
									<Card.Text>Gwarancja</Card.Text>
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
									<Card.Text>Szybko</Card.Text>
									<Card.Text>Profesjonalnie</Card.Text>
									<Card.Text>Na Lata</Card.Text>
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
									<Card.Text>Najpeszy sprzet</Card.Text>
									<Card.Text>Szybka Realizacja</Card.Text>
									<Card.Text>Gwarancja </Card.Text>
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
									<Card.Text>Lata Doswiadczenia</Card.Text>
									<Card.Text>Najlepsza Jakosc</Card.Text>
									<Card.Text>Szybkie Terminy</Card.Text>
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
									<Card.Text>Lata Praktyki</Card.Text>
									<Card.Text>Setki zadowolonych klientów</Card.Text>
									<Card.Text>Przekonaj sie sam</Card.Text>
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
