import React, { useEffect, useState } from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";

import Image from "next/image";

// Import the type

function Glazura5() {
	const [accordionData, setAccordionData] = useState([]);
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");

	return (
		<Container className="bg-light text-dark  py-5" fluid id="web-design-faq">
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<h1 className="text-dark text-uppercase text-bold">
						Meest Gestelde Vragen
					</h1>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg" defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								Wat zijn de belangrijkste voordelen van het gebruik van tegels
								in huis?
							</Accordion.Header>
							<Accordion.Body>
								Tegels zijn niet alleen een esthetische toevoeging aan het
								interieur. Hun belangrijkste voordelen zijn duurzaamheid, gemak
								in onderhoud, bestendigheid tegen vocht en slijtage. Bovendien
								biedt het brede scala aan patronen en kleuren creatieve
								mogelijkheden voor ruimte-indelingen.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								Is er een verschil tussen keramische en porseleinen tegels?
							</Accordion.Header>
							<Accordion.Body>
								Ja, het belangrijkste verschil ligt in het productieproces.
								Keramische tegels zijn minder compact, terwijl porseleinen
								tegels dichter en beter bestand tegen beschadigingen zijn. Beide
								soorten worden gebruikt voor interieurafwerking, maar
								verschillen qua duurzaamheid en waterabsorptie.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								Wat zijn de belangrijkste voorbereidende stappen vóór het
								plaatsen van tegels?
							</Accordion.Header>
							<Accordion.Body>
								Het is essentieel om het oppervlak waar de tegels worden
								geplaatst voor te bereiden. Dit omvat het reinigen, egaliseren
								en nivelleren van het oppervlak, het verwijderen van eventuele
								resten, en het correct voorbereiden van de ondergrond.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>
								Is tegelwerk moeilijk te onderhouden?
							</Accordion.Header>
							<Accordion.Body>
								Tegelwerk is relatief eenvoudig te onderhouden omdat het bestand
								is tegen vlekken en vocht. Regelmatig schoonmaken met water en
								een mild schoonmaakmiddel is voldoende om het in goede staat te
								houden. Het is echter belangrijk om agressieve
								schoonmaakmiddelen te vermijden die het oppervlak kunnen
								beschadigen.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>
								Kan tegelwerk worden aangepast aan de kleuren en patronen van
								mijn interieur?
							</Accordion.Header>
							<Accordion.Body>
								Ja, tegelwerk is verkrijgbaar in verschillende kleuren, patronen
								en formaten. Het kan worden aangepast aan individuele
								ontwerpbehoeften om perfect te passen bij de
								interieurinrichting.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>
								Is het leggen van tegels een tijdrovend proces?
							</Accordion.Header>
							<Accordion.Body>
								De tijd die nodig is om tegels te leggen, hangt af van de
								grootte en complexiteit van het project. Over het algemeen duurt
								dit enkele dagen, maar kan langer duren bij grotere oppervlakken
								of complexe patronen.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>
								Welke factoren beïnvloeden de kosten van tegelwerk?
							</Accordion.Header>
							<Accordion.Body>
								De kosten zijn afhankelijk van de oppervlaktegrootte, het type
								tegel, de kwaliteit, het patroon en de complexiteit van de
								installatiewerkzaamheden. Verschillende legmethoden en extra
								voorbereidende werkzaamheden kunnen ook van invloed zijn op de
								uiteindelijke kosten.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Glazura5;
