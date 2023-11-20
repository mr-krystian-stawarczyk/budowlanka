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
import { useTranslation } from "react-i18next";

import Link from "next/link";

function Ogrzewanie6() {
	const router = useRouter();
	const { id } = router.query;
	const { t } = useTranslation();

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
							ZALETY KORZYSTANIA Z MAT GRZEWCZYCH
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
												Niezawodność i żywotność systemu
											</span>
										</Card.Title>
										<Card.Text>
											Oferowane przez TERMOFOL maty elektryczne podłogowe to
											rozwiązania najwyższej klasy, na które udzielmy aż
											25-letniej gwarancji.
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
												Tanie ogrzewanie pomieszczeń
											</span>
										</Card.Title>
										<Card.Text>
											Wszystkim tym, którzy preferują tanie ogrzewanie podłogowe
											mata grzewcza pozwoli obniżyć nakłady na inwestycje w
											podłogówkę – system instalowany jest wyłącznie w miejscach
											użytkowanych przez domowników – nie ma potrzeby
											rozkładania maty na całej powierzchni posadzki.
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
												Ekologiczna instalacja cieplna
											</span>
										</Card.Title>
										<Card.Text>
											Jeśli na posadzce położona zostanie mata podłogowa
											ogrzewanie stanie się przyjazne dla środowiska oraz
											domowników. Brak kurzu, alergenów czy roztoczy to tylko
											niektóre powody, dla których jest to rozwiązanie dosłownie
											dla każdego.
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
												Niższa temperatura w instalacji
											</span>
										</Card.Title>
										<Card.Text>
											Nasze maty grzejne pozwalają na obniżenie temperatury na
											głównym źródle ciepła (kocioł C.O., pompa ciepła) o kilka
											stopni, bez obniżania komfortu cieplnego. Dzięki temu
											znacząco spadną koszty zawiązane z zakupem opału oraz
											eksploatacją domowej instalacji centralnego ogrzewania.
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
											<span className="text-bold">Oszczędność energii</span>
										</Card.Title>
										<Card.Text>
											Ogrzewanie podłogowe matą pozwala zmniejszyć
											zapotrzebowanie na energię cieplną z instalacji C.O. nawet
											o 20%.
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
												Nieograniczone możliwości aranżacyjne
											</span>
										</Card.Title>
										<Card.Text>
											Cały system grzewczy ukryty jest pod podłogą, więc jego
											elementy nie ograniczają przestrzeni (w przeciwieństwie do
											grzejników), którą można dowolnie urządzić i
											zagospodarować według własnych preferencji.
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

export default Ogrzewanie6;
