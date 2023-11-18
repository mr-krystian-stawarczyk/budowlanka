import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Image from "next/image";

function Contact1() {
	const handleCall = () => {
		const phoneLink = document.createElement("a");
		phoneLink.href = `tel:${telefonPrzycisk}`;
		phoneLink.click();
	};

	const adresPrzycisk =
		"https://www.google.com/maps/place/Jean+Monnetstraat,+Heemskerk,+Holandia/@52.5170484,4.6785595,17z/data=!3m1!4b1!4m6!3m5!1s0x47c5f0a9d4bb0c8b:0x20f6e1a2748063e!8m2!3d52.5170484!4d4.6811344!16s%2Fg%2F1tfsm59d?entry=ttu";

	const telefonPrzycisk = " +31684665722";

	const handleEmailClick = () => {
		window.location.href = `mailto:${emailPrzycisk}`;
	};

	return (
		<Container className="bg-light text-dark" fluid>
			<div className="py-5">
				<Row className=" justify-content-center text-center align-items-center py-5">
					<h1 className="py-3 text-bold">Kontakt</h1>
					<Col lg={5} md={8} sm={8} className="mx-auto my-3 ">
						<Card
							style={{ minWidth: "18rem" }}
							className="bg-light border-0 shadow-lg  contact-card "
						>
							<Card.Body>
								<AiOutlinePhone style={{ fontSize: "4rem" }} />
								<Card.Title>Telefon</Card.Title>
								<Card.Text>Grzesiek: +31684665722</Card.Text>
								<Card.Text>Darek: +31615968284</Card.Text>
								<Button className="border-0 btn-nav" onClick={handleCall}>
									Zadzwon
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={5} md={8} sm={8} className="my-3 mx-auto">
						<Card
							style={{ minWidth: "18rem" }}
							className="bg-light border-0 shadow-lg"
						>
							<Card.Body>
								<AiOutlineMail style={{ fontSize: "4rem" }} />
								<Card.Title>E-mail</Card.Title>
								<Card.Text>dgbouwgroep@gmail.com</Card.Text>
								<Button className="border-0 btn-nav" onClick={handleEmailClick}>
									E-Mail Wyslij
								</Button>
							</Card.Body>
						</Card>
					</Col>

					<Col lg={5} md={8} sm={8} className="my-3 mx-auto">
						<Card
							style={{ minWidth: "18rem" }}
							className="bg-light border-0 shadow-lg"
						>
							<Card.Body>
								<Image src="/assets/kontakt1.png" height={200} width={200} />

								<Card.Title>
									{" "}
									<HiOutlineLocationMarker style={{ fontSize: "4rem" }} />
								</Card.Title>
								<Card.Text>Jean Monnetstraat Heemskerk, Holandia</Card.Text>
								<Button
									className="border-0 btn-nav"
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
