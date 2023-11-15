import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel, Button, Modal } from "react-bootstrap";
import Image from "next/image";
import { Nav } from "react-bootstrap";
import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";
const Werk7 = () => {
	const [products, setProducts] = useState([
		"/assets/1.jpeg",
		"/assets/2.jpg",
		"/assets/3.jpeg",
		"/assets/4.jpg",
		"/assets/5.jpg",
		"/assets/6.jpeg",
		"/assets/7.jpeg",
		"/assets/8.jpg",
		"/assets/9.jpg",
	]);
	const [productsPerSlide, setProductsPerSlide] = useState(3);
	const [showModal, setShowModal] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	const [mobileView, setMobileView] = useState(false);

	const updateProductsPerSlide = () => {
		if (window.innerWidth <= 768) {
			setProductsPerSlide(1);
			setMobileView(true);
		} else {
			setProductsPerSlide(3);
			setMobileView(false);
		}
	};

	useEffect(() => {
		updateProductsPerSlide();
		window.addEventListener("resize", updateProductsPerSlide);

		return () => {
			window.removeEventListener("resize", updateProductsPerSlide);
		};
	}, []);

	const handleImageClick = (imageSrc) => {
		setSelectedImage(imageSrc);
		setShowModal(true);
	};

	const handleModalClose = () => {
		setShowModal(false);
		setSelectedImage(null);
	};

	return (
		<Container fluid className="bg-light py-5" id="realizacje">
			<Row className="justify-content-center align-items-center text-center text-dark py-5">
				<h1 className="text-uppercase text-bold"> Glazura </h1>
			</Row>

			{mobileView ? (
				<Carousel
					indicators={false}
					controls={true}
					interval={null}
					pause={false}
					variant="dark"
				>
					{products.map((product, index) => (
						<Carousel.Item key={index}>
							<Image
								width={250}
								height={350}
								className="d-block w-100"
								src={product}
								alt={`Product ${index}`}
								style={{ cursor: "pointer" }}
								onClick={() => handleImageClick(product)}
							/>
						</Carousel.Item>
					))}
				</Carousel>
			) : (
				<Carousel
					indicators={false}
					controls={true}
					interval={null}
					pause={false}
					variant="dark"
					nextIcon={
						<MdDoubleArrow
							style={{
								fontSize: "4rem",
								color: "orange",
								backgroundColor: "black",
							}}
						/>
					}
					prevIcon={
						<MdDoubleArrow
							style={{
								fontSize: "4rem",
								color: "orange",
								backgroundColor: "black",
								rotate: "180deg",
							}}
						/>
					}
				>
					{products
						.reduce((rows, key, index) => {
							return (
								index % productsPerSlide === 0
									? rows.push([key])
									: rows[rows.length - 1].push(key),
								rows
							);
						}, [])
						.map((row, index) => (
							<Carousel.Item key={index}>
								<Row className="justify-content-center align-items-center text-center">
									{row.map((product, idx) => (
										<Col key={idx}>
											<Image
												width={250}
												height={350}
												className="d-block w-100 p-4"
												src={product}
												alt={`Product ${index * productsPerSlide + idx}`}
												style={{ cursor: "pointer" }}
												onClick={() => handleImageClick(product)}
											/>
										</Col>
									))}
								</Row>
							</Carousel.Item>
						))}
				</Carousel>
			)}

			<Modal
				show={showModal}
				onHide={handleModalClose}
				centered
				fullscreen={mobileView ? true : false}
			>
				<Modal.Body>
					{selectedImage && (
						<div
							style={{ maxWidth: "100%", maxHeight: "80vh", overflow: "auto" }}
						>
							<Image
								layout="responsive"
								width={1920}
								height={1080}
								className="d-block mx-auto"
								src={selectedImage}
								alt="Selected Product"
							/>
						</div>
					)}
				</Modal.Body>
				<Modal.Footer className="align-items-center  justify-content-center">
					<Button
						className="btn-md py-2 btn-nav  border-0 shadow-md btn-nav text-bold"
						style={{ width: "200px", fontWeight: "bold" }}
						onClick={handleModalClose}
					>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</Container>
	);
};

export default Werk7;
