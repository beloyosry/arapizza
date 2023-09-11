import React from "react";
import Slider from "../Slider";
import Offers from "../Offers";
import Trending from "../Trending";
import Buttons from "../Buttons";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="text-center mx-auto">
            <Slider />
            <Offers />
            <Trending />
            <Link to={"/menu"}>
                <Buttons text={"Go To Menu"} className={"mt-4"} />
            </Link>
        </div>
    );
};

export default Home;
