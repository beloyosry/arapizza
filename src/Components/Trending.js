import React from "react";
import Cards from "./Cards";
import { Row } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import { piazzaData } from "../assets/images/data/db.jsx";

function Trending() {
    return (
        <section className="menu">
            <h1 className="text-white">Trending</h1>
            <Slide right className="m-4">
                <Row className="px-5 m-0">
                    {piazzaData.trendingData.map((item) => {
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
}

export default Trending;
