import Button from './Button';
import { Link } from 'react-router-dom';

export default function BeerCard(props) {

    return (
        <div className='font-body text-center text-2xl text-black'>
            <div className='md:ml-10 w-60 h-60 bg-slate-400 border-2 border-slate-400 border-x-black mb-2'>
                <Link to={`/Item/Beer/${props._id}`}>
                    <img className="w-full h-full" src={props.image} alt={props.alt} />
                </Link>
            </div>
            <div className='w-60 h-24 md:w-80 md:h-24 bg-slate-400 '>
                <p className='text-xl'>{`${props.subtitle} pack` || 'Pack'}</p>
                <p className='font-bold'>{`${props.name}` || 'Name'}</p>
                <p className='mb-4'>{`$ ${props.price}` || 'Price'}</p>
                <Button callback={props.addToCart} className={props.buttonClass} />
            </div>
        </div>
    );
}