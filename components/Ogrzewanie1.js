import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Ogrzewanie1() {
	const [windowWidth, setWindowWidth] = useState(0);
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		// Attach the event listener only on the client side
		if (typeof window !== "undefined") {
			setWindowWidth(window.innerWidth);
			window.addEventListener("resize", handleResize);
		}

		// Clean up the event listener when the component unmounts
		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("resize", handleResize);
			}
		};
	}, []);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const isMobile = windowWidth <= 768;

	const [ref, inView] = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});

	const animateIn = {
		opacity: 1,
		transition: {
			duration: 0.1,
			ease: "easeInOut",
		},
	};

	const animateOut = {
		opacity: 0,
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	};

	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start(animateIn);
		} else {
			controls.start(animateOut);
		}
	}, [inView, controls, animateIn, animateOut]);

	return (
		<Container
			fluid
			className={`d-flex py-3 align-items-center bg-light text-dark justify-content-center ${
				isMobile ? "min-vh-100" : "vh-100"
			}`}
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={6} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/ogrzewanie1.png"
						width={400}
						height={400}
						className="responsive-image rounded shadow-lg"
						alt="Sanity Image"
					/>
				</Col>
				<Col lg={6} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold"> MATA GRZEWCZA</h1>
							<Card.Text>
								Ekonomiczne i łatwe w montażu rozwiązanie, jakim jest mata
								podłogowa grzewcza, to nowoczesny sposób na ciepłą podłogę w
								całym domu. Rosnąca popularność tego typu systemów grzewczych
								wynika z uniwersalnego charakteru instalacji oraz
								gwarantowanego, szybkiego rozgrzania podłogi pokrytej gresem,
								płytkami ceramicznymi, terakotą czy marmurem.
							</Card.Text>
							<Card.Text>
								Stała moc na poziomie 150W/m2 zapewnia optymalne parametry
								cieplne, a sam system w żaden sposób nie jest zależny od
								posiadanej instalacji centralnego ogrzewania, dlatego można w
								dowolny sposób nim sterować.
							</Card.Text>

							<div className="text-center">
								<Link href="#ogrzewanie2" className="m-1">
									<Button className="btn-nav btn-lg">
										{" "}
										<MdDoubleArrow
											style={{
												fontSize: "2rem",
												color: "black",
												backgroundColor: "transparent",
												rotate: "90deg",
											}}
										/>
									</Button>
								</Link>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Ogrzewanie1;
