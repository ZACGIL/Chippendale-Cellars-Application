import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Error from './components/pages/Error';
import Home from './components/pages/Home'
import About from './components/pages/About';
import Catalogue from './components/pages/Catalogue';
import Item from './components/pages/Item';

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
                path: '/Item',
                element: <Item />,
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);