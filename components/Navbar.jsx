import React, { useState, useEffect } from "react";
import { NavDropdown, Container, Button, Dropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import { useTheme } from "next-themes";

import { AiOutlineShopping } from "react-icons/ai";

import { useRouter } from "next/router";
import { useStateContext } from "@/context/StateContext.js";

import imageUrlBuilder from "@sanity/image-url";
import { AiFillCloseCircle } from "react-icons/ai";
const NavbarComp = ({ toggleTheme }) => {
	const router = useRouter();

	const [scrolled, setScrolled] = useState(false);
	const [navbarColor, setNavbarColor] = useState("transparent");

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
					className=" rounded  py-0 d-flex align-items-center shadow-lg"
				>
					<Image src="/assets/logo1.png" alt="logo" width={50} height={50} />
					<span className={scrolled ? "logo" : "logo1"}>
						<span className="mx-2 nazwa-firmy text-bold">DG BOUWGROEP</span>
					</span>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					aria-label="Toggle navigation"
				></Navbar.Toggle>
				<Navbar.Collapse
					id="basic-navbar-nav"
					className=" rounded justify-content-end text-center  m-1  navbar-toggler border-0 "
				>
					<Nav className="navbar-collapse justify-content-end text-center rounded ">
						<Nav.Link as={Link} href="/about" className="m-1">
							<Button
								className="btn-md py-2  border-0 shadow-md btn-nav"
								variant="warning"
							>
								O Nas
							</Button>{" "}
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
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComp;
