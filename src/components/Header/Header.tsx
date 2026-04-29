import './Header.css';
import logo from '../../assets/Logo_paw.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="header__container">

                <div className="header__logo">
                    <img src={logo} alt="DogBnB logo"/>
                </div>

                <nav className="header__nav">
                    <NavLink to="/" className="header__nav-item">Main</NavLink>
                    <NavLink to="/about" className="header__nav-item">About</NavLink>
                    <NavLink to="/host" className="header__nav-item">BecomeHost</NavLink>
                    <NavLink to="/dog" className="header__nav-item">FindSitter</NavLink>
                    <NavLink to="/reviews" className="header__nav-item">Reviews</NavLink>
                </nav>

                <div className="header__actions">
                    <button className="btn-callback">Call back</button>
                </div>

            </div>
        </header>
    );
}