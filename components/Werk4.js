import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap";
import Image from "next/image";
import { MdDoubleArrow } from "react-icons/md";

const Werk4 = () => {
	const [products, setProducts] = useState({
		kozijnen: [
			"/assets/okna2.jpg",
			"/assets/okna21.jpg",
			"/assets/okna22.jpg",
			"/assets/okna23.jpg",
			"/assets/okna1-1.png",
			"/assets/okna66.jpg",
			"/assets/okna67.jpg",
			"/assets/okna68.jpg",
			"/assets/70.jpg",
			"/assets/71.jpg",
			"/assets/72.jpg",
			"/assets/73.jpg",
			"/assets/74.jpg",
			"/assets/75.jpg",
			"/assets/76.jpg",
			"/assets/77.jpg",
			"/assets/78.jpg",
			"/assets/79.jpg",
			"/assets/80.jpg",
			"/assets/81.jpg",
			"/assets/82.jpg",
			"/assets/83.jpg",
		],
		isolatie: [
			"/assets/thermo21.jpg",
			"/assets/thermo22.jpg",
			"/assets/thermo23.jpg",
			"/assets/thermo24.jpg",
			"/assets/thermo3.png",
			"/assets/termo3.png",
			"/assets/izo66.jpg",
			"/assets/izo67.jpg",
			"/assets/izo69.jpg",
			"/assets/izo1.jpg",
			"/assets/izo2.jpg",
			"/assets/izo3.jpg",
			"/assets/izo4.jpg",
			"/assets/izo5.jpg",
			"/assets/izo6.jpg",
		],
		stukadoorswerk: [
			"/assets/tynki11.jpg",
			"/assets/tynki13.jpg",
			"/assets/tynki14.jpg",
			"/assets/tynki15.png",
			"/assets/tynki3.jpg",
			"/assets/tynki5.png",
			"/assets/tynki66.jpg",
			"/assets/tynki67.jpg",
			"/assets/tynki68.jpg",
			"/assets/tynki99.jpg",
		],
		tegelwerk: [
			"/assets/glazura11.jpg",
			"/assets/glazura12.jpg",
			"/assets/glazura14.jpg",
			"/assets/glazura16.jpg",
			"/assets/glazura17.jpg",
			"/assets/plytki66.jpg",
			"/assets/plytki67.jpg",
			"/assets/plytki69.jpg",
			"/assets/glazura1.jpg",
		],
		verbouwing: [
			"/assets/ogolne11.jpg",
			"/assets/ogolne12.jpg",
			"/assets/ogolne14.jpg",
			"/assets/ogolne15.jpg",
			"/assets/ogolne1.jpg",
			"/assets/ogolne2.jpg",
			"/assets/ogolne66.jpg",
			"/assets/ogolne68.jpg",
			"/assets/ogolne69.jpg",
			"/assets/90.jpg",
			"/assets/91.jpg",
			"/assets/92.jpg",
			"/assets/93.jpg",
			"/assets/94.jpg",
			"/assets/95.jpg",
			"/assets/96.jpg",
			"/assets/97.jpg",
		],
	});
	const [selectedCategory, setSelectedCategory] = useState("kozijnen");
	const [showModal, setShowModal] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	const [mobileView, setMobileView] = useState(false);
	const [imagesToShow, setImagesToShow] = useState(6); // Number of images to show initially

	const updateProductsPerSlide = () => {
		setMobileView(window.innerWidth <= 768);
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

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
		setImagesToShow(6); // Reset the number of images to show when the category changes
	};

	const handleLoadMore = () => {
		setImagesToShow((prevImagesToShow) => prevImagesToShow + 6); // Increase the number of images to show
	};

	const handleShowLess = () => {
		setImagesToShow(6); // Reset the number of images to show to the initial value
	};
	return (
		<Container fluid className="blur-bg py-5" id="realizacje">
			<Row className="justify-content-center">
				{Object.keys(products).map((category, index) => (
					<Col key={index} xs={12} sm={6} md={4} lg={3} xl={2} className="my-1">
						<Button
							variant="dark"
							className={`w-100 px-1 ${
								selectedCategory === category ? "active" : ""
							}`}
							onClick={() => handleCategoryChange(category)}
						>
							{capitalizeFirstLetter(category)}
						</Button>
					</Col>
				))}
			</Row>

			<Row className="justify-content-center">
				{products[selectedCategory]
					.slice(0, imagesToShow)
					.map((product, index) => (
						<Col
							key={index}
							xs={12}
							sm={6}
							md={4}
							lg={4}
							xl={3}
							className="mt-5"
						>
							<Image
								width={250}
								height={350}
								className="d-block w-100 mx-auto my-3 shadow-lg"
								src={product}
								alt={`Product ${index}`}
								style={{ cursor: "pointer" }}
								onClick={() => handleImageClick(product)}
							/>
						</Col>
					))}
			</Row>

			{imagesToShow < products[selectedCategory].length && (
				<Row className="justify-content-center mt-3">
					<Col xs={12} className="text-center">
						{imagesToShow === 6 ? (
							<Button variant="dark" onClick={handleLoadMore}>
								Meer
							</Button>
						) : (
							<Button variant="dark" onClick={handleShowLess}>
								Minder
							</Button>
						)}
					</Col>
				</Row>
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
							style={{
								width: "100%",
								maxWidth: "100%",
								maxHeight: "80vh",
								overflow: "auto",
								display: "flex",
								justifyContent: "center",
							}}
						>
							<Image
								layout="responsive"
								width={Math.min(window.innerWidth - 40, 1920)} // Ogranicz szerokość obrazu do szerokości okna przeglądarki z odjęciem marginesu
								height={Math.min((window.innerWidth - 40) * 0.5625, 1080)} // Ustal proporcje obrazu (16:9)
								className="d-block mx-auto"
								src={selectedImage}
								alt="Selected Product"
							/>
						</div>
					)}
				</Modal.Body>
				<Modal.Footer className="align-items-center justify-content-center">
					<Button
						className="btn-md py-2 btn-nav border-0 shadow-md btn-nav text-bold"
						style={{ width: "200px", fontWeight: "bold" }}
						onClick={handleModalClose}
					>
						Sluiten
					</Button>
				</Modal.Footer>
			</Modal>
		</Container>
	);
};

export default Werk4;

// Funkcje pomocnicze

function getCategoryImage(category) {
	switch (category) {
		case "kozijnen":
			return "/assets/window.png";
		case "isolatie":
			return "/assets/termoplus1.png";
		case "stukadoorswerk":
			return "/assets/plaster.png";
		case "tegelwerk":
			return "/assets/tiles.png";
		case "verbouwing":
			return "/assets/house.png";
		default:
			return "";
	}
}

function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
