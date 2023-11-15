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
			className=" py-5 bg-light text-dark overflow-hidden"
			id="story"
		>
			<Row className="text-center ">
				<h1 className="py-3">Odkryj Nasza Historie</h1>
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
					<h5>Rozpoczęcie Działalności</h5>
					<p>
						Pierwsze zlecenia i rozpoczęcie pracy nad montażem okien oraz
						prostych prac ogólnobudowlanych.
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
					<h5>Rozbudowa Oferty</h5>
					<p>Poszerzenie oferty o usługi tynkarskie.</p>
					<p>
						Pierwsze większe projekty związane z tynkowaniem fasad i wnętrz.
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
					<h5>Nagrody i Wyróżnienia</h5>
					<p>
						Otrzymanie nagrody za innowacyjne podejście do montażu
						energooszczędnych okien.
					</p>
					<p>
						Zdobywanie pozytywnych opinii od klientów, co przyczyniło się do
						renomy firmy.
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
					<h5>Ekspansja Regionalna</h5>
					<p>Rozszerzenie działalności na sąsiednie regiony lub miasta.</p>
					<p>
						Realizacja większych kontraktów budowlanych i montażowych poza
						dotychczasowym obszarem działania.
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
					<h5>Partnerstwo Zawodowe</h5>
					<p>
						Nawiązanie partnerskiej współpracy z renomowanymi producentami
						okien.
					</p>
					<p>
						Rozszerzenie zakresu oferowanych usług o nowoczesne rozwiązania
						energetyczne.
					</p>
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
					<h5>Nowe Technologie i Inwestycje</h5>
					<p>
						Wprowadzenie innowacyjnych rozwiązań technologicznych w procesie
						montażu okien.
					</p>
					<p>
						Inwestycje w rozwój działalności, rozbudowa zespołu oraz poszerzenie
						oferty o bardziej zaawansowane prace ogólnobudowlane.
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</Container>
	);
}

export default About3;
