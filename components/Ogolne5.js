import React, { useEffect, useState } from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";

import Image from "next/image";

// Import the type

function Ogolne5() {
	const [accordionData, setAccordionData] = useState([]);
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");

	return (
		<Container className="bg-light text-dark  py-5" fluid id="web-design-faq">
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<h1 className="text-dark text-bold text-uppercase">
						Meest Gestelde Vragen
					</h1>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg" defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								Wat zijn de voordelen van investeren in algemene
								bouwwerkzaamheden in mijn huis?
							</Accordion.Header>
							<Accordion.Body>
								Algemene bouwwerkzaamheden bieden vele voordelen, waaronder de
								mogelijkheid om het huis aan te passen aan veranderende
								behoeften, het verbeteren van de functionaliteit van de ruimte,
								het verhogen van de waarde van het onroerend goed en de kans om
								gebruik te maken van moderne technologieën en materialen die de
								kwaliteit van leven verbeteren.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								Hoe vaak moet ik renovatiewerkzaamheden plannen voor mijn huis?
							</Accordion.Header>
							<Accordion.Body>
								De frequentie van renovatiewerkzaamheden is afhankelijk van
								verschillende factoren, zoals de leeftijd van het gebouw, het
								type gebruikte materialen bij de constructie en de regelmaat van
								onderhoud. Reguliere inspecties en onderhoud worden aanbevolen,
								terwijl grotere renovatiewerkzaamheden kunnen worden gepland
								afhankelijk van de behoeften, eens in de paar jaar.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								Wat zijn de verschillen tussen renovatie en verbouwing?
							</Accordion.Header>
							<Accordion.Body>
								Verbouwing is een breed begrip dat moderniseringswerkzaamheden
								omvat die de uitstraling of functionaliteit van de ruimte
								veranderen. Renovatie richt zich op het herstellen van de
								oorspronkelijke staat of het vernieuwen van oppervlakken zonder
								ingrijpende veranderingen in de structuur.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>
								Welke stappen omvat het proces van algemene bouwwerkzaamheden?
							</Accordion.Header>
							<Accordion.Body>
								Het proces van algemene bouwwerkzaamheden begint meestal met de
								beoordeling van de behoeften van de klant, het plannen van de
								werkzaamheden, het verkrijgen van de vereiste vergunningen en
								vervolgens het uitvoeren van de werkzaamheden volgens de
								vastgestelde specificaties. De stappen kunnen sloopwerk,
								afwerkings-, installatie- en uitrustingswerkzaamheden omvatten.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>
								Kunnen algemene bouwwerkzaamheden de energie-efficiëntie van
								mijn huis verbeteren?
							</Accordion.Header>
							<Accordion.Body>
								Ja, algemene bouwwerkzaamheden kunnen aanzienlijk de
								energie-efficiëntie van een huis verbeteren. Structurele
								wijzigingen, nieuwe isolatiematerialen of de installatie van
								energiezuinige apparaten kunnen het energieverbruik verminderen
								en de kosten voor verwarming of koeling verlagen.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>
								Hoe kan ik de kosten voor algemene bouwwerkzaamheden schatten?
							</Accordion.Header>
							<Accordion.Body>
								Kosten voor algemene bouwwerkzaamheden kunnen variëren op basis
								van de omvang, reikwijdte en gekozen materialen. Het is
								belangrijk om een gedetailleerd plan van de werkzaamheden op te
								stellen en advies in te winnen bij professionals voor een
								nauwkeurige schatting van de kosten. Het vergelijken van
								offertes van verschillende aannemers kan ook helpen om de meest
								kosteneffectieve oplossing te vinden.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>
								Biedt het bedrijf garantie op uitgevoerde werkzaamheden?
							</Accordion.Header>
							<Accordion.Body>
								Ja, ons bedrijf biedt garantie op de kwaliteit van de
								uitgevoerde werkzaamheden. We bieden garantie op onze diensten
								en de gebruikte materialen. Na de voltooiing van het werk staan
								we klaar om hulp en ondersteuning te bieden bij eventuele
								problemen of vragen met betrekking tot de uitgevoerde algemene
								bouwwerkzaamheden. Ons doel is om klanttevredenheid te
								waarborgen en betrouwbare diensten te leveren, zelfs na de
								voltooiing van het project.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Ogolne5;
