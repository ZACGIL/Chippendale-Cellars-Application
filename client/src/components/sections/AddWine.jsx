import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { ADD_WINE } from '../../utils/mutations';
import { GET_CATEGORY } from '../../utils/queries';

export default function CRUDform() {
    // set initial form state
    const [addWineFormData, setAddWineFormData] = useState(
        {
            name: '', imagePath: '', price: 1, quantity: 0, category: '', subcategory: '',
            description: '', varietal: '', producer: '', region: '', country: '', vintage: '', volume: 0, natural: false, alcoholContent: 0
        }
    );

    const [addWine, { error }] = useMutation(ADD_WINE);

    const handleInputChange = event => {
        const { name, value } = event.target;

        setAddWineFormData({ ...addWineFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addWine({
                variables: {
                    input: {
                        productInformation: {
                            name: addWineFormData.name, imagePath: addWineFormData.imagePath, price: parseFloat(addWineFormData.price), quantity: parseInt(addWineFormData.quantity), category: '66b4e8a83d0aec501fb9c9a1',
                            subcategory: ['66b4e8a93d0aec501fb9c9ae']
                        }, description: addWineFormData.description, varietal: addWineFormData.varietal, producer: addWineFormData.producer, region: addWineFormData.region,
                        country: addWineFormData.country, vintage: addWineFormData.vintage, volume: parseInt(addWineFormData.volume), natural: addWineFormData.natural, alcoholContent: parseFloat(addWineFormData.alcoholContent)
                    }
                }
            })

            if (!data) {
                throw new Error(error);
            }

            if(data.addWine) {
                alert('Adding was a success');
            }else return alert('Incorrect form data.');

        } catch (err) {
            alert('Incorrect form details, try again.')
            console.error(err);
        }

        setAddWineFormData(
            {
                name: '', imagePath: '', price: 1, quantity: 0, category: '', subcategory: [],
                description: '', varietal: '', producer: '', region: '', country: '', vintage: '', volume: 0, natural: false, alcoholContent: 0
            }
        );
    };

    return (
        <div className='flex-col justify-center items-center text-2xl'>
            <form className='bg-white shadow-md rounded px-60 pt-12 pb-20 mb-12' onSubmit={handleFormSubmit}>
                <h1 className='text-center text-gray-700 font-bold underline text-5xl mb-12'>
                    Add A Wine
                </h1>
                <div className='mb-4'>
                    <label className="block text-gray-700 font-bold mb-2">
                        Name:
                    </label>
                </div>
                <div className='mb-6'>
                    <input required
                        className="font-read shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={addWineFormData.name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="The name of the item"
                    />
                </div>
                <div className='mb-4'>
                    <label className="block text-gray-700 font-bold mb-2">
                        Price:
                    </label>
                </div>
                <div className='mb-6'>
                    <input required
                        className="font-read shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={addWineFormData.price}
                        name="price"
                        onChange={handleInputChange}
                        type="number"
                        placeholder="The price of the item"
                    />
                </div>
                <div className='mb-4'>
                    <label className="block text-gray-700 font-bold mb-2">
                        Quantity:
                    </label>
                </div>
                <div className='mb-6'>
                    <input required
                        className="font-read shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={addWineFormData.quantity}
                        name="quantity"
                        onChange={handleInputChange}
                        type="number"
                        placeholder="The amount of items in stock"
                    />
                </div>
                <div className='mb-4'>
                    <label className="block text-gray-700 font-bold mb-2">
                        Description:
                    </label>
                </div>
                <div className='mb-6'>
                    <input
                        className="font-read shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={addWineFormData.description}
                        name="description"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="The description of the item"
                    />
                </div>
                <div className='mb-4'>
                    <label className="block text-gray-700 font-bold mb-2">
                        Varietal:
                    </label>
                </div>
                <div className='mb-6'>
                    <select required
                        className="font-read shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={addWineFormData.varietal}
                        name="varietal"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="The varietal of the item">
                        <option className='text-center'>-- Select an option --</option>
                        <option value="Shiraz">Shiraz</option>
                        <option value="Cabernet Sauvignon">Cabernet Sauvignon</option>
                        <option value="Pinot Noir">Pinot Noir</option>
                        <option value="Merlot">Merlot</option>
                        <option value="Cabernet Merlot">Cabernet Merlot</option>
                        <option value="Sauvignon Blanc">Sauvignon Blanc</option>
                        <option value="Pinot Gris">Pinot Gris</option>
                        <option value="Chardonnay">Chardonnay</option>
                        <option value="Chardonnay Pinot Noir">Chardonnay Pinot Noir</option>
                        <option value="Moscato">Moscato</option>
                        <option value="Rose">Rose</option>
                    </select>
                </div>
                <div className='mb-4'>
                    <label className="block text-gray-700 font-bold mb-2">
                        Producer:
                    </label>
                </div>
                <div className='mb-6'>
                    <input
                        className="font-read shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={addWineFormData.producer}
                        name="producer"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="The producer of the item"
                    />
                </div>
                <div className='mb-4'>
                    <label className="block text-gray-700 font-bold mb-2">
                        Region:
                    </label>
                </div>
                <div className='mb-6'>
                    <input
                        className="font-read shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={addWineFormData.region}
                        name="region"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="The region where the item was made"
                    />
                </div>
                <div className='mb-4'>
                    <label className="block text-gray-700 font-bold mb-2">
                        Country:
                    </label>
                </div>
                <div className='mb-6'>
                    <input
                        className="font-read shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={addWineFormData.country}
                        name="country"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="The country where the item was made"
                    />
                </div>
                <div className='mb-4'>
                    <label className="block text-gray-700 font-bold mb-2">
                        Vintage:
                    </label>
                </div>
                <div className='mb-6'>
                    <input
                        className="font-read shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={addWineFormData.vintage}
                        name="vintage"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="The vintage of the item"
                    />
                </div>
                <div className='mb-4'>
                    <label className="block text-gray-700 font-bold mb-2">
                        Volume:
                    </label>
                </div>
                <div className='mb-6'>
                    <input required
                        className="font-read shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={addWineFormData.volume}
                        name="volume"
                        onChange={handleInputChange}
                        type="number"
                        placeholder="The volume of item in mL"
                    />
                </div>
                <div className='mb-4'>
                    <label className="block text-gray-700 font-bold mb-2">
                        Natural:
                    </label>
                </div>
                <div className='mb-6'>
                    <select required
                        className="font-read shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={addWineFormData.natural}
                        name="natural"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Was the item produced using natural methods">
                        <option value="False">False</option>
                        <option value="True">True</option>
                    </select>
                </div>
                <div className='mb-4'>
                    <label className="block text-gray-700 font-bold mb-2">
                        Alcohol Content:
                    </label>
                </div>
                <div className='mb-6'>
                    <input required
                        className="font-read shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={addWineFormData.alcoholContent}
                        name="alcoholContent"
                        onChange={handleInputChange}
                        type="number"
                        placeholder="The alcohol content of the item"
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