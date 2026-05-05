import { NavLink } from 'react-router-dom'
import Hosts from '../components/HostsCards/HostsCards'

export default function About() {
    return (
        <div>

            <h1> FindSitter </h1>

            <nav style={{ display: 'flex', gap: '10px' }}>
                <NavLink to="/">Main</NavLink>
            </nav>

            <Hosts />
        </div>
    )

}