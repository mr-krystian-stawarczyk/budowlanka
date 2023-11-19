import { useState } from "react";

const ContactForm = () => {
	const [submitted, setSubmitted] = useState(false);
	const accessKey = process.env.REACT_APP_ACCESS_KEY;
	const handleSubmit = async (event) => {
		event.preventDefault();
		// Your form submission logic goes here, such as sending the data to your server

		// For example, simulating a successful submission:
		try {
			// Simulating form submission to an API
			await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: new FormData(event.target),
			});

			// If submission was successful, update state to show confirmation
			setSubmitted(true);
		} catch (error) {
			console.error("Form submission error:", error);
		}
	};

	return (
		<div className="mt-5 pt-5">
			{!submitted ? (
				<form onSubmit={handleSubmit}>
					<input type="hidden" name="access_key" value={accessKey} />

					<input type="text" name="name" required />
					<input type="email" name="email" required />
					<textarea name="message" required></textarea>
					<div className="h-captcha" data-captcha="true"></div>
					<button type="submit">Submit Form</button>
				</form>
			) : (
				<p>Message sent! Thank you.</p>
			)}
		</div>
	);
};

export default ContactForm;
