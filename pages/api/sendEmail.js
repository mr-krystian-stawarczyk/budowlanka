import nodemailer from "nodemailer";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const { name, email, message } = req.body;

		// Konfiguracja nodemailer
		const transporter = nodemailer.createTransport({
			// Konfiguracja SMTP lub innej usługi mailowej
		});

		try {
			// Wysłanie maila
			const info = await transporter.sendMail({
				from: email,
				to: "mr.krystian.stawarczyk@gmail.com", // Twój adres e-mail, na który ma być wysłana wiadomość
				subject: `Wiadomość od ${name}`,
				text: message,
			});

			console.log("E-mail sent:", info.response);
			res.status(200).json({ message: "E-mail sent successfully!" });
		} catch (error) {
			console.error("Error sending e-mail:", error);
			res.status(500).json({ message: "Error sending e-mail" });
		}
	} else {
		res.status(405).json({ message: "Method Not Allowed" });
	}
}
