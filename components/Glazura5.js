import React, { useEffect, useState } from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";

import Image from "next/image";

// Import the type

function Glazura5() {
	const [accordionData, setAccordionData] = useState([]);
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");

	return (
		<Container className="bg-light text-dark  py-5" fluid id="web-design-faq">
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<h1 className="text-dark text-uppercase text-bold">
						Najczęsciej Zadawane Pytania : Glazura
					</h1>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg" defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								Jakie są główne korzyści z wykorzystania glazury w domu?
							</Accordion.Header>
							<Accordion.Body>
								Glazura jest nie tylko estetycznym dodatkiem do wnętrz. Jej
								główne zalety to trwałość, łatwość utrzymania w czystości,
								odporność na wilgoć i ścieranie. Dodatkowo, dzięki szerokiej
								gamie wzorów i kolorów, glazura pozwala na kreatywne aranżacje
								przestrzeni.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								Czy istnieje różnica pomiędzy glazurą ceramiczną a porcelanową?
							</Accordion.Header>
							<Accordion.Body>
								Tak, główna różnica polega na procesie produkcji. Glazura
								ceramiczna jest mniej gęsta, z kolei glazura porcelanowa jest
								bardziej gęsta i bardziej odporna na uszkodzenia. Oba rodzaje są
								używane w wykończeniu wnętrz, ale ich właściwości różnią się pod
								względem trwałości i absorpcji wody.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								Jakie są najważniejsze kroki przygotowawcze przed układaniem
								glazury?
							</Accordion.Header>
							<Accordion.Body>
								Kluczowe jest przygotowanie powierzchni, na której będzie
								układana glazura. To oczyszczenie, wygładzenie i wyrównanie
								powierzchni, usunięcie ewentualnych pozostałości, a także
								prawidłowe przygotowanie podłoża.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>
								{" "}
								Czy glazura jest trudna w utrzymaniu?
							</Accordion.Header>
							<Accordion.Body>
								Glazura jest stosunkowo łatwa w utrzymaniu, ponieważ jest
								odporna na plamy i wilgoć. Wystarczy regularne mycie wodą z
								detergentem, by utrzymać ją w dobrym stanie. Jednakże należy
								unikać nieodpowiednich środków czyszczących, które mogą
								uszkodzić powierzchnię.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>
								Czy istnieje możliwość dopasowania kolorów i wzorów glazury do
								mojego wnętrza?
							</Accordion.Header>
							<Accordion.Body>
								Tak, glazura jest dostępna w różnorodnych kolorach, wzorach i
								rozmiarach. Można ją dopasować do indywidualnych potrzeb
								projektowych, by idealnie komponowała się z wystrojem wnętrza.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>
								Czy układanie glazury jest czasochłonnym procesem?
							</Accordion.Header>
							<Accordion.Body>
								Czas układania glazury zależy od rozmiaru i złożoności projektu.
								Zazwyczaj zajmuje to kilka dni, ale może być dłuższe w przypadku
								większych obszarów lub skomplikowanych wzorów.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>
								Jakie są czynniki wpływające na koszt układania glazury?
							</Accordion.Header>
							<Accordion.Body>
								Koszt zależy od wielkości powierzchni, rodzaju glazury, jej
								jakości, wzoru, a także skomplikowania prac instalacyjnych.
								Różne metody układania oraz dodatkowe prace przygotowawcze mogą
								również wpłynąć na ostateczny koszt.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Glazura5;
