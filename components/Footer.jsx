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
import { init } from "@emailjs/browser";
init(process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_USER_ID);

import { BsSnapchat } from "react-icons/bs";
const Footer = ({ onSubmit }) => {
	const sectionRef = useRef(null);

	const [formData, setFormData] = useState({
		email: "",
		name: "", // Zmienione z "firstName" na "name"
		phone: "", // Dodane pole "phone"
		description: "", // Zmienione z "message" na "description"
	});
	const [formSubmitted, setFormSubmitted] = useState(false);

	const handleChange = (e) =>
		setFormData({ ...formData, [e.target.id]: e.target.value });

	const sendEmail = (e) => {
		e.preventDefault();
		onSubmit(formData);
		setFormSubmitted(true);
		// Dodaj logikę do wysyłania maila z EmailJS tutaj
	};

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
							src="/assets/logo-footer.png"
							width={410}
							height={70}
							className="footer-logo-mobile" // Dodaj klasę do obrazka dla urządzeń mobilnych
						/>
					</div>
				</Col>
				<Col lg={3} sm={6} className=" mx-auto my-3 ">
					{!formSubmitted ? (
						<Col>
							{" "}
							<h3 className="my-3 text-bold ">Formularz</h3>
							<Form className="px-2">
								{" "}
								<Row>
									<Col>
										<Form.Group className="mb-3" controlId="name">
											<Form.Control
												type="text"
												placeholder="Name"
												value={formData.name}
												onChange={handleChange}
											/>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group className="mb-3" controlId="phone">
											<Form.Control
												type="text"
												placeholder="Phone"
												onChange={handleChange}
												value={formData.phone}
											/>
										</Form.Group>
									</Col>
								</Row>
								<Row>
									<Form.Group className="mb-3" controlId="email">
										<Form.Control
											type="email"
											placeholder="name@example.com"
											onChange={handleChange}
											value={formData.email}
										/>
									</Form.Group>
								</Row>
								<Row>
									<Form.Group className="mb-3" controlId="description">
										<Form.Control
											as="textarea"
											placeholder="Description"
											onChange={handleChange}
											value={formData.description}
										/>
									</Form.Group>
								</Row>
								<Row className="align-items-center justify-content-center">
									<Button
										className="btn-nav w-50"
										size="sm"
										type="submit"
										onClick={(e) => sendEmail(e)}
									>
										Send
									</Button>
								</Row>
							</Form>
						</Col>
					) : (
						<div>
							<h3>Thank you for contacting us!</h3>
							{/* Display additional content or redirect users */}
						</div>
					)}
				</Col>
				<Col lg={3} sm={6} className="mx-auto my-1">
					<Card
						style={{ maxWidth: "21rem" }}
						className="bg-white rounded border-0   "
					>
						<Card.Body className="">
							<h3 className="my-3 text-bold">Usługi</h3>

							<Link href="okna" className="footer-links">
								<Card.Text className="py-2 hover ">Okna</Card.Text>
							</Link>
							<Link href="tynki" className="footer-links">
								<Card.Text className="py-2 hover ">Tynki</Card.Text>
							</Link>
							<Link href="glazura" className="footer-links ">
								<Card.Text className="py-2 hover">Glazura</Card.Text>
							</Link>
							<Link href="termo" className="footer-links ">
								<Card.Text className="py-2 hover">Izolacja</Card.Text>
							</Link>
							<Link href="ogolne" className="footer-links ">
								<Card.Text className="py-2 hover">Ogolne</Card.Text>
							</Link>
							<Link href="ogrzewanie" className="footer-links ">
								<Card.Text className="py-2 hover">Ogrzewanie</Card.Text>
							</Link>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} sm={6} className=" mx-auto ">
					<Card style={{ maxWidth: "21rem" }} className=" rounded  border-0  ">
						<Card.Body className="">
							<h3 className="my-3 text-bold">Nasza Firma</h3>
							<Link href="/about" className="footer-links">
								<Card.Text className="py-2 hover "> O Nas</Card.Text>
							</Link>
							<Link href="/contact" className="footer-links">
								<Card.Text className="py-2 hover ">Kontakt</Card.Text>
							</Link>

							<Link href="/contact" className="footer-links">
								<Card.Text className="py-2 hover ">Pytania</Card.Text>
							</Link>
							<Link href="werk" className="footer-links ">
								<Card.Text className="py-2 hover">Realizacje</Card.Text>
							</Link>
						</Card.Body>
						<Card.Text className="footer-links contact-links">
							<a
								target="_blank"
								href="https://www.facebook.com/profile.php?id=100092994447854"
								style={{ outline: "none", textDecoration: "none" }}
							>
								<AiOutlineFacebook
									style={{ fontSize: "3rem" }}
									className="contact-icons fb-icon"
								/>{" "}
								<span className="text-bold text-dark">SEBDA</span>
							</a>
						</Card.Text>
					</Card>
				</Col>

				<Col lg={3} sm={6} className=" mx-auto my-1">
					<Card
						className="bg-white rounded border-0   pt-3 "
						style={{ maxWidth: "21rem" }}
					>
						<h3 className="my-3 text-bold">Kontakt</h3>
						<a onClick={handleEmailClick} className="footer-links ">
							<h5 className="py-3 hover">
								<RiMailSendLine /> dgbouwgroep@gmail.com
							</h5>
						</a>
						<h5 className="py-3 footer-links hover">
							<MdOutlinePhoneInTalk /> +31684665722
						</h5>
						<h5 className="py-3 hover">
							<MdOutlinePhoneInTalk /> +31615968284
						</h5>
					</Card>
				</Col>
			</Row>
			<Row className="text-center my-2 align-items-center">
				<Col>
					<h6 className="text-black">
						2023 DB BOUWGROEP Wszystkie Prawa Zastrzezone
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
								src="/assets/pixel-genie webdesign logo.png"
								width={50}
								height={50}
								className="p-2"
								alt="webentwicklung-nettetal-fragen1"
							/>
						</a>
					</h6>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
