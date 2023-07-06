import React, { useCallback, useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import First from "./slider3.jpg";
import Second from "./slider5.jpg";
import Third from "./slider6.jpg";
import Fourth from "./slider7.jpg";
import Fifth from "./slider8.jpg";

import "./Slider.css";

const dataSlider = [
    {
        img: First,
    },
    {
        img: Second,
    },
    {
        img: Third,
    },
    {
        img: Fourth,
    },
    {
        img: Fifth,
    },
];

const swipeSpeed = 100000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

const Slider = () => {
    const [slider, setSlider] = useState(0);

    const handleSlider = useCallback(
        (side) => {
            const sliders = dataSlider.length - 1;
            if (side === "left") {
                slider - 1 >= 0 ? setSlider(slider - 1) : setSlider(sliders);
            } else {
                const numberSlide = slider + 1;
                numberSlide > sliders ? setSlider(0) : setSlider(numberSlide);
            }
        },
        [slider]
    );

    useEffect(() => {
        const interval = setInterval(() => {
            handleSlider("right");
        }, 3000);
        return () => clearInterval(interval);
    }, [slider, handleSlider]);

    return (
        <div className="wrapper slider_container">
            <div className="slider">
                <div>
                    <AnimatePresence>
                        <motion.img
                            className="slider_img"
                            src={dataSlider[slider].img}
                            key={dataSlider[slider].img}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < swipeSpeed) {
                                    handleSlider("right");
                                } else if (swipe > swipeSpeed) {
                                    handleSlider("left");
                                }
                            }}
                        ></motion.img>
                    </AnimatePresence>
                </div>
                <img
                    className="slider_left"
                    src="img/slider/left.svg"
                    onClick={() => handleSlider("left")}
                />
                <img
                    className="slider_right"
                    src="img/slider/right.svg"
                    onClick={() => handleSlider("right")}
                />
            </div>
        </div>
    );
};

export default Slider;
