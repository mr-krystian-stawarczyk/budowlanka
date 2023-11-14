import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

function Contact1() {
	const handleCall = () => {
		const phoneLink = document.createElement("a");
		phoneLink.href = `tel:${telefonPrzycisk}`;
		phoneLink.click();
	};

	const handleEmailClick = () => {
		window.location.href = `mailto:${emailPrzycisk}`;
	};

	return (
		<Container className="" fluid>
			<div className="py-5">
				<Row className=" justify-content-center text-center align-items-center py-5">
					<h1 className="py-3 text-bold">Kontakt</h1>
					<Col lg={5} md={8} sm={8} className="mx-auto my-3 ">
						<Card
							style={{ minWidth: "18rem" }}
							className="bg-transparent border-0 shadow-lg  contact-card "
						>
							<Card.Body>
								<AiOutlinePhone style={{ fontSize: "4rem" }} />
								<Card.Title>Telefon</Card.Title>
								<Card.Text>8756756756567</Card.Text>
								<Button className="border-0" onClick={handleCall}>
									Anruf
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={5} md={8} sm={8} className="my-3 mx-auto">
						<Card
							style={{ minWidth: "18rem" }}
							className="bg-transparent border-0 shadow-lg"
						>
							<Card.Body>
								<AiOutlineMail style={{ fontSize: "4rem" }} />
								<Card.Title>E-mail</Card.Title>
								<Card.Text>fdsfds@fds</Card.Text>
								<Button className="border-0" onClick={handleEmailClick}>
									E-Mail schicken
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={5} md={8} sm={8} className="my-3 mx-auto">
						<Card
							style={{ minWidth: "18rem" }}
							className="bg-transparent border-0 shadow-lg"
						>
							<Card.Body>
								<HiOutlineLocationMarker style={{ fontSize: "4rem" }} />
								<Card.Title>Adresse</Card.Title>
								<Card.Text>fdsdf 10</Card.Text>
								<Button
									className="border-0"
									onClick={() => {
										window.open(
											`https://www.google.com/maps/place/${encodeURIComponent(
												adresPrzycisk
											)}`
										);
									}}
								>
									Adresse
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		</Container>
	);
}

export default Contact1;
