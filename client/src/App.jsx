import './index.css';
import { Outlet } from 'react-router-dom';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer'

export default function App() {
    return (
        <>
            <header>
                < Header />
            </header>
            <main>
                < Outlet />
            </main>
            <footer>
                < Footer />
            </footer>
        </>
    );
}