import React, { useEffect, useState } from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";

import Image from "next/image";

// Import the type

function Header6() {
	return (
		<Container className="  py-5" fluid id="web-design-faq">
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<h1 className="text-white">Najczesciej Zadawane Pytania : Firma</h1>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg">
						<Accordion.Item>
							<Accordion.Header>AAA</Accordion.Header>
							<Accordion.Body>BBB</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item>
							<Accordion.Header>AAA</Accordion.Header>
							<Accordion.Body>BBB</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item>
							<Accordion.Header>AAA</Accordion.Header>
							<Accordion.Body>BBB</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item>
							<Accordion.Header>AAA</Accordion.Header>
							<Accordion.Body>BBB</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Header6;
