import Nav from './Nav';
import SearchBar from './SearchBar';
import logo from '../../images/logo_placeholder.png';

export default function Header() {
    return (
        <div className='bg-slate-300 shadow text-2xl'>
            <div className='w-full mx-auto p-10 flex flex-col lg:flex-row items-center justify-between font-title'>
                <div className='flex-col justify-center m-8'>
                    <h1 className='text-4xl border-2 border-black p-2'>Chippendale Cellars</h1>
                    <p className='text-xl text-center p-1 font-subtitle'>'Locals helping locals'</p>
                </div>
                <Nav />
            </div>
        </div>
    );
}