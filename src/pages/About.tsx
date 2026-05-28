import './About.css';

export default function About() {
    return (
        <section className="about">
            <div className="about__hero">
                {/*<h1 className="about__title">About us</h1>*/}
                <h3 className="about__subtitle">
                    A platform created to help dog owners find caring and trustworthy dog sitters
                    in a simple and friendly way
                </h3>
            </div>

            <div className="about__container">
                <p className="about__text">
                    The idea behind the project is to make pet care feel more personal and comfortable.
                    Instead of searching through endless messages or social media posts, users can explore
                    sitter profiles, learn about their experience, compare availability, and choose the best
                    match for their dog.
                </p>

                <div className="about__cards">
                    <div className="about-card">
                        <span className="about-card__icon">♡</span>
                        <div>
                            <h4>Browse sitter profiles</h4>
                            <p>Explore hosts with their experience, availability, and dog preferences</p>
                        </div>
                    </div>

                    <div className="about-card">
                        <span className="about-card__icon">🔎</span>
                        <div>
                            <h4>Filter and search</h4>
                            <p>Find the right match by energy level, dates, size, and special needs</p>
                        </div>
                    </div>

                    <div className="about-card">
                        <span className="about-card__icon">🐶</span>
                        <div>
                            <h4>Detailed dog profiles</h4>
                            <p>View everything about a dog — breed, character, walks, and care notes</p>
                        </div>
                    </div>

                    <div className="about-card">
                        <span className="about-card__icon">☆</span>
                        <div>
                            <h4>Reviews and availability</h4>
                            <p>Real stories from dog owners who found their perfect host on Dogbnb</p>
                        </div>
                    </div>
                </div>

                <div className="about__project">
                    <span className="about__project-icon">🎓</span>
                    <div>
                        <h3>Educational project — ReDI School of Digital Integration</h3>
                        <p>
                            Dogbnb was built as part of the Web Development program. The project demonstrates
                            practical frontend skills — component architecture, state management, API integration,
                            and responsive design.
                        </p>

                        <div className="about__tags">
                            <span>React</span>
                            <span>React Query</span>
                            <span>Zustand</span>
                            <span>JavaScript</span>
                            <span>HTML</span>
                            <span>CSS</span>
                        </div>
                    </div>
                </div>

                <p className="about__final">
                    This project combines learning, creativity, and a love for dogs 🐾
                </p>
            </div>
        </section>
    );
}