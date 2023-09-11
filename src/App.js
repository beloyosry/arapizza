import React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Menu from "./Components/Menu";
import Cart from "./Components/pages/Cart";
import Payment from "./Components/pages/Payment";
import ContactUs from "./Components/pages/ContactUs";
import AboutUs from "./Components/pages/AboutUs";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="bg-pattern"></div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/about" element={<AboutUs />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
