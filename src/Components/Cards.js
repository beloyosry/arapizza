import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addProduct } from "../app/store";
import { Form, Row } from "react-bootstrap";

function Cards({ img, name, text, price, id }) {
    const dispatch = useDispatch();

    const [selectedSize, setSelectedSize] = useState("small");

    const selectHandle = (e) => {
        setSelectedSize(e.target.value);
    };

    // Calculate the price based on the selected size
    let calculatedPrice;
    switch (selectedSize) {
        case "small":
            calculatedPrice = price.S;
            break;
        case "medium":
            calculatedPrice = price.M;
            break;
        case "large":
            calculatedPrice = price.L;
            break;
        default:
            break;
    }

    return (
        <Card className="cards" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} style={{ height: "272px" }} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <Row>
                        <div className="col-6">
                            <Form.Select
                                onChange={selectHandle}
                                aria-label="Default select example"
                                style={{ width: "100px" }}
                                value={selectedSize}>
                                {price && (
                                    <>
                                        <option value="small">small</option>
                                        <option value="medium">medium</option>
                                        <option value="large">large</option>
                                    </>
                                )}
                            </Form.Select>
                        </div>
                        <div className="col-6 mt-2 fw-bold">
                            Price : ${calculatedPrice}
                        </div>
                    </Row>
                </Card.Text>
                <Button
                    onClick={() => {
                        dispatch(
                            addProduct({
                                id,
                                img,
                                name,
                                text,
                                price: calculatedPrice,
                                size: selectedSize,
                                quantity: 1,
                            })
                        );
                    }}
                    variant="warning">
                    Add To Cart
                </Button>
            </Card.Body>
        </Card>
    );
}

export default Cards;
