import { useQuery } from '@tanstack/react-query'
import { useState } from 'react';
import { getDogs } from '../../api/dogApi'
import { dogsData } from './dogsData';
import DogModal from './DogModal';
import './DogCards.css';
import { useDogFiltersStore } from '../../stores/useDogFiltersStore';


//react-component
function Dogs() {
    const [selectedDog, setSelectedDog] = useState(null);
    const filters = useDogFiltersStore((state) => state.filters);
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
            const dogInfo = dogsData[index];

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
            <div className="dog-list">
                {filteredDogs.map((dog) => (
                    <div key={dog.id} className="dog-card">
                        <img
                            src={dog.image} alt={dog.breed}  className="dog-card__img"
                        />
                            <div className="dog-card__content">
                                <h3 className="dog-card__name">{dog.name} ({dog.breed})</h3>
                                <p className="dog-card__title">{dog.title}</p>
                                <p className="dog-card__dates">{dog.availability.start} — {dog.availability.end}</p>
                            </div>
                            <button
                                className="dog-card__button"
                                type="button"
                                onClick={() => setSelectedDog(dog)}
                            >
                                Show more
                            </button>
                    </div>
                ))}
            </div>

            {selectedDog && (
                <DogModal
                    dog={selectedDog}
                    onClose={() => setSelectedDog(null)}
                />
            )}
        </>
    )
}

export default Dogs

//find Breed
function extractBreed(url) {
    const parts = url.split('/')
    return parts[4]
}