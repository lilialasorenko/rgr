import React from "react";

import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer_cont">
                <div>
                    <div className="logo_container">
                        <Link to={"/"} className="logo_link_footer">
                            <img
                                className="logo_footer"
                                src="/img/logo.svg"
                                alt={"logo"}
                            />
                        </Link>
                    </div>
                </div>
                <div className="link_container">
                    <div>
                        <img
                            className="footer_link_img"
                            src="img/twitter.svg"
                        />
                    </div>
                    <div>
                        <img
                            className="footer_link_img"
                            src="img/instagram.svg"
                        />
                    </div>
                    <div>
                        <img
                            className="footer_link_img"
                            src="img/facebook.svg"
                        />
                    </div>
                </div>
                <div>
                    <div className="footer_number">+38(030)2747077</div>
                </div>
            </div>
            <div className="reserved_text">
                <div>All rights reserved. 2023</div>
            </div>
        </footer>
    );
};

export default Footer;
