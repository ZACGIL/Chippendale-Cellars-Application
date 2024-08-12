import { useQuery } from "@apollo/client";

import { LATEST_BEERS } from "../../utils/queries";

import BeerCard from '../UI/BeerCard';
import beerImage from '../../images/beer_placeholder.png';

export default function LatestBeerArrivals() {

    const { loading, data } = useQuery(LATEST_BEERS);
    
    if (loading) {
        return (
            <div>
                <h1 className='text-center'>LOADING...</h1>
            </div>
        )
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-40 justify-items-center content-center items-center'>
            {data.latestBeers.map((beer) => {
                return (
                    <BeerCard
                        _id={beer._id}
                        image={beerImage}
                        subtitle={beer.packSize}
                        name={beer.productInformation.name}
                        price={beer.productInformation.price}
                    />
                )
            })}
        </div>
    );
}