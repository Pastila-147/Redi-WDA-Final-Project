import { createBrowserRouter} from "react-router-dom";

import Main from './pages/Main'
import About from './pages/About'
import BecomeHost from './pages/BecomeHost'
import FindSitter from './pages/FindSitter'
import Reviews from './pages/Reviews'
import Errorpage from './pages/Errorpage'
import Layout from "./layout.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        // Layout = Header + Outlet (Outlet is a place for children)
        element: <Layout />,
        errorElement: <Errorpage />,
        //Main doesn't refer to the homepage itself, but to a page within the Layout
        children: [
            {
                index: true,
                element: <Main />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'host',
                element: <BecomeHost />,
            },
            {
                path: 'dog',
                element: <FindSitter />,
            },
            {
                path: 'reviews',
                element: <Reviews />,
            },
        ],
    },
]);