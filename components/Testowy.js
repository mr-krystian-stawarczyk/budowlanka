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
			className=" mt-5 pt-1 align-items-center bg-light justify-content-center "
		>
			<Row className="text-dark text-center my-3 align-items-center  justify-content-center ">
				<h1 className="text-bold my-3">DG Bouwgroep</h1>
				<h4 className="py-1 text-bold">
					Ongeacht of je een renovatie, afwerking, huis of gebouwconstructie
					plant, binnen onze groep vind je specialisten die je zullen helpen bij
					de realisatie van jouw project.
				</h4>
				<h4 className="py-1 text-bold">
					DG Bouwgroep is een initiatief van lokale bedrijven die zich hebben
					verenigd in de bouwsector, samen met ondersteunende bedrijven.
				</h4>
				<h4 className="py-1 text-bold">
					Wij opereren met een allesomvattende aanpak voor investeringen vanaf
					de fase van hun ontstaan. Betrouwbaarheid, een hoge standaard van
					dienstverlening en de kwaliteit van aangeboden producten zijn de
					leidende principes van de partners van DG Bouwgroep.
				</h4>
			</Row>
			<Row className="align-items-center justify-content-center text-center text-dark">
				<Row className="align-items-center justify-content-center text-center text-dark">
					{" "}
					<Col lg={4} className=" mb-3 ">
						<Row className="justify-content-center  align-items-center">
							<Col className="">
								{" "}
								<Link href="okna" className="">
									<Card className="border-sm shadow-lg p-2 border-0 bg-transparent align-items-center position-relative card-imgs card-1 cards">
										{/* Zdjęcie jako tło */}

										<h3 className="text-bold text-white position-absolute top-50 start-50 translate-middle">
											Installatie en verkoop van ramen
										</h3>
									</Card>{" "}
								</Link>
							</Col>
						</Row>
					</Col>
					<Col lg={4} className=" mb-3 ">
						<Row className="justify-content-center  align-items-center">
							<Col className="">
								{" "}
								<Link href="termo" className="">
									<Card className="border-sm shadow-lg p-2 border-0 bg-transparent align-items-center position-relative card-imgs card-2 cards">
										<h3 className="text-bold text-white position-absolute top-50 start-50 translate-middle">
											Thermische isolatie van uw woning
										</h3>
									</Card>{" "}
								</Link>
							</Col>
						</Row>
					</Col>
					<Col lg={4} className=" mb-3  ">
						<Row className="justify-content-center  align-items-center">
							<Col className="">
								{" "}
								<Link href="tynki" className="">
									<Card className="border-sm shadow-lg p-2 border-0 bg-transparent align-items-center position-relative card-imgs card-3 cards">
										<h3 className="text-bold text-white position-absolute top-50 start-50 translate-middle">
											Professionele pleister diensten
										</h3>
									</Card>{" "}
								</Link>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row className="align-items-center justify-content-center text-center text-dark">
					<Col lg={4} className="mb-3 ">
						<Row className="justify-content-center  align-items-center">
							<Col className="">
								{" "}
								<Link href="glazura" className="">
									<Card className="border-sm shadow-lg p-2 border-0 bg-transparent align-items-center position-relative card-imgs card-4 cards">
										<h3 className="text-bold text-white position-absolute top-50 start-50 translate-middle">
											Glazuur op het hoogste niveau
										</h3>
									</Card>{" "}
								</Link>
							</Col>
						</Row>
					</Col>
					<Col lg={4} className=" mb-3 ">
						<Row className="justify-content-center  align-items-center">
							<Col className="">
								<Link href="ogolne" className="">
									<Card className="border-sm shadow-lg p-2 border-0 bg-transparent align-items-center position-relative card-imgs card-5 cards">
										<h3 className="text-bold text-white position-absolute top-50 start-50 translate-middle">
											Jarenlange ervaring in bouwwerkzaamheden
										</h3>
									</Card>{" "}
								</Link>
							</Col>
						</Row>
					</Col>
					<Col lg={4} className=" mb-3  ">
						<Row className="justify-content-center  align-items-center">
							<Col className="">
								<Link href="ogrzewanie" className="">
									<Card className="border-sm shadow-lg p-2 border-0 bg-transparent align-items-center position-relative card-imgs card-6 cards">
										<h3 className="text-bold text-white position-absolute top-50 start-50 translate-middle">
											Infrarood vloerverwarming
										</h3>
									</Card>{" "}
								</Link>
							</Col>
						</Row>
					</Col>
				</Row>
			</Row>
		</Container>
	);
}

export default Testowy;
