import React, { useEffect, useState } from "react";
import { Card, Container, Button, Row, Col, Carousel } from "react-bootstrap";

import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

const Header1 = () => {
	return (
		<Container fluid className="d-flex bg-black m-0 p-0">
			<Carousel className="image-container" indicators={false}>
				<Carousel.Item>
					<Image
						src="/assets/okna1-1.png"
						width={1366}
						height={768}
						className="image"
						alt="webentwicklung-nettetal-fragen1"
					/>
					<Carousel.Caption className="header-bg text-dark rounded shadow-lg p-3 m-1">
						<h1 className="text-uppercase">Okna Montaż</h1>
						<h2>Nulla vitae elit libero, a pharetra augue mollis interdum.</h2>
						<Button href="/okna" className="btn-nav">
							{" "}
							Okna
						</Button>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<Image
						src="/assets/termo1.jpg"
						width={1366}
						height={768}
						className="image"
						alt="webentwicklung-nettetal-fragen1"
					/>
					<Carousel.Caption className="header-bg text-dark rounded shadow-lg p-3 m-1">
						<h1>Termo Izolacja</h1>
						<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
						<Button href="/termo" className="btn-nav">
							Termo
						</Button>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<Image
						src="/assets/henry-co-3coKbdfnAFg-unsplash.jpg"
						width={1366}
						height={768}
						className="image"
						alt="webentwicklung-nettetal-fragen1"
					/>
					<Carousel.Caption className="header-bg text-dark rounded shadow-lg p-3 m-1">
						<h1>Tynki</h1>
						<h2>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</h2>
						<Button href="/tynki" className="btn-nav">
							Tynki{" "}
						</Button>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<Image
						src="/assets/glazura1.jpg"
						width={1366}
						height={768}
						className="image"
						alt="webentwicklung-nettetal-fragen1"
					/>
					<Carousel.Caption className="header-bg text-dark rounded shadow-lg p-3 m-1">
						<h1>Glazura</h1>
						<h2>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</h2>
						<Button href="/glazura" className="btn-nav">
							Tynki{" "}
						</Button>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<Image
						src="/assets/ogolne1.jpg"
						width={1366}
						height={768}
						className="image"
						alt="webentwicklung-nettetal-fragen1"
					/>
					<Carousel.Caption className="header-bg text-dark rounded shadow-lg p-3 m-1">
						<h1>Ogolnobudowlane</h1>
						<h2>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</h2>
						<Button href="/ogolne" className="btn-nav">
							Ogolne{" "}
						</Button>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
};

export default Header1;
