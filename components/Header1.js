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
						alt="bouw1"
					/>
					<Carousel.Caption className="bg-light text-dark rounded shadow-lg p-3 m-1">
						<h2 className="text-uppercase text-bold">Okna Montaż</h2>
						<h3 className="text-bold">
							Nulla vitae elit libero, a pharetra augue mollis interdum.
						</h3>
						<Button href="/okna" className="btn-nav ">
							{" "}
							<span className="text-bold">Okna</span>
						</Button>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<Image
						src="/assets/termo1.jpg"
						width={1366}
						height={768}
						className="image"
						alt="bouw2"
					/>
					<Carousel.Caption className="bg-light text-dark rounded shadow-lg p-3 m-1">
						<h2 className="text-bold">Termo Izolacja</h2>
						<h3 className="text-bold">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</h3>
						<Button href="/termo" className="btn-nav">
							<span className="text-bold">Termo</span>
						</Button>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<Image
						src="/assets/henry-co-3coKbdfnAFg-unsplash.jpg"
						width={1366}
						height={768}
						className="image"
						alt="bouw3"
					/>
					<Carousel.Caption className="bg-light text-dark rounded shadow-lg p-3 m-1">
						<h2 className="text-bold">Tynki</h2>
						<h3 className="text-bold">
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</h3>
						<Button href="/tynki" className="btn-nav">
							<span className="text-bold">Tynki</span>
						</Button>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<Image
						src="/assets/glazura1.jpg"
						width={1366}
						height={768}
						className="image"
						alt="bouw4"
					/>
					<Carousel.Caption className="bg-light text-dark rounded shadow-lg p-3 m-1">
						<h2 className="text-bold">Glazura</h2>
						<h3 className="text-bold">
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</h3>
						<Button href="/glazura" className="btn-nav">
							<span className="text-bold">Glazura</span>
						</Button>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<Image
						src="/assets/ogolne1.jpg"
						width={1366}
						height={768}
						className="image"
						alt="bouw5"
					/>
					<Carousel.Caption className="header-bg text-dark rounded shadow-lg p-3 m-1">
						<h2 className="text-bold">Ogolnobudowlane</h2>
						<h3 className="text-bold">
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</h3>
						<Button href="/ogolne" className="btn-nav">
							<span className="text-bold">Ogolne</span>
						</Button>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
};

export default Header1;
