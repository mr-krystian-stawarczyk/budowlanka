import React, { useEffect, useState } from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";

import Image from "next/image";

// Import the type

function Header6() {
	return (
		<Container className="py-5 bg-white text-dark" fluid id="about-us-faq">
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<h1 className="text-bold text-uppercase">Veelgestelde Vragen</h1>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg" defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								Wat maakt jullie bedrijf uniek?
							</Accordion.Header>
							<Accordion.Body>
								Wat ons echt uniek maakt, is onze toewijding aan maatwerk. We
								luisteren nauwlettend naar onze klanten om oplossingen te
								ontwikkelen die echt aan hun behoeften voldoen. Ons vermogen om
								innovatieve oplossingen te bieden en onze flexibiliteit om ons
								aan te passen aan verschillende projecten en vereisten, maken
								ons onderscheidend.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>Wat zijn jullie kernwaarden?</Accordion.Header>
							<Accordion.Body>
								Onze kernwaarden vormen de basis van alles wat we doen.
								Integriteit staat bij ons bovenaan, samen met teamwork,
								kwaliteit, innovatie en klanttevredenheid. We geloven dat deze
								waarden de pijlers zijn voor ons succes en onze groei.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								Hoe ziet een typische werkdag eruit?
							</Accordion.Header>
							<Accordion.Body>
								Onze dagen zijn zeer dynamisch. Teamleden werken samen om
								projecten te plannen, uit te voeren en te beheren. Communicatie,
								zowel intern als met klanten, is van vitaal belang. We besteden
								veel aandacht aan details om ervoor te zorgen dat onze projecten
								van hoge kwaliteit zijn en aan de verwachtingen voldoen.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>
								Hoe wordt er samengewerkt binnen het team?
							</Accordion.Header>
							<Accordion.Body>
								Onze teams werken nauw samen, waarbij iedereen zijn unieke
								vaardigheden en ideeën bijdraagt. Er is een cultuur van open
								communicatie en ondersteuning, waardoor we als team kunnen
								groeien en gedijen.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>
								Wat motiveert jullie als team?
							</Accordion.Header>
							<Accordion.Body>
								Het uitdagende karakter van onze projecten en het nastreven van
								uitmuntendheid zijn onze grootste motivaties. Maar bovenal
								streven we naar tevredenheid van onze klanten - dat is wat ons
								elke dag opnieuw drijft.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>
								Hoe reageert het bedrijf op feedback van klanten?
							</Accordion.Header>
							<Accordion.Body>
								Klantfeedback is cruciaal voor ons. We luisteren actief naar
								opmerkingen en suggesties, gebruiken die om onze processen te
								verbeteren en passen onze diensten aan om tegemoet te komen aan
								hun behoeften.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>
								Wat zijn de langetermijndoelstellingen van het bedrijf?
							</Accordion.Header>
							<Accordion.Body>
								Onze toekomstgerichte doelen omvatten uitbreiding naar nieuwe
								markten, een verdere focus op duurzaamheid en het bieden van
								innovatieve oplossingen die blijven voldoen aan de steeds
								veranderende behoeften van onze klanten.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Header6;
