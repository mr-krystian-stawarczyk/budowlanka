import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Policy() {
	const [policyData, setPolicyData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await client.fetch(`*[_type == "policy"]`);
				if (data) {
					setPolicyData(data);
				}
			} catch (error) {
				console.error("Error fetching data from Sanity:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<Container fluid className="py-5 bg-danger vh-100 text-dark">
			<Row className="text-center">
				<h2 className="py-3">Politik & Cookies</h2>
			</Row>

			<Row className="mx-auto my-2">
				<h1>Site Under Costruction!!!!</h1>
				<h4 className="my-2">Tutaj Wszystkie Prawne Aspekty</h4>
				<h5>Wszystko </h5>
			</Row>
		</Container>
	);
}

export default Policy;
