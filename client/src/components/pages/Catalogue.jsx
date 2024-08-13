import { useQuery } from "@apollo/client";

import { GET_WINES } from "../../utils/queries";
import { GET_BEERS } from "../../utils/queries";

import wineImage from '../../images/wine_placeholder.png';
import beerImage from '../../images/beer_placeholder.png';

import Card from '../UI/Card';
import BeerCard from '../UI/BeerCard';

export default function Catalogue() {

    let products = [];
    const wineQuery = useQuery(GET_WINES);
    const beerQuery = useQuery(GET_BEERS);

    if (wineQuery.loading || beerQuery.loading) {
        return (
            <div>
                <h1 className='text-center'>LOADING...</h1>
            </div>
        )
    }

    if (!wineQuery.loading && !beerQuery.loading) {
        for (let i = 0; i < wineQuery.data.wines.length; i++) {
            products.push(wineQuery.data.wines[i])
        }
        for (let i = 0; i < beerQuery.data.beers.length; i++) {
            products.push(beerQuery.data.beers[i])
        }
        console.log(products);
    }

    return (
        <div className='font-body p-20 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-40 justify-items-center content-center items-center bg-slate-400 w-screen'>
                {products.map((product) => {
                    if (product.varietal) {
                        return (
                            <Card
                                _id={product._id}
                                addToCart={() => handleAddToCart(product.productInformation._id)}
                                image={wineImage}
                                name={product.productInformation.name}
                                subtitle={product.varietal}
                                price={product.productInformation.price}
                                buttonClass={'bg-slate-400 hover:bg-orange-500 hover:text-white text-xl font-semibold py-2 px-4 border border-black rounded shadow'}
                            />
                        )
                    } else {
                        return (
                            <BeerCard
                                addToCart={() => handleAddToCart(product.productInformation._id)}
                                _id={product._id}
                                image={beerImage}
                                subtitle={product.packSize}
                                name={product.productInformation.name}
                                price={product.productInformation.price}
                                buttonClass={'bg-slate-400 hover:bg-orange-500 hover:text-white text-xl font-semibold py-2 px-4 border border-black rounded shadow'}
                            />
                        )
                    }
                })}
            </div>
        </div>
    );
}