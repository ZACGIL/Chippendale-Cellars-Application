import Button from './Button';

export default function Card(props) {

    return (
        <div className='text-center text-2xl flex-col'>
            <div className='w-65 h-65 md:w-80 md:h-80 bg-slate-400 border-2 border-slate-400 border-x-black'>
                <a href={`${props.productLink || '#'}`}>
                    <img className="w-full h-full" src={props.image} alt={props.alt} />
                </a>
            </div>
            <div className='w-60 h-10 md:w-80 md:h-24 bg-slate-400 text-black'>
                <div flex-col justify-center items-center my-1>
                    <p className='text-xl'>{`${props.subtitle}` || 'Name'}</p>
                    <p className='font-bold'>{`${props.name}` || 'Name'}</p>
                    <p className='mb-4'>{`$ ${props.price}` || 'Price'}</p>
                    <Button link={props.addToCart} className={props.buttonClass} />
                </div>
            </div>
        </div>
    );
}