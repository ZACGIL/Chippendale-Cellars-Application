import { Link } from 'react-router-dom'
import Navbar from '../UI/Navbar'

export default function Socials() {
    return (
        <div className='text-black font-title text-lg'>
            <Navbar
                links={[
                    <Link 
                    className='m-6 hover:text-orange-500'
                    key={1}>
                        Instagram
                    </Link> ,
                    <Link 
                    className='m-6 hover:text-orange-500'
                    key={2}>
                        Facebook
                    </Link>,
                    <Link 
                    className='m-6 hover:text-orange-500'
                    key={3}>
                        Email
                    </Link>
                ]}
            />
        </div>
    );
}