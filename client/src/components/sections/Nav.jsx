import { Link } from 'react-router-dom';
import Navbar from '../UI/Navbar';

export default function Nav() {
    return (
        <div>
            <Navbar
                links={[
                    <Link
                        key={1}
                        to='/'>
                        Home
                    </Link>,
                    <Link
                        key={2}
                        to='/About'>
                        About
                    </Link>,
                    <Link
                        key={3}
                        to='/Catalogue'>
                        Catalogue
                    </Link>,
                    <Link
                        key={4}
                        to='/Item'>
                        Item
                    </Link>
                ]}
            />
        </div>
    );
}