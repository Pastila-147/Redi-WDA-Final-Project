import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { getDogs } from '../../api/dogApi';
import { useDogsStore } from '../../stores/dogsStore';
import { useDogFiltersStore } from '../../stores/useDogFiltersStore';

import './DogCards.css';

function Dogs() {
    const navigate = useNavigate();

    const setDogs = useDogsStore((state) => state.setDogs);
    const dogsFromStore = useDogsStore((state) => state.dogs);
    const filters = useDogFiltersStore((state) => state.filters);

    const query = useQuery({
        queryKey: ['dogs'],
        queryFn: getDogs,
    });

    const dogs = useMemo(() => {
        if (!query.data) return [];

        return query.data
            .map((dogUrl, index) => {
                const dogInfo = dogsFromStore[index];

                if (!dogInfo) return null;

                return {
                    ...dogInfo,
                    image: dogInfo.image || dogUrl,
                    breed: dogInfo.breed || extractBreed(dogUrl),
                };
            })
            .filter(Boolean);
    }, [query.data, dogsFromStore]);

    useEffect(() => {
        const hasImages = dogsFromStore.every((dog) => dog.image);

        if (!hasImages && dogs.length > 0) {
            setDogs(dogs);
        }
    }, [dogs, dogsFromStore, setDogs]);

    if (query.isLoading) {
        return <p>Loading dogs...</p>;
    }

    if (query.isError) {
        return <p>Error: {query.error.message}</p>;
    }

    const filteredDogs = dogs.filter((dog) => {
        if (dog.isChosen) return false;
        if (filters.energyLevel !== 'all' && dog.personality.energyLevel !== filters.energyLevel) return false;
        if (filters.goodWithKids && !dog.personality.goodWithKids) return false;
        if (filters.canStayAlone && !dog.personality.canStayAlone) return false;
        if (filters.specialNeeds && !dog.care.specialNeeds) return false;
        if (filters.walksPerDay !== 'all' && dog.care.walksPerDay !== Number(filters.walksPerDay)) return false;
        if (filters.startDate && dog.availability.start <= filters.startDate) return false;
        if (filters.endDate && dog.availability.end >= filters.endDate) return false;

        return true;
    });

    return (
        <div className="dog-list-wrapper">
            <p className="dog-list__counter">{filteredDogs.length} dogs available</p>

            <div className="dog-list">
                {filteredDogs.map((dog) => (
                    <div key={dog.id} className="dog-card">
                        <div className="dog-card__image-wrapper">
                            <img src={dog.image} alt={dog.breed} className="dog-card__img" />
                            <span className="dog-card__breed">{dog.breed}</span>
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
                                onClick={() => navigate(`/dog/${dog.id}`)}
                            >
                                Show more
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dogs;

function extractBreed(url) {
    const parts = url.split('/');
    return parts[4];
}