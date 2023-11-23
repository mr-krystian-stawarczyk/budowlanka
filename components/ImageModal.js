import React from "react";
import { Modal } from "react-bootstrap";

const ImageModal = ({ show, handleClose, imageUrl }) => {
	return (
		<Modal show={show} onHide={handleClose} centered size="lg">
			<Modal.Body className="centered-modal">
				<img src={imageUrl} className="modal-content" alt="Modal-image" />
			</Modal.Body>
		</Modal>
	);
};

export default ImageModal;
