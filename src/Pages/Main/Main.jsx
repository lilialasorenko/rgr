import React from "react";
import Layout from "../../Components/Layout/Layout";

import "./Main.css";

const SecondComponent = ({ number, text }) => {
    return (
        <div className="second_component_cont">
            <div className="second_component_number">{number}</div>
            <div className="second_component_text">{text}</div>
        </div>
    );
};

const Faculties = ({ img, text }) => {
    return (
        <div className="faculties_component_cont">
            <img className="faculties_component_img" src={img} />
            <div className="faculties_component_text">{text}</div>
        </div>
    );
};

const Main = () => {
    return (
        <Layout>
            <div className="main_page_cont">
                <div className="h1_bg">
                    <h1 className="h1_text">
                        National IT University of Ukraine
                    </h1>
                </div>
                <div className="photo_main_cont">
                    <img width={"100%"} src="/img/bg.jpg" />
                </div>
                <div className="main_second_container">
                    <div className="second_info_container">
                        <div className="second_info_img_cont">
                            <img src="img/main_second.jpg" />
                        </div>
                        <div className="second_info_text_cont">
                            <div className="second_info_text_title">
                                Національний IT університет України "Харківський
                                політехнічний інститут". Разом з нами
                                підкорювати технології стає простіше
                            </div>
                            <div className="second_info_text_inner">
                                <div className="second_info_half">
                                    <SecondComponent
                                        number={6}
                                        text={"Факультетів"}
                                    />
                                    <SecondComponent
                                        number={40}
                                        text={"Кафедр"}
                                    />
                                    <SecondComponent
                                        number={38}
                                        text={"Спеціальностей"}
                                    />
                                </div>
                                <div className="second_info_half">
                                    <SecondComponent
                                        number={10000}
                                        text={"Здобувачів освіти"}
                                    />
                                    <SecondComponent
                                        number={198}
                                        text={"Докторів Наук"}
                                    />
                                    <SecondComponent
                                        number={110000}
                                        text={"Випускників"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="faculties_all">
                    <div className="faculties_title">Факультети</div>
                    <div className="faculties_cont">
                        <div className="faculties_half_cont first">
                            <Faculties
                                img={"img/first_embl.svg"}
                                text={"IT"}
                            />
                            <Faculties
                                img={"img/second_embl.svg"}
                                text={"Правовий"}
                            />
                            <Faculties
                                img={"img/third_embl.svg"}
                                text={"Хімічний"}
                            />
                        </div>
                        <div className="faculties_half_cont second">
                            <Faculties
                                img={"img/fourth_embl.svg"}
                                text={"Фізичний"}
                            />
                            <Faculties
                                img={"img/fifth_embl.svg"}
                                text={"Математичний"}
                            />
                            <Faculties
                                img={"img/sixth_embl.svg"}
                                text={"Економічний"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Main;
