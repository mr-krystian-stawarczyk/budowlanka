import React, { useEffect, useState } from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";

import Image from "next/image";

// Import the type

function Ogrzewanie7() {
	const [accordionData, setAccordionData] = useState([]);
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");

	return (
		<Container className="bg-light  py-5" fluid id="web-design-faq">
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<h1 className="text-dark text-uppercase">
						Najczęsciej Zadawane Pytania : Ogrzewanie
					</h1>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg" defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								Dlaczego warto zdecydować się na ogrzewanie podłogowe matą?
							</Accordion.Header>
							<Accordion.Body>
								Spośród wielu rozwiązań obejmujących ogrzewanie podłogowe mata
								grzejna jest tym, które ma zdecydowanie najwięcej zalet. W
								sezonie zimowym domownicy mogą chodzić po domu bez obuwia, przy
								zapewnieniu optymalnego komfortu cieplnego. Jednocześnie,
								inwestycja w podłogówkę umożliwia usunięcie z domu wykładzin
								oraz dywanów, będących siedliskiem alergenów i drobnoustrojów.
								Posiadanie systemu grzewczego pod podłogą pozwala również na
								swobodne sterowanie ogrzewaniem całego domu, poprzez włączanie
								lub wyłączanie jego poszczególnych elementów. Folie grzejne i
								maty grzewcze pod panele oraz płytki ceramiczne, doskonale
								sprawdzają się w domach, gdzie mieszkają osoby uczulone na kurz.
								W odróżnieniu od tradycyjnych systemów ogrzewania podłogowego,
								mata grzewcza nie powoduje gromadzenia się zanieczyszczeń na
								posadzkach, co daje również możliwość rzadszego sprzątania
								podłóg.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								Czy możliwy jest montaż maty pod brodzikiem lub wanną?
							</Accordion.Header>
							<Accordion.Body>
								Niestety, maty grzewcze na podczerwień nie mogą być instalowane
								pod wanną lub brodzikiem.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								Czy ogrzewanie podłogowe matą o mocy 150W/m2 wpływa na
								zwiększenie kosztów użytkowania?
							</Accordion.Header>
							<Accordion.Body>
								Zastosowanie maty o wyższej mocy znamionowej powoduje skrócenie
								czasu nagrzewania się instalacji.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>
								Czy matę można ciąć w trakcie montażu?
							</Accordion.Header>
							<Accordion.Body>
								Zabronione jest przecinanie przewodów, matę można skrócić
								wyłącznie poprzez nacinanie siatki.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>
								Czy mata podłogowa grzewcza może zostać zainstalowana pod
								zabudowę stałą?
							</Accordion.Header>
							<Accordion.Body>
								Nie ma możliwości montażu maty grzejnej pod stałą zabudową. W
								miejscu, gdzie zainstalowana jest mata, można ustawić wyłącznie
								meble na nóżkach, z zachowaniem minimum 3 cm wysokości od
								posadzki.
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="5">
							<Accordion.Header>
								Czy istnieje możliwość krzyżowania lub nakładania na siebie
								przewodów grzewczych?
							</Accordion.Header>
							<Accordion.Body>
								Nie, mata podłogowa grzewcza nie może być instalowana w sposób,
								który wymaga nakładania lub krzyżowania się przewodów. Minimalny
								odstęp pomiędzy przewodami powinien wynosić 8 cm.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>
								Czy do podłączenia maty konieczne jest zatrudnienie elektryka?
							</Accordion.Header>
							<Accordion.Body>
								Podłączenie maty może wykonać jedynie elektryk posiadający
								aktualne uprawnienia SEP.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Ogrzewanie7;
