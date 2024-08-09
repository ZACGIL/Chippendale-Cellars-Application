import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

export default function Signup() {
    // set initial form state
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    // set state for form validation
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if(!validateEmail(userFormData.email)){
            alert('Please enter a valid email.');
            return;
        }
        
        try {
            const { data } = await addUser({
                variables: { ...userFormData },
            });

            if (!data) {
                throw new Error(error);
            }

            console.log(userFormData);
            Auth.login(data.addUser.token);
        } catch (err) {
            console.error(err);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    };

    const validateEmail = (email) => {
        // Checks only one @ in string and dot notation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    return (
        <div className='flex-col justify-center items-center text-2xl'>
            <form className='bg-white shadow-md rounded px-60 pt-12 pb-20 my-12' onSubmit={handleFormSubmit}>
                <h1 className='text-center text-gray-700 font-bold underline text-5xl mb-12'>
                    Sign Up
                </h1>
                <div className='my-4'>
                    <label className="block text-gray-700 font-bold mb-2">
                        Username:
                    </label>
                </div>
                <div className='mb-6 min-w-52'>
                    <input required
                        className="font-read shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={userFormData.username}
                        name="username"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Your username"
                    />
                </div>
                <div className='mb-4'>
                    <label className="block text-gray-700 font-bold mb-2">
                        Email:
                    </label>
                </div>
                <div className='mb-6'>
                    <input required
                        className="font-read shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={userFormData.email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Your email"
                    />
                </div>
                <div>
                    <div className='mb-4'>
                        <label className="block text-gray-700 font-bold mb-2">
                            Password:
                        </label>
                    </div>
                    <div className='mb-6'>
                        <input required
                            className="font-read shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={userFormData.password}
                            name="password"
                            onChange={handleInputChange}
                            type="password"
                            placeholder="Your password"
                        />
                    </div>
                    <button className="bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </div>
            </form>
            <div className='bg-white shadow-md rounded px-60 py-2 mb-12 flex flex-col md:flex-row'>
                <p className='block text-gray-700 mx-2'>Already have an account?</p>
                <a className='text-indigo-500 underline' href='/Login'>Log In Here</a>
            </div>
        </div>
    );
}