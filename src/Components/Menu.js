import React from "react";
import { piazzaData } from "../assets/images/data/db.jsx";
import Cards from "./Cards.js";
import { Row } from "react-bootstrap";
import { Slide } from "react-reveal";

const Menu = () => {
    return (
        <section className="menu">
            <h1 className="text-white mt-5">Menu</h1>
            <Slide right className="m-4">
                <Row className="px-5 m-0">
                    {piazzaData.menuData.map((item) => {
                        return (
                            <div key={item.id} className="col-md-6 col-lg-3">
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
};

export default Menu;
