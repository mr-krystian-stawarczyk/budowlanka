import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Okna1() {
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
			id="okna2"
			className="d-flex py-3 bg-light text-dark align-items-center justify-content-center "
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent align-items-center justify-content-center">
						<Image
							src="/assets/okna-pla.png"
							width={200}
							height={200}
							className="responsive-image shadow-lg "
							alt="Sanity Image"
						/>
						<Card.Body>
							<h1 className="text-bold"> Okna Plastikowe</h1>
							<Card.Text>
								<span className="text-bold">Izolacja termiczna: </span>Okna
								plastikowe charakteryzują się doskonałą izolacją termiczną,
								utrzymując optymalną temperaturę w pomieszczeniach i redukując
								straty ciepła.
							</Card.Text>
							<Card.Text>
								<span className="text-bold">Energooszczędność:</span> Dzięki
								doskonałej izolacji, okna te mogą znacząco zmniejszyć koszty
								ogrzewania poprzez minimalizację utraty ciepła.
							</Card.Text>
							<Card.Text>
								<span className="text-bold">
									Trwałość i łatwość konserwacji:
								</span>{" "}
								Są odporne na warunki atmosferyczne i nie wymagają
								specjalistycznej konserwacji. Łatwość w utrzymaniu czystości
								sprawia, że są wygodne w użytkowaniu.
							</Card.Text>
							<Card.Text>
								<span className="text-bold">
									Dostępność różnych kolorów i wzorów:
								</span>{" "}
								Oferują różnorodność w kwestii designu i kolorów, co pozwala
								dopasować je do różnych stylów architektonicznych.
							</Card.Text>
							<Card.Text>
								<span className="text-bold">
									{" "}
									Odporność na korozję i wilgoć:{" "}
								</span>{" "}
								Plastikowe okna są odporne na korozję, co czyni je doskonałym
								wyborem w obszarach o wysokiej wilgotności.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent align-items-center justify-content-center">
						<Image
							src="/assets/okna-alu.png"
							width={200}
							height={200}
							className="responsive-image shadow-lg "
							alt="Sanity Image"
						/>
						<Card.Body>
							<h1 className="text-bold"> Okna Aluminiowe</h1>
							<Card.Text>
								<span className="text-bold">Wytrzymałość i lekkość:</span>
								Aluminiowe okna są lekkie, ale jednocześnie bardzo wytrzymałe i
								odporne na odkształcenia czy uszkodzenia mechaniczne.
							</Card.Text>
							<Card.Text>
								<span className="text-bold">Estetyka i elegancja:</span>Mają
								elegancki wygląd, który dodaje nowoczesności i stylu do
								architektury budynków, zwłaszcza w dużych przeszkleniach.
							</Card.Text>
							<Card.Text>
								<span className="text-bold">
									Odporność na warunki atmosferyczne:{" "}
								</span>
								Są odporne na działanie warunków zewnętrznych, w tym na korozję,
								co sprawia, że są trwałe i nadają się do wielu różnych klimatów.
							</Card.Text>
							<Card.Text>
								<span className="text-bold">Wielkoformatowe przeszklenia:</span>
								Możliwość wykonania dużych przeszkleń bez konieczności
								dodatkowych wzmocnień, co umożliwia stworzenie efektownych,
								panoramicznych widoków.
							</Card.Text>
							<Card.Text>
								<span className="text-bold">Ekologiczność:</span>Aluminiowe
								profile są w dużej mierze odnawialne i nadają się do recyklingu,
								co sprawia, że są bardziej ekologiczne niż niektóre inne
								materiały budowlane.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Okna1;
