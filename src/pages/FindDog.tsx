import Dogs from '../components/DogsCards/DogsCards'
import DogSearchForm from '../components/Forms/DogSearchForm';
import AddDogForm from "../components/Forms/AddDogForm";
import { useAddDogStore } from "../stores/addDogStore";

export default function FindDog() {
    const { isOpen, openForm } = useAddDogStore();
    return (
        <div>
            <h1> Dogs looking for a host </h1>
            <h3>Browse dogs in Munich and offer temporary care</h3>

            <button type="button" onClick={openForm}>
                Add new dog
            </button>

            {isOpen && <AddDogForm />}

            <DogSearchForm />
            <Dogs />
        </div>
    )
}