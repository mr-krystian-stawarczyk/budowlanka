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

function Okna2n() {
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
						<h1 className="my-5 text-bold">Zalety stosowania naszych Okien</h1>
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
										height: "39rem",
									}}
								>
									{" "}
									<Card.Img
										src="/assets/innovation.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>
											<span className="text-bold">
												Innowacyjne rozwiązania okienne
											</span>
										</Card.Title>
										<Card.Text>
											Nasza firma oferuje szeroki asortyment innowacyjnych
											okien, wyprodukowanych z zastosowaniem najnowszych
											technologii. Oprócz eleganckiego designu, nasze okna
											charakteryzują się doskonałą izolacją termiczną i
											akustyczną. Ich wysoka jakość zapewnia nie tylko estetykę,
											ale także wyjątkowy komfort w domu, redukując straty
											ciepła i hałasu z zewnątrz.
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
										height: "39rem",
									}}
								>
									<Card.Img
										src="/assets/mounting.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>
											<span className="text-bold">Profesjonalny montaż</span>
										</Card.Title>
										<Card.Text>
											Nasz zespół montażowy składa się z doświadczonych
											fachowców, którzy nie tylko dokładają wszelkich starań,
											aby okna były właściwie zamontowane, ale także dbają o
											szczegóły, zapewniając perfekcyjne dopasowanie i izolację.
											Profesjonalny montaż gwarantuje nie tylko długotrwałą
											trwałość okien, ale także ich optymalną wydajność
											energetyczną.
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
										height: "39rem",
									}}
								>
									<Card.Img
										src="/assets/indyvidual.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>
											<span className="text-bold">
												Dostosowanie do indywidualnych potrzeb
											</span>
										</Card.Title>
										<Card.Text>
											Jesteśmy świadomi różnorodności oczekiwań klientów.
											Dlatego oferujemy szeroki wachlarz opcji personalizacji
											okien, od różnych rodzajów profili i kolorów po różnorodne
											rozwiązania funkcjonalne. Dzięki temu każdy klient może
											dopasować okna do swoich indywidualnych preferencji
											estetycznych i funkcjonalnych, zapewniając unikalny
											charakter swojego domu.
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
										height: "39rem",
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
										<Card.Title className="bold">
											<span className="text-bold">
												Energooszczędność i oszczędności:
											</span>
										</Card.Title>
										<Card.Text>
											Nasze okna są zaprojektowane z myślą o oszczędności
											energii. Dzięki zastosowaniu innowacyjnych technologii,
											zapewniają doskonałą izolację, redukując straty ciepła i
											minimalizując zużycie energii potrzebnej do ogrzewania
											domu. To nie tylko przekłada się na niższe rachunki za
											energię, ale także wspiera środowisko poprzez ograniczenie
											emisji dwutlenku węgla.
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
										height: "39rem",
									}}
								>
									<Card.Img
										src="/assets/quality.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title className="bold">
											<span className="text-bold">Gwarancja jakości</span>
										</Card.Title>
										<Card.Text>
											Nasze produkty są objęte długoterminową gwarancją, co
											świadczy o naszym zaufaniu do jakości oferowanych okien.
											Dodatkowo, zapewniamy klientom fachowy serwis oraz
											wsparcie po montażu, aby zapewnić długotrwałą satysfakcję
											z naszych produktów. Ekspertyza i doradztwo: Nasz zespół
											składa się z wykwalifikowanych ekspertów, gotowych służyć
											wsparciem i fachową wiedzą na każdym etapie procesu zakupu
											i montażu okien.
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
										height: "39rem",
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
											<span className="text-bold">Ekspertyza i doradztwo</span>
										</Card.Title>
										<Card.Text>
											Nasz zespół składa się z wykwalifikowanych ekspertów,
											gotowych służyć wsparciem i fachową wiedzą na każdym
											etapie procesu zakupu i montażu okien. Dzięki
											indywidualnemu podejściu i precyzyjnemu doradztwu, nasi
											klienci mogą podejmować najlepsze decyzje, dostosowane do
											ich potrzeb i oczekiwań.
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

export default Okna2n;
