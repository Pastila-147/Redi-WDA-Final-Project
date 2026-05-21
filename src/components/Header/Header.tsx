import './Header.css';
import logo from '../../assets/Logo_horizont.png';
import { NavLink } from 'react-router-dom';
import CallBackForm from "../Forms/callbackForm";
import { useCallbackStore } from '../../stores/callbackStore';

export default function Header() {
    const { isOpen, openForm } = useCallbackStore();
    return (
        <header className="header">
            <div className="header__container">

                <div className="header__logo">
                    <NavLink to="/">
                        <img src={logo} alt="DogBnB logo" />
                    </NavLink>
                </div>

                <nav className="header__nav">
                    <NavLink to="/" className="header__nav-item">Main</NavLink>
                    <NavLink to="/about" className="header__nav-item">About</NavLink>
                    <NavLink to="/dog" className="header__nav-item">Find dog</NavLink>
                    <NavLink to="/host" className="header__nav-item">Find Host</NavLink>
                    <NavLink to="/reviews" className="header__nav-item">Reviews</NavLink>
                </nav>

                <div className="header__actions">
                    <button className="btn-callback" onClick={openForm}>
                        Call back
                    </button>
                </div>

                {isOpen && <CallBackForm />}

            </div>
        </header>
    );
}