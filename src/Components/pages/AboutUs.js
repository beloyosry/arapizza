import React from "react";
import logo from "../../assets/images/logo-red-white.png";
import owner from "../../assets/images/owner.png";
import chef from "../../assets/images/chef.png";

const AboutUs = () => {
    return (
        <section
            className="about-us  container text-white text-center"
            style={{ marginTop: "100px" }}>
            <div className="row logo ">
                <div>
                    <img className="w-25" src={logo} alt />
                </div>
            </div>
            <div className="row mt-5">
                <h2>About Us</h2>
                <div className="col-6 offset-3 text-about">
                    <p>
                        Welcome to ARA<span>PIZZA</span>, the authentic Italian
                        pizzeria in the heart of the wonderful village of
                        Airwell. We are a couple from Munich offering you the
                        most delicious sliced pizza, made with the finest
                        ingredients and in a traditional way. Our story began
                        when we first visited this village in 1975, and we have
                        fallen in love with it ever since. We moved here 23
                        years ago, and opened our restaurant in 2016. Since
                        then, we've been striving to satisfy our customers with
                        quality pizza and service.
                    </p>
                </div>

                <div className="col-6 offset-3 text-about">
                    <p>
                        We invite you to visit us at our main branch located at
                        12-Abbas El-Akkad-Nasr City. You can call us at
                        704-910-3052 or email us{" "}
                        <a href="mailto:info@arapizza.com">info@arapizza.com</a>{" "}
                        To book or to order delivery
                        <br />
                        <br />
                        Thank you for choosing us ARA<span>PIZZA</span>، We hope
                        to see you soon
                    </p>
                </div>
            </div>
            <div className="row owners mt-5">
                <h3>Work Team</h3>
                <div className="col-md-3"></div>
                <div className="col-md-3">
                    <img className="rounded-circle w-25" src={owner} alt="" />
                    <h4>Owner</h4>
                    <p>Mohammed Elsherbiny</p>
                </div>
                <div className="col-md-3">
                    <img className="rounded w-25" src={chef} alt="" />
                    <h4>Chief</h4>
                    <p>Soad Anwar</p>
                </div>
                <div className="col-md-3"></div>
            </div>
        </section>
    );
};

export default AboutUs;
