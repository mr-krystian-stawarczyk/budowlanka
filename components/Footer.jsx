import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import Image from "next/image";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { RiMailSendLine } from "react-icons/ri";
import { MdOutlinePhoneInTalk } from "react-icons/md";

import emailjs from "@emailjs/browser";

import { BsSnapchat } from "react-icons/bs";
const Footer = () => {
	const sectionRef = useRef(null);

	const [ref, inView] = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});

	const animateIn = {
		opacity: 1,

		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	};

	const email = "dgbouwgroep@gmail.com";

	const controls = useAnimation();
	useEffect(() => {
		if (inView) {
			controls.start(animateIn);
		}
	}, [inView, controls, animateIn]);

	const handleEmailClick = () => {
		window.location.href = `mailto:${email}`;
	};

	return (
		<Container
			fluid
			className="overflow-hidden shadow-md bg-white py-5 "
			ref={sectionRef}
			id="contact"
		>
			<Row className="aling-items-center justify-content-center"></Row>
			<Row className="justify-content-center align-items-top text-center  border-bottom text-dark">
				<Col lg={12} xs={12} className="text-center">
					<div className="d-flex justify-content-center align-items-center">
						<Image
							alt="logo"
							src="/assets/logo-footer1.png"
							width={400}
							height={50}
							className="footer-logo-mobile"
							priority
						/>
					</div>
				</Col>

				<Col lg={3} sm={6} className="mx-auto my-1">
					<Card
						style={{ maxWidth: "21rem" }}
						className="bg-white rounded border-0   "
					>
						<Card.Body className="">
							<h3 className="my-3 text-bold">Diensten</h3>
							<Link href="isolatie" className="footer-links ">
								<Card.Text className="py-2 hover">Warmte Isolatie</Card.Text>
							</Link>
							<Link href="ramen" className="footer-links">
								<Card.Text className="py-2 hover ">Ramen</Card.Text>
							</Link>
							<Link href="pleisterwerk" className="footer-links">
								<Card.Text className="py-2 hover ">Pleister</Card.Text>
							</Link>
							<Link href="glazuur" className="footer-links ">
								<Card.Text className="py-2 hover">Glazuur</Card.Text>
							</Link>

							<Link href="bouwwerkzaamheden" className="footer-links ">
								<Card.Text className="py-2 hover">Bouwwerkzaamheden</Card.Text>
							</Link>
							<Link href="vloerverwarming" className="footer-links ">
								<Card.Text className="py-2 hover">Vloerverwarming</Card.Text>
							</Link>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} sm={6} className=" mx-auto ">
					<Card style={{ maxWidth: "21rem" }} className=" rounded  border-0  ">
						<Card.Body className="">
							<h3 className="my-3 text-bold">Ons Bedrijf</h3>
							<Link href="/overons" className="footer-links">
								<Card.Text className="py-2 hover ">Over Ons</Card.Text>
							</Link>
							<Link href="/contact" className="footer-links">
								<Card.Text className="py-2 hover ">Contact</Card.Text>
							</Link>

							<Link href="/contact" className="footer-links">
								<Card.Text className="py-2 hover ">Vragen</Card.Text>
							</Link>
							<Link href="werk" className="footer-links ">
								<Card.Text className="py-2 hover">Werk</Card.Text>
							</Link>
						</Card.Body>
						<Card.Text className="footer-links contact-links">
							<a
								target="_blank"
								href="https://www.facebook.com/profile.php?id=61555414846169"
								style={{ outline: "none", textDecoration: "none" }}
							>
								<AiOutlineFacebook
									style={{ fontSize: "3rem" }}
									className="contact-icons fb-icon"
								/>{" "}
								<span className="text-bold text-dark">DG BOUWGROEP</span>
							</a>
						</Card.Text>
					</Card>
				</Col>

				<Col lg={3} sm={6} className=" mx-auto my-1">
					<Card
						className="bg-white rounded border-0   pt-3 "
						style={{ maxWidth: "21rem" }}
					>
						<h3 className="my-3 text-bold">Contact</h3>
						<h4 className="py-3 footer-links hover">
							<MdOutlinePhoneInTalk /> Greg: +31 684665722
						</h4>
						<h4 className="py-3 hover">
							<MdOutlinePhoneInTalk /> Darek: +31 615968284
						</h4>{" "}
						<a onClick={handleEmailClick} className="footer-links ">
							<h5 className="py-3 hover">
								<RiMailSendLine /> dgbouwgroep@gmail.com
							</h5>
						</a>
					</Card>
				</Col>
			</Row>
			<Row className="text-center my-2 align-items-center">
				<Col>
					<h6 className="text-black">
						2023 DG BOUWGROEP Alle rechten voorbehouden
					</h6>
				</Col>

				<Col>
					<Link href="/policy" className="footer-links ">
						<h6 className="hover">Politik & Impressium</h6>
					</Link>
				</Col>
				<Col className="hover">
					<h6 className="text-black">
						Design
						<a href="https://pixel-genie.de/">
							<Image
								src="/assets/pixel-genie-logo.png"
								width={50}
								height={50}
								className="p-2"
								alt="webdesign-nettetal-pixel-genie"
							/>
						</a>
					</h6>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
