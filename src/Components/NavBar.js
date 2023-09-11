import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo-red.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function NavBar() {
    const data = useSelector((state) => state.cart.cart);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isScrolled]);
    return (
        <Navbar
            expand="lg"
            className={` fixed-top navbar ${
                isScrolled ? "bg-light text-black" : "bg-transparent text-white"
            } border-0 shadow-none`}
            bg="light"
            data-bs-theme="light">
            <Container>
                <Link to={"/"}>
                    <img
                        className=" d-none d-md-block"
                        src={logo}
                        style={{ width: 50 }}
                        alt="logo"
                    />
                </Link>
                <Navbar.Brand>
                    <span
                        className={`${
                            isScrolled ? " text-black" : " text-white"
                        }`}>
                        ARA
                    </span>
                    <span className="text-danger">PIZZA</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link
                            to={"/"}
                            className={`link nav-link ${
                                isScrolled ? "text-black" : "text-white"
                            }`}>
                            Home
                        </Link>
                        <Link
                            to={"/menu"}
                            className={`link nav-link ${
                                isScrolled ? "text-black" : "text-white"
                            }`}>
                            Menu
                        </Link>
                        <Link
                            to={"/about"}
                            className={`link nav-link ${
                                isScrolled ? "text-black" : "text-white"
                            }`}>
                            About Us
                        </Link>
                        <Link
                            to={"/contact-us"}
                            className={`link nav-link ${
                                isScrolled ? "text-black" : "text-white"
                            }`}>
                            Contact Us
                        </Link>
                        <Link
                            to={"/english"}
                            className={`link nav-link ${
                                isScrolled ? "text-black" : "text-white"
                            }`}>
                            English
                        </Link>
                    </Nav>
                </Navbar.Collapse>
                <Link to={"/cart"}>
                    <div className="shopping-icon">
                        <div>
                            <span>{data.length}</span>
                        </div>
                        <AiOutlineShoppingCart
                            color={`${isScrolled ? "black" : "white"}`}
                        />
                    </div>
                </Link>
            </Container>
        </Navbar>
    );
}

export default NavBar;
