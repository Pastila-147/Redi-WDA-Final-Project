import { useParams } from 'react-router-dom';
import { useDogsStore } from '../stores/dogsStore';
import DogDetailsCard from '../components/DogsCards/DogDetails';

export default function DogDetailsPage() {
    const { id } = useParams();

    const dogs = useDogsStore((state) => state.dogs);
    const chooseDog = useDogsStore((state) => state.chooseDog);

    const dog = dogs.find((dog) => dog.id === Number(id));

    if (!dog) {
        return <p>Dog not found</p>;
    }

    return (
        <DogDetailsCard
            dog={dog}
            onChoose={chooseDog}
        />
    );
}