import './DogModal.css';

function DogModal({ dog, onClose }) {
    return (
        <div className="dog-modal">
            <div className="dog-modal__content">
                <button className="dog-modal__close" type="button" onClick={onClose}>×</button>
                <img src={dog.image} alt={dog.name} className="dog-modal__img"/>
                <div className="dog-modal__info">
                    <h3 className="dog-modal__name">{dog.name} ({dog.breed})</h3>
                    <p className="dog-modal__title">{dog.title}</p>
                    <p className="dog-modal__dates">{dog.availability.start} — {dog.availability.end}</p>

                    <p className="dog-modal__description">{dog.description}</p>
                    <p>Energy: {dog.personality.energyLevel}</p>
                    <p>Walks: {dog.care.walksPerDay}</p>

                </div>
            </div>
        </div>
    );
}

export default DogModal;

