import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../UI/Navbar';

export default function CatalogueHeader() {
    const location = useLocation();
    const [isActive, setActive] = useState(true);

    useEffect(() => {
        checkPage(location.pathname);
    }, [location]);

    const checkPage = (page) => {
        if (page === '/') {
            setActive(true);
            return;
        }
        if (page === '/About') {
            setActive(true);
            return;
        }
        if (page === '/Catalogue') {
            setActive(true);
            return;
        }
        if (page === '/Signup') {
            setActive(false);
            return;
        }
        if (page === '/Login') {
            setActive(false);
            return;
        }
        if (page === '/Item') {
            setActive(true);
            return;
        }
    }

    return (
        <div className={isActive ? 'bg-orange-500 p-2 border-2 border-black border-x-orange-500' : 'hidden'}>
            <div className='text-white font-title flex justify-center'>
                <Navbar
                    links={[
                        <Link
                            className='m-8 hover:text-yellow-300 border-2 border-orange-700 border-y-orange-500 p-1'
                            key={1}
                            to="/Wine">
                            Wines
                        </Link>,
                        <Link
                            className='m-8 hover:text-yellow-300 border-2 border-orange-700 border-y-orange-500 p-1'
                            key={2}
                            to="/Beer">
                            Beers
                        </Link>,
                        <Link
                            className='m-8 hover:text-yellow-300 border-2 border-orange-700 border-y-orange-500 p-1'
                            key={3}
                            to="/">
                            Spirits
                        </Link>,
                        <Link
                            className='m-8 hover:text-yellow-300 border-2 border-orange-700 border-y-orange-500 p-1'
                            key={4}
                            to="/">
                            Ciders
                        </Link>,
                        <Link
                            className='m-8 hover:text-yellow-300 border-2 border-orange-700 border-y-orange-500 p-1'
                            key={5}
                            to="/">
                            RTD
                        </Link>,
                        <Link
                            className='m-8 hover:text-yellow-300 border-2 border-orange-700 border-y-orange-500 p-1'
                            key={6}
                            to="/">
                            Mixers
                        </Link>,
                        <Link
                            className='m-8 hover:text-yellow-300 border-2 border-orange-700 border-y-orange-500 p-1'
                            key={7}
                            to="/">
                            Other
                        </Link>,
                    ]}
                />
            </div>
        </div>
    );
}