import { NavLink } from 'react-router-dom'

export default function Home() {
    return (
        <div>

            <h1>Servus, Dog!</h1>

            <nav style={{ display: 'flex', gap: '10px' }}>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/host">BecomeHost</NavLink>
                <NavLink to="/dog">FindSitter</NavLink>
                <NavLink to="/reviews">Reviews</NavLink>
            </nav>
        </div>
    )

}