import { Link } from 'react-router-dom'
import Navbar from '../UI/Navbar'

export default function Socials() {
    return (
        <div>
            <Navbar
                links={[
                    <Link>
                        Instagram
                    </Link>,
                    <Link>
                        Facebook
                    </Link>,
                    <Link>
                        Email
                    </Link>
                ]}
            />
        </div>
    );
}