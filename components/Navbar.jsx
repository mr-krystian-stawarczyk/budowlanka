import React, { useState, useEffect } from "react";
import { NavDropdown, Container, Button, Dropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FiX } from "react-icons/fi";
import { useRouter } from "next/router";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdHome } from "react-icons/md";

import imageUrlBuilder from "@sanity/image-url";

const NavbarComp = ({ toggleTheme }) => {
	const router = useRouter();
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen); // Zmiana stanu otwarcia/zamknięcia menu
	};
	const [scrolled, setScrolled] = useState(false);
	const [navbarColor, setNavbarColor] = useState("#fff");

	useEffect(() => {
		const handleRouteChange = () => {
			setMenuOpen(false); // Zamknij menu po zmianie trasy
		};

		router.events.on("routeChangeStart", handleRouteChange);

		return () => {
			router.events.off("routeChangeStart", handleRouteChange);
		};
	}, [router.events]);

	return (
		<Navbar
			expand="lg"
			fixed="top"
			style={{
				height: "70px",
				width: "100vw",
				backgroundColor: navbarColor,
				transition: "background-color 0.5s ease",
			}}
			className="nav-transition rounded-bottom "
			collapseOnSelect
		>
			<Container>
				<Navbar.Brand
					as={Link}
					href="/"
					className=" rounded  py-0 d-flex align-items-center blur"
				>
					<Image src="/assets/logo1.png" alt="logo" width={40} height={40} />
					<span>
						<span className="mx-2 nazwa-firmy text-bold">
							<span style={{ color: "#004E7D" }}>DG </span>
							<span style={{ color: "orange" }}>BOUWGROEP</span>
						</span>
					</span>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					aria-label="Toggle navigation"
				></Navbar.Toggle>
				<Navbar.Collapse
					id="basic-navbar-nav"
					className="rounded justify-content-end text-center m-1 navbar-toggler border-0"
				>
					<Nav className="navbar-collapse py-3 justify-content-end align-items-center text-center rounded ">
						<Nav.Link as={Link} href="/" className="m-1">
							<Button className="btn-md py-1 bg-transparent text-black   border-0 shadow-md ">
								<MdHome className="mb-1" />
							</Button>
						</Nav.Link>
						<Nav.Link as={Link} href="/overons" className="m-1">
							<Button
								className="btn-md py-2 bg-transparent text-black  border-0 shadow-md "
								style={{ textTransform: "capitalize" }}
							>
								Over ons
							</Button>
						</Nav.Link>
						<NavDropdown
							title="Diensten"
							id="basic-nav-dropdown"
							className="btn-md shadow-md -drop rounded text-black  p-1 "
							menuVariant="light"
							style={{ fontSize: "1.1rem" }}
						>
							<NavDropdown.Item as={Link} href="/ramen">
								<Button className="w-100 border-0  bg-transparent text-black text-capitalize">
									Ramen
								</Button>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item as={Link} href="/isolatie">
								<Button className="w-100 border-0  bg-transparent text-black text-capitalize">
									Warmte isolatie
								</Button>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item as={Link} href="/pleisterwerk">
								<Button className="w-100 border-0  bg-transparent text-black text-capitalize">
									Pleisterwerk
								</Button>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item as={Link} href="/glazuur">
								<Button className="w-100 border-0  bg-transparent text-black text-capitalize">
									Glazuur
								</Button>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item as={Link} href="/bouwwerkzaamheden">
								<Button className="w-100 border-0 bg-transparent text-black  text-capitalize">
									Bouwwerkzaamheden
								</Button>
							</NavDropdown.Item>{" "}
							<NavDropdown.Divider />
							<NavDropdown.Item as={Link} href="/vloerverwarming">
								<Button className="w-100 border-0 bg-transparent text-black  text-capitalize">
									Vloerverwarming
								</Button>
							</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link as={Link} href="/werk">
							<Button
								className="btn-md py-2 bg-transparent text-black   border-0 shadow-md "
								style={{ textTransform: "capitalize" }}
							>
								Werk
							</Button>
						</Nav.Link>

						<Nav.Link as={Link} href="/contact" className="m-1">
							<Button
								className="btn-md py-2 border-0 bg-transparent text-black  shadow-md "
								style={{ textTransform: "capitalize" }}
							>
								Contact
							</Button>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComp;
