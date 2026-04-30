import { NavLink } from 'react-router-dom'
import Dogs from '../components/DogsCards/DogsCards'

export default function About() {
    return (
        <div>

            <h1> BecomeHost </h1>

            <nav style={{ display: 'flex', gap: '10px' }}>
                <NavLink to="/">Main</NavLink>
            </nav>

            <Dogs />
        </div>
    )
}