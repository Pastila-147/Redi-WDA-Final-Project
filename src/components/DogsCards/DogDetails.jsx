import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DogDetails.css';

function DogDetails({ dog,onChoose }) {
    const [isChosen, setIsChosen] = useState(false);
    const navigate = useNavigate();

    const handleChooseDog = () => {
        onChoose(dog.id);
        setIsChosen(true);
    };

    return (
        <div className="dog-details">
            <div className="dog-details__content">

                <button
                    className="dog-details__close"
                    type="button"
                    onClick={() => navigate('/dog')}
                >
                    ×
                </button>

                {isChosen ? (
                    <div className="dog-details__success">
                        <h3 className="dog-details__success-title">
                            Dog selected!
                        </h3>

                        <p className="dog-details__success-text">
                            We will notify the owner and contact you soon.
                        </p>

                        <button
                            className="dog-details__choose"
                            type="button"
                            onClick={() => navigate('/dog')}
                        >
                            Great
                        </button>
                    </div>
                ) : (
                    <div className="dog-details__main">

                        <div className="dog-details__image-box">
                            <img
                                src={dog.image}
                                alt={dog.name}
                                className="dog-details__img"
                            />
                        </div>

                        <div className="dog-details__info">
                            <p className="dog-details__breed">
                                {dog.breed}
                            </p>

                            <h3 className="dog-details__name">
                                {dog.name}
                            </h3>

                            <p className="dog-details__title">
                                {dog.title}
                            </p>

                            <div className="dog-details__tags">
                                <span>
                                    {dog.personality.energyLevel} energy
                                </span>

                                <span>
                                    {dog.care.walksPerDay} walks/day
                                </span>
                            </div>

                            <p className="dog-details__dates">
                                {dog.availability.start} — {dog.availability.end}
                            </p>

                            <p className="dog-details__description">
                                {dog.description}
                            </p>

                            <button
                                className="dog-details__choose"
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

export default DogDetails;