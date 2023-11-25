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

function Ogrzewanie6() {
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
			className="text-dark blur-bg  align-items-center overflow-hidden  p-2 border-0  "
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
						<h5 className="my-5 text-bold">
							VOORDELEN VAN HET GEBRUIK VAN VLOERVERWARMINGSMATTEN
						</h5>
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
										height: "30rem",
									}}
								>
									{" "}
									<Card.Img
										src="/assets/quality.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>
											<span className="text-bold">
												Betrouwbaarheid en levensduur van het systeem
											</span>
										</Card.Title>
										<Card.Text>
											De elektrische vloermatten van TERMOFOL zijn eersteklas
											oplossingen waarop we maar liefst 25 jaar garantie geven.
										</Card.Text>
									</Card.Body>
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
										height: "30rem",
									}}
								>
									<Card.Img
										src="/assets/saving.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>
											<span className="text-bold">
												Voordelige ruimteverwarming
											</span>
										</Card.Title>
										<Card.Text>
											Voor degenen die de voorkeur geven aan voordelige
											vloerverwarming, zal een verwarmingsmat helpen bij het
											verminderen van de investeringskosten in de
											vloerverwarming - het systeem wordt alleen geïnstalleerd
											op plaatsen die door de bewoners worden gebruikt - er is
											geen noodzaak om de mat over het hele vloeroppervlak te
											verspreiden.
										</Card.Text>
									</Card.Body>
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
										height: "30rem",
									}}
								>
									<Card.Img
										src="/assets/ecohouse.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>
											<span className="text-bold">
												Milieuvriendelijke verwarmingssysteem
											</span>
										</Card.Title>
										<Card.Text>
											Als er een vloerverwarmingsmat wordt geplaatst, wordt de
											verwarming milieuvriendelijk en vriendelijk voor zowel het
											milieu als de bewoners. Het ontbreken van stof, allergenen
											en mijten zijn slechts enkele redenen waarom dit een
											oplossing is die letterlijk voor iedereen geschikt is.
										</Card.Text>
									</Card.Body>
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
										height: "30rem",
									}}
								>
									<Card.Img
										src="/assets/lowtemp.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title className="bold">
											<span className="text-bold">
												Lagere temperatuur in het systeem
											</span>
										</Card.Title>
										<Card.Text>
											Onze verwarmingsmatten maken het mogelijk om de
											temperatuur van de hoofdverwarming (CV-ketel, warmtepomp)
											met enkele graden te verlagen zonder het thermisch comfort
											te verminderen. Hierdoor zullen de kosten voor de aanschaf
											van brandstof en het gebruik van het huishoudelijke
											centrale verwarmingssysteem aanzienlijk dalen.
										</Card.Text>
									</Card.Body>
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
										height: "30rem",
									}}
								>
									<Card.Img
										src="/assets/save.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title className="bold">
											<span className="text-bold">Energiebesparing</span>
										</Card.Title>
										<Card.Text>
											Het gebruik van vloerverwarming met een verwarmingsmat kan
											het thermische energieverbruik van het CV-systeem zelfs
											met 20% verminderen.
										</Card.Text>
									</Card.Body>
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
										height: "30rem",
									}}
								>
									<Card.Img
										src="/assets/advice.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>
											<span className="text-bold">
												Onbeperkte mogelijkheden voor interieurontwerp
											</span>
										</Card.Title>
										<Card.Text>
											Het hele verwarmingssysteem is verborgen onder de vloer,
											dus de elementen ervan beperken de ruimte niet (in
											tegenstelling tot radiatoren), waardoor je de ruimte
											volledig naar eigen wens kunt inrichten en gebruiken.
										</Card.Text>
									</Card.Body>
								</Card>{" "}
							</animated.div>{" "}
						</Col>
					</Row>
				</Row>
			</Row>
		</Container>
	);
}

export default Ogrzewanie6;
