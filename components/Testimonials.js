import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function Testimonials() {
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		if (typeof window !== "undefined") {
			setWindowWidth(window.innerWidth);
			window.addEventListener("resize", handleResize);
		}

		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("resize", handleResize);
			}
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
			duration: 1,
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

	// Funkcja do generowania gwiazdek na podstawie oceny
	const generateStars = (rating) => {
		const stars = [];
		const starCount = Math.floor(rating);

		for (let i = 0; i < starCount; i++) {
			stars.push(<FaStar style={{ color: "gold" }} key={i} />);
		}

		if (rating % 1 !== 0) {
			stars.push(<FaStarHalfAlt style={{ color: "gold" }} key={starCount} />);
		}

		return stars;
	};

	// Dane recenzji z ocenami
	const testimonialsData = [
		{
			name: "Janusz",
			rating: 4.5,
			review: "Supe dfg fdg fd gdfg dfggfgfd r sdaaaaaaaaaaaaaaaaa",
		},
		{
			name: "Marian",
			rating: 5,
			review: "Supgdfgfdfgdfdgdgfd fgd fdgf gdf fg dg fdg gdfger",
		},
		{ name: "Czeslaw", rating: 5, review: "Super sadasdasdsada fd gf gdfg" },
	];

	return (
		<Container
			fluid
			className={`d-flex bg-color text-dark py-5 align-items-center justify-content-center py-5 my-5`}
		>
			<Row className="justify-content-center  align-items-center flex-column">
				<Col className="text-center">
					<h1 className="text-uppercase">Sprawdz Opinie Naszych Klientów</h1>
				</Col>
				<Col className="mx-auto my-2">
					<Carousel
						indicators={false}
						controls={false}
						interval={3000}
						slide={false}
					>
						{testimonialsData.map((testimonial, index) => (
							<Carousel.Item key={index}>
								<Card className="border-0 bg-transparent text-center">
									<Card.Body>
										<h1 className="text-bold my-2">{testimonial.name}</h1>
										<div
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}
										>
											{generateStars(testimonial.rating)}
										</div>
										<Card.Text className="my-2 text-bold">
											{testimonial.review}
										</Card.Text>
									</Card.Body>
								</Card>
							</Carousel.Item>
						))}
					</Carousel>
				</Col>
			</Row>
		</Container>
	);
}

export default Testimonials;
