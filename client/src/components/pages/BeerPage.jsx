import { useQuery } from "@apollo/client";

import { GET_BEERS } from "../../utils/queries";

import Card from '../UI/Card';
import beerImage from '../../images/beer_placeholder.png';

export default function BeerPage() {

    const { loading, data } = useQuery(GET_BEERS);

    if (loading) {
        return (
            <div>
                <h1 className='text-center'>LOADING...</h1>
            </div>
        )
    }

    return (
        <div className='font-body p-6 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-24 justify-items-center content-center items-center bg-slate-400 w-screen'>
                {data.beers.map((beer) => {
                    return (
                        <Card
                            image={beerImage}
                            name={beer.productInformation.name}
                            subtitle={beer.packSize}
                            price={beer.productInformation.price}
                            buttonClass={'bg-slate-400 hover:bg-orange-500 hover:text-white text-xl font-semibold py-2 px-4 border border-black rounded shadow'}
                        />
                    )
                })}
            </div>
        </div>
    );
}