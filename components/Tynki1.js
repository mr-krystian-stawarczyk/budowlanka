import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function ExpandableText({ text, maxWords }) {
	const [expanded, setExpanded] = useState(false);
	const words = text.split(" ");
	const isExpandable = words.length > maxWords;

	const displayText = expanded ? text : words.slice(0, maxWords).join(" ");

	return (
		<div>
			<Card.Text>{displayText}</Card.Text>
			{isExpandable && (
				<Button onClick={() => setExpanded(!expanded)}>
					{expanded ? "Mniej" : "Więcej"}
				</Button>
			)}
		</div>
	);
}

function Tynki1() {
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
			className="bg-white text-dark py-3 align-items-center justify-content-center"
		>
			<Row className="text-center">
				<h1 className="text-bold text-uppercase">Rodzaje Tynków</h1>
			</Row>
			<Row className="justify-content-center  align-items-center">
				<Col lg={3} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							{" "}
							<Image
								src="/assets/knauf1.png"
								width={200}
								height={200}
								className="responsive-image shadow-lg"
								alt="Sanity Image"
							/>
							<h1> Tynki gipsowe</h1>
							<Card.Text> </Card.Text>{" "}
							<ExpandableText
								text={
									"Niezależnie od stylów i trendów w architekturze pozostawał przez wieki innowacyjnym materiałem budowlanym z licznymi możliwościami zastosowania. Współcześnie gips znajdujemy głównie w materiałach przeznaczonych do wykańczania wnętrz: w płytach gipsowo-kartonowych i tynkach wewnętrznych. Gips jest materiałem bardzo przyjaznym dla zdrowia człowieka. Dzięki właściwościom higroskopijnym chłonie we wnętrzach nadmiar wilgoci i oddaje ją, kiedy powietrze staje się zbyt suche. Tym samym reguluje stężenie wilgoci w powietrzu, które staje się najbardziej korzystne dla ludzi. We wnętrzach wykończonych materiałami gipsowymi panuje optymalny klimat. Cechują się przede wszystkim dobrą izolacyjnością cieplną i akustyczną wyróżniającym się utrzymaniem odpowiedniego mikroklimatu przyjaznego dla człowieka (gips wchłania nadmiar wilgoci, i oddaje ją gdy w pomieszczeniu jest zbyt sucho) Tynki gipsowe to doskonałe podłoże pod malowanie bądź tapety jak również okładziny ceramiczne. Zaletą tynków gipsowych jest również fakt, że nie odpryskują podczas wiercenia w nich otworów czy wbijaniu gwoździ. Nie można tez zapomnieć o właściwościach ognioodpornych wynikających przede wszystkim ze struktury materiału jakim jest gips. (zawartość cząsteczek wody, które pod działaniem wysokiej temperatury przechodzi w parę wodną co w znaczny sposób spowalnia nagrzewanie się tynku i elementów konstrukcyjnych budynku"
								}
								maxWords={40}
							/>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							{" "}
							<Image
								src="/assets/knauf2.png"
								width={200}
								height={200}
								className="responsive-image shadow-lg"
								alt="Sanity Image"
							/>
							<h1> Tynki gipsowe utwardzane</h1>
							<ExpandableText
								text={
									"DLA WYMAGA JĄCYCH INWESTORÓW MP 75 DIAMANT Kiedy przychodzi czas wykańczania pomieszczeń i decydowania odnośnie właściwego tynku, na którym znajdzie się później wybrana tapeta lub farba, okazuje się często, że ciężko jest ustalić, który rodzaj materiału będzie najlepszy. Każdy rodzaj ma bowiem swoje zalety i wady. Do wyboru są tynki gipsowe i tynki cementowo – wapienne. Jedne i drugie należą do tynków wewnętrznych, posiadających dwie podstawowe funkcje: osłonową i dekoracyjną. Najważniejsze jednak aby charakteryzowały się wysoką trwałością i wytrzymałością na uszkodzenia, czy też zawilgocenia. O tynkach gipsowych mówi się również, że mają niską odporność na uszkodzenia mechaniczne. Ten zarzut ciężko odeprzeć, ponieważ faktycznie tynki gipsowe niskiej jakości bardzo źle się sprawdzają w przypadku uderzeń i zarysowań. Można jednak zastosować tynk Knauf MP 75 Diamant, który jest znacznie twardszy od tradycyjnych tynków gipsowych, oraz bardziej odporny na ściskanie, przez co spokojnie może konkurować nawet z najlepszymi tynkami cynkowo-wapiennymi. Ponadto do innych zalet tego tynku należy jego wysoka elastyczność i stabilność, jak również łatwość nanoszenia na wybrane powierzchnie. Aby nasze domy były trwałe, ładne i zdrowe. Zastosowanie takich tynków jak Knauf MP 75 Diamant to nie tylko gładkość ścian, odporność na zadrapania, ich zabezpieczenie przed pleśniami i grzybem oraz uzyskanie odpowiedniej powierzchni pod wszelkiego rodzaju zdobienia, ale również spora oszczędność czasu i pieniędzy. Nawet jeśli zakup dobrej jakości tynku wydaje nam się sporym kosztem, warto pamiętać że jest to inwestycja na długie lata. Kupując „byle co” krótkotrwale może nam się wydawać że ubiliśmy interes życia. Jednak po pierwszych uszkodzeniach, i problemach nasza frustracja będzie wielka. W końcu nikt nie lubi wykonywać 2 razy tej samej pracy (i 2 razy za nią płacić!). Tynk gipsowy Diamant spełnia oczekiwania najbardziej wymagających inwestorów, którzy chcą mieć tynki odporne na uszkodzenia mechaniczne i jednocześnie takie, które tworzyć będą we wnętrzach klimat przyjazny i zdrowy dla użytkowników.  Knauf MP 75 Diamant wyróżnia wysoka trwałość i wytrzymałość na uderzenia. Sprawdzi się w każdym domu, nawet w garażu. Z uwagi na swoje właściwości zalecany jest także do budynków publicznych, szkół, szpitali, urzędów, na klatki schodowe w budownictwie wielorodzinnym itp."
								}
								maxWords={40}
							/>{" "}
						</Card.Body>
					</Card>
				</Col>

				<Col lg={3} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						{" "}
						<Image
							src="/assets/knauf3.png"
							width={200}
							height={200}
							className="responsive-image shadow-lg"
							alt="Sanity Image"
						/>
						<Card.Body>
							<h1> AQUASTUC GIPSPLEISTER</h1>
							<ExpandableText
								text={
									"Gipspleister speciaal voor natte ruimtes AquaStuc gipspleister is een gehydrofobeerde gipspleister die beter bestand is tegen spatwater dan een standaard gipspleister. Deze basis- en afwerkpleister is ideaal voor wanden in natte ruimtes die niet of gedeeltelijk worden betegeld. Denk aan badkamers, keukens, toiletten en garages. Je hoeft wanden zonder tegels niet apart af te werken. Hierdoor geniet je klant sneller van zijn ideale badkamer."
								}
								maxWords={40}
							/>{" "}
							<Card.Text></Card.Text>
							<Card.Text></Card.Text>
							<Card.Text></Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						{" "}
						<Image
							src="/assets/knauf4.png"
							width={200}
							height={200}
							className="responsive-image shadow-lg"
							alt="Sanity Image"
						/>
						<Card.Body>
							<h1> Tynki cementowo wapienne</h1>
							<ExpandableText
								text={
									"Wyróżniają się wysoką wodoodpornością, tak więc bez obaw można je stosować w łazienkach, łaźniach, suszarniach itp. Bardzo dobra wytrzymałość mechaniczna, paro przepuszczalność oraz mrozoodporność mają tu również bardzo istotne znaczenie. Główną wadą tego rodzaju tynku, jest przede wszystkich chropowata struktura, (którą można jednak maksymalnie zminimalizować stosując zacieraczkę do tynków), oraz duża ilość wody niezbędna do odparowania gotowego tynku."
								}
								maxWords={40}
							/>{" "}
							<Card.Text></Card.Text>
							<Card.Text></Card.Text>
							<Card.Text></Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Tynki1;
