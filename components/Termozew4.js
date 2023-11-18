import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Termozew4() {
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
			className="d-flex bg-light text-dark py-3 align-items-center justify-content-center"
			id="termo2"
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/termozew3.png"
						width={400}
						height={400}
						className="responsive-image shadow-lg"
						alt="Sanity Image"
					/>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold"> Oszczednosci</h1>
							<Card.Text>
								{" "}
								izolacja domu przynosi znaczne oszczędności energetyczne, które
								przekładają się na obniżenie rachunków za ogrzewanie i
								chłodzenie. Dzięki profesjonalnej izolacji dachu, jaką
								oferujemy, możemy znacząco zmniejszyć ucieczkę ciepła z wnętrza
								budynku podczas zimowych miesięcy oraz ograniczyć dostęp
								promieniowania słonecznego latem. To oznacza mniejsze zużycie
								energii do utrzymania optymalnej temperatury w domu przez cały
								rok. Nasze rozwiązania izolacyjne tworzą barierę ochronną, która
								skutecznie redukuje straty ciepła, umożliwiając osiągnięcie
								lepszej efektywności energetycznej. Poprawa izolacji dachu może
								przynieść znaczące korzyści finansowe poprzez zmniejszenie
								zużycia energii i kosztów związanych z utrzymaniem komfortowej
								temperatury w domu.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Termozew4;
