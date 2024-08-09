import { useState } from "react";
import { useQuery } from "@apollo/client";

import { LATEST_WINES } from "../../utils/queries";

import Card from '../UI/Card';
import wineImage from '../../images/wine_placeholder.png';

export default function LatestWineArrivals() {
    
const { loading, data } = useQuery(LATEST_WINES);


    if(!loading){
        console.log(data.latestWines);
    }

    if(loading) {
        return (
            <div>
                <h1 className='text-center'>LOADING...</h1>
            </div>
        )
    }

    return (
        <div className='font-body flex justify-center p-6 mx-auto'>
            <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-40'>
                {data.latestWines.map((wine) => {
                    return (
                        <Card
                            image = {wineImage}
                            name = {wine.productInformation.name}
                            subtitle = {wine.varietal}
                            price = {wine.productInformation.price}
                            buttonClass = {'bg-slate-400 hover:bg-orange-500 hover:text-white text-xl font-semibold py-2 px-4 border border-black rounded shadow'}
                        />
                    )
                })}
            </ul>
        </div>
    );
}