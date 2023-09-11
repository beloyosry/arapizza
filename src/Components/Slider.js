import Carousel from "react-bootstrap/Carousel";
import Buttons from "./Buttons";
import { piazzaData } from "../assets/images/data/db.jsx";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Slider() {
    return (
        <div className="overlay">
            <div className="caption">
                <h3>First slide label</h3>
                <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <ScrollLink
                    to="offers" // The name of the target section you want to scroll to
                    smooth={true}
                    offset={-70} // You can adjust this offset to match your layout
                    duration={500} // Duration of the scroll animation in milliseconds
                >
                    <Buttons className={"m-auto w-50"} text={"Offers"} />
                </ScrollLink>
            </div>
            <Carousel
                style={{ zIndex: -1 }}
                indicators={false}
                controls={false}>
                {piazzaData.sliderData.map((item) => {
                    return (
                        <Carousel.Item interval={2000} key={item.id}>
                            <img src={item.img} className="w-100" />
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
}

export default Slider;
