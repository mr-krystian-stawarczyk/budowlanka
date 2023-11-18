import React, { useEffect, useState } from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";

import Image from "next/image";

// Import the type

function Ogolne5() {
	const [accordionData, setAccordionData] = useState([]);
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");

	return (
		<Container className="bg-light text-dark  py-5" fluid id="web-design-faq">
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<h1 className="text-dark text-bold text-uppercase">
						Najczęsciej Zadawane Pytania : Ogolne
					</h1>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg" defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								Jakie są korzyści z inwestowania w prace ogólnobudowlane w moim
								domu?
							</Accordion.Header>
							<Accordion.Body>
								Prace ogólnobudowlane przynoszą liczne korzyści, w tym możliwość
								dostosowania domu do zmieniających się potrzeb, poprawę
								funkcjonalności przestrzeni, zwiększenie wartości nieruchomości
								oraz szansę na wykorzystanie nowoczesnych technologii i
								materiałów, które poprawiają jakość życia.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								Jak często powinienem planować prace remontowe w moim domu?
							</Accordion.Header>
							<Accordion.Body>
								Częstotliwość prac remontowych zależy od wielu czynników, takich
								jak wiek budynku, rodzaj materiałów użytych przy budowie czy
								częstotliwość konserwacji. Zaleca się regularne przeglądy i
								konserwację, a większe prace remontowe można planować w
								zależności od potrzeb co kilka lat.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								Jakie są różnice między remontem a renowacją?
							</Accordion.Header>
							<Accordion.Body>
								Remont to szerokie pojęcie obejmujące prace modernizacyjne,
								które zmieniają wygląd lub funkcjonalność pomieszczeń. Renowacja
								koncentruje się na przywróceniu pierwotnego stanu lub odnowieniu
								powierzchni bez większych zmian w strukturze.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>
								Jakie kroki obejmuje proces przeprowadzania prac
								ogólnobudowlanych?
							</Accordion.Header>
							<Accordion.Body>
								Proces prac ogólnobudowlanych zwykle rozpoczyna się od oceny
								potrzeb klienta, planowania prac, uzyskania niezbędnych
								pozwoleń, a następnie wykonania prac zgodnie z ustalonymi
								specyfikacjami. Etapy mogą obejmować rozbiórkę, prace
								wykończeniowe, instalacyjne i wyposażeniowe.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>
								Czy prace ogólnobudowlane mogą poprawić efektywność energetyczną
								mojego domu?
							</Accordion.Header>
							<Accordion.Body>
								Tak, prace ogólnobudowlane mogą znacząco poprawić efektywność
								energetyczną domu. Modyfikacje strukturalne, nowe materiały
								izolacyjne czy instalacje energooszczędnych urządzeń mogą
								zmniejszyć zużycie energii i obniżyć rachunki za ogrzewanie lub
								chłodzenie.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>
								Jak mogę oszacować koszty związane z pracami ogólnobudowlanymi?
							</Accordion.Header>
							<Accordion.Body>
								Koszty prac ogólnobudowlanych mogą się różnić w zależności od
								skali, zakresu i wybranych materiałów. Ważne jest sporządzenie
								szczegółowego planu prac i konsultacja z profesjonalistami, aby
								uzyskać dokładne oszacowanie kosztów. Również porównanie ofert
								różnych wykonawców może pomóc w znalezieniu najlepszego
								rozwiązania kosztowego.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>
								Czy firma oferuje gwarancję na wykonane prace?
							</Accordion.Header>
							<Accordion.Body>
								Tak, nasza firma oferuje gwarancję na jakość wykonanych prac.
								Zapewniamy gwarancję na nasze usługi oraz stosowane materiały.
								Po zakończeniu prac jesteśmy gotowi służyć pomocą i wsparciem w
								razie jakichkolwiek problemów czy pytań związanych z wykonanymi
								pracami ogólnobudowlanymi. Naszym celem jest zapewnienie
								satysfakcji klienta i solidności naszych usług nawet po
								zakończeniu projektu.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Ogolne5;
