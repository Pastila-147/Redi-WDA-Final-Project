import { useQuery } from '@tanstack/react-query'
import { useState } from 'react';
import { getDogs } from '../../api/dogApi'
import { useDogsStore } from "../../stores/dogsStore";
import DogModal from './DogModal';
import './DogCards.css';
import { useDogFiltersStore } from '../../stores/useDogFiltersStore';


//react-component
function Dogs() {
    const [selectedDog, setSelectedDog] = useState(null);
    const dogsFromStore = useDogsStore((state) => state.dogs);
    const filters = useDogFiltersStore((state) => state.filters);
    const chooseDog = useDogsStore((state) => state.chooseDog);
    const query = useQuery({
        queryKey: ['dogs'],
        queryFn: getDogs,
    })

    if (query.isLoading) {
        return <p>Loading dogs...</p>
    }
    if (query.isError) {
        return <p>Error: {query.error.message}</p>
    }
//collecting data in one object
    const dogs = query.data
        ?.map((dogUrl, index) => {
            const breed = extractBreed(dogUrl);
            const dogInfo = dogsFromStore[index];

            if (!dogInfo) return null;


            return {
                ...dogInfo,
                image: dogUrl,
                breed,
            };
        })
        //removes empty values:
        .filter(Boolean);

    const filteredDogs = dogs.filter((dog) => {

        if (dog.isChosen) {return false;}

        if (filters.energyLevel !== "all" && dog.personality.energyLevel !== filters.energyLevel) {
            return false;}

        if (filters.goodWithKids && !dog.personality.goodWithKids) {
            return false;}

        if (filters.canStayAlone && !dog.personality.canStayAlone) {
            return false;}

        if (filters.specialNeeds && !dog.care.specialNeeds) {
            return false;}

        if (filters.walksPerDay !== "all" && dog.care.walksPerDay !== Number(filters.walksPerDay)) {
            return false;}

        if (filters.startDate && dog.availability.start <= filters.startDate) {
            return false;}

        if (filters.endDate && dog.availability.end >= filters.endDate) {
            return false;}

        return true;
    });

    return (
        <>
            <div className="dog-list-wrapper">
                <p className="dog-list__counter">
                    {filteredDogs.length} dogs available
                </p>

                <div className="dog-list">
                    {filteredDogs.map((dog) => (
                        <div key={dog.id} className="dog-card">
                            <div className="dog-card__image-wrapper">
                                <img
                                    src={dog.image}
                                    alt={dog.breed}
                                    className="dog-card__img"
                                />

                                <span className="dog-card__breed">
                                {dog.breed}
                            </span>
                            </div>

                            <div className="dog-card__content">
                                <h3 className="dog-card__name">{dog.name}</h3>

                                <p className="dog-card__title">{dog.title}</p>

                                <p className="dog-card__dates">
                                    {dog.availability.start} — {dog.availability.end}
                                </p>

                                <button
                                    className="dog-card__button"
                                    type="button"
                                    onClick={() => setSelectedDog(dog)}
                                >
                                    Show more
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedDog && (
                <DogModal
                    dog={selectedDog}
                    onClose={() => setSelectedDog(null)}
                    onChoose={chooseDog}
                />
            )}
        </>
    );
}

export default Dogs

//find Breed
function extractBreed(url) {
    const parts = url.split('/')
    return parts[4]
}