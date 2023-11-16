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
	const [navbarColor, setNavbarColor] = useState("transparent");

	useEffect(() => {
		const handleRouteChange = () => {
			setMenuOpen(false); // Zamknij menu po zmianie trasy
		};

		router.events.on("routeChangeStart", handleRouteChange);

		return () => {
			router.events.off("routeChangeStart", handleRouteChange);
		};
	}, [router.events]);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
				setNavbarColor("#ffffff");
			} else {
				setScrolled(false);
				setNavbarColor("transparent");
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

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
					<Image src="/assets/logo1.png" alt="logo" width={50} height={50} />
					<span className={scrolled ? "logo" : "logo1"}>
						<span className="mx-2 nazwa-firmy text-bold">
							<span style={{ color: "#C4E6F6" }}>DG </span>
							<span style={{ color: "orange" }}>BOUWGROEP</span>
						</span>
					</span>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					aria-label="Toggle navigation"
					onClick={toggleMenu}
				>
					{" "}
					{menuOpen ? <FiX /> : <span>&#9776;</span>}
				</Navbar.Toggle>
				<Navbar.Collapse
					id="basic-navbar-nav"
					className={`${
						menuOpen ? "show" : ""
					} rounded justify-content-end text-center m-1 navbar-toggler border-0`}
				>
					<Nav className="navbar-collapse py-3 justify-content-end align-items-center text-center rounded ">
						<Nav.Link as={Link} href="/" className="m-1">
							<Button
								className="btn-md py-1  border-0 shadow-md btn-nav"
								variant="warning"
							>
								<MdHome />
							</Button>
						</Nav.Link>
						<Nav.Link as={Link} href="/about" className="m-1">
							<Button
								className="btn-md py-2  border-0 shadow-md btn-nav"
								variant="warning"
							>
								O Nas
							</Button>
						</Nav.Link>
						<NavDropdown
							title="Usługi"
							id="basic-nav-dropdown"
							className="btn-md shadow-md btn-nav-drop rounded  m-1 p-1 "
							menuVariant="light"
						>
							<NavDropdown.Item as={Link} href="/okna">
								<Button className="w-100 border-0 btn-nav ">Okna</Button>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item as={Link} href="/termo">
								<Button className="w-100 border-0 btn-nav ">Termo</Button>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item as={Link} href="/tynki">
								<Button className="w-100 border-0 btn-nav ">Tynki</Button>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item as={Link} href="/glazura">
								<Button className="w-100 border-0 btn-nav ">Glazura</Button>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item as={Link} href="/ogolne">
								<Button className="w-100 border-0 btn-nav ">Ogolne</Button>
							</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link as={Link} href="/werk">
							<Button
								className="btn-md py-2  border-0 shadow-md btn-nav"
								variant="warning"
							>
								Realizacje
							</Button>
						</Nav.Link>

						<Nav.Link as={Link} href="/contact" className="m-1">
							<Button
								className="btn-md py-2 border-0 shadow-md btn-nav"
								variant="warning"
							>
								Kontakt
							</Button>
						</Nav.Link>

						<Nav.Item className=" ">
							<Dropdown className="border-0">
								<Dropdown.Toggle
									style={{ backgroundColor: "green" }}
									id="dropdown-basic"
									className="border-0"
								>
									<MdOutlinePhoneInTalk /> Szybki Kontakt
								</Dropdown.Toggle>

								<Dropdown.Menu className="border-0">
									<Dropdown.Item className="my-2 hover">
										<span className="text-bold">Grzesiek: +31684665722</span>
									</Dropdown.Item>
									<Dropdown.Item className="my-2 hover">
										<span className="text-bold">Darek: +31615968284</span>
									</Dropdown.Item>
									<Dropdown.Item className="my-2 hover">
										<span className="text-bold">
											E-mail: dgbouwgroep@gmail.com
										</span>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComp;
