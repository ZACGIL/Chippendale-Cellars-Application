import './index.css';
import { Outlet } from 'react-router-dom';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer'
import CatalogueHeader from './components/sections/CatalogueHeader';

export default function App() {
    return (
        <>
            <header>
                < Header />
            </header>
            <section>
                < CatalogueHeader />
            </section>
            <main className='bg-slate-500 flex justify-center min-h-screen text-white'>
                < Outlet />
            </main>
            <footer>
                < Footer />
            </footer>
        </>
    );
}