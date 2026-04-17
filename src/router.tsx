import { createBrowserRouter} from "react-router-dom";

import Main from './pages/Main'
import About from './pages/About'
import BecomeHost from './pages/BecomeHost'
import FindSitter from './pages/FindSitter'
import Reviews from './pages/Reviews'
import Errorpage from './pages/Errorpage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Errorpage />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/host',
        element: <BecomeHost />,
    },
    {
        path: '/dog',
        element: <FindSitter />,
    },
    {
        path: '/reviews',
        element: <Reviews />,
    },
])