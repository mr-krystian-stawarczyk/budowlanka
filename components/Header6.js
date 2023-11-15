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
						Najczęsciej Zadawane Pytania
					</h1>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg" defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>Jakie Usługi ?</Accordion.Header>
							<Accordion.Body>
								Nasza firma oferuje szeroki zakres usług, obejmujących prace
								remontowe, budowlane oraz wykończeniowe. Specjalizujemy się w
								malowaniu i tynkowaniu ścian, układaniu glazury i terakoty, a
								także w montażu okien i drzwi. Wykonujemy również prace związane
								z elewacjami budynków, włączając w to tynkowanie i ocieplanie
								fasad. Nasze usługi ogólnobudowlane obejmują także prace
								hydrauliczne i elektryczne, co pozwala nam kompleksowo
								obsługiwać projekty remontowe czy budowlane. Działamy z myślą o
								zapewnieniu wysokiej jakości usług, dbając o szczegóły i
								indywidualne potrzeby klienta. Niezależnie od skali projektu,
								stawiamy na profesjonalizm, solidność wykonania i satysfakcję
								klienta, dostarczając kompleksowe rozwiązania dopasowane do
								różnorodnych potrzeb.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>Czas oczekiwania ?</Accordion.Header>
							<Accordion.Body>BBBBBBBBBBBBBB</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>Jak daleko jezdzicie ?</Accordion.Header>
							<Accordion.Body>BBBBBBBBBBBBBB</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>Czy przedpłata ?</Accordion.Header>
							<Accordion.Body>BBBBBBBBBBBBBB</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>Gdzie macie siedzibe ?</Accordion.Header>
							<Accordion.Body>BBBBBBBBBBBBBB</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>Jakie okna oferujecie ?</Accordion.Header>
							<Accordion.Body>BBBBBBBBBBBBBB</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>
								Jakie certyfikaty / maszyny macie ?
							</Accordion.Header>
							<Accordion.Body>BBBBBBBBBBBBBB</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Header6;
