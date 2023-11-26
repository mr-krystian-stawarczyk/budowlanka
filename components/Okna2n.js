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

function Okna2n() {
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
				<Row className="py-3 text-center ">
					<Col>
						<h1 className="my-5 text-bold">
							Voordelen van het gebruik van onze Ramen
						</h1>
					</Col>
				</Row>{" "}
				<Row className="text-center justify-content-center align-items-center align-self-center">
					<Row className="justify-content-center align-items-center">
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
												Innovatieve raamoplossingen
											</span>
										</Card.Title>
										<Card.Text>
											Ons bedrijf biedt een breed scala aan innovatieve ramen,
											vervaardigd met behulp van de nieuwste technologieën.
											Naast het elegante ontwerp kenmerken onze ramen zich door
											uitstekende thermische en akoestische isolatie. Hun hoge
											kwaliteit garandeert niet alleen esthetiek, maar ook
											uitzonderlijk comfort in huis, door warmteverlies en
											geluid van buitenaf te verminderen.
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
											<span className="text-bold">Professionele montage</span>
										</Card.Title>
										<Card.Text>
											Ons montage team bestaat uit ervaren vakmensen, die niet
											alleen hun best doen om ramen correct te monteren, maar
											ook oog hebben voor detail, waardoor perfecte pasvorm en
											isolatie wordt gegarandeerd. Professionele montage
											garandeert niet alleen langdurige duurzaamheid van ramen,
											maar ook hun optimale energieprestaties.
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
												Aanpassing aan individuele behoeften
											</span>
										</Card.Title>
										<Card.Text>
											Wij zijn ons bewust van de diverse verwachtingen van
											klanten. Daarom bieden wij een breed scala aan
											personalisatie-opties voor ramen, van verschillende
											profieltypes en kleuren tot diverse functionele
											oplossingen. Hierdoor kan elke klant ramen aanpassen aan
											hun individuele esthetische en functionele voorkeuren,
											waardoor een uniek karakter aan hun huis wordt gegeven.
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
												Energiezuinigheid en besparingen:
											</span>
										</Card.Title>
										<Card.Text>
											Onze ramen zijn ontworpen met het oog op energiebesparing.
											Door het gebruik van innovatieve technologieën bieden ze
											uitstekende isolatie, waardoor warmteverlies wordt
											verminderd en het energieverbruik voor het verwarmen van
											het huis wordt geminimaliseerd. Dit resulteert niet alleen
											in lagere energierekeningen, maar ondersteunt ook het
											milieu door de uitstoot van kooldioxide te verminderen.
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
											<span className="text-bold">Kwaliteitsgarantie</span>
										</Card.Title>
										<Card.Text>
											Onze producten worden gedekt door een
											langetermijngarantie, wat getuigt van ons vertrouwen in de
											kwaliteit van de aangeboden ramen. Daarnaast bieden wij
											klanten professionele service en ondersteuning na
											installatie, om langdurige tevredenheid met onze producten
											te garanderen. Expertise en advies: Ons team bestaat uit
											gekwalificeerde experts, klaar om ondersteuning en
											professionele kennis te bieden in elke fase van het
											aankoop- en installatieproces van ramen.
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
											<span className="text-bold">Expertise en advies</span>
										</Card.Title>
										<Card.Text>
											Ons team bestaat uit gekwalificeerde experts, klaar om
											ondersteuning en professionele kennis te bieden in elke
											fase van het aankoop- en installatieproces van ramen.
											Dankzij een individuele aanpak en nauwkeurig advies kunnen
											onze klanten de beste beslissingen nemen die aansluiten
											bij hun behoeften en verwachtingen.
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
