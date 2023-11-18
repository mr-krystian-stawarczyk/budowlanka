import React, { useEffect, useState } from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";

import Image from "next/image";

// Import the type

function Termo5() {
	const [accordionData, setAccordionData] = useState([]);
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");

	return (
		<Container className="bg-light text-dark  py-5" fluid>
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<h1 className="text-bold text-uppercase">
						Najczęsciej Zadawane Pytania : Izolacja
					</h1>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg" defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								Czym jest termoizolacja zewnętrzna domu?
							</Accordion.Header>
							<Accordion.Body>
								Termoizolacja zewnętrzna to kompleksowy proces, który polega na
								aplikacji warstwy izolacyjnej na zewnętrznych ścianach budynku.
								Jej głównym celem jest ograniczenie strat ciepła poprzez
								tworzenie warstwy ochronnej, zapobiegającej wnikaniu zimna z
								zewnątrz oraz utracie ciepła z wnętrza. Stosuje się różnorodne
								materiały izolacyjne, takie jak styropian, wełna mineralna czy
								płyty izolacyjne, a następnie pokrywa się je wykończeniem
								zewnętrznym, dostosowanym do estetyki domu.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								Jaki jest główny cel montażu termoizolacji w domu?
							</Accordion.Header>
							<Accordion.Body>
								Głównym celem montażu termoizolacji jest stworzenie warstwy
								ochronnej, która minimalizuje utratę ciepła z budynku oraz
								zwiększa jego efektywność energetyczną. Poprzez izolację ścian
								zewnętrznych i dachu, termoizolacja tworzy barierę termiczną,
								zapobiegającą wnikaniu zimna z zewnątrz oraz ograniczającą
								przegrzewanie się domu w cieplejszych miesiącach. To nie tylko
								wpływa na redukcję rachunków za ogrzewanie i klimatyzację, ale
								także na ogólny komfort życia mieszkańców, eliminując wahania
								temperatury wewnątrz pomieszczeń.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								Czy termoizolacja zewnętrzna wpływa na wygląd zewnętrzny
								budynku?
							</Accordion.Header>
							<Accordion.Body>
								Tak, montaż termoizolacji zewnętrznej może zmienić wygląd
								zewnętrzny domu, ale istnieje wiele możliwości dostosowania
								izolacji do preferencji estetycznych. Dostępne są różnorodne
								wykończenia, kolory i tekstury tynków, co umożliwia dopasowanie
								izolacji do architektury budynku. W efekcie termoizolacja nie
								tylko poprawia wydajność energetyczną, ale również może
								odświeżyć lub zmienić wizerunek zewnętrzny budynku.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>
								Jakie są korzyści z termoizolacji wewnętrznej?
							</Accordion.Header>
							<Accordion.Body>
								Termoizolacja wewnętrzna ma wiele zalet, poza zmniejszeniem
								rachunków za ogrzewanie. Zapewnia ona kontrolę temperatury w
								poszczególnych pomieszczeniach, eliminując obszary odczuwalnie
								chłodne lub ciepłe, co przekłada się na równomierny komfort
								cieplny w całym domu. Ponadto, poprawia izolację akustyczną,
								ograniczając przenikanie dźwięków między pomieszczeniami, co
								może być istotne dla osób szukających spokoju i prywatności.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>
								Czy istnieje różnica między izolacją termiczną a akustyczną?
							</Accordion.Header>
							<Accordion.Body>
								Tak, istnieje wyraźna różnica między izolacją termiczną a
								akustyczną. Izolacja termiczna koncentruje się głównie na
								zatrzymywaniu ciepła wewnątrz budynku lub zapobieganiu jego
								utracie na zewnątrz. Natomiast izolacja akustyczna ma na celu
								redukcję przenikania dźwięków między pomieszczeniami, co może
								być istotne zwłaszcza w przypadku budynków zlokalizowanych w
								hałaśliwych miejscach.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>
								Jakie materiały są używane do termoizolacji domów?
							</Accordion.Header>
							<Accordion.Body>
								Istnieje wiele różnych materiałów stosowanych do termoizolacji
								domów, w tym styropian, wełna mineralna, pianka poliuretanowa
								czy płyty izolacyjne wykonane z różnych materiałów w zależności
								od potrzeb i warunków klimatycznych. Każdy z tych materiałów ma
								swoje własne cechy, takie jak właściwości izolacyjne, odporność
								na wilgoć czy odporność ogniowa, co pozwala dostosować izolację
								do konkretnych wymagań budynku.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>
								Czy termoizolacja jest trwała?
							</Accordion.Header>
							<Accordion.Body>
								Odpowiednio zainstalowana termoizolacja może być trwała przez
								wiele lat. Jednak jej trwałość może zależeć od kilku czynników,
								takich jak jakość materiałów izolacyjnych, profesjonalizm
								wykonawców oraz warunki atmosferyczne, którym jest wystawiona.
								Regularne przeglądy stanu izolacji mogą być pomocne w
								zapewnieniu, że spełnia ona swoje funkcje przez długi czas.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="7">
							<Accordion.Header>
								Czy montaż termoizolacji jest skomplikowany?
							</Accordion.Header>
							<Accordion.Body>
								Montaż termoizolacji może być złożonym procesem, który wymaga
								wiedzy technicznej oraz doświadczenia. Różne metody instalacji
								oraz różnorodność materiałów mogą sprawić, że proces ten może
								być bardziej wymagający. Dlatego zaleca się skorzystanie z usług
								profesjonalistów, którzy posiadają niezbędne umiejętności i
								doświadczenie, aby zapewnić właściwe wykonanie termoizolacji.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="8">
							<Accordion.Header>
								Czy termoizolacja wymaga regularnej konserwacji?
							</Accordion.Header>
							<Accordion.Body>
								Ogólnie rzecz biorąc, termoizolacja nie wymaga regularnej
								konserwacji. Niemniej jednak, zaleca się regularne przeglądy,
								zwłaszcza po długotrwałych warunkach atmosferycznych, aby
								upewnić się, że izolacja nie uległa uszkodzeniom ani degradacji.
								Konserwacja może obejmować naprawę ewentualnych uszkodzeń lub
								nieszczelności, co może zapobiec pogorszeniu się efektywności
								energetycznej budynku.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="9">
							<Accordion.Header>
								Czy termoizolacja wpływa na wartość nieruchomości?
							</Accordion.Header>
							<Accordion.Body>
								Skutecznie zainstalowana termoizolacja może zwiększyć wartość
								nieruchomości. Poprawa efektywności energetycznej budynku, co
								przekłada się na niższe koszty eksploatacji oraz komfort
								mieszkania, może być atrakcyjna dla potencjalnych nabywców lub
								najemców. Jednakże wpływ termoizolacji na wartość nieruchomości
								może również zależeć od innych czynników, takich jak
								lokalizacja, stan techniczny budynku czy obecne trendy na rynku
								nieruchomości.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Termo5;
