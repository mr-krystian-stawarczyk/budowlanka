import React, { useEffect, useState } from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";

import Image from "next/image";

// Import the type

function Ogrzewanie7() {
	const [accordionData, setAccordionData] = useState([]);
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");

	return (
		<Container className="bg-light  py-5" fluid id="web-design-faq">
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} className="py-5 text-center">
					<h1 className="text-dark text-uppercase text-bold">
						Veel Gestelde Vragen
					</h1>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg" defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								Waarom zou je kiezen voor een vloerverwarmingsmat?
							</Accordion.Header>
							<Accordion.Body>
								Van alle vloerverwarmingsopties heeft de verwarmingsmat
								duidelijk de meeste voordelen. In de winter kunnen bewoners
								comfortabel op blote voeten door het huis lopen. Tegelijkertijd
								maakt de investering in vloerverwarming het mogelijk om tapijten
								en vloerbedekkingen, die broeinesten zijn van allergenen en
								micro-organismen, uit huis te verwijderen. Het hebben van een
								verwarmingssysteem onder de vloer maakt ook een vrij instelbare
								controle mogelijk over de verwarming van het hele huis door
								afzonderlijke elementen in of uit te schakelen.
								Verwarmingsfolies en verwarmingsmatten onder laminaat of
								keramische tegels zijn ideaal in woningen waar mensen allergisch
								zijn voor stof. In tegenstelling tot traditionele systemen voor
								vloerverwarming veroorzaakt een verwarmingsmat geen ophoping van
								vuil op de vloeren, wat ook minder vaak schoonmaken mogelijk
								maakt.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								Kan de verwarmingsmat onder een douchebak of bad worden
								geplaatst?
							</Accordion.Header>
							<Accordion.Body>
								Helaas kunnen infrarood verwarmingsmatten niet onder een bad of
								douchebak worden geïnstalleerd.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								Heeft vloerverwarming met een vermogen van 150 W/m2 invloed op
								de verhoogde gebruikskosten?
							</Accordion.Header>
							<Accordion.Body>
								Het gebruik van een hoger nominale vermogen mat verkort de
								opwarmtijd van de installatie.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>
								Kan de mat tijdens de installatie worden gesneden?
							</Accordion.Header>
							<Accordion.Body>
								Het is verboden om de draden te snijden; de mat kan alleen
								worden ingekort door in het gaas te snijden.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>
								Kan een verwarmingsmat onder permanente inrichting worden
								geïnstalleerd?
							</Accordion.Header>
							<Accordion.Body>
								Het is niet mogelijk om een verwarmingsmat te installeren onder
								permanente inrichting. Waar de mat is geïnstalleerd, kunnen
								alleen meubels op poten worden geplaatst, met een minimale
								hoogte van 3 cm boven de vloer.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>
								Is het mogelijk om de verwarmingsdraden kruislings te leggen of
								over elkaar heen te leggen?
							</Accordion.Header>
							<Accordion.Body>
								Nee, een verwarmingsmat kan niet worden geïnstalleerd op een
								manier waarbij de draden elkaar kruisen of elkaar overlappen. De
								minimale afstand tussen de draden moet 8 cm zijn.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>
								Is het noodzakelijk om een elektricien in te huren om de mat aan
								te sluiten?
							</Accordion.Header>
							<Accordion.Body>
								Alleen een elektricien met actuele SEP-bevoegdheden kan de mat
								aansluiten.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Ogrzewanie7;
