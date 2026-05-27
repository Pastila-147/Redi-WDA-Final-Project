import { useState } from 'react';
import './DogModal.css';

function DogModal({ dog, onClose, onChoose }) {
    const [isChosen, setIsChosen] = useState(false);

    const handleChooseDog = () => {
        onChoose(dog.id);
        setIsChosen(true);
    };

    return (
        <div className="dog-modal">
            <div className="dog-modal__content">

                <button
                    className="dog-modal__close"
                    type="button"
                    onClick={onClose}
                >
                    ×
                </button>

                {isChosen ? (
                    <div className="dog-modal__success">
                        <h3 className="dog-modal__success-title">
                            Dog selected!
                        </h3>

                        <p className="dog-modal__success-text">
                            We will notify the owner and contact you soon.
                        </p>

                        <button
                            className="dog-modal__choose"
                            type="button"
                            onClick={onClose}
                        >
                            Great
                        </button>
                    </div>
                ) : (
                    <div className="dog-modal__main">

                        <div className="dog-modal__image-box">
                            <img
                                src={dog.image}
                                alt={dog.name}
                                className="dog-modal__img"
                            />
                        </div>

                        <div className="dog-modal__info">
                            <p className="dog-modal__breed">
                                {dog.breed}
                            </p>

                            <h3 className="dog-modal__name">
                                {dog.name}
                            </h3>

                            <p className="dog-modal__title">
                                {dog.title}
                            </p>

                            <div className="dog-modal__tags">
                                <span>
                                    {dog.personality.energyLevel} energy
                                </span>

                                <span>
                                    {dog.care.walksPerDay} walks/day
                                </span>
                            </div>

                            <p className="dog-modal__dates">
                                {dog.availability.start} — {dog.availability.end}
                            </p>

                            <p className="dog-modal__description">
                                {dog.description}
                            </p>

                            <button
                                className="dog-modal__choose"
                                type="button"
                                onClick={handleChooseDog}
                            >
                                Choose this dog
                            </button>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}

export default DogModal;