import { NavLink } from 'react-router-dom'

export default function About() {
    return (
        <div>

            <h1>All about us</h1>

            <nav style={{ display: 'flex', gap: '10px' }}>
                <NavLink to="/">Main</NavLink>
            </nav>
        </div>
    )

}