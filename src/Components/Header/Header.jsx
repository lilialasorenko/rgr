import React, { memo, useEffect, useState } from "react";

import "./Header.css";
import { Link, useLocation } from "react-router-dom";

const Header = memo(() => {
    const location = useLocation();
    const [menu, setMenu] = useState(false);

    return (
        <header>
            <div className="logo_container">
                <Link to={"/"} className="logo_link">
                    <img className="logo" src="/img/logo.svg" alt={"logo"} />
                    <div>University</div>
                </Link>
            </div>
            <div className="navigation_center">
                <Link
                    className="navigation_link"
                    to={"/"}
                    style={
                        location.pathname === "/"
                            ? { borderBottom: "2px solid" }
                            : {}
                    }
                >
                    <div>Головна</div>
                </Link>
                <Link
                    className="navigation_link"
                    to={"/photos"}
                    style={
                        location.pathname === "/photos"
                            ? { borderBottom: "2px solid" }
                            : {}
                    }
                >
                    <div>Галерея</div>
                </Link>
                <Link
                    className="navigation_link"
                    to={"/news"}
                    style={
                        location.pathname === "/news"
                            ? { borderBottom: "2px solid" }
                            : {}
                    }
                >
                    <div>Новини</div>
                </Link>
                <Link className="navigation_link" to={"/contacts"} style={
                        location.pathname === "/contacts"
                            ? { borderBottom: "2px solid" }
                            : {}
                    }>
                    <div>Контакти</div>
                </Link>
            </div>
            <div>
                <div
                    className={menu ? "burger_menu true" : "burger_menu false"}
                    onClick={() => (menu ? setMenu(false) : setMenu(true))}
                >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>
            <div
                className={
                    menu
                        ? "navigation_burger_cont true"
                        : "navigation_burger_cont false"
                }
            >
                <Link
                    className="navigation_link_burger"
                    to={"/"}
                    style={
                        location.pathname === "/"
                            ? { borderBottom: "2px solid" }
                            : {}
                    }
                >
                    <div>Головна</div>
                </Link>
                <Link
                    className="navigation_link_burger"
                    to={"/photos"}
                    style={
                        location.pathname === "/photos"
                            ? { borderBottom: "2px solid" }
                            : {}
                    }
                >
                    <div>Галерея</div>
                </Link>
                <Link className="navigation_link_burger" to={"/news"} style={
                        location.pathname === "/news"
                            ? { borderBottom: "2px solid" }
                            : {}
                    }>
                    <div>Новини</div>
                </Link>
                <Link className="navigation_link_burger" to={"/contacts"} style={
                        location.pathname === "/contacts"
                            ? { borderBottom: "2px solid" }
                            : {}
                    }>
                    <div>Контакти</div>
                </Link>
            </div>
        </header>
    );
});

export default Header;
