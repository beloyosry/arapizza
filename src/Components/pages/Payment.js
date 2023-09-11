import React from "react";
import styles from "./Payment.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { clearCart } from "../../app/store";
import { useNavigate } from "react-router-dom";

const Payment = () => {
    const { cart, totalPrice, totalQuantity } = useSelector(
        (state) => state.cart
    );

    const totalResult = totalPrice + totalPrice * 0.14;

    const dispatch = useDispatch();
    let navigate = useNavigate();
    const handleCancel = () => {
        dispatch(clearCart());
        navigate("/");
    };
    return (
        <section className="mt-5 text-white ">
            <div className="container py-5 ">
                <div className="row">
                    <div className="col-md-12 col-lg-6 col-xl-6 order-2 order-md-1">
                        <div className=" rounded-3">
                            <div className="card-body p-4">
                                <div className="text-center mb-4">
                                    <h3>Settings</h3>
                                    <h6>Payment</h6>
                                </div>
                                <form action>
                                    <p className="fw-bold mb-4 pb-2">
                                        Saved cards:
                                    </p>
                                    <div className="d-flex flex-row align-items-center mb-4 pb-1">
                                        <img
                                            className="img-fluid"
                                            src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                                        />
                                        <div className="flex-fill mx-3 ">
                                            <div className="form-outline">
                                                <input
                                                    style={{ color: "white" }}
                                                    type="text"
                                                    id="formControlLgXc"
                                                    className="form-control form-control-lg"
                                                    defaultValue="**** **** **** 3193"
                                                />
                                                <label
                                                    className="form-label"
                                                    htmlFor="formControlLgXc">
                                                    Card Number
                                                </label>
                                            </div>
                                        </div>
                                        <a href="#!">Remove card</a>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4 pb-1">
                                        <img
                                            className="img-fluid"
                                            src={
                                                "https://img.icons8.com/color/48/000000/visa.png"
                                            }
                                        />
                                        <div className="flex-fill mx-3">
                                            <div className="form-outline">
                                                <input
                                                    style={{ color: "white" }}
                                                    type="text"
                                                    id="formControlLgXs"
                                                    className="form-control form-control-lg"
                                                    defaultValue="**** **** **** 4296"
                                                />
                                                <label
                                                    className="form-label"
                                                    htmlFor="formControlLgXs">
                                                    Card Number
                                                </label>
                                            </div>
                                        </div>
                                        <a href="#!">Remove card</a>
                                    </div>
                                    <p className="fw-bold mb-4">
                                        Add new card:
                                    </p>
                                    <div className="form-outline mb-4">
                                        <input
                                            style={{ color: "white" }}
                                            type="text"
                                            id="formControlLgXsd"
                                            className="form-control form-control-lg"
                                            defaultValue="Anna Doe"
                                        />
                                        <label
                                            className="form-label"
                                            htmlFor="formControlLgXsd">
                                            Cardholder's Name
                                        </label>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-7">
                                            <div className="form-outline">
                                                <input
                                                    style={{ color: "white" }}
                                                    type="text"
                                                    id="formControlLgXM"
                                                    className="form-control form-control-lg"
                                                    defaultValue="1234 5678 1234 5678"
                                                />
                                                <label
                                                    className="form-label"
                                                    htmlFor="formControlLgXM">
                                                    Card Number
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="form-outline">
                                                <input
                                                    type="password"
                                                    id="formControlLgExpk"
                                                    className="form-control form-control-lg"
                                                    placeholder="MM/YYYY"
                                                />
                                                <label
                                                    style={{ color: "white" }}
                                                    className="form-label"
                                                    htmlFor="formControlLgExpk">
                                                    Expire
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="form-outline">
                                                <input
                                                    type="password"
                                                    id="formControlLgcvv"
                                                    className="form-control form-control-lg"
                                                    placeholder="Cvv"
                                                />
                                                <label
                                                    style={{ color: "white" }}
                                                    className="form-label"
                                                    htmlFor="formControlLgcvv">
                                                    Cvv
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-warning btn-lg btn-block">
                                        Add card
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${styles.payment} col-md-8 col-lg-4 offset-lg-2 order-1 order-md-2`}>
                        <div className="py-4 d-flex justify-content-end">
                            <a
                                href="/"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleCancel()}>
                                Cancel and return to website
                            </a>
                        </div>
                        <div className=" payment-body rounded d-flex flex-column p-2">
                            <div className="p-2 me-3">
                                <h4>Order Recap</h4>
                            </div>
                            {cart.map((item) => {
                                return (
                                    <div key={item.id} className="p-2 d-flex">
                                        <div className="col-8">
                                            {item.name}-({item.size})
                                            <span className="fw-bold">
                                                x{item.quantity}
                                            </span>
                                        </div>
                                        <div className="ms-auto fw-bold">
                                            ${item.price * item.quantity}
                                        </div>
                                    </div>
                                );
                            })}
                            <div className="border-top px-2 mx-2">
                                <div className="p-2 d-flex">
                                    <div className="col-8">Tax</div>
                                    <div className="ms-auto fw-bold">+ 14%</div>
                                </div>
                                <div className="border-top px-2 mx-2">
                                    <div className="p-2 d-flex pt-3">
                                        <div className="col-8">
                                            <b>Total</b> :
                                        </div>
                                        <div className="ms-auto">
                                            <b className="text-warning">
                                                $ {totalResult.toFixed(2)}
                                            </b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;
