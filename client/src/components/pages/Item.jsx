import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Button from '../UI/Button';

import { GET_SINGLE_WINE } from '../../utils/queries';
import { GET_SINGLE_BEER } from '../../utils/queries';

import wineImage from '../../images/wine_placeholder.png';
import beerImage from '../../images/beer_placeholder.png';

import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../../utils/actions';

export default function Item() {
  const { item, id } = useParams();

  if (item === 'Wine') {
    const { loading, data } = useQuery(GET_SINGLE_WINE, {
      variables: { _id: id },
    });

    if (loading) {
      return (
        <div>
          <h1 className='text-center'>LOADING...</h1>
        </div>
      )
    }

    if (!loading) {
      return (
        <div className='flex flex-col lg:flex-row justify-center w-screen'>
          <div className=' bg-orange-500 border-2 w-11/12 lg:w-1/4 h-fit border-black p-6 m-5'>
            <div className='w-full h-full border-2 border-black'>
              <img className="w-full h-full bg-white" src={wineImage} />
            </div>
          </div>
          <div className='flex-col justify-center text-black font-body w-11/12 lg:w-1/4 h-fit p-6 m-5 bg-white border-2 border-black'>
            <h1 className='text-center font-bold text-3xl'>{data.wine.productInformation.name}</h1>
            <div id={data.wine._id} className='my-6 text-2xl'>
              <p className='my-4'>ID tag: {data.wine._id}</p>
              <p className='my-4'>Description: {data.wine.description || 'Not specified'}</p>
              <p className='my-4'>Varietal: {data.wine.varietal}</p>
              <p className='my-4'>Country: {data.wine.country || 'Not specified'}</p>
              <p className='my-4'>Region: {data.wine.region || 'Not specified'}</p>
              <p className='my-4'>Volume: {data.wine.volume}mL</p>
              <p className='my-4'>Alcohol Content: {`${data.wine.alcoholContent}%` || 'Not specified'}</p>
              <p className='my-4'>Price: ${data.wine.productInformation.price}</p>
              <p className='my-4'>In stock: {data.wine.productInformation.quantity || 'Not specified'}</p>
            </div>
            <Button className={'bg-slate-400 hover:bg-orange-500 hover:text-white text-xl font-semibold py-2 px-4 border border-black rounded shadow'} />
          </div>
        </div>
      )
    }
  } else if (item === 'Beer') {
    const { loading, data } = useQuery(GET_SINGLE_BEER, {
      variables: { _id: id },
    });

    if (!loading) {
      return (
        <div className='flex flex-col lg:flex-row justify-center w-screen'>
          <div className=' bg-orange-500 border-2 w-11/12 lg:w-1/4 h-fit border-black p-6 m-5'>
            <div className='w-full h-full border-2 border-black'>
              <img className="w-full h-full bg-white" src={beerImage} />
            </div>
          </div>
          <div className='flex-col text-black font-body w-11/12 lg:w-1/4 h-fit p-6 m-5 bg-white border-2 border-black'>
            <h1 className='text-center font-bold text-3xl'>{data.beer.productInformation.name}</h1>
            <div className='my-6 text-2xl'>
              <p className='my-4'>ID tag: {data.beer._id}</p>
              <p className='my-4'>Description: {data.beer.description || 'Not specified'}</p>
              <p className='my-4'>Brewery: {data.beer.brewery || 'Not specified'}</p>
              <p className='my-4'>Country: {data.beer.country || 'Not specified'}</p>
              <p className='my-4'>Volume: {`${data.beer.volume}mL` || 'Not specified'}</p>
              <p className='my-4'>Pack Size: {data.beer.packSize || 'Not specified'}</p>
              <p className='my-4'>Alcohol Content: {`${data.beer.alcoholContent}%` || 'Not specified'}</p>
              <p className='my-4'>Price: ${data.beer.productInformation.price}</p>
              <p className='my-4'>In stock: {data.beer.productInformation.quantity || 'Not specified'}</p>
            </div>
            <Button className={'bg-slate-400 hover:bg-orange-500 hover:text-white text-xl font-semibold py-2 px-4 border border-black rounded shadow'} />
          </div>
        </div>
      )
    }
  }
}