import React, { useEffect, useState } from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";

import Image from "next/image";

// Import the type

function Header6() {
	const [accordionData, setAccordionData] = useState([]);
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");

	return (
		<Container className="  py-5 bg-white" fluid id="web-design-faq">
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<h1 className="text-dark text-uppercase text-bold">
						Veelgestelde Vragen
					</h1>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg" defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								Welke Diensten Bieden Jullie Aan?
							</Accordion.Header>
							<Accordion.Body>
								Ons bedrijf houdt zich bezig met een breed scala aan bouw-,
								renovatie- en afwerkingsdiensten. We zijn gespecialiseerd in het
								schilderen en pleisteren van muren, het leggen van tegels en
								terracotta, en het installeren van ramen en deuren. Daarnaast
								voeren we werkzaamheden uit met betrekking tot de gevels van
								gebouwen, inclusief pleisterwerk en isolatie. Onze algemene
								bouwdiensten omvatten ook loodgieters en elektrawerk, waardoor
								we zowel renovatie- als bouwprojecten van begin tot eind kunnen
								uitvoeren. We streven naar hoogwaardige dienstverlening, waarbij
								we aandacht hebben voor details en de individuele behoeften van
								onze klanten. Ongeacht de omvang van het project, staan wij voor
								professionaliteit, betrouwbaarheid en klanttevredenheid door op
								maat gemaakte oplossingen te bieden voor diverse behoeften.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>Wat is de Wachttijd?</Accordion.Header>
							<Accordion.Body>
								Onze wachttijd varieert afhankelijk van de omvang en de aard van
								het project. Voor specifieke details over de wachttijd adviseren
								wij rechtstreeks contact met ons op te nemen, omdat dit per
								situatie kan verschillen.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>Hoe Ver Rijden Jullie?</Accordion.Header>
							<Accordion.Body>
								Wij bedienen een uitgebreid gebied, maar onze reikwijdte kan
								variëren op basis van het project. Neem contact met ons op voor
								specifieke informatie over de locaties waar wij werkzaam zijn.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>
								Is er een Vooruitbetaling Nodig?
							</Accordion.Header>
							<Accordion.Body>
								Vooruitbetaling kan variëren op basis van het project en de
								overeengekomen voorwaarden. Neem contact met ons op voor meer
								informatie over betalingsvoorwaarden.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>Waar is jullie Vestiging?</Accordion.Header>
							<Accordion.Body>
								Onze vestiging bevindt zich op Jean Monnetstraat Heemskerk, maar
								we bedienen verschillende locaties afhankelijk van de projecten
								die we uitvoeren.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>
								Wat voor Ramen Bieden Jullie Aan?
							</Accordion.Header>
							<Accordion.Body>
								Wij bieden een breed scala aan ramen, waaronder aluminium,
								houten en kunststof ramen van verschillende merken en stijlen.
								Neem contact met ons op voor meer details over de beschikbare
								opties.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>
								Wat voor Certificaten / Machines Hebben Jullie?
							</Accordion.Header>
							<Accordion.Body>
								Ons bedrijf beschikt over alle nodige certificaten en
								geavanceerde machines voor verschillende bouw- en
								renovatiewerkzaamheden. We werken met gecertificeerde materialen
								en machines om hoogwaardige resultaten te garanderen.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Header6;
