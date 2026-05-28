import { createBrowserRouter} from "react-router-dom";

import Home from './pages/Home.tsx'
import About from './pages/About'
import FindDog from './pages/FindDog.tsx'
import FindSitter from './pages/FindSitter'
import Reviews from './pages/Reviews'
import Errorpage from './pages/Errorpage'
import Layout from "./layout.tsx";
import DogDetailsPage from './pages/DogDetailsPage.tsx'

export const router = createBrowserRouter([
    {
        path: '/',
        // Layout = Header + Outlet (Outlet is a place for children) + Footer
        element: <Layout />,
        errorElement: <Errorpage />,
        //Main doesn't refer to the homepage itself, but to a page within the Layout
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'dog',
                element: <FindDog />,
            },
            {
                path: 'dog/:id',
                element: <DogDetailsPage />,
            },
            {
                path: 'host',
                element: <FindSitter />,
            },
            {
                path: 'reviews',
                element: <Reviews />,
            },
        ],
    },
]);