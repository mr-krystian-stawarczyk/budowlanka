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
			className="  text-dark blur-bg  align-items-center  p-2 border-0  "
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
							Zalety stosowania naszych Izolacji
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
												Izolacja termiczna dachu
											</span>
										</Card.Title>
										<Card.Text>
											Nasze rozwiązania izolacyjne dla dachu gwarantują
											utrzymanie optymalnej temperatury wewnątrz budynku przez
											cały rok. Dzięki nim unikasz strat ciepła zimą i
											nadmiernego nagrzewania się pomieszczeń latem, co
											przekłada się na obniżenie kosztów ogrzewania i
											klimatyzacji.
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
												Izolacja ścian zewnętrznych
											</span>
										</Card.Title>
										<Card.Text>
											Nasza izolacja ścian zewnętrznych zapewnia nie tylko
											redukcję strat ciepła, ale także doskonałą ochronę przed
											warunkami atmosferycznymi. To oznacza wyższy komfort
											mieszkalny oraz potencjalne oszczędności energetyczne.
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
											<span className="text-bold">Izolacja wewnętrzna</span>
										</Card.Title>
										<Card.Text>
											Poprzez zastosowanie wysokiej jakości izolacji
											wewnętrznej, oferujemy możliwość skutecznego oddzielenia
											pomieszczeń od siebie, eliminując niepożądane dźwięki i
											zapewniając prywatność. Dodatkowo, izolacja wewnętrzna
											może również poprawić efektywność energetyczną wnętrza.
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
												Ochrona przed wilgocią i pleśnią
											</span>
										</Card.Title>
										<Card.Text>
											Nasze rozwiązania izolacyjne zapewniają skuteczną barierę
											przed wilgocią, zmniejszając ryzyko powstawania pleśni i
											grzybów. To istotne dla utrzymania zdrowego środowiska
											wewnętrznego.
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
												Zwiększenie wartości nieruchomości
											</span>
										</Card.Title>
										<Card.Text>
											Dzięki profesjonalnej izolacji domu, możesz zwiększyć
											wartość swojej nieruchomości. Efektywne rozwiązania
											izolacyjne są często postrzegane jako znak wysokiej
											jakości budowy, co przekłada się na atrakcyjność na rynku
											nieruchomości.
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
												Redukcja emisji dwutlenku węgla
											</span>
										</Card.Title>
										<Card.Text>
											Poprzez zmniejszenie zużycia energii potrzebnej do
											ogrzewania lub chłodzenia budynku, nasza izolacja
											przyczynia się do ograniczenia emisji dwutlenku węgla, co
											jest korzystne dla środowiska naturalnego.
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
