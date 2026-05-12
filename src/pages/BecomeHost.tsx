import Dogs from '../components/DogsCards/DogsCards'
import DogSearchForm from '../components/Forms/DogSearchForm';

export default function About() {
    return (
        <div>
            <h1> Find your dog </h1>

            <DogSearchForm />
            <Dogs />
        </div>
    )
}