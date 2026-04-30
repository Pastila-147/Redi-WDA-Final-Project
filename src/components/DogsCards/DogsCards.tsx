import { useQuery } from '@tanstack/react-query'
import { getDogs } from '../../api/dogApi'
import './DogCards.css';


//react-component
function Dogs() {
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
        <div className="dog-list">
            {query.data?.map((dogUrl) => {
                const breed = extractBreed(dogUrl)

                return (
                    <div key={dogUrl} className="dog-card">
                        <img src={dogUrl} alt={breed} />
                        <p>{breed}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Dogs


//find Breed
function extractBreed(url) {
    const parts = url.split('/')
    return parts[4]
}