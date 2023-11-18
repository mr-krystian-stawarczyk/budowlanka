import React from "react";
import Head from "next/head";
import Termo1 from "@/components/Termo1";
import Termo2 from "@/components/Termo2";
import Termo3 from "@/components/Termo3";
import Termo4 from "@/components/Termo4";
import Testimonials from "@/components/Testimonials";
import Termo5 from "@/components/Termo5";
import Header3 from "@/components/Header3";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

function TermoGlowny() {
	return (
		<Container
			fluid
			className="py-3 my-2 bg-light text-dark align-items-center justify-content-center"
		>
			<Row className="text-center mt-5 pt-5">
				<h1 className="text-bold text-uppercase">
					Jesteśmy Specjalistami od Izolacji
				</h1>
				<h5 className="py-3">
					{" "}
					Dzięki naszym produktom można cieszyć się równomiernie rozłożoną
					temperaturą w pomieszczeniach, co ma znaczący wpływ na codzienne
					samopoczucie domowników. Ponadto, doskonała termoizolacja redukuje
					również kondensację wilgoci na szybach, co jest istotne dla utrzymania
					odpowiednich warunków wewnętrznych i zapobiegania powstawaniu
					szkodliwego pleśnia czy grzybów.
				</h5>
			</Row>
			<Row className="justify-content-center py-3  align-items-center">
				<Col lg={4} className="mx-auto my-2 text-center ">
					{" "}
					<Image
						src="/assets/termo2.jpg"
						width={300}
						height={300}
						className="responsive-image shadow-lg termo-hover"
						alt="Sanity Image"
					/>{" "}
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1>Izolacja Dach</h1>

							<Card.Text></Card.Text>
						</Card.Body>{" "}
						<Link href="izodach">
							<Button className="btn-nav ">IZO Dach</Button>
						</Link>
					</Card>
				</Col>{" "}
				<Col lg={4} className="mx-auto my-2 text-center ">
					{" "}
					<Image
						src="/assets/termo3.png"
						width={300}
						height={300}
						className="responsive-image shadow-lg termo-hover"
						alt="Sanity Image"
					/>{" "}
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1>Izolacja wew</h1>

							<Card.Text></Card.Text>
						</Card.Body>{" "}
						<Link href="izowew">
							<Button className="btn-nav ">IZO Wew</Button>
						</Link>
					</Card>
				</Col>{" "}
				<Col lg={4} className="mx-auto my-2 text-center ">
					{" "}
					<Image
						src="/assets/termo4.png"
						width={300}
						height={300}
						className="responsive-image shadow-lg termo-hover"
						alt="Sanity Image"
					/>{" "}
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1>Izolacja zew</h1>

							<Card.Text></Card.Text>
						</Card.Body>
						<Link href="izozew">
							<Button className="btn-nav ">IZO ZEW</Button>
						</Link>
					</Card>
				</Col>{" "}
			</Row>
		</Container>
	);
}

export default TermoGlowny;
