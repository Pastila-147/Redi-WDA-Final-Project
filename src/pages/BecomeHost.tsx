import { NavLink } from 'react-router-dom'
import Dogs from '../components/DogsCards/DogsCards'
import DogSearchForm from '../components/Forms/DogSearchForm';

export default function About() {
    return (
        <div>

            <h1> BecomeHost </h1>

            <nav style={{ display: 'flex', gap: '10px' }}>
                <NavLink to="/">Main</NavLink>
            </nav>

            <DogSearchForm />
            <Dogs />
        </div>
    )
}