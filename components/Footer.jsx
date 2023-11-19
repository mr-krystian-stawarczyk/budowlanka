import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import Image from "next/image";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { RiMailSendLine } from "react-icons/ri";
import { MdOutlinePhoneInTalk } from "react-icons/md";

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
			className="overflow-hidden shadow-md bg-white"
			ref={sectionRef}
			id="contact"
		>
			<Row className="aling-items-center justify-content-center"></Row>
			<Row className="justify-content-center align-items-top text-center  border-bottom text-dark">
				<Col lg={12}>
					<Image src="/assets/logo-footer.png" width={410} height={70} />
				</Col>{" "}
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
					</Card>
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
						</Card.Body>
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
				<Col lg={3} sm={6} className=" mx-auto">
					<Card
						style={{ maxWidth: "21rem" }}
						className="bg-white rounded border-0   "
					>
						<Card.Body className="">
							<h3 className="my-3 text-bold">Znajdz Nas Na Social Media </h3>

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
						</Card.Body>
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
}

export default Footer;
