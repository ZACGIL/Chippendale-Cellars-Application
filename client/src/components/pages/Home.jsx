import LatestArrivals from '../sections/LatestArrivals';

export default function Home() {
    return (
        <div className='font-title text-3xl flex flex-col justify-between'>
            <div className='bg-red-500 p-14 w-screen h-auto m-4'>
                <h1 className='mb-4'>Latest Arrivals</h1>
                <LatestArrivals></LatestArrivals>
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