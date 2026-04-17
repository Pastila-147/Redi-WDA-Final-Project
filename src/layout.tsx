import { Outlet } from 'react-router-dom'
import Header from "./components/Header.tsx";

export default function Layout() {
    return (
        <div>
            {/*<nav style={{display: 'flex', gap: '10px'}}>*/}
            {/*    <NavLink to="/">Main</NavLink>*/}
            {/*    <NavLink to="/about">About</NavLink>*/}
            {/*    <NavLink to="/host">BecomeHost</NavLink>*/}
            {/*    <NavLink to="/dog">FindSitter</NavLink>*/}
            {/*    <NavLink to="/reviews">Reviews</NavLink>*/}
            {/*</nav>*/}

            <main>
                <Header />
                <main>
                    <Outlet />
                </main>
            </main>
        </div>
    )
}