import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { UPDATE_WINE } from '../../utils/mutations';

export default function UpdateWine() {
    // set initial form state
    const [updateFormData, setUpdateForm] = useState({ _id: '', quantity: 0 });

    const [updateWine, { error }] = useMutation(UPDATE_WINE);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUpdateForm({ ...updateFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await updateWine({
                variables: { ...updateFormData },
            });

            if (!data) {
                throw new Error(error);
            }
        } catch (err) {
            alert('Incorrect form data.')
            console.error(err);
        }

        setUpdateForm({
            _id: '',
            quantity: 0,
        });
    };

    return (
        <div className='flex-col justify-center items-center text-2xl'>
            <form className='bg-white shadow-md rounded px-60 pt-12 pb-20 my-12' onSubmit={handleFormSubmit}>
                <h1 className='text-center text-gray-700 font-bold underline text-5xl mb-12'>
                    Update A Wine
                </h1>
                <div className='mb-4'>
                    <label className="block text-gray-700 font-bold mb-2">
                        ID:
                    </label>
                </div>
                <div className='mb-6'>
                    <input required
                        className="font-read shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={updateFormData._id}
                        name="_id"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="The item ID"
                    />
                </div>
                <div className='mb-4'>
                    <label className="block text-gray-700 font-bold mb-2">
                        Set Quantity:
                    </label>
                </div>
                <div className='mb-6'>
                    <input required
                        className="font-read shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={updateFormData.quantity}
                        name="quantity"
                        onChange={handleInputChange}
                        type="number"
                        placeholder="The item quantity"
                    />
                </div>
                <div>
                    <button className="bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}