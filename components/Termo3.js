import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Termo3() {
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
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">
								Het isoleren van de binnenzijde van een schuin dak{" "}
							</h1>
							<Card.Text>
								De belangrijkste aandachtspunten zijn: Omdat bij het isoleren
								van een dak aan de binnenzijde de isolatie zich aan de warme
								kant bevindt, komen veel vochtproblemen voor bij een onjuiste
								opbouw. Let er daarom op dat er aan de buitenzijde, onder de
								dakpannen, geen dampremmende folie, asfaltpapier of isolatielaag
								(PUR) aanwezig is. Is dit wel het geval, dan is de kans groot
								dat er condensvorming gaat optreden, omdat de waterdamp op deze
								manier de woning niet uit kan wanneer je aan de binnenzijde gaat
								isoleren. Maak in dit geval gebruik van een speciale
								(vochtregulerende) klimaatfolie.
							</Card.Text>
							<Card.Text>
								In de winter is de buitenlucht koud en voorkomt de klimaatfolie
								dat het vocht vanuit de woning in de constructie trekt. In de
								zomer zorgt de folie er juist voor dat eventueel opgesloten
								vocht kan ontsnappen uit de isolatielaag en constructie; Wanneer
								je de dakpan omhoog schuift kan je vaak goed zien of het
								dakbeschot aan de buitenzijde kaal is of bedekt met een folie of
								isolatieschuim; Het is verstandig om aan de buitenzijde, net
								onder de dakpannen een dampdoorlatende folie te bevestigen die
								tevens waterkerend is. Op deze manier kan er geen vocht van
								buitenaf de woning in komen, maar kan de damp van binnen wel
								naar buiten; Een mens produceert circa 1 tot 2,5 liter vocht per
								dag in een woning (o.a. door te ademen, transpireren, douchen en
								koken).
							</Card.Text>
							<Card.Text>
								{" "}
								Het vocht dat een mens produceert komt als waterdamp in de
								woning terecht. Deze geproduceerde waterdamp zal door middel van
								diffusie een uitweg gaan zoeken naar koudere lucht buiten. Let
								er daarom op dat de isolatie wordt voorzien de juiste folie. Een
								dampremmende- of klimaatfolie die er voor zorgt dat het vocht
								niet bij de isolatie komt. Bij sommige isolatieproducten is het
								materiaal al voorzien van een dergelijke (aluminium) laag;
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/termo5.png"
						width={500}
						height={500}
						className="responsive-image shadow-lg"
						alt="termoisolatie5"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Termo3;
