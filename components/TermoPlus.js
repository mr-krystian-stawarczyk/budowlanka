import { useState, useEffect, useRef } from "react";
import {
	Container,
	Row,
	Col,
	Card,
	Carousel,
	Button,
	CardGroup,
} from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";

import Link from "next/link";

function TermoPlus() {
	const router = useRouter();
	const { id } = router.query;

	const sectionRef = useRef(null);
	const [animate, setAnimate] = useState(false);
	const [animateImg, setAnimateImg] = useState(false);

	const handleIntersection = (entries) => {
		if (entries[0].isIntersecting) {
			setAnimate(true);
			setAnimateImg(true);
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection);
		observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	const animationProps = useSpring({
		from: { opacity: 0, transform: "translateX(-50%)", margin: "5%" },
		to: {
			opacity: animate ? 1 : 0,
			transform: animate ? "translateX(0)" : "translateX(-50%)",
		},
		config: { duration: 1000 },
		delay: 1000,
	});

	const imgAnimationProps = useSpring({
		from: { opacity: 0, transform: "translateX(50%)" },
		to: {
			opacity: animate ? 1 : 0,
			transform: animate ? "translateX(0)" : "translateX(50%)",
		},
		config: { duration: 1000 },
		delay: 1000,
	});
	const animationPropsMiddle = useSpring({
		from: { opacity: 0, margin: "5%" },
		to: {
			opacity: animate ? 1 : 0,
		},
		config: { duration: 1000 },
		delay: 1000,
	});
	return (
		<Container
			fluid
			className="  text-dark blur-bg  align-items-center overflow-hidden  p-2 border-0  "
			ref={sectionRef}
		>
			<Row
				className=" text-center justify-content-center align-items-center"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{" "}
				<Row className="py-3 text-center ">
					<Col>
						{" "}
						<h1 className="my-5 text-bold">
							Voordelen van het gebruik van onze isolatie
						</h1>
					</Col>
				</Row>{" "}
				<Row className="text-center justify-content-center align-items-center align-self-center">
					<Row className="justify-content-center align-items-center">
						{" "}
						<Col lg={4} className="mx-auto">
							{" "}
							<animated.div style={animationProps}>
								{" "}
								<Card
									className="border-sm rounded-0 my-card"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "27rem",
										height: "29rem",
									}}
								>
									{" "}
									<Card.Img
										src="/assets/termoplus1.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>
											<span className="text-bold">
												Thermische isolatie van het dak
											</span>
										</Card.Title>
										<Card.Text>
											Onze isolatieoplossingen voor daken garanderen het behoud
											van optimale binnentemperaturen gedurende het hele jaar.
											Hiermee vermijdt u warmteverlies in de winter en
											oververhitting van ruimtes in de zomer, wat resulteert in
											lagere kosten voor verwarming en airconditioning.
										</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>{" "}
						</Col>
						<Col lg={4} className="mx-auto">
							{" "}
							<animated.div style={animationPropsMiddle}>
								{" "}
								<Card
									className="border-sm rounded-0 blue-bg  text-dark my-card"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "27rem",
										height: "29rem",
									}}
								>
									<Card.Img
										src="/assets/termoplus2.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>
											<span className="text-bold">
												Isolatie van buitenmuren
											</span>
										</Card.Title>
										<Card.Text>
											Onze isolatie voor externe muren biedt niet alleen een
											vermindering van warmteverlies, maar ook uitstekende
											bescherming tegen weersomstandigheden. Dit betekent een
											hoger woongenot en potentieel energiebesparing.
										</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>{" "}
						</Col>
						<Col lg={4} className="mx-auto">
							{" "}
							<animated.div style={animationProps}>
								{" "}
								<Card
									className="border-sm rounded-0 my-card"
									style={{
										maxWidth: "27rem",
										height: "29rem",
									}}
								>
									<Card.Img
										src="/assets/termoplus3.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>
											<span className="text-bold">Interne isolatie</span>
										</Card.Title>
										<Card.Text>
											Door hoogwaardige interne isolatie toe te passen, bieden
											we de mogelijkheid om ruimtes effectief van elkaar te
											scheiden, ongewenst geluid te verminderen en privacy te
											garanderen. Bovendien kan interne isolatie de
											energie-efficiëntie van een ruimte verbeteren.
										</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>{" "}
						</Col>{" "}
					</Row>
					<Row className="justify-content-center align-items-center">
						<Col lg={4}>
							{" "}
							<animated.div style={animationProps}>
								{" "}
								<Card
									className="border-sm  text-dark blue-bg rounded-0"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "27rem",
										height: "29rem",
									}}
								>
									<Card.Img
										src="/assets/termoplus4.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title className="bold">
											<span className="text-bold">
												Bescherming tegen vocht en schimmel
											</span>
										</Card.Title>
										<Card.Text>
											Onze isolatieoplossingen bieden een effectieve barrière
											tegen vocht, waardoor het risico op schimmel- en
											schimmelvorming wordt verminderd. Dit is belangrijk voor
											het behoud van een gezonde binnenomgeving.
										</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>{" "}
						</Col>{" "}
						<Col lg={4}>
							{" "}
							<animated.div style={animationPropsMiddle}>
								<Card
									className="border-sm rounded-0"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "27rem",
										height: "29rem",
									}}
								>
									<Card.Img
										src="/assets/termoplus5.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title className="bold">
											<span className="text-bold">
												Verhoging van de vastgoedwaarde
											</span>
										</Card.Title>
										<Card.Text>
											Door professionele isolatie van uw huis kunt u de waarde
											van uw onroerend goed verhogen. Effectieve
											isolatieoplossingen worden vaak gezien als een teken van
											hoogwaardige bouw, wat resulteert in aantrekkelijkheid op
											de vastgoedmarkt.
										</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>{" "}
						</Col>
						<Col lg={4}>
							{" "}
							<animated.div style={animationProps}>
								<Card
									className="border-sm rounded-0 blue-bg text-dark rounded-0 w-100"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "27rem",
										height: "29rem",
									}}
								>
									<Card.Img
										src="/assets/termoplus6.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>
											<span className="text-bold">
												Verlaging van de koolstofdioxide uitstoot
											</span>
										</Card.Title>
										<Card.Text>
											Door het verminderen van het energieverbruik dat nodig is
											voor het verwarmen of koelen van een gebouw, draagt onze
											isolatie bij aan het verminderen van de uitstoot van
											kooldioxide, wat gunstig is voor het natuurlijke milieu.
										</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>{" "}
						</Col>
					</Row>
				</Row>
			</Row>
		</Container>
	);
}

export default TermoPlus;
