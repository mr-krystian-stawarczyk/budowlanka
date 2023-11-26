import React, { useEffect, useState } from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { CountUp } from "use-count-up";

const Header10 = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [resetKey, setResetKey] = useState(0);

	const [ref2, inView2] = useInView();
	const [ref3, inView3] = useInView();

	useEffect(() => {
		if (inView2 || inView3) {
			setIsVisible(true);
			setResetKey((prevKey) => prevKey + 1);
		} else {
			setIsVisible(false);
		}
	}, [inView2, inView3]);

	return (
		<Container fluid className="blur-bg  py-5 mt-5">
			<Row className="justify-content-center text-center  py-3">
				<Col md={6} className="mx-auto">
					<Card className="bg-dark m-5 mx-auto bg-transparent border-0 text-dark">
						<h2 className="text-uppercase text-bold ">
							Sluit u aan bij onze tevreden klanten!
						</h2>
					</Card>
				</Col>
			</Row>
			<Row className="justify-content-center text-center">
				<Col md={4} className="mx-auto">
					<Card
						ref={ref2}
						className="btn-nav-drop my-2 mx-auto   border-lgtext-uppercase text-dark"
					>
						<Card.Body className="shadow-lg">
							<h4>Tevreden klanten:</h4>
							{isVisible && (
								<Col className="display-3">
									+
									<CountUp
										key={resetKey}
										start={400}
										end={528}
										duration={7}
										isCounting={true}
									/>{" "}
								</Col>
							)}
						</Card.Body>
					</Card>
				</Col>
				<Col md={4} className="mx-auto">
					<Card
						ref={ref3}
						className="btn-nav-drop  mx-auto my-2  border-lg text-uppercase text-dark"
					>
						<Card.Body className="shadow-lg">
							<h4>Projecten:</h4>
							{isVisible && (
								<Col className="display-3">
									+
									<CountUp
										key={resetKey}
										start={300}
										end={379}
										duration={7}
										isCounting={true}
									/>
								</Col>
							)}
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Header10;
