import React, { useEffect, useState } from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { CountUp } from "use-count-up";

const Header10 = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [resetKey, setResetKey] = useState(0);
	const [ref1, inView1] = useInView();
	const [ref2, inView2] = useInView();
	const [ref3, inView3] = useInView();

	useEffect(() => {
		if (inView1 || inView2 || inView3) {
			setIsVisible(true);
			setResetKey((prevKey) => prevKey + 1);
		} else {
			setIsVisible(false);
		}
	}, [inView1, inView2, inView3]);

	return (
		<Container fluid className="bg-color">
			<Row className="justify-content-center text-center  mt-5">
				{" "}
				<Col md={6} className="mx-auto">
					<Card
						ref={ref1}
						className="bg-dark m-5 mx-auto bg-transparent border-0 text-dark"
					>
						<h3 className="text-uppercase text-bold shadow-lg">
							Dołącz do grona naszych zadowolonych klientów!
						</h3>
					</Card>
				</Col>
			</Row>
			<Row className="justify-content-center text-center">
				<Col md={4} className="mx-auto">
					<Card
						ref={ref2}
						className="btn-nav-drop m-5 mx-auto  border-0 text-uppercase text-dark"
					>
						<Card.Body className="shadow-lg">
							<h4>Zadowoleni klienci:</h4>
							{isVisible && (
								<Col className="display-4">
									<CountUp
										key={resetKey}
										start={200}
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
						className="btn-nav-drop m-5 mx-auto  border-0 text-uppercase text-dark"
					>
						<Card.Body className="shadow-lg">
							<h4>Realizacje:</h4>
							{isVisible && (
								<Col className="display-4">
									<CountUp
										key={resetKey}
										start={200}
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
