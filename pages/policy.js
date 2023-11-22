import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Policy() {
	return (
		<Container fluid className="py-5 mt-2 bg-danger vh-100 text-dark">
			<Row className="text-center ">
				<h2 className="py-3">Politik & Cookies</h2>
			</Row>

			<Row className="mx-auto my-2 text-center">
				<h1>Site Under Costruction!!!!</h1>
			</Row>

			<Row className="justify-content-center align-items-center text-center">
				<Col lg={6}>
					{" "}
					<h3>Greg - Sebda</h3> <h3>KVK 88097420</h3>
					<h3>Tel: 0685664722</h3>
				</Col>
				<Col lg={6}>
					{" "}
					<h3>Darek - Wagner Klussenbedrijf</h3> <h3>KVK 34276496</h3>
					<h3>Tel: 0615968284</h3>
				</Col>
			</Row>
		</Container>
	);
}

export default Policy;
