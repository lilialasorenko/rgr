import React from "react";

import "./ContactsContainer.css";

const ContactsContainer = () => {
    return (
        <div className="contactscontainer_cont">
            <div className="contacts_section">
                <h3>Контакти</h3>
                <div>
                    <div className="contacts_inform_container">
                        <img className="contacts_img" src="img/location.svg" />
                        <div>
                            <div>
                                Адреса: Полтавська область, місто Полтава, пров.
                                Володимирська, 93
                            </div>
                            <div>Україна 36923 </div>
                        </div>
                    </div>
                    <div className="contacts_inform_container">
                        <img className="contacts_img" src="img/mail.svg" />
                        <div>
                            <div>Пошта: ydzocyz@mailto.plus</div>
                        </div>
                    </div>
                    <div className="contacts_inform_container">
                        <img className="contacts_img" src="img/phone.svg" />
                        <div>
                            <div>Консультаційний центр: +38(030)2747077</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contacts_section">
                <h3>Керівництво</h3>
                <div>
                    <div className="contacts_inform_container">
                        <img className="contacts_img" src="img/phone.svg" />
                        <div>
                            <div>
                                Приймальна ректора Нечипорука Віталія Петровича:
                            </div>
                            <div>
                                +380684123265
                            </div>
                        </div>
                    </div>
                    <div className="contacts_inform_container">
                        <img className="contacts_img" src="img/phone.svg" />
                        <div>
                            <div>
                                Приймальна проректора по IT Вітковького
                                Володимира Анатолійовича: 
                            </div>
                            <div>
                                +380993088199
                            </div>
                        </div>
                    </div>
                    <div className="contacts_inform_container">
                        <img className="contacts_img" src="img/phone.svg" />
                        <div>
                            <div>
                                Приймальна проректора по АГД Шлеменко Петра
                                Петровича: 
                            </div>
                            <div>
                                +380302747077
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contacts_section">
                <h3>Вступнику</h3>
                <div>
                    <div className="contacts_inform_container">
                        <img className="contacts_img" src="img/mail.svg" />
                        <div>
                            <div>
                                Пошта приймальної комісії:
                            </div>
                            <div>pm@dexp.ua </div>
                        </div>
                    </div>
                    <div className="contacts_inform_container">
                        <img className="contacts_img" src="img/phone.svg" />
                        <div>
                            <div>Приймальна комісія:</div>
                            <div>
                              <div>+380964594646</div>
                              <div>+380964213646</div>
                              <div>+380964192073</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsContainer;
