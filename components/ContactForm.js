import { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init(process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_USER_ID);

const ContactForm = ({ onSubmit }) => {
	const [formData, setFormData] = useState({
		email: "",
		name: "", // Zmienione z "firstName" na "name"
		phone: "", // Dodane pole "phone"
		description: "", // Zmienione z "message" na "description"
	});
	const [formSubmitted, setFormSubmitted] = useState(false);

	const handleChange = (e) =>
		setFormData({ ...formData, [e.target.id]: e.target.value });

	const sendEmail = (e) => {
		e.preventDefault();
		onSubmit(formData);
		setFormSubmitted(true);
		// Dodaj logikę do wysyłania maila z EmailJS tutaj
	};

	return (
		<Container fluid className="pt-5 mt-5 border border-dark rounded bg-dark">
			<Col lg={6}>
				{!formSubmitted ? (
					<Col>
						{" "}
						<Form>
							<h3 className="pt-3 border-bottom">Contact Me</h3>
							<Row>
								<Col>
									<Form.Group className="mb-3" controlId="name">
										<Form.Label>First Name</Form.Label>
										<Form.Control
											type="text"
											placeholder=""
											value={formData.name}
											onChange={handleChange}
										/>
									</Form.Group>
								</Col>
								<Col>
									<Form.Group className="mb-3" controlId="phone">
										<Form.Label>Phone</Form.Label>
										<Form.Control
											type="text"
											placeholder=""
											onChange={handleChange}
											value={formData.phone}
										/>
									</Form.Group>
								</Col>
							</Row>
							<Row>
								<Form.Group className="mb-3" controlId="email">
									<Form.Label>Enter Email Address</Form.Label>
									<Form.Control
										type="email"
										placeholder="name@example.com"
										onChange={handleChange}
										value={formData.email}
									/>
								</Form.Group>
							</Row>
							<Row>
								<Form.Group className="mb-3" controlId="description">
									<Form.Label>Description</Form.Label>
									<Form.Control
										as="textarea"
										placeholder=""
										onChange={handleChange}
										value={formData.description}
									/>
								</Form.Group>
							</Row>
							<Row>
								<Button
									className="w-25 ms-3"
									size="lg"
									variant="outline-dark"
									type="submit"
									onClick={(e) => sendEmail(e)}
								>
									Send
								</Button>
							</Row>
						</Form>
					</Col>
				) : (
					<div>
						<h3>Thank you for contacting us!</h3>
						{/* Display additional content or redirect users */}
					</div>
				)}
			</Col>
		</Container>
	);
};

export default ContactForm;
