import React, { useEffect, useState } from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";

import Image from "next/image";

// Import the type

function Okna5() {
	const [accordionData, setAccordionData] = useState([]);
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");

	return (
		<Container className="bg-light  py-5" fluid id="web-design-faq">
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
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
								Wat zijn de voordelen van het vervangen van ramen in mijn huis?
							</Accordion.Header>
							<Accordion.Body>
								Het vervangen van ramen brengt verschillende voordelen met zich
								mee die zowel het comfort van het leven als de
								energie-efficiëntie van het huis beïnvloeden. Nieuwe ramen
								verbeteren de thermische en akoestische isolatie van ruimtes,
								wat resulteert in lagere energierekeningen. Bovendien verbeteren
								ze de esthetiek van het interieur en exterieur van het huis, wat
								de waarde van het onroerend goed kan verhogen.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								Hoe vaak moet ik ramen vervangen?
							</Accordion.Header>
							<Accordion.Body>
								De frequentie van het vervangen van ramen hangt af van
								verschillende factoren, zoals hun kwaliteit, weersomstandigheden
								en gebruik. Hoogwaardige ramen kunnen vele jaren meegaan, maar
								we raden aan om regelmatig hun staat te controleren, vooral als
								je problemen opmerkt met afdichtingen, condensatie of als je een
								stijging van energierekeningen opmerkt, wat kan wijzen op
								warmteverliezen.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								Wat zijn de verschillen tussen verschillende soorten ramen?
							</Accordion.Header>
							<Accordion.Body>
								Er zijn verschillende soorten ramen beschikbaar op de markt, elk
								met hun eigen voordelen en kenmerken. Bijvoorbeeld, houten ramen
								zijn duurzaam en esthetisch, maar vereisen regelmatig onderhoud.
								PVC-ramen zijn gemakkelijk te onderhouden en energiezuinig,
								terwijl aluminium ramen bekendstaan om hun duurzaamheid en
								moderne uitstraling. De keuze voor het juiste type ramen hangt
								af van esthetische voorkeuren, verwachtingen met betrekking tot
								duurzaamheid en energie-efficiëntie.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>
								Wat zijn de stappen van het raammontageproces?
							</Accordion.Header>
							<Accordion.Body>
								Het proces van het monteren van ramen omvat verschillende
								essentiële stappen. Het begint met nauwkeurige metingen en
								evaluatie van de behoeften van de klant, vervolgens worden de
								oude ramen verwijderd en worden de nieuwe precies gemonteerd. De
								montage omvat ook het juiste afdichten en afwerken van details
								om niet alleen functionaliteit, maar ook een esthetische
								uitstraling te garanderen.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>
								Kan het vervangen van ramen helpen bij het verminderen van
								geluidsoverlast van buitenaf?
							</Accordion.Header>
							<Accordion.Body>
								Ja, moderne ramen met goede geluidsisolatie kunnen aanzienlijk
								het geluidsniveau van de straat of de buurt verminderen,
								waardoor een rustiger interieur in huis ontstaat. Het is
								belangrijk om ramen te kiezen die een passende
								geluidsisolatieklasse hebben, wat helpt bij het beperken van
								storende geluiden van de omgeving.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>
								Hoe kan ik de kosten van het vervangen van ramen verlagen?
							</Accordion.Header>
							<Accordion.Body>
								Er zijn verschillende manieren om de kosten van het vervangen
								van ramen te verlagen. Het kiezen van energiezuinige ramen kan
								aanzienlijk bijdragen aan het verlagen van verwarmings- of
								koelingskosten van het huis. Daarnaast kunnen het vergelijken
								van aanbiedingen van verschillende fabrikanten en uitvoerders,
								evenals het profiteren van acties of kortingen, van invloed zijn
								op de uiteindelijke kosten van vervanging.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>
								Biedt het bedrijf garantie op zijn ramen en diensten?
							</Accordion.Header>
							<Accordion.Body>
								Ja, ons bedrijf garandeert de hoge kwaliteit van de aangeschafte
								ramen en professionele montagediensten. We bieden een
								garantieperiode die zowel de gekochte ramen als de
								montagewerkzaamheden omvat. Bovendien staat ons team klaar om
								eventuele vragen of problemen na de voltooiing van de montage
								aan te pakken. Ons doel is om klanten gemoedsrust te bieden,
								wetende dat onze diensten worden ondersteund, zelfs na het
								voltooien van het montageproces.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Okna5;
