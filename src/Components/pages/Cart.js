import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    decreaseItemQuantity,
    increaseItemQuantity,
    removeProduct,
} from "../../app/store";
import { getCartTotal } from "../../app/store";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, totalPrice, totalQuantity } = useSelector(
        (state) => state.cart
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);

    return (
        <section className="h-100 m-5 ">
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-10">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3 className="fw-normal mb-0 text-white">
                                Shopping Cart
                            </h3>
                        </div>
                        {cart.map((product) => {
                            return (
                                <div
                                    key={product.id}
                                    className="card rounded-3 mb-4">
                                    <div className="card-body p-4">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                <img
                                                    src={product.img}
                                                    className="img-fluid rounded-3"
                                                    alt="Cotton T-shirt"
                                                />
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                <p className="lead fw-normal mb-2">
                                                    {product.name}
                                                </p>
                                                <p>
                                                    <span className="text-muted">
                                                        Size:
                                                    </span>
                                                    {product.size}
                                                </p>
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                <button
                                                    className="btn btn-link px-2"
                                                    onClick={() =>
                                                        dispatch(
                                                            decreaseItemQuantity(
                                                                product.id
                                                            )
                                                        )
                                                    }>
                                                    <i className="fas fa-minus"></i>
                                                </button>

                                                <input
                                                    id="form1"
                                                    min={"1"}
                                                    max={"10"}
                                                    name="quantity"
                                                    type="number"
                                                    className="form-control form-control-sm"
                                                    value={product.quantity}
                                                />

                                                <button
                                                    className="btn btn-link px-2"
                                                    onClick={() =>
                                                        dispatch(
                                                            increaseItemQuantity(
                                                                product.id
                                                            )
                                                        )
                                                    }>
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                            </div>
                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                <h5 className="mb-0">
                                                    ${product.price}
                                                </h5>
                                            </div>
                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                <a
                                                    onClick={() => {
                                                        dispatch(
                                                            removeProduct(
                                                                product
                                                            )
                                                        );
                                                    }}
                                                    href="#!"
                                                    className="text-danger">
                                                    <i className="fas fa-trash fa-lg"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        <div className="card mb-4 ">
                            <div
                                className="card-body p-4 d-flex flex-row "
                                style={{
                                    justifyContent: "space-between",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                }}>
                                <div>
                                    <h4
                                        style={{
                                            marginBottom: "10px",
                                            width: "100%",
                                        }}>
                                        Total Quantity :
                                        <span>{totalQuantity}</span>
                                    </h4>
                                    <h4
                                        style={{
                                            marginBottom: "10px",
                                            width: "100%",
                                        }}>
                                        Total Price : <span>${totalPrice}</span>
                                    </h4>
                                </div>
                                {cart.length > 0 ? (
                                    <Link
                                        to={"/payment"}
                                        type="button"
                                        className="btn btn-warning btn-block btn-lg "
                                        style={{ width: "100%" }}>
                                        Proceed to Pay
                                    </Link>
                                ) : (
                                    <button
                                        type="button"
                                        className="btn btn-warning btn-block btn-lg "
                                        style={{ width: "100%" }}
                                        disabled={true}>
                                        Proceed to Pay
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
