import './Header.css';
import logo from '../assets/Logo.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="header__container">

                <div className="header__logo">
                    <img src={logo} alt="DogBnB logo"/>
                </div>

                <nav className="header__nav">
                    <NavLink to="/">Main</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/host">BecomeHost</NavLink>
                    <NavLink to="/dog">FindSitter</NavLink>
                    <NavLink to="/reviews">Reviews</NavLink>
                </nav>

                <div className="header__actions">
                    <button className="btn-callback">Call back</button>
                </div>

            </div>
        </header>
    );
}