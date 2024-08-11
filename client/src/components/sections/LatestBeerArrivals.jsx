import { useQuery } from "@apollo/client";

import { LATEST_BEERS } from "../../utils/queries";

import BeerCard from '../UI/Card';
import beerImage from '../../images/beer_placeholder.png';

export default function LatestWineArrivals() {

    const { loading, data } = useQuery(LATEST_BEERS);
    
    if(!loading){
        console.log(data.latestBeers[1].productInformation.price);
    }
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
                        image={beerImage}
                        name={beer.productInformation.name}
                        itemId={beer.productInformation._id}
                        price={beer.productInformation.price}
                    />
                )
            })}
        </div>
    );
}