import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Nav from './Nav';
import SearchBar from './SearchBar';
import logo from '../../images/logo_placeholder.png';

import Filter from '../sections/Filter';

import Auth from '../../utils/auth';

export default function Header() {
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        checkActive(location.pathname);
    }, [location]);

    const showFilter = () => {
        return (
            <Filter />
        )
    }

    const checkActive = (page) => {
        if (page === '/Wine') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    const showHeaderBar = () => {

        if (Auth.loggedIn()) {
            const userEmail = Auth.getProfile().data.email;
            console.log(userEmail);
        }

        if (Auth.loggedIn()) {
            if (Auth.getProfile().data.username === 'owner') {
                return (
                    <>
                        <div className='flex fixed bottom-0 w-screen font-body text-xl'>
                            <Link
                                className='m-8 hover:text-yellow-300 border-2 border-black p-1 bg-orange-500    '
                                key={1}
                                to="/CRUDForm">
                                Change Wines
                            </Link>
                            <Link
                                className='m-8 hover:text-yellow-300 border-2 border-black p-1 bg-orange-500    '
                                key={2}
                                to="/">
                                [0] Cart
                            </Link>
                            {isActive ? showFilter() : <></>}
                        </div>
                        <div className='bg-slate-300 shadow text-2xl'>
                            <div className='w-full mx-auto p-10 flex flex-col lg:flex-row items-center justify-between font-title'>
                                <div className='flex-col justify-center m-8'>
                                    <h1 className='text-4xl border-2 border-black p-2'>Chippendale Cellars</h1>
                                    <p className='text-xl text-center p-1 font-subtitle'>'Locals helping locals'</p>
                                </div>
                                <Nav />
                            </div>
                        </div>
                    </>
                );
            } else {
                return (
                    <>
                        <div className='flex fixed bottom-0 font-body text-xl'>
                            <Link
                                className='m-8 hover:text-yellow-300 border-2 border-black p-1 bg-orange-500    '
                                key={2}
                                to="/">
                                [0] Cart
                            </Link>
                            {isActive ? showFilter() : <></>}
                        </div>
                        <div className='bg-slate-300 shadow text-2xl'>
                            <div className='w-full mx-auto p-10 flex flex-col lg:flex-row items-center justify-between font-title'>
                                <div className='flex-col justify-center m-8'>
                                    <h1 className='text-4xl border-2 border-black p-2'>Chippendale Cellars</h1>
                                    <p className='text-xl text-center p-1 font-subtitle'>'Locals helping locals'</p>
                                </div>
                                <Nav />
                            </div>
                        </div>
                    </>
                );
            }
        } else {
            return (
                <>
                    <div className='bg-slate-300 shadow text-2xl'>
                        <div className='w-full mx-auto p-10 flex flex-col lg:flex-row items-center justify-between font-title'>
                            <div className='flex-col justify-center m-8'>
                                <h1 className='text-4xl border-2 border-black p-2'>Chippendale Cellars</h1>
                                <p className='text-xl text-center p-1 font-subtitle'>'Locals helping locals'</p>
                            </div>
                            <Nav />
                        </div>
                    </div>
                    <div className='flex fixed bottom-0 w-screen font-body text-xl'>
                        {isActive ? showFilter() : <></>}
                    </div>
                </>
            );
        }
    }

    return (
        <>
            {showHeaderBar()}
        </>
    )
}