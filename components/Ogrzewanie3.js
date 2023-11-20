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
			className="d-flex bg-white text-dark py-3 align-items-center justify-content-center"
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/ogrzewanie4.png"
						width={400}
						height={400}
						className="responsive-image shadow-lg"
						alt="Sanity Image"
					/>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">ZASTOSOWANIE MATY ELEKTRYCZNEJ</h1>
							<Card.Text>
								Sprawdzające się doskonale jako ogrzewanie podłogowe maty
								grzejne stanowią wygodną alternatywę dla klasycznej „podłogówki”
								zintegrowanej z instalacją C.O. Można je wykorzystywać zarówno
								do podstawowego, jak i dodatkowego dogrzewania łazienek, kuchni,
								salonów, przedpokojów oraz wielu innych pomieszczeń w domach,
								biurach czy obiektach użytkowych. Mata podłogowa grzewcza składa
								się z systemu przewodów układanych na specjalnej siatce z włókna
								szklanego. Jej instalacja nie powoduje podniesienia poziomu
								posadzki, zapewniając przyjemne uczucie ciepłej podłogi, które
								dodatkowo podniesie komfort użytkowania każdego wnętrza.
							</Card.Text>
							<Card.Text>
								Dostępne w naszej ofercie maty grzewcze TERMOFOL sprzedawane są
								w gotowych zestawach montażowych do samodzielnej instalacji.
								Montaż systemu jest intuicyjny i można przeprowadzić go w domu
								we własnym zakresie. Dzięki czytelnej i przejrzystej instrukcji
								dołączonej do elementów grzejnych możliwe jest wykonanie
								wszystkich czynności bez angażowania fachowca.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Ogrzewanie3;
