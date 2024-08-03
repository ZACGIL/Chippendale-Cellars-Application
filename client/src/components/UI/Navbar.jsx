export default function Navbar({ links }) {
    return (
        <nav>
            <ul>
                {links.map((link) => link)}
            </ul>
        </nav>
    );
}