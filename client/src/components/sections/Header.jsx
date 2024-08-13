import { Link } from 'react-router-dom';

import Nav from './Nav';
import SearchBar from './SearchBar';
import logo from '../../images/logo_placeholder.png';

import Auth from '../../utils/auth';

export default function Header() {

    const showHeaderBar = () => {

        if (Auth.loggedIn()) {
            const userEmail = Auth.getProfile().data.email;
            console.log(userEmail);
        }

        if (Auth.loggedIn()) {
            if (Auth.getProfile().data.username === 'Zac') {
                return (
                    <>
                        <div className='flex-col fixed w-screen font-body text-xl'>
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
                        <div className='flex-col fixed w-screen font-body text-xl'>
                            <Link
                                className='m-8 hover:text-yellow-300 border-2 border-black p-1 bg-orange-500    '
                                key={2}
                                to="/">
                                [0] Cart
                            </Link>
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