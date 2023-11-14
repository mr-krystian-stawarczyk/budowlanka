import React, { useEffect, useState } from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";

import Image from "next/image";

// Import the type

function Okna5() {
	const [accordionData, setAccordionData] = useState([]);
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");

	return (
		<Container className="  py-5" fluid id="web-design-faq">
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<h1 className="text-white text-uppercase">
						Najczęsciej Zadawane Pytania : Okna
					</h1>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg" defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>Jakie Usługi ?</Accordion.Header>
							<Accordion.Body>BBBBBBBBBBBBBB</Accordion.Body>
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

export default Okna5;
