import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Update this import as needed

function About3() {
	return (
		<Container
			fluid
			className="py-5 bg-light text-dark overflow-hidden"
			id="story"
		>
			<Row className="text-center">
				<h1 className="py-3 text-bold">Ontdek Onze Geschiedenis</h1>
			</Row>
			<VerticalTimeline lineColor="rgb(250, 179, 0)" className="text-dark">
				<VerticalTimelineElement
					date={2010}
					iconStyle={{
						background: "rgb(0, 54, 129)",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: `#fff 7px solid`,
					}}
				>
					<h5>Start van de Activiteiten</h5>
					<p>
						Eerste opdrachten en start van het werk aan raaminstallaties en
						eenvoudige algemene bouwwerkzaamheden.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					date={2012}
					iconStyle={{
						background: "rgb(0, 54, 129)",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: `#fff 7px solid`,
					}}
				>
					<h5>Uitbreiding van het Aanbod</h5>
					<p>Uitbreiding van het aanbod met pleisterwerk diensten.</p>
					<p>
						Eerste grotere projecten met betrekking tot het pleisteren van
						gevels en interieurs.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					date={2015}
					iconStyle={{
						background: "rgb(0, 54, 129)",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: `#fff 7px solid`,
					}}
				>
					<h5>Prijzen en Erkenningen</h5>
					<p>
						Ontvangen van een prijs voor innovatieve benadering van de
						installatie van energiezuinige ramen.
					</p>
					<p>
						Verkrijgen van positieve klantbeoordelingen, wat heeft bijgedragen
						aan de reputatie van het bedrijf.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					date={2018}
					iconStyle={{
						background: "rgb(0, 54, 129)",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: `#fff 7px solid`,
					}}
				>
					<h5>Regionale Uitbreiding</h5>
					<p>
						Uitbreiding van de activiteiten naar aangrenzende regio's of steden.
					</p>
					<p>
						Uitvoering van grotere bouw- en installatiecontracten buiten het
						bestaande werkgebied.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					date={2020}
					iconStyle={{
						background: "rgb(0, 54, 129)",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: `#fff 7px solid`,
					}}
				>
					<h5>Professionele Samenwerking</h5>
					<p>Aangaan van een partnerschap met gerenommeerde raamproducenten.</p>
					<p>Uitbreiding van het aanbod met moderne energieoplossingen.</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					date={2023}
					iconStyle={{
						background: "rgb(0, 54, 129)",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: `#fff 7px solid`,
					}}
				>
					<h5>Nieuwe Technologieën en Investeringen</h5>
					<p>
						Introductie van innovatieve technologische oplossingen in het
						raaminstallatieproces.
					</p>
					<p>
						Investeringen in bedrijfsontwikkeling, uitbreiding van het team en
						verbreding van het aanbod met meer geavanceerde algemene
						bouwwerkzaamheden.
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</Container>
	);
}

export default About3;
