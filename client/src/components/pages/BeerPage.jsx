import { useQuery, useLazyQuery } from "@apollo/client";

import { GET_BEERS } from "../../utils/queries";
import { GET_SUBCATEGORY } from "../../utils/queries";

import BeerCard from '../UI/BeerCard';
import beerImage from '../../images/beer_placeholder.png';

export default function BeerPage() {

    const { loading, data } = useQuery(GET_BEERS, { 
        pollInterval: 500
    });
    //const [getSub, { subLoading, error, subData }] = useLazyQuery(GET_SUBCATEGORY);

    if (loading) {
        return (
            <div>
                <h1 className='text-center'>LOADING...</h1>
            </div>
        )
    }

    if (!loading) {
        return (
            <div className='font-body p-20 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-24 justify-items-center content-center items-center bg-slate-400 w-screen'>
                    {data.beers.map((beer) => {
                        return (
                            <BeerCard
                                addToCart={() => handleAddToCart(beer.productInformation._id)}
                                _id = {beer._id}
                                image={beerImage}
                                subtitle={beer.packSize}
                                name={beer.productInformation.name}
                                price={beer.productInformation.price}
                                buttonClass={'bg-slate-400 hover:bg-orange-500 hover:text-white text-xl font-semibold py-2 px-4 border border-black rounded shadow'}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }
}