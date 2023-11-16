import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Tynki2() {
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

	return (
		<Container
			fluid
			className="d-flex bg-light text-dark py-3 align-items-center justify-content-center "
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/knauf2.png"
						width={400}
						height={400}
						className="responsive-image shadow-lg"
						alt="Sanity Image"
					/>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold"> Tynki gipsowe utwardzane</h1>
							<Card.Text>
								DLA WYMAGA JĄCYCH INWESTORÓW MP 75 DIAMANT Kiedy przychodzi czas
								wykańczania pomieszczeń i decydowania odnośnie właściwego tynku,
								na którym znajdzie się później wybrana tapeta lub farba, okazuje
								się często, że ciężko jest ustalić, który rodzaj materiału
								będzie najlepszy. Każdy rodzaj ma bowiem swoje zalety i wady. Do
								wyboru są tynki gipsowe i tynki cementowo – wapienne. Jedne i
								drugie należą do tynków wewnętrznych, posiadających dwie
								podstawowe funkcje: osłonową i dekoracyjną. Najważniejsze jednak
								aby charakteryzowały się wysoką trwałością i wytrzymałością na
								uszkodzenia, czy też zawilgocenia. O tynkach gipsowych mówi się
								również, że mają niską odporność na uszkodzenia mechaniczne. Ten
								zarzut ciężko odeprzeć, ponieważ faktycznie tynki gipsowe
								niskiej jakości bardzo źle się sprawdzają w przypadku uderzeń i
								zarysowań. Można jednak zastosować tynk Knauf MP 75 Diamant,
								który jest znacznie twardszy od tradycyjnych tynków gipsowych,
								oraz bardziej odporny na ściskanie, przez co spokojnie może
								konkurować nawet z najlepszymi tynkami cynkowo-wapiennymi.
								Ponadto do innych zalet tego tynku należy jego wysoka
								elastyczność i stabilność, jak również łatwość nanoszenia na
								wybrane powierzchnie. Aby nasze domy były trwałe, ładne i
								zdrowe. Zastosowanie takich tynków jak Knauf MP 75 Diamant to
								nie tylko gładkość ścian, odporność na zadrapania, ich
								zabezpieczenie przed pleśniami i grzybem oraz uzyskanie
								odpowiedniej powierzchni pod wszelkiego rodzaju zdobienia, ale
								również spora oszczędność czasu i pieniędzy. Nawet jeśli zakup
								dobrej jakości tynku wydaje nam się sporym kosztem, warto
								pamiętać że jest to inwestycja na długie lata. Kupując „byle co”
								krótkotrwale może nam się wydawać że ubiliśmy interes życia.
								Jednak po pierwszych uszkodzeniach, i problemach nasza
								frustracja będzie wielka. W końcu nikt nie lubi wykonywać 2 razy
								tej samej pracy (i 2 razy za nią płacić!). Tynk gipsowy Diamant
								spełnia oczekiwania najbardziej wymagających inwestorów, którzy
								chcą mieć tynki odporne na uszkodzenia mechaniczne i
								jednocześnie takie, które tworzyć będą we wnętrzach klimat
								przyjazny i zdrowy dla użytkowników.  Knauf MP 75 Diamant
								wyróżnia wysoka trwałość i wytrzymałość na uderzenia. Sprawdzi
								się w każdym domu, nawet w garażu. Z uwagi na swoje właściwości
								zalecany jest także do budynków publicznych, szkół, szpitali,
								urzędów, na klatki schodowe w budownictwie wielorodzinnym itp.
							</Card.Text>
							<Card.Text></Card.Text>
							<Card.Text></Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Tynki2;
