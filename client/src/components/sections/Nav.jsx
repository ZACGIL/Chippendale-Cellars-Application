import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../UI/Navbar';
import Auth from '../../utils/auth';

export default function Nav() {

    //Checks page and adds border to the bottom
    const location = useLocation();
    const [isHome, setHomeActive] = useState(true);
    const [isAbout, setAboutActive] = useState(false);
    const [isCatalogue, setCataActive] = useState(false);
    const [isSignup, setSignupActive] = useState(false);
    const [isLogin, setLoginActive] = useState(false);
    const [isOrder, setOrderActive] = useState(false);

    useEffect(() => {
        checkPage(location.pathname);
    }, [location]);

    const checkPage = (page) => {
        if (page === '/') {
            setHomeActive(true);
            setAboutActive(false);
            setCataActive(false);
            setSignupActive(false);
            setLoginActive(false);
            setOrderActive(false);
            return;
        }
        if (page === '/About') {
            setHomeActive(false);
            setAboutActive(true);
            setCataActive(false);
            setSignupActive(false);
            setLoginActive(false);
            setOrderActive(false);
            return;
        }
        if (page === '/Signup') {
            setHomeActive(false);
            setAboutActive(false);
            setCataActive(false);
            setSignupActive(true);
            setLoginActive(false);
            setOrderActive(false);
            return;
        }
        if (page === '/Login') {
            setHomeActive(false);
            setAboutActive(false);
            setCataActive(false);
            setSignupActive(false);
            setLoginActive(true);
            setOrderActive(false);
            return;
        }
        if (page === '/OrderHistory') {
            setHomeActive(false);
            setAboutActive(false);
            setCataActive(false);
            setSignupActive(false);
            setLoginActive(false);
            setOrderActive(true);
            return;
        }
        if (page === '/Catalogue' || '/Wine' || '/Beer' || '/Item') {
            setHomeActive(false);
            setAboutActive(false);
            setCataActive(true);
            setSignupActive(false);
            setLoginActive(false);
            setOrderActive(false);
        }
    }

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <div className='text-black font-title'>
                    <Navbar
                        links={[
                            <Link
                                className={isHome ? 'm-3 border-4 border-slate-300  border-b-orange-400' : 'm-3 border-4 border-slate-300 hover:text-orange-500'}
                                key={1}
                                to="/">
                                Home
                            </Link>,
                            <Link
                                className={isCatalogue ? 'm-3 border-4 border-slate-300  border-b-orange-400' : 'm-3 border-4 border-slate-300 hover:text-orange-500'}
                                key={3}
                                to="/Catalogue">
                                Catalogue
                            </Link>,
                            <Link
                                className={isAbout ? 'm-3 border-4 border-slate-300  border-b-orange-400' : 'm-3 border-4 border-slate-300 hover:text-orange-500'}
                                key={2}
                                to="/About">
                                About
                            </Link>,
                            <Link className={isOrder ? 'm-3 border-4 border-slate-300  border-b-orange-400' : 'm-3 border-4 border-slate-300 hover:text-orange-500'}
                                key={4}
                                to="/OrderHistory">
                                Orders
                            </Link>,
                            <Link className='m-3 border-4 border-slate-300 hover:text-orange-500'
                                key={5}
                                onClick={() => Auth.logout()}
                                to="/">
                                Log Out
                            </Link>,
                        ]}
                    />
                </div>
            );
        } else {
            return (
                <div className='text-black font-title'>
                    <Navbar
                        links={[
                            <Link
                                className={isHome ? 'm-3 border-4 border-slate-300  border-b-orange-400' : 'm-3 border-4 border-slate-300 hover:text-orange-500'}
                                key={1}
                                to="/">
                                Home
                            </Link>,
                            <Link
                                className={isCatalogue ? 'm-3 border-4 border-slate-300  border-b-orange-400' : 'm-3 border-4 border-slate-300 hover:text-orange-500'}
                                key={3}
                                to="/Catalogue">
                                Catalogue
                            </Link>,
                            <Link
                                className={isAbout ? 'm-3 border-4 border-slate-300  border-b-orange-400' : 'm-3 border-4 border-slate-300 hover:text-orange-500'}
                                key={2}
                                to="/About">
                                About
                            </Link>,
                            <Link className={isLogin ? 'm-3 border-4 border-slate-300  border-b-orange-400' : 'm-3 border-4 border-slate-300 hover:text-orange-500'}
                                key={4}
                                to="/Login">
                                Log In
                            </Link>,
                            <Link className={isSignup ? 'm-3 border-4 border-slate-300  border-b-orange-400' : 'm-3 border-4 border-slate-300 hover:text-orange-500'}
                                key={5}
                                to="/Signup">
                                Sign Up
                            </Link>
                        ]}
                    />
                </div>
            );
        }
    }
    return (
        <>
            {showNavigation()}
        </>
    );
}