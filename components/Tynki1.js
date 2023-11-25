import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";
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
				<Button onClick={() => setExpanded(!expanded)} className="btn-nav">
					{expanded ? (
						<MdDoubleArrow
							style={{
								fontSize: "1rem",
								rotate: "-90deg",
							}}
						/>
					) : (
						<MdDoubleArrow
							style={{
								fontSize: "1rem",
								rotate: "90deg",
							}}
						/>
					)}
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
				<h1 className="text-bold text-uppercase">Soorten Pleisters</h1>
			</Row>
			<Row className="justify-content-center align-items-top">
				<Col lg={3} className="mx-auto my-2">
					<Card className="border-0 bg-transparent">
						<Card.Body className="justify-content-center align-items-center">
							<Image
								src="/assets/knauf1.png"
								width={200}
								height={200}
								className="responsive-image shadow-lg "
								alt="knauf1"
							/>
							<h3>Pleistergips Knauf</h3>
							<ExpandableText
								text={
									"Ongeacht de stijlen en trends in de architectuur, blijft gips al eeuwenlang een innovatief bouwmateriaal met tal van toepassingsmogelijkheden. Tegenwoordig vinden we gips voornamelijk in materialen die bedoeld zijn voor de afwerking van interieurs: in gipsplaten en binnenpleisters. Gips is een materiaal dat zeer vriendelijk is voor de gezondheid van de mens. Dankzij de hygroscopische eigenschappen absorbeert het overtollig vocht in de ruimte en geeft het dit weer af wanneer de lucht te droog wordt. Hierdoor reguleert het de vochtigheidsgraad in de lucht, wat het meest gunstig is voor mensen. Ruimtes afgewerkt met gipsmaterialen hebben een optimaal klimaat. Ze kenmerken zich vooral door goede thermische en akoestische isolatie, met behoud van een microklimaat dat gunstig is voor mensen (gips absorbeert overtollig vocht en geeft dit af wanneer de ruimte te droog is). Gipspleisters vormen een uitstekende ondergrond voor schilderen, behangen en keramische bekledingen. Een voordeel van gipspleisters is ook dat ze niet afbrokkelen bij het boren van gaten of het slaan van spijkers. Ook mogen we de brandwerende eigenschappen niet vergeten, voortkomend uit de structuur van het materiaal gips (watermoleculen die bij hoge temperaturen verdampen en daardoor de opwarming van de pleister en de constructie van het gebouw aanzienlijk vertragen)."
								}
								maxWords={40}
							/>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} className="mx-auto my-2">
					<Card className="border-0 bg-transparent">
						<Card.Body>
							<Image
								src="/assets/knauf2.png"
								width={200}
								height={200}
								className="responsive-image shadow-lg"
								alt="knauf2"
							/>
							<h3>Verhardende Gipspleisters</h3>
							<ExpandableText
								text={
									"VOOR VEELEISENDE INVESTEERDERS MP 75 DIAMANT Wanneer het tijd is om ruimtes af te werken en te beslissen over de juiste pleister waarop later het gekozen behang of verf zal worden aangebracht, blijkt vaak dat het moeilijk is om te bepalen welk type materiaal het beste is. Elk type heeft namelijk zijn eigen voor- en nadelen. Je kunt kiezen tussen gipspleisters en cementkalkpleisters. Beide behoren tot binnenpleisters en hebben twee basisfuncties: beschermend en decoratief. Belangrijk is echter dat ze worden gekenmerkt door een hoge duurzaamheid en bestendigheid tegen beschadigingen of vochtigheid. Over gipspleisters wordt ook gezegd dat ze een lage weerstand hebben tegen mechanische beschadigingen. Deze kritiek is moeilijk te weerleggen, omdat gipspleisters van lage kwaliteit inderdaad slecht presteren bij stoten en krassen. Je kunt echter de Knauf MP 75 Diamant pleister gebruiken, die veel harder is dan traditionele gipspleisters en beter bestand is tegen samendrukking, waardoor het zelfs kan concurreren met de beste cement-kalkpleisters. Bovendien heeft deze pleister andere voordelen zoals hoge elasticiteit en stabiliteit, evenals gemakkelijke toepassing op geselecteerde oppervlakken. Om ervoor te zorgen dat onze huizen duurzaam, mooi en gezond zijn. Het gebruik van dergelijke pleisters zoals Knauf MP 75 Diamant betekent niet alleen gladde muren, weerstand tegen krassen, bescherming tegen schimmels en meeldauw en het verkrijgen van het juiste oppervlak voor allerlei decoraties, maar ook aanzienlijke tijds- en geldbesparing. Zelfs als de aankoop van een kwaliteitspleister als een grote kostenpost wordt beschouwd, is het de moeite waard eraan te denken dat het een investering is voor vele jaren. Door 'zomaar iets' te kopen, lijkt het misschien alsof we een geweldige deal hebben gesloten op korte termijn. Maar na de eerste beschadigingen en problemen zal onze frustratie groot zijn. Uiteindelijk houdt niemand ervan om twee keer hetzelfde werk te doen (en er twee keer voor te betalen!). Diamant gips voldoet aan de verwachtingen van de meest veeleisende investeerders die pleisters willen die bestand zijn tegen mechanische beschadigingen en tegelijkertijd een vriendelijk en gezond binnenklimaat voor de gebruikers creëren. Knauf MP 75 Diamant onderscheidt zich door zijn hoge duurzaamheid en bestendigheid tegen stoten. Het zal in elk huis werken, zelfs in de garage. Vanwege zijn eigenschappen wordt het ook aanbevolen voor openbare gebouwen, scholen, ziekenhuizen, kantoren, in trappenhuizen van appartementsgebouwen, enz."
								}
								maxWords={40}
							/>
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
							alt="knauf3"
						/>
						<Card.Body>
							<h3> Aquastuc Gipspleister</h3>
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
				<Col lg={3} className="mx-auto my-2">
					<Card className="border-0 bg-transparent">
						<Image
							src="/assets/knauf4.png"
							width={200}
							height={200}
							className="responsive-image shadow-lg"
							alt="knauf4"
						/>
						<Card.Body>
							<h3>Kalk cementpleisters</h3>
							<ExpandableText
								text={
									"Ze onderscheiden zich door hun hoge waterbestendigheid, dus ze kunnen zonder zorgen worden gebruikt in badkamers, doucheruimtes, enzovoort. Ze hebben ook een zeer goede mechanische weerstand, dampdoorlaatbaarheid en vorstbestendigheid, wat hier van groot belang is. Het belangrijkste nadeel van dit type pleister is vooral de ruwe structuur (die echter tot een minimum kan worden beperkt door een pleistermessen te gebruiken) en de grote hoeveelheid water die nodig is voor het verdampen van de aangebrachte pleister."
								}
								maxWords={40}
							/>
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
