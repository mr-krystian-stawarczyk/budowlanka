import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Ogrzewanie4() {
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
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">NIEOGRANICZONE MOŻLIWOŚCI</h1>
							<Card.Text>
								Jeśli chodzi o urządzanie wnętrz, maty elektryczne podłogowe
								dają wiele dodatkowych opcji aranżacyjnych. Decydując się na
								tego typu rozwiązanie, można – bez konieczności dokonywania
								skomplikowanych przeróbek instalacji grzewczej – stworzyć w
								swoim domu inteligentny system grzewczy, który będzie
								jednocześnie niezawodny i energooszczędny. W celu uzyskania
								optymalnego komfortu termicznego warto zastosować wysokiej klasy
								termostat z czujnikiem podłogowym.
							</Card.Text>
							<Card.Text>
								Termoregulatory elektryczne z programowaniem czasowym
								umożliwiają z kolei precyzyjne określenie pory włączenia i
								wyłączenia ogrzewania podłogowego. Dzięki temu, że w mieszkaniu
								zainstalowana zostanie mata podłogowa ogrzewanie zawsze będzie
								wydajne, a koszty eksploatacyjne pozostaną pod pełną kontrolą.
							</Card.Text>
							<Card.Text>
								Przeszkodą, aby zainstalować jako ogrzewanie podłogowe maty
								elektryczne, nie jest również konstrukcja budynku. System może
								być montowany zarówno bezpośrednio na starej posadzce (w trakcie
								remontu), jak i w nowo budowanych domach, przed wykończeniem
								podłogi terakotą, parkietem czy płytkami ceramicznymi.
								Elektryczne maty grzejne podnoszą komfort termiczny budynku,
								jednocześnie nie stanowiąc dodatkowego obciążenia stropu,
								dlatego mogą być układane zarówno na poziomie parteru, jak i na
								poddaszu oraz na dowolnych kondygnacjach budynku.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/ogrzewanie5.png"
						width={400}
						height={400}
						className="responsive-image shadow-lg"
						alt="Sanity Image"
					/>
				</Col>{" "}
			</Row>
		</Container>
	);
}

export default Ogrzewanie4;
