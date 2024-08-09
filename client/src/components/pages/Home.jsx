import LatestWineArrivals from '../sections/LatestWineArrivals';

export default function Home() {
    return (
        <div className='font-title text-3xl flex flex-col justify-between'>
            <div className='bg-slate-400 p-14 h-auto m-4'>
                <h1 className='mb-4'>Latest Wine Arrivals</h1>
                <LatestWineArrivals></LatestWineArrivals>
            </div>
            <div className='bg-red-500 p-14 w-screen h-2/6 m-4'>
                <h1>Events/Tastings</h1>
            </div>
            <div className='bg-red-500 p-14 w-screen h-2/6 m-4'>
                <h1>Visit Us!</h1>
            </div>
        </div>
    );
}