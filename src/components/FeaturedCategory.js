import Link from 'next/link';
import React from 'react';

const FeaturedCategory = () => {
    return (
        <div className='mt-5'>
            <h2 className='text-[30px] font-bold underline mb-2'>Featured Components: </h2>
            <div className="grid grid-cols-3 gap-3">
                <Link href={"/motherboards"} className='hover:shadow-lg'>
                    <div className='md:h-[100px] h-[80px]  rounded-lg bg-[url("../assets/images/m3.jpg")] bg-cover hover:scale-105 transition-all bg-center flex items-center justify-center relative'>
                        <div className="absolute h-full w-full bg-black top-0 left-0 opacity-60 rounded-lg"></div>
                        <h2 className='text-white text-[10px] md:text-[20px] z-20'>MotherBoards</h2>
                    </div>
                </Link>
                <Link href={"/motherboards"} className='hover:shadow-lg'>
                    <div className='md:h-[100px] h-[80px]  rounded-lg bg-[url("../assets/images/m3.jpg")] bg-cover hover:scale-105 transition-all bg-center flex items-center justify-center relative'>
                        <div className="absolute h-full w-full bg-black top-0 left-0 opacity-60 rounded-lg"></div>
                        <h2 className='text-white text-[10px] md:text-[20px] z-20'>Graphics Card</h2>
                    </div>
                </Link>
                <Link href={"/motherboards"} className='hover:shadow-lg'>
                    <div className='md:h-[100px] h-[80px]  rounded-lg bg-[url("../assets/images/m3.jpg")] bg-cover hover:scale-105 transition-all bg-center flex items-center justify-center relative'>
                        <div className="absolute h-full w-full bg-black top-0 left-0 opacity-60 rounded-lg"></div>
                        <h2 className='text-white text-[10px] md:text-[20px] z-20'>Computer KeyBoards</h2>
                    </div>
                </Link>
                <Link href={"/motherboards"} className='hover:shadow-lg'>
                    <div className='md:h-[100px] h-[80px]  rounded-lg bg-[url("../assets/images/m3.jpg")] bg-cover hover:scale-105 transition-all bg-center flex items-center justify-center relative'>
                        <div className="absolute h-full w-full bg-black top-0 left-0 opacity-60 rounded-lg"></div>
                        <h2 className='text-white text-[10px] md:text-[20px] z-20'>MotherBoards</h2>
                    </div>
                </Link>
                <Link href={"/motherboards"} className='hover:shadow-lg'>
                    <div className='md:h-[100px] h-[80px]  rounded-lg bg-[url("../assets/images/m3.jpg")] bg-cover hover:scale-105 transition-all bg-center flex items-center justify-center relative'>
                        <div className="absolute h-full w-full bg-black top-0 left-0 opacity-60 rounded-lg"></div>
                        <h2 className='text-white text-[10px] md:text-[20px] z-20'>MotherBoards</h2>
                    </div>
                </Link>
                <Link href={"/motherboards"} className='hover:shadow-lg'>
                    <div className='md:h-[100px] h-[80px]  rounded-lg bg-[url("../assets/images/m3.jpg")] bg-cover hover:scale-105 transition-all bg-center flex items-center justify-center relative'>
                        <div className="absolute h-full w-full bg-black top-0 left-0 opacity-60 rounded-lg"></div>
                        <h2 className='text-white text-[10px] md:text-[20px] z-20'>MotherBoards</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedCategory;