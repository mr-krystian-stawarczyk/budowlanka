import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { MdDoubleArrow } from "react-icons/md";

function Header4() {
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
			className={`d-flex py-3 align-items-center bg-white text-dark justify-content-center ${
				isMobile ? "min-vh-100" : "vh-100"
			}`}
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold"> Tynki Dla Twojego Domu</h1>
							<Card.Text>
								Oferujemy kompleksowe usługi tynkowania, które obejmują szeroki
								zakres prac związanych z wykończeniem ścian zarówno wewnątrz,
								jak i na zewnątrz budynków. Nasz doświadczony zespół
								specjalistów gwarantuje precyzję wykonania oraz wysoką jakość
								świadczonych usług. Dzięki różnorodności technik i materiałów,
								których używamy, jesteśmy w stanie sprostać różnym oczekiwaniom
								klientów, dostosowując się zarówno do tradycyjnych, jak i
								nowoczesnych preferencji w aranżacji wnętrz. Dbamy nie tylko o
								estetykę wykończenia, ale również o trwałość i funkcjonalność
								naszych tynków, aby zapewnić długotrwałe efekty i zadowolenie
								naszych klientów.
							</Card.Text>
						</Card.Body>
					</Card>
					<div className="text-center">
						<Link href="#tynki2" className="m-1">
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
				</Col>
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/tynki3.jpg"
						width={400}
						height={400}
						className="responsive-image rounded shadow-lg"
						alt="Sanity Image"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Header4;
