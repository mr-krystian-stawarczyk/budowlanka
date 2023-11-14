import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import ImageModal from "./ImageModal";

const Werk3 = () => {
	const [werkData, setWerkData] = useState([]);
	const [showModal, setShowModal] = useState(false); // State for showing modal
	const [modalImage, setModalImage] = useState("");

	const handleImageClick = (imageUrl) => {
		setModalImage(imageUrl);
		setShowModal(true);
	};

	return (
		<Container fluid className="bg-light py-5">
			<Row className="text-dark text-center my-3">
				<h1>Unsere Letzte Werk</h1>
			</Row>
			<Row className="justify-content-center align-items-center text-center">
				<Col md={4} className="mx-auto my-3 d-flex justify-content-center">
					<Card
						style={{ minWidth: "18rem" }}
						className="bg-transparent shadow-lg"
					>
						<div
							// Use item.image here, assuming it's the field in your Sanity schema for the image
							variant="top"
						>
							<Image
								src="/assets/19.png" // Use item.image here
								width={250}
								height={250}
								style={{ cursor: "pointer" }}
								className="m-1"
								alt="webentwicklung-nettetal-fragen1"
							/>
						</div>
						<Card.Body>
							<Card.Title className="text-dark">dgfgfgfdgdf</Card.Title>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<ImageModal
				show={showModal}
				handleClose={() => setShowModal(false)}
				imageUrl={modalImage} // Use imageUrl here
			/>
		</Container>
	);
};

export default Werk3;
