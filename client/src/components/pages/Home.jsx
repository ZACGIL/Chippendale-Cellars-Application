import LatestWineArrivals from '../sections/LatestWineArrivals';
import LatestBeerArrivals from '../sections/LatestBeerArrivals';

export default function Home() {
    return (
        <div className='font-title text-3xl flex flex-col justify-between w-screen'>
            <div className='bg-slate-400 p-20 h-auto m-4'>
                <h1 className='mb-4'>Latest Wine Arrivals</h1>
                <LatestWineArrivals />
            </div>
            <div className='bg-slate-400 p-20 h-auto m-4'>
                <h1 className='mb-4'>Latest Beer Arrivals</h1>
                <LatestBeerArrivals />
            </div>
        </div>
    );
}