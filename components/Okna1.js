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
			className="d-flex py-3 bg-light text-dark align-items-center justify-content-center "
		>
			<Row className="justify-content-center align-items-center">
				<Col lg={5} className="mx-auto my-2">
					<Card className="border-0 bg-transparent align-items-center justify-content-center">
						<Image
							src="/assets/okna-pla.png"
							width={200}
							height={200}
							className="responsive-image shadow-lg"
							alt="ramen-pla"
						/>
						<Card.Body>
							<h1 className="text-bold">Kunststof Ramen</h1>
							<Card.Text>
								<span className="text-bold">Thermische isolatie:</span>{" "}
								Kunststof ramen staan bekend om hun uitstekende thermische
								isolatie, waardoor ze een optimale temperatuur in ruimtes
								behouden en warmteverlies verminderen.
							</Card.Text>
							<Card.Text>
								<span className="text-bold">Energiezuinigheid:</span> Dankzij de
								uitstekende isolatie kunnen deze ramen de verwarmingskosten
								aanzienlijk verlagen door warmteverlies te minimaliseren.
							</Card.Text>
							<Card.Text>
								<span className="text-bold">
									Duurzaamheid en onderhoudsgemak:
								</span>{" "}
								Ze zijn bestand tegen weersinvloeden en vereisen geen specifiek
								onderhoud. Het gemak van schoonmaken maakt ze
								gebruiksvriendelijk.
							</Card.Text>
							<Card.Text>
								<span className="text-bold">
									Verscheidenheid aan kleuren en ontwerpen:
								</span>{" "}
								Ze bieden diversiteit qua design en kleuren, waardoor ze passen
								bij verschillende architecturale stijlen.
							</Card.Text>
							<Card.Text>
								<span className="text-bold">
									Weerstand tegen corrosie en vocht:
								</span>{" "}
								Kunststof ramen zijn bestand tegen corrosie, wat ze tot een
								uitstekende keuze maakt in vochtige gebieden.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="mx-auto my-2">
					<Card className="border-0 bg-transparent align-items-center justify-content-center">
						<Image
							src="/assets/okna-alu.png"
							width={200}
							height={200}
							className="responsive-image shadow-lg"
							alt="ramen-alu"
						/>
						<Card.Body>
							<h1 className="text-bold">Aluminium Ramen</h1>
							<Card.Text>
								<span className="text-bold">Sterkte en lichtheid:</span>{" "}
								Aluminium ramen zijn licht van gewicht, maar tegelijkertijd zeer
								sterk en bestand tegen vervorming of mechanische schade.
							</Card.Text>
							<Card.Text>
								<span className="text-bold">Esthetiek en elegantie:</span> Ze
								hebben een elegante uitstraling die moderniteit en stijl
								toevoegt aan de architectuur van gebouwen, vooral in grote
								glasoppervlakken.
							</Card.Text>
							<Card.Text>
								<span className="text-bold">
									Weerstand tegen weersinvloeden:
								</span>{" "}
								Ze zijn bestand tegen externe omstandigheden, inclusief
								corrosie, waardoor ze duurzaam zijn en geschikt voor
								verschillende klimaten.
							</Card.Text>
							<Card.Text>
								<span className="text-bold">Grote glasoppervlakken:</span>{" "}
								Mogelijkheid om grote glasoppervlakken te creëren zonder extra
								versterkingen, waardoor indrukwekkende panoramische uitzichten
								mogelijk zijn.
							</Card.Text>
							<Card.Text>
								<span className="text-bold">Milieuvriendelijkheid:</span>{" "}
								Aluminium profielen zijn grotendeels recyclebaar en geschikt
								voor hergebruik, waardoor ze milieuvriendelijker zijn dan
								sommige andere bouwmaterialen.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Okna1;
