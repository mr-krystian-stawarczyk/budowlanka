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
			<Row className="text-center mt-2  pt-5">
				<h1 className="text-bold text-uppercase">
					Wij zijn isolatiespecialisten
				</h1>
				<h5 className="py-1">
					Dankzij onze producten kunt u genieten van een gelijkmatig verdeelde
					temperatuur in de kamers, wat een aanzienlijke impact heeft op het
					dagelijkse welzijn van de leden van het huishouden. Bovendien
					vermindert de uitstekende thermische isolatie ook de condensatie van
					vocht op het glas, wat belangrijk is voor het handhaven van de juiste
					interne omstandigheden en het voorkomen van de vorming van schadelijke
					schimmels.
				</h5>
			</Row>
			<Row className="justify-content-center py-3  align-items-center">
				<Col lg={4} className="mx-auto my-2 text-center ">
					{" "}
					<Image
						src="/assets/termo2.jpg"
						width={300}
						height={300}
						className="responsive-image shadow-lg "
						alt="termoisolatie2"
					/>{" "}
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1>Dakisolatie</h1>

							<Card.Text></Card.Text>
						</Card.Body>{" "}
						<Link href="dakisolatie">
							<Button className="btn-nav ">Dakisolatie</Button>
						</Link>
					</Card>
				</Col>{" "}
				<Col lg={4} className="mx-auto my-2 text-center ">
					{" "}
					<Image
						src="/assets/termowew2.png"
						width={300}
						height={300}
						className="responsive-image shadow-lg "
						alt="binnenisolatie2"
					/>{" "}
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1>Binnenisolatie</h1>

							<Card.Text></Card.Text>
						</Card.Body>{" "}
						<Link href="binnenisolatie">
							<Button className="btn-nav ">Binnenisolatie</Button>
						</Link>
					</Card>
				</Col>{" "}
				<Col lg={4} className="mx-auto my-2 text-center ">
					{" "}
					<Image
						src="/assets/termozew2.png"
						width={300}
						height={300}
						className="responsive-image shadow-lg "
						alt="buitenisolatie"
					/>{" "}
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1>Buitenisolatie</h1>

							<Card.Text></Card.Text>
						</Card.Body>
						<Link href="buitenisolatie">
							<Button className="btn-nav ">Buitenisolatie</Button>
						</Link>
					</Card>
				</Col>{" "}
			</Row>
		</Container>
	);
}

export default TermoGlowny;
