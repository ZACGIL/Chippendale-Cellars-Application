import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Error from './components/pages/Error';
import Home from './components/pages/Home'
import About from './components/pages/About';
import Catalogue from './components/pages/Catalogue';
import Item from './components/pages/Item';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import WinePage from './components/pages/WinePage';
import BeerPage from './components/pages/BeerPage';
import Order from './components/pages/OrderHistory';
import CRUDForm from './components/pages/CRUDform';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/About',
                element: <About />,
            },
            {
                path: '/Catalogue',
                element: <Catalogue />,
            },
            {
                path: '/Login',
                element: <Login />,
            },
            {
                path: '/Signup',
                element: <Signup />,
            },
            {
                path: '/Item/:item/:id',
                element: <Item />,
            },
            {
                path: '/Beer',
                element: <BeerPage />,
            },
            {
                path: '/Wine',
                element: <WinePage />,
            },
            {
                path: '/OrderHistory',
                element: <Order />,
            },
            {
                path: '/CRUDform',
                element: <CRUDForm />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);