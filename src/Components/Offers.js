import React from "react";
import Cards from "./Cards";
import { Row } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import { piazzaData } from "../assets/images/data/db.jsx";

function Offers() {
    return (
        <section className="offers container py-4" name="offers">
            <h1 className="text-white">Offers</h1>
            <Slide left>
                <Row>
                    {piazzaData.offersData.map((item) => {
                        return (
                            <div
                                key={item.id}
                                left
                                className="col-md-6 col-lg-4 ">
                                <Cards
                                    id={item.id}
                                    img={item.img}
                                    name={item.name}
                                    text={item.text}
                                    price={item.price}
                                />
                            </div>
                        );
                    })}
                </Row>
            </Slide>
        </section>
    );
}

export default Offers;
