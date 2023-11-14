import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import Image from "next/image";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

import { BsSnapchat } from "react-icons/bs";
function Footer() {
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
			className="overflow-hidden shadow-md bg-white"
			ref={sectionRef}
			id="contact"
		>
			<motion.div ref={ref} animate={controls}>
				<Row className=" justify-content-center align-items-top text-center  mt-2  border-bottom text-dark">
					<Col lg={3} sm={6} className=" mx-auto">
						<Card
							style={{ width: "20rem" }}
							className="bg-transparent border-0  "
						>
							<Card.Body className="">
								<h3 className="my-3 text-bold">Nasza Firma</h3>
								<Link href="/about" className="footer-links">
									<Card.Text className="py-2 hover"> O Nas</Card.Text>
								</Link>
								<Link href="/contact" className="footer-links">
									<Card.Text className="py-2 hover">Kontakt</Card.Text>
								</Link>
								<Link href="/blog" className="footer-links">
									<Card.Text className="py-2 hover">Usługi</Card.Text>
								</Link>
								<Link href="/contact" className="footer-links">
									<Card.Text className="py-2 hover">Pytania</Card.Text>
								</Link>
								<Link href="werk" className="footer-links">
									<Card.Text className="py-2 hover">Realizacje</Card.Text>
								</Link>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={3} sm={6} className="mx-auto">
						<Card
							style={{ width: "20rem" }}
							className="bg-transparent border-0  "
						>
							<Card.Body className="">
								<h3 className="my-3 text-bold">Usługi</h3>

								<Link href="okna" className="footer-links">
									<Card.Text className="py-2 hover">Okna</Card.Text>
								</Link>
								<Link href="tynki" className="footer-links">
									<Card.Text className="py-2 hover">Tynki</Card.Text>
								</Link>
								<Link href="glazura" className="footer-links">
									<Card.Text className="py-2 hover">Glazura</Card.Text>
								</Link>
								<Link href="termo" className="footer-links">
									<Card.Text className="py-2 hover">Izolacja</Card.Text>
								</Link>
								<Link href="ogolne" className="footer-links">
									<Card.Text className="py-2 hover">Ogolne</Card.Text>
								</Link>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={3} sm={6} className=" mx-auto">
						<Card
							style={{ width: "20rem" }}
							className="bg-transparent border-0  "
						>
							<Card.Body className="">
								<h3 className="my-3 text-bold">Social Media </h3>

								<Card.Text className="footer-links contact-links">
									<a target="_blank">
										<AiOutlineFacebook
											style={{ fontSize: "3rem" }}
											className="contact-icons fb-icon"
										/>
									</a>
								</Card.Text>

								<Card.Text className="footer-links contact-links">
									<a target="_blank">
										<AiOutlineInstagram
											style={{ fontSize: "3rem" }}
											className="contact-icons in-icon"
										/>
									</a>
								</Card.Text>

								<Card.Text className="footer-links contact-links">
									<a target="_blank">
										<BsSnapchat
											style={{ fontSize: "3rem" }}
											className="contact-icons sn-icon"
										/>
									</a>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={3} sm={6} className=" mx-auto">
						<Card
							className="bg-transparent border-0  pt-3 "
							style={{ width: "20rem" }}
						>
							<h3 className="my-3 text-bold">Kontakt</h3>
							<a onClick={handleEmailClick} className="footer-links hover">
								<h4 className="py-5">Email</h4>
							</a>
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
			</motion.div>
		</Container>
	);
}

export default Footer;
