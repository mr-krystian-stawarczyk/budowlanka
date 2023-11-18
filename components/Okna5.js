import React, { useEffect, useState } from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";

import Image from "next/image";

// Import the type

function Okna5() {
	const [accordionData, setAccordionData] = useState([]);
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");

	return (
		<Container className="bg-light  py-5" fluid id="web-design-faq">
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<h1 className="text-dark text-uppercase">
						Najczęsciej Zadawane Pytania : Okna
					</h1>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg" defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								Jakie są korzyści z wymiany okien w moim domu?
							</Accordion.Header>
							<Accordion.Body>
								Wymiana okien niesie za sobą szereg korzyści, które wpływają
								zarówno na komfort życia, jak i efektywność energetyczną domu.
								Nowe okna poprawiają izolację termiczną i akustyczną
								pomieszczeń, co przekłada się na niższe rachunki za energię.
								Ponadto, poprawiają estetykę wnętrza i zewnętrza domu, co może
								zwiększyć wartość nieruchomości.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								Jak często powinienem wymieniać okna?
							</Accordion.Header>
							<Accordion.Body>
								Częstotliwość wymiany okien zależy od wielu czynników, takich
								jak ich jakość, warunki atmosferyczne i sposób użytkowania.
								Wysokiej jakości okna mogą służyć przez wiele lat, ale zalecamy
								regularne sprawdzanie ich stanu, zwłaszcza jeśli zauważysz
								problemy z uszczelkami, kondensacją, czy też zauważysz wzrost
								rachunków za energię, co może wskazywać na straty ciepła.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								Jakie są różnice między różnymi rodzajami okien?
							</Accordion.Header>
							<Accordion.Body>
								Na rynku dostępne są różne rodzaje okien, z których każdy ma
								swoje zalety i charakterystyczne cechy. Na przykład, okna
								drewniane są trwałe i estetyczne, ale wymagają regularnej
								konserwacji. Okna PCV są łatwe w utrzymaniu i energooszczędne,
								natomiast okna aluminiowe cechują się wytrzymałością i
								nowoczesnym wyglądem. Wybór odpowiedniego typu okien zależy od
								preferencji estetycznych, oczekiwań dotyczących trwałości i
								efektywności energetycznej.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>
								Jakie są kroki procesu montażu okien?
							</Accordion.Header>
							<Accordion.Body>
								Proces montażu okien obejmuje kilka kluczowych etapów.
								Rozpoczyna się od dokładnego pomiaru i oceny potrzeb klienta,
								następnie usuwane są stare okna, a nowe są precyzyjnie
								zamontowane. Montaż zawiera również odpowiednie uszczelnienie i
								wykończenie detali, aby zapewnić nie tylko funkcjonalność, ale
								także estetyczny wygląd.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>
								Czy wymiana okien pomoże w redukcji hałasu z zewnątrz?
							</Accordion.Header>
							<Accordion.Body>
								Tak, nowoczesne okna o dobrej izolacji akustycznej mogą znacząco
								zmniejszyć poziom hałasu z ulicy lub sąsiedztwa, tworząc
								spokojniejsze wnętrze w domu. Istotne jest wybieranie okien,
								które posiadają odpowiednią klasę izolacyjności akustycznej, co
								pomaga w ograniczeniu uciążliwych dźwięków z otoczenia.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>
								Jak mogę obniżyć koszty związane z wymianą okien?
							</Accordion.Header>
							<Accordion.Body>
								Istnieje kilka sposobów na obniżenie kosztów związanych z
								wymianą okien. Wybór energooszczędnych okien może przyczynić się
								do znacznego zmniejszenia rachunków za ogrzewanie lub chłodzenie
								domu. Ponadto, porównanie ofert różnych producentów i wykonawców
								oraz skorzystanie z promocji lub rabatów mogą wpłynąć na
								ostateczny koszt wymiany.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>
								Czy firma oferuje gwarancję na swoje okna i usługi?
							</Accordion.Header>
							<Accordion.Body>
								Tak, nasza firma gwarantuje wysoką jakość zakupionych okien oraz
								profesjonalne usługi montażowe. Oferujemy okres gwarancyjny,
								który obejmuje zakupione okna oraz pracę montażową. Dodatkowo,
								nasz zespół jest dostępny, aby sprostać wszelkim pytaniami czy
								problemom po zakończeniu montażu. Naszym celem jest zapewnienie
								klientom spokoju i pewności, że nasze usługi są objęte wsparciem
								nawet po zakończeniu procesu montażu.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Okna5;
