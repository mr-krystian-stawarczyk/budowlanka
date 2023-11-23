import React, { useEffect, useState } from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";

import Image from "next/image";

// Import the type

function Tynki5() {
	const [accordionData, setAccordionData] = useState([]);
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");

	return (
		<Container className="bg-white text-dark py-5" fluid id="web-design-faq">
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
							<Accordion.Header>Pleisteren als basisafwerking</Accordion.Header>
							<Accordion.Body>
								Pleisteren is een cruciale fase in de afwerking van zowel
								externe als interne oppervlakken van gebouwen. Het biedt niet
								alleen een esthetische uitstraling, maar ook extra bescherming
								tegen weersinvloeden en mechanische beschadigingen.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								Soorten pleisters aangepast aan behoeften
							</Accordion.Header>
							<Accordion.Body>
								Er zijn veel soorten pleisters, waaronder traditionele
								kalk-cementpleisters, gipspleisters en mozaïekpleisters. De
								keuze van het type pleister kan afhangen van specifieke
								behoeften, esthetiek en ook de omstandigheden waarin het zal
								worden toegepast.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								Voorbereiding van de ondergrond voor pleisteren
							</Accordion.Header>
							<Accordion.Body>
								Effectief pleisteren vereist een juiste voorbereiding van de
								ondergrond. Dit is een cruciale stap, omdat het de duurzaamheid
								en esthetiek van het werk bepaalt. Het reinigen, egaliseren en
								adequaat primeren van de ondergrond is buitengewoon belangrijk.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>
								Traditioneel pleisterwerk vs. machinaal pleisteren
							</Accordion.Header>
							<Accordion.Body>
								Traditioneel pleisterwerk, met de hand aangebracht, is een
								benadering van pleisteren, terwijl machinaal pleisteren machines
								gebruikt om de pleister sneller en gelijkmatiger aan te brengen.
								Beide methoden hebben hun voordelen en kunnen worden toegepast
								afhankelijk van de schaal en specificiteit van het project.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>
								Esthetische en beschermende functionaliteit
							</Accordion.Header>
							<Accordion.Body>
								Pleisteren dient niet alleen voor esthetiek, maar heeft ook een
								beschermende functie voor de wanden van het gebouw. Een goed
								gekozen pleister kan ook beschermen tegen vocht, schimmels en
								heeft invloed op de thermische isolatie.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>
								Advies en afstemming op klantbehoeften
							</Accordion.Header>
							<Accordion.Body>
								Professionals bieden advies bij het kiezen van de juiste
								pleister, rekening houdend met de individuele voorkeuren van de
								klant, het type gebouw en de specifieke omgeving waarin het zich
								bevindt.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>Afwerkingen en kleuren</Accordion.Header>
							<Accordion.Body>
								Pleisters bieden verschillende afwerkingen, zowel qua structuur
								als kleuren. Er zijn veel mogelijkheden, van gladde oppervlakken
								tot structuren die natuurlijke materialen imiteren, waardoor aan
								unieke esthetische eisen van de klant kan worden voldaan.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Tynki5;
