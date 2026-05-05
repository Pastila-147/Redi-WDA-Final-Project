import { useQuery } from '@tanstack/react-query'
import { useState } from 'react';
import { getDogs } from '../../api/dogApi'
import { dogsData } from './dogsData';
import DogModal from './DogModal';
import './DogCards.css';


//react-component
function Dogs() {
    const [selectedDog, setSelectedDog] = useState(null);
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

    return (
        <>
            <div className="dog-list">
                {query.data?.map((dogUrl, index) => {
                    const breed = extractBreed(dogUrl)
                    const dogInfo = dogsData[index];

                    if (!dogInfo) return null;

                    return (
                        <div key={dogUrl} className="dog-card">
                            <img src={dogUrl} alt={breed} className="dog-card__img"/>
                            <div className="dog-card__content">
                                <h3 className="dog-card__name">{dogInfo.name} ({breed})</h3>
                                <p className="dog-card__title">{dogInfo.title}</p>
                                <p className="dog-card__dates">{dogInfo.availability.start} — {dogInfo.availability.end}</p>
                            </div>
                            <button
                                className="dog-card__button"
                                type="button"
                                onClick={() =>
                                    setSelectedDog({
                                        ...dogInfo,
                                        image: dogUrl,
                                        breed,
                                    })
                                }
                            >
                                Show more
                            </button>
                        </div>
                    )
                })}
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