export default function Navbar({ links }) {
    return (
        <nav>
            <ul className='text-center flex flex-col md:flex-row'>
                {links.map((link) => link)}
            </ul>
        </nav>
    );
}