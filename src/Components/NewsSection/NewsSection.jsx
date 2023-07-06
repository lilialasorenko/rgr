import React from "react";

import "./NewsSection.css";

const NewsSection = ({text, img}) => {
    return (
        <div className="news_section_cont">
            <h3 className="news_section_title">Lorem ipsum dolor sit amet</h3>
            <div className="news_section_content_cont">
                <div className="news_section_img">
                    <img src={img}/>
                </div>
                <div className="news_section_text">
                    {text}
                </div>
            </div>
        </div>
    );
};

export default NewsSection;
