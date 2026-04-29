import './Hero.css';
import maindog from '../../assets/maindog.png';
import { NavLink } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__container">

                <div className="hero__image">
                    <img src={maindog} alt="Golden Retriever" />
                </div>

                <div className="hero__content">
                    <h1 className="hero__title">
                        Find loving care<br/>for your dog in Munich
                    </h1>

                    <p className="hero__text">
                        A community of people who look after dogs<br/>while you're on vacation
                    </p>

                    <div className="hero__actions">
                        <NavLink to="/dog" className="btn-hero">
                            List your dog
                        </NavLink>

                        {/*other button design*/}
                        <NavLink to="/host" className="btn-hero btn-hero__secondary">
                            Become a host
                        </NavLink>
                    </div>
                </div>

            </div>
        </section>
    );
}