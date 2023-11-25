import React, { useEffect, useState } from "react";
import { hasCookie, setCookie, deleteCookie } from "cookies-next"; // Dodany import funkcji deleteCookie
import { Button, Col, Row } from "react-bootstrap";
import Link from "next/link";

const CookieConsent = (props) => {
	const [showConsent, setShowConsent] = useState(true);

	useEffect(() => {
		setShowConsent(hasCookie("localConsent"));
	}, []);

	const acceptCookie = () => {
		setShowConsent(true);
		setCookie("localConsent", "true", { sameSite: "none", secure: true });
		// Tutaj dodaj kod inicjujący analytics po zaakceptowaniu plików cookie
		// analytics.init();
	};

	const declineCookie = () => {
		setShowConsent(true);
		deleteCookie("localConsent"); // Usunięcie pliku cookie w przypadku odmowy
	};

	if (showConsent) {
		return null;
	}

	const overlayStyle = {
		position: "fixed",
		bottom: 0, // Zmienione z 200 na 0, aby umieścić overlay na dolnym brzegu
		left: 0,
		zIndex: 9999,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};
	return (
		<div style={overlayStyle}>
			<Row className="justify-content-center text-center sticky mt-3 ">
				<Col className="bg-white rounded">
					<Col className=" my-3 py-3">
						<Col className="fixed bottom-0 left-0 right-0  flex items-center justify-between px-4 py-2 bg-gray-100">
							<Row className="overflow-auto">
								<h6 className="text-black text-base ">
									Deze website maakt gebruik van cookies. Cookies zijn nodig om
									de juiste werking van de website te garanderen, inhoud te
									personaliseren, advertenties aan te passen en verkeer op de
									site te analyseren. Door gebruik te maken van onze website
									stem je in met het gebruik van cookies volgens ons
									privacybeleid.
								</h6>
								<h6 className="text-black text-base py-1">
									Je kunt de cookie-instellingen in je browser wijzigen of
									cookiebeheertools gebruiken om cookies te blokkeren of te
									verwijderen. Merk echter op dat het uitschakelen van cookies
									van invloed kan zijn op de werking van sommige functies en
									diensten op onze website.
								</h6>
								<h6 className="text-black text-base ">
									Meer informatie over cookies en ons privacybeleid vind je op
									onze website. Door op "Akkoord" te klikken of door gebruik te
									blijven maken van de site, ga je akkoord met het gebruik van
									cookies.
								</h6>
							</Row>

							<Button className=" m-2 btn-nav" onClick={() => acceptCookie()}>
								Akkoord
							</Button>
							<Button className=" m-2 btn-nav" onClick={() => declineCookie()}>
								Afval
							</Button>
						</Col>
						<Link href="policy">Politiek & Afdruk</Link>
					</Col>
				</Col>
			</Row>
		</div>
	);
};

export default CookieConsent;
