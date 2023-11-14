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
		<Container fluid className=" py-5 overflow-hidden" id="story">
			<Row className="text-center ">
				<h1 className="py-3">Odkryj Nasza Historie</h1>
			</Row>
			<VerticalTimeline lineColor="rgb(250, 179, 0)" className="text-dark">
				<VerticalTimelineElement
					date={2022}
					iconStyle={{
						background: "rgb(0, 54, 129)",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: `#fff 7px solid`,
					}}
				>
					<h5>fdadsf</h5>
					<p>dfsfd</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					date={2022}
					iconStyle={{
						background: "rgb(0, 54, 129)",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: `#fff 7px solid`,
					}}
				>
					<h5>fdadsf</h5>
					<p>dfsfd</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					date={2022}
					iconStyle={{
						background: "rgb(0, 54, 129)",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: `#fff 7px solid`,
					}}
				>
					<h5>fdadsf</h5>
					<p>dfsfd</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					date={2022}
					iconStyle={{
						background: "rgb(0, 54, 129)",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: `#fff 7px solid`,
					}}
				>
					<h5>fdadsf</h5>
					<p>dfsfd</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					date={2022}
					iconStyle={{
						background: "rgb(0, 54, 129)",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: `#fff 7px solid`,
					}}
				>
					<h5>fdadsf</h5>
					<p>dfsfd</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</Container>
	);
}

export default About3;
