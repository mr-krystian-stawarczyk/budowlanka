import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

import { BsSnapchat } from "react-icons/bs";
import { useState, useEffect } from "react";
function Contact2() {
	const handleLinkClick = (link) => {
		if (link) {
			window.open(`https://${encodeURIComponent(link)}`);
		}
	};

	return (
		<Container className=" py-5 blur-bg text-dark" fluid>
			<Row
				className="justify-content-center text-center align-items-center"
				style={{ minHeight: "70vh" }}
			>
				<Col lg={5} className="mx-auto">
					<Card className="border-0 bg-transparent">
						<Card.Body>
							<h2 className="text-bold">gsdsgssd</h2>
							<Card.Text>sdfdsfdsfdfs</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="mx-auto d-flex">
					<div className="contact-links ">
						<a onClick={() => handleLinkClick} target="_blank">
							<AiOutlineFacebook
								style={{ fontSize: "7rem" }}
								className="contact-icons fb-icon"
							/>
						</a>
					</div>
					<div className="contact-links  ">
						<a onClick={() => handleLinkClick} target="_blank">
							<BsSnapchat
								style={{ fontSize: "7rem" }}
								className="contact-icons sn-icon"
							/>
						</a>
					</div>
					<div className="contact-links  ">
						<a onClick={() => handleLinkClick} target="_blank">
							<AiOutlineInstagram
								style={{ fontSize: "7rem" }}
								className="contact-icons in-icon"
							/>
						</a>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default Contact2;
