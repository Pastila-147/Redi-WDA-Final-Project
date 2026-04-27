import './Footer.css';
import phone from '../assets/phone.png';
import email from '../assets/email.png';
import whatsapp from '../assets/chat-bubble.png';
import location from '../assets/gps.png';
import instagram from '../assets/Instagram.png';
import linkedin from '../assets/linkedIn.png';
import logo_1 from '../assets/jetbrains.svg';
import logo_2 from '../assets/autoscout.png';
import logo_3 from '../assets/redi.webp';


import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="partners__container">
                    <h6 className="footer__title">Our partners</h6>
                    <div className="partners__logos">
                        <img src={logo_1} alt="JB logo" className="partners__logo" />
                        <img src={logo_2} alt="AutoScout logo" className="partners__logo" />
                        <img src={logo_3} alt="ReDi logo" className="partners__logo" />
                    </div>
                </div>

                <div className="contacts__container">
                    <h6 className="footer__title">Contact us</h6>
                    <ul className="footer__contacts__list">
                        <li className="footer__contacts__item">
                            <img className="footer__contacts__icon" src={phone} alt="phone"/>
                            <a className="footer__contacts__link" href="tel:+78000000000">49 (151) 00000000</a>
                        </li>
                        <li className="footer__contacts__item">
                            <img className="footer__contacts__icon" src={email} alt="email"/>
                            <a className="footer__contacts__link" href="mailto:inbox@gmail.com">inbox@dogbnb.de</a>
                        </li>
                        <li className="footer__contacts__item">
                            <img className="footer__contacts__icon" src={whatsapp} alt="whatsapp"/>
                            <a className="footer__contacts__link" href="https://wa.me/4915129058782">WhatsApp</a>
                        </li>
                        <li className="footer__contacts__item">
                            <img className="footer__contacts__icon" src={location} alt="location"/>
                            <a className="footer__contacts__link" href="https://maps.app.goo.gl/q4UDZRBur7n4Btv79">
                                Neumarkter Str. 22,<br />81673 München
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="about__container">
                    <h6 className="footer__title">Info</h6>
                    <div className="about__info">
                        <NavLink to="/about" className="header__nav-item">About us</NavLink>
                        <NavLink to="/reviews" className="header__nav-item">Reviews</NavLink>
                    </div>
                </div>

                <div className="socials__container">
                    <h6 className="footer__title">Follow us</h6>
                    <div className="socials__items">



                        <li className="footer__social__item">
                            <a
                                className="footer__socials__link"
                                href="https://www.instagram.com/retriever.ka?igsh=MTgwaTZiYzQ2MjQ2MA=="
                                target="_blank"
                            >
                                <img className="footer__socials__icon" src={instagram} alt="instagram" />
                            </a>
                        </li>

                        <li className="footer__social__item">
                            <a
                                className="footer__socials__link"
                                href="https://www.linkedin.com/in/evgeniya-emelina/"
                                target="_blank"
                            >
                                <img className="footer__socials__icon" src={linkedin} alt="linkedin" />
                            </a>
                        </li>
                    </div>
                </div>



                {/*<div className="header__actions">*/}
                {/*    <button className="btn-up">Go up</button>*/}
                {/*</div>*/}
            </div>
        </footer>
    )
}