import React, { useEffect, useState } from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";

import Image from "next/image";

// Import the type

function Termo5() {
	const [accordionData, setAccordionData] = useState([]);
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");

	return (
		<Container className="bg-light text-dark  py-5" fluid>
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<h1 className="text-bold text-uppercase">Meest Gestelde Vragen</h1>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg" defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								Wat is de buitenisolatie van een huis?
							</Accordion.Header>
							<Accordion.Body>
								Buitenisolatie is een uitgebreid proces waarbij een isolatielaag
								wordt aangebracht op de buitenmuren van een gebouw. Het
								hoofddoel is om warmteverlies te beperken door een beschermende
								laag te creëren die voorkomt dat kou van buiten naar binnen
								dringt en warmte van binnen naar buiten ontsnapt. Verschillende
								isolatiematerialen worden gebruikt, zoals piepschuim, minerale
								wol of isolatieplaten, gevolgd door een afwerking die past bij
								de esthetiek van het huis.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								Wat is het belangrijkste doel van het installeren van isolatie
								in een huis?
							</Accordion.Header>
							<Accordion.Body>
								Het belangrijkste doel van het installeren van isolatie is het
								creëren van een beschermende laag die warmteverlies
								minimaliseert en de energie-efficiëntie van het gebouw
								verbetert. Door de isolatie van de buitenmuren en het dak
								creëert isolatie een thermische barrière die voorkomt dat kou
								van buiten naar binnen dringt en het oververhitten van het huis
								in warmere maanden beperkt. Dit heeft niet alleen invloed op de
								vermindering van de verwarmings- en koelingskosten, maar ook op
								het algemene comfort van de bewoners door
								temperatuurschommelingen in de kamers te elimineren.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								Beïnvloedt buitenisolatie het uiterlijk van een gebouw?
							</Accordion.Header>
							<Accordion.Body>
								Ja, het installeren van buitenisolatie kan het uiterlijk van een
								huis veranderen, maar er zijn veel opties om de isolatie aan te
								passen aan esthetische voorkeuren. Er zijn verschillende
								afwerkingen, kleuren en texturen van pleisterwerk beschikbaar,
								waardoor de isolatie kan worden aangepast aan de architectuur
								van het gebouw. Als gevolg hiervan verbetert isolatie niet
								alleen de energie-efficiëntie, maar kan het ook het uiterlijk
								van het gebouw verfraaien of veranderen.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>
								Wat zijn de voordelen van interne isolatie?
							</Accordion.Header>
							<Accordion.Body>
								Interne isolatie heeft veel voordelen, naast het verlagen van
								verwarmingskosten. Het zorgt voor temperatuurregeling in
								verschillende kamers, waardoor koude of warme gebieden worden
								geëlimineerd en een gelijkmatig thermisch comfort in het hele
								huis wordt geboden. Bovendien verbetert het de geluidsisolatie
								door geluidsoverdracht tussen kamers te beperken, wat belangrijk
								kan zijn voor mensen op zoek naar rust en privacy.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>
								Is er een verschil tussen thermische en akoestische isolatie?
							</Accordion.Header>
							<Accordion.Body>
								Ja, er is een duidelijk verschil tussen thermische en
								akoestische isolatie. Thermische isolatie richt zich
								voornamelijk op het behouden van warmte binnen een gebouw of het
								voorkomen van warmteverlies naar buiten. Akoestische isolatie
								daarentegen heeft tot doel het binnendringen van geluiden tussen
								kamers te verminderen, wat vooral belangrijk kan zijn voor
								gebouwen die zich bevinden in lawaaierige gebieden.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>
								Welke materialen worden gebruikt voor het isoleren van huizen?
							</Accordion.Header>
							<Accordion.Body>
								Er zijn veel verschillende materialen die worden gebruikt voor
								het isoleren van huizen, zoals piepschuim, minerale wol,
								polyurethaanschuim of isolatiepanelen gemaakt van verschillende
								materialen, afhankelijk van de behoeften en klimatologische
								omstandigheden. Elk van deze materialen heeft zijn eigen
								kenmerken, zoals isolerende eigenschappen, vochtbestendigheid of
								brandwerendheid, waardoor isolatie kan worden aangepast aan
								specifieke gebouweisen.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>
								Is de thermische isolatie duurzaam?
							</Accordion.Header>
							<Accordion.Body>
								Correct geïnstalleerde thermische isolatie kan vele jaren
								meegaan. De duurzaamheid ervan kan echter afhangen van
								verschillende factoren, zoals de kwaliteit van de
								isolatiematerialen, de professionaliteit van de installateurs en
								de weersomstandigheden waaraan het is blootgesteld. Regelmatige
								inspecties van de staat van de isolatie kunnen helpen om ervoor
								te zorgen dat het gedurende lange tijd zijn functie vervult.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="7">
							<Accordion.Header>
								Is de installatie van thermische isolatie ingewikkeld?
							</Accordion.Header>
							<Accordion.Body>
								Het installeren van thermische isolatie kan een complex proces
								zijn dat technische kennis en ervaring vereist. Verschillende
								installatiemethoden en de diversiteit aan materialen kunnen het
								proces uitdagender maken. Daarom wordt het aanbevolen om gebruik
								te maken van de diensten van professionals die de nodige
								vaardigheden en ervaring hebben om de thermische isolatie
								correct uit te voeren.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="8">
							<Accordion.Header>
								Vereist thermische isolatie regelmatig onderhoud?
							</Accordion.Header>
							<Accordion.Body>
								Over het algemeen heeft isolatie geen regelmatig onderhoud
								nodig. Het wordt echter aanbevolen om regelmatig inspecties uit
								te voeren, vooral na langdurige weersomstandigheden, om ervoor
								te zorgen dat de isolatie niet beschadigd is geraakt of
								verslechterd is. Onderhoud kan reparaties van eventuele schade
								of lekken omvatten, wat kan voorkomen dat de energie-efficiëntie
								van het gebouw afneemt.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="9">
							<Accordion.Header>
								Heeft thermische isolatie invloed op de waarde van onroerend
								goed?
							</Accordion.Header>
							<Accordion.Body>
								Goed geïnstalleerde thermische isolatie kan de waarde van
								onroerend goed verhogen. De verbetering van de
								energie-efficiëntie van het gebouw, wat resulteert in lagere
								exploitatiekosten en een beter woongenot, kan aantrekkelijk zijn
								voor potentiële kopers of huurders. De invloed van isolatie op
								de waarde van onroerend goed kan echter ook afhangen van andere
								factoren, zoals locatie, de technische staat van het gebouw en
								de huidige trends op de vastgoedmarkt.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Termo5;
