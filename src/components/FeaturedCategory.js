import Link from 'next/link';
import React from 'react';

const FeaturedCategory = () => {
    return (
        <div className='mt-5'>
            <h2 className='text-[30px] font-bold underline mb-2'>Featured Components: </h2>
            <div className="grid grid-cols-3 gap-3">
                <Link href={"/product/category/motherboard"} className='hover:shadow-lg'>
                    <div className='md:h-[100px] h-[80px]  rounded-lg bg-[url("../assets/images/m2.jpg")] bg-cover hover:scale-105 transition-all bg-center flex items-center justify-center relative'>
                        <div className="absolute h-full w-full bg-black top-0 left-0 opacity-60 rounded-lg"></div>
                        <h2 className='text-white text-[10px] md:text-[20px] z-20'>MotherBoards</h2>
                    </div>
                </Link>
                <Link href={"/product/category/monitor"} className='hover:shadow-lg'>
                    <div className='md:h-[100px] h-[80px]  rounded-lg bg-[url("../assets/images/monitor.jpg")] bg-cover hover:scale-105 transition-all bg-center flex items-center justify-center relative'>
                        <div className="absolute h-full w-full bg-black top-0 left-0 opacity-60 rounded-lg"></div>
                        <h2 className='text-white text-[10px] md:text-[20px] z-20'>Monitor</h2>
                    </div>
                </Link>
                <Link href={"/product/category/powerSupply"} className='hover:shadow-lg'>
                    <div className='md:h-[100px] h-[80px]  rounded-lg bg-[url("../assets/images/psu.jpg")] bg-cover hover:scale-105 transition-all bg-center flex items-center justify-center relative'>
                        <div className="absolute h-full w-full bg-black top-0 left-0 opacity-60 rounded-lg"></div>
                        <h2 className='text-white text-[10px] md:text-[20px] z-20'>PSU</h2>
                    </div>
                </Link>
                <Link href={"/product/category/cpu"} className='hover:shadow-lg'>
                    <div className='md:h-[100px] h-[80px]  rounded-lg bg-[url("../assets/images/cpu.jpg")] bg-cover hover:scale-105 transition-all bg-center flex items-center justify-center relative'>
                        <div className="absolute h-full w-full bg-black top-0 left-0 opacity-60 rounded-lg"></div>
                        <h2 className='text-white text-[10px] md:text-[20px] z-20'>CPU</h2>
                    </div>
                </Link>
                <Link href={"/product/category/ram"} className='hover:shadow-lg'>
                    <div className='md:h-[100px] h-[80px]  rounded-lg bg-[url("../assets/images/ram.webp")] bg-cover hover:scale-105 transition-all bg-center flex items-center justify-center relative'>
                        <div className="absolute h-full w-full bg-black top-0 left-0 opacity-60 rounded-lg"></div>
                        <h2 className='text-white text-[10px] md:text-[20px] z-20'>Ram</h2>
                    </div>
                </Link>
                <Link href={"/product/category/storage"} className='hover:shadow-lg'>
                    <div className='md:h-[100px] h-[80px]  rounded-lg bg-[url("../assets/images/storage.webp")] bg-cover hover:scale-105 transition-all bg-center flex items-center justify-center relative'>
                        <div className="absolute h-full w-full bg-black top-0 left-0 opacity-60 rounded-lg"></div>
                        <h2 className='text-white text-[10px] md:text-[20px] z-20'>Storage</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedCategory;