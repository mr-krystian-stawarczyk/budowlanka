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
			name: "Sophie van der Meer",
			rating: 4.5,
			review:
				"Ik ben onder de indruk van het professionalisme van het bedrijf als het gaat om het plaatsen van ramen. Hun team was uiterst betrouwbaar en nauwkeurig, en het eindresultaat overtrof mijn verwachtingen. Mijn huis heeft nu een geheel nieuwe uitstraling en betere isolatie. Ik beveel ze van harte aan.",
		},
		{
			name: "Luuk Janssen",
			rating: 5,
			review:
				"De stukadoorsdiensten die door dit bedrijf worden geleverd, overtroffen mijn verwachtingen. Hun creativiteit in het afwerken van de gevel was indrukwekkend, en de nauwkeurigheid van het werk verraste me positief. Mijn huis ziet er nu perfect uit en heeft een compleet nieuwe uitstraling gekregen.",
		},
		{
			name: "Eva De Vries",
			rating: 5,
			review:
				"Het algemene bouwwerk dat door dit bedrijf is uitgevoerd, was uiterst solide en punctueel. Hun team toonde professionaliteit en aandacht voor elk detail. Het eindresultaat overtrof mijn verwachtingen, waardoor ik nu kan genieten van een volledig vernieuwd interieur!",
		},
	];

	return (
		<Container
			fluid
			className={`d-flex bg-light text-dark py-5 align-items-center justify-content-center py-5 my-5 shadow-lg`}
		>
			<Row className="justify-content-center  align-items-center flex-column">
				<Col className="text-center">
					<h1 className="text-uppercase text-bold">
						Bekijk de mening van onze klanten
					</h1>
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
										<h3 className="text-bold my-2">{testimonial.name}</h3>
										<div
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}
										>
											{generateStars(testimonial.rating)}
										</div>
										<Card.Text className="my-2 ">
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
