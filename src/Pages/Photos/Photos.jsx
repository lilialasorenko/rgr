import React from "react";
import Layout from "../../Components/Layout/Layout";
import Slider from "../../Components/Slider/Slider";

import "./Photos.css";

const Photos = () => {
    return (
        <Layout>
            <div className="photos_main_container">
                <h3 className="slider_title">Слайдер з демонстрацією фотогалереї</h3>
                <Slider />
            </div>
        </Layout>
    );
};

export default Photos;
