import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Policy() {
	return (
		<Container fluid className="py-5 mt-2 bg-light  text-dark">
			<Row className="text-center ">
				<h2 className="py-3">Politik & Impressium</h2>
			</Row>

			<Row className="justify-content-center mb-3 align-items-center text-center">
				<Col lg={6}>
					{" "}
					<h3>Greg - Sebda</h3> <h3>KVK 88097420</h3>
					<h3>Tel: 0685664722</h3>
					<h3>Loc: Jean Monnetstraat, Heemskerk</h3>
				</Col>
				<Col lg={6}>
					{" "}
					<h3>Darek - Wagner Klussenbedrijf</h3> <h3>KVK 34276496</h3>
					<h3>Tel: 0615968284</h3>
					<h3>Loc: Jean Monnetstraat, Heemskerk</h3>
				</Col>
			</Row>
			<Row className="my-2">
				<Col>
					<h3>Privacyverklaring </h3>Bij DG Bouwgroep hechten we veel waarde aan
					uw privacy en streven we ernaar transparant te zijn over hoe we uw
					informatie verzamelen, gebruiken en beschermen.
				</Col>
			</Row>
			<Row className="my-2">
				<Col>
					<h3>PERSOONLIJKE INFORMATIE </h3> Bij het gebruik van onze website en
					diensten kan het voorkomen dat we bepaalde persoonlijke gegevens
					verzamelen, zoals uw naam, e-mailadres, telefoonnummer en adres. Deze
					informatie kan worden verzameld wanneer u ons contactformulier invult,
					een offerte aanvraagt of gebruikmaakt van onze diensten.
				</Col>
			</Row>
			<Row className="my-2">
				<Col>
					<h5>Waarom verzamelen we uw gegevens? </h5>We verzamelen uw gegevens
					om: U te voorzien van informatie over onze diensten Uw vragen te
					beantwoorden en u te ondersteunen bij uw projecten Uw verzoeken om
					offertes te verwerken Verbeteringen aan te brengen in onze
					dienstverlening
				</Col>
			</Row>
			<Row className="my-2">
				<Col>
					<h5>Hoe gebruiken we uw informatie?</h5> Uw informatie wordt
					uitsluitend gebruikt binnen DG Bouwgroep en wordt niet gedeeld met
					derden zonder uw toestemming, tenzij vereist door de wet. Beveiliging
					van uw gegevens We nemen de nodige technische en organisatorische
					maatregelen om uw informatie te beschermen tegen verlies, misbruik,
					ongeautoriseerde toegang of openbaarmaking.
				</Col>
			</Row>
			<Row className="my-2">
				<Col>
					<h3>COOKIES </h3>Onze website maakt gebruik van cookies om de
					gebruikerservaring te verbeteren. Cookies zijn kleine tekstbestanden
					die op uw apparaat worden opgeslagen wanneer u onze website bezoekt.
					Ze helpen ons bij het analyseren van webverkeer en het begrijpen van
					uw voorkeuren, waardoor we onze website kunnen aanpassen aan uw
					behoeften. U kunt ervoor kiezen om cookies te accepteren of te
					weigeren. Het weigeren van cookies kan echter invloed hebben op de
					functionaliteit van de website.
				</Col>
			</Row>
			<Row className="my-2">
				<Col></Col>
			</Row>
		</Container>
	);
}

export default Policy;
