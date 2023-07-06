import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Layout.css";

const Layout = ({ children }) => {
    return (
        <div className="all_page">
            <Header />
            <section className="content_page">{children}</section>
            <Footer />
        </div>
    );
};

export default Layout;
