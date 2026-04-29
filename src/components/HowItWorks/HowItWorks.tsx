import './HowItWorks.css';

export default function HowItWorks() {
    return (
        <section className="how-it-works">
            <div className="how-it-works__container">
                <h2 className="how-it-works__title">How it works</h2>

                <ul className="how-it-works__list">
                    <li className="how-it-works__item">
                        <h3 className="how-it-works__item-title">Create a profile for your dog</h3>
                        <p className="how-it-works__item-text">
                            Tell us about your dog and the dates you need care
                        </p>
                    </li>

                    <li className="how-it-works__item">
                        <h3 className="how-it-works__item-title">Find a suitable host</h3>
                        <p className="how-it-works__item-text">
                            Browse profiles or get contacted by hosts
                        </p>
                    </li>

                    <li className="how-it-works__item">
                        <h3 className="how-it-works__item-title">Meet in advance</h3>
                        <p className="how-it-works__item-text">
                            Arrange a meeting to make sure it’s a good match
                        </p>
                    </li>

                    <li className="how-it-works__item">
                        <h3 className="how-it-works__item-title">Agree on the details</h3>
                        <p className="how-it-works__item-text">
                            Choose where your dog stays and plan everything together
                        </p>
                    </li>

                </ul>

                <p className="how-it-works__item-text">
                    Relax knowing your dog is in good hands 🐾
                </p>

                <div className="how-it-works__note">
                    <h3 className="how-it-works__note-title">Note:</h3>
                    <p className="how-it-works__note-text">
                        Hosting is free — but a small souvenir from your trip is always appreciated 😉
                    </p>
                </div>
            </div>
        </section>
    );
}