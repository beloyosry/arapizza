import React from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
} from "mdb-react-ui-kit";
import logo from "../assets/images/logo-red.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <MDBFooter
            bgColor="light"
            className="text-lg-start text-muted bg-transparent">
            <section className="">
                <MDBContainer className="text-md-start mt-5">
                    <MDBRow className="mt-3">
                        <MDBCol
                            md="3"
                            lg="4"
                            xl="3"
                            className="mx-auto mb-4 text-center">
                            <img src={logo} />
                            <h6
                                className="text-uppercase fw-bold mb-4"
                                style={{
                                    width: "50%",
                                    transform: "translateX(50%)",
                                }}>
                                Arapizza
                            </h6>
                            <div
                                className="text-center"
                                style={{
                                    width: "50%",
                                    transform: "translateX(50%)",
                                }}>
                                <a href="#" className="me-4 text-reset">
                                    <MDBIcon
                                        color="secondary"
                                        fab
                                        icon="facebook-f"
                                    />
                                </a>
                                <a href="#" className="me-4 text-reset">
                                    <MDBIcon
                                        color="secondary"
                                        fab
                                        icon="twitter"
                                    />
                                </a>
                                <a href="" className="me-4 text-reset">
                                    <MDBIcon
                                        color="secondary"
                                        fab
                                        icon="instagram"
                                    />
                                </a>
                            </div>
                        </MDBCol>

                        <MDBCol
                            md="3"
                            lg="2"
                            xl="2"
                            className="mx-auto mb-4 text-center">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">
                                    privacy policy
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Legal disclaimer
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    terms of use
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Join our team
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-center">
                                Work Hours
                            </h6>

                            <ul className="p-0 m-0 text-center">
                                <li className="text-danger">Sun - Thur</li>
                                <li>10:30 AM TO 10:00 PM </li>
                                <li className="text-danger"> Fri - Sat</li>
                                <li>10:30 AM TO 11:00 PM</li>
                            </ul>
                        </MDBCol>

                        <MDBCol
                            md="4"
                            lg="3"
                            xl="3"
                            className="mx-auto mb-md-0 mb-4 text-center">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p>
                                <MDBIcon
                                    color="secondary"
                                    icon="home"
                                    className="me-2"
                                />
                                New York, NY 10012, US
                            </p>
                            <p>
                                <MDBIcon
                                    color="secondary"
                                    icon="envelope"
                                    className="me-3"
                                />
                                info@example.com
                            </p>
                            <p>
                                <MDBIcon
                                    color="secondary"
                                    icon="phone"
                                    className="me-3"
                                />{" "}
                                + 01 234 567 88
                            </p>
                            <p>
                                <MDBIcon
                                    color="secondary"
                                    icon="print"
                                    className="me-3"
                                />{" "}
                                + 01 234 567 89
                            </p>
                        </MDBCol>

                        <MDBCol
                            md="3"
                            lg="2"
                            xl="2"
                            className="mx-auto mb-4 text-center">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Arapizza
                            </h6>
                            <p>
                                <Link to={"/"} className="link text-reset">
                                    Home
                                </Link>
                            </p>
                            <p>
                                <Link to={"/menu"} className="link text-reset">
                                    Menu
                                </Link>
                            </p>
                            <p>
                                <Link to={"/"} className="link text-reset">
                                    Offers
                                </Link>
                            </p>
                            <p>
                                <Link to={"/about"} className="link text-reset">
                                    About Us
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to={"/contactUs"}
                                    className="link text-reset">
                                    Contact Us
                                </Link>
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div
                className="text-center p-4"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                © 2021 Copyright:
                <a
                    className="text-reset fw-bold"
                    href="https://mdbootstrap.com/">
                    MDBootstrap.com
                </a>
            </div>
        </MDBFooter>
    );
}

export default Footer;
