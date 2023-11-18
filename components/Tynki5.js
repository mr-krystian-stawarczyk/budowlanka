import React, { useEffect, useState } from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";

import Image from "next/image";

// Import the type

function Tynki5() {
	const [accordionData, setAccordionData] = useState([]);
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");

	return (
		<Container className="bg-white text-dark  py-5" fluid id="web-design-faq">
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<h1 className="text-dark text-uppercase text-bold">
						Najczęsciej Zadawane Pytania : Tynki
					</h1>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg" defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								Tynkowanie jako podstawa wykończenia
							</Accordion.Header>
							<Accordion.Body>
								Tynkowanie jest kluczowym etapem wykończenia powierzchni
								zewnętrznych i wewnętrznych budynków. Zapewnia nie tylko
								estetyczny wygląd, ale także dodatkową ochronę przed warunkami
								atmosferycznymi i uszkodzeniami mechanicznymi.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								Rodzaje tynków dostosowane do potrzeb
							</Accordion.Header>
							<Accordion.Body>
								Istnieje wiele rodzajów tynków, w tym tradycyjne tynki
								cementowo-wapienne, tynki gipsowe czy tynki mozaikowe. Wybór
								rodzaju tynku może być uzależniony od konkretnych potrzeb,
								estetyki, a także warunków, w jakich będzie on zastosowany.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								Przygotowanie podłoża przed tynkowaniem
							</Accordion.Header>
							<Accordion.Body>
								Skuteczne tynkowanie wymaga odpowiedniego przygotowania podłoża.
								To kluczowy krok, ponieważ warunkuje trwałość oraz estetykę
								wykonanej pracy. Oczyszczenie, wyrównanie i odpowiednie
								gruntowanie podłoża są niezwykle istotne.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>
								Tynkowanie tradycyjne vs. tynki maszynowe
							</Accordion.Header>
							<Accordion.Body>
								Tynki tradycyjne, nakładane ręcznie, są jednym z podejść do
								tynkowania, podczas gdy tynki maszynowe wykorzystują maszyny do
								szybszego i równomierniejszego rozprowadzenia tynku. Oba sposoby
								mają swoje zalety i mogą być stosowane w zależności od skali i
								specyfiki projektu.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>
								Funkcjonalność estetyczna i ochronna
							</Accordion.Header>
							<Accordion.Body>
								Tynkowanie nie tylko nadaje estetykę, ale także pełni funkcję
								ochronną dla ścian budynku. Odpowiednio dobrany tynk może
								dodatkowo zabezpieczać przed wilgocią, grzybami, a także ma
								wpływ na termoizolację.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>
								Doradztwo i dopasowanie do potrzeb klienta
							</Accordion.Header>
							<Accordion.Body>
								Profesjonaliści oferują doradztwo w wyborze odpowiedniego tynku,
								biorąc pod uwagę indywidualne preferencje klienta, rodzaj
								budynku oraz specyfikę otoczenia, w którym się znajduje.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>Wykończenia i kolory</Accordion.Header>
							<Accordion.Body>
								Tynki pozwalają na różnorodne wykończenia, zarówno pod względem
								struktury, jak i kolorów. Istnieje szeroka gama możliwości, od
								gładkich powierzchni po struktury imitujące naturalne materiały,
								co umożliwia dopasowanie do wyjątkowych wymagań estetycznych
								klienta.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Tynki5;
