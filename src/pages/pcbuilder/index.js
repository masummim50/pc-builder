import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { reset } from '../../redux/features/pcbuilder/pcbuilderSlice';
import BuildCompletePopup from '../../components/BuildCompletePopup';

const PcBuilder = () => {
    const dispatch = useDispatch()
    const { data } = useSession();
    const selected = useSelector(state => state.pcbuilder);
    function calculateTotalCost(obj) {
        return Object.values(obj)
            .filter(item => item && item.price)
            .reduce((total, item) => total + item.price, 0);
    }
    function checkBuildFullFilled(obj) {
        return Object.values(obj).every(item => item !== null);
    }
    const [showPopup, setShowPopup] = useState(false)
    const handleBuildFullFilled = () => {
        setShowPopup(true)
    }
    return (
        <div>
            <BuildCompletePopup showPopup={showPopup} setShowPopup={setShowPopup}/>
            <div className="flex justify-between mb-3">

                <h2 className='font-bold'>Build your pc:</h2>
                <button onClick={() => dispatch(reset())} className="bg-blue-200 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white">
                    Reset Build
                </button>
            </div>
            <div className="border-2 rounded-md border-blue-400 px-5 py-5">

                <div className="flex items-center border-b-2 border-gray-300 pb-2">
                    <div className="bg-blue-400 h-[50px] w-[50px]">
                        {
                            selected.monitor && <Image src={selected.monitor.image} alt="image" width={400} height={400} />
                        }
                    </div>
                    <div className="flex-1 px-3">

                        <h2 className="font-bold">Monitor</h2>
                        <div className="bg-blue-200 p-2 rounded-lg min-h-[10px]">{selected.monitor?.name}</div>
                    </div>
                    <Link href={"/pcbuilder/components/monitor"} className='bg-blue-400 px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white'>
                        Choose
                    </Link>
                </div>

                <div className="flex items-center border-b-2 border-gray-300 pb-2">
                    <div className="bg-blue-400 h-[50px] w-[50px]">
                        {
                            selected.cpu && <Image src={selected.cpu.image} alt="image" width={400} height={400} />
                        }
                    </div>
                    <div className="flex-1 px-3">

                        <h2 className="font-bold">Cpu/Processor</h2>
                        <div className="bg-blue-200 p-2 rounded-lg min-h-[10px]">{selected.cpu?.name}</div>
                    </div>
                    <Link href={"/pcbuilder/components/cpu"} className='bg-blue-400 px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white'>
                        Choose
                    </Link>
                </div>

                <div className="flex items-center border-b-2 border-gray-300 pb-2">
                    <div className="bg-blue-400 h-[50px] w-[50px]">
                        {
                            selected.motherboard && <Image src={selected.motherboard.image} alt="image" width={400} height={400} />
                        }
                    </div>
                    <div className="flex-1 px-3">

                        <h2 className="font-bold">Motherboard</h2>
                        <div className="bg-blue-200 p-2 rounded-lg min-h-[10px]">{selected.motherboard?.name}</div>
                    </div>
                    <Link href={"/pcbuilder/components/motherboard"} className='bg-blue-400 px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white'>
                        Choose
                    </Link>
                </div>

                <div className="flex items-center border-b-2 border-gray-300 pb-2">
                    <div className={`bg-blue-400 h-[50px] w-[50px]`}>
                        {
                            selected.psu && <Image src={selected.psu.image} alt="image" width={400} height={400} />
                        }
                    </div>
                    <div className="flex-1 px-3">

                        <h2 className="font-bold">Psu</h2>
                        <div className="bg-blue-200 p-2 rounded-lg min-h-[10px]">{selected.psu?.name}</div>
                    </div>
                    <Link href={"/pcbuilder/components/powerSupply"} className='bg-blue-400 px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white'>
                        Choose
                    </Link>
                </div>

                <div className="flex items-center border-b-2 border-gray-300 pb-2">
                    <div className="bg-blue-400 h-[50px] w-[50px]">
                        {
                            selected.ram && <Image src={selected.ram.image} alt="image" width={400} height={400} />
                        }
                    </div>
                    <div className="flex-1 px-3">

                        <h2 className="font-bold">Ram</h2>
                        <div className="bg-blue-200 p-2 rounded-lg min-h-[10px]">{selected.ram?.name}</div>
                    </div>
                    <Link href={"/pcbuilder/components/ram"} className='bg-blue-400 px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white'>
                        Choose
                    </Link>
                </div>

                <div className="flex items-center border-b-2 border-gray-300 pb-2">
                    <div className="bg-blue-400 h-[50px] w-[50px]">
                        {
                            selected.storage && <Image src={selected.storage.image} alt="image" width={400} height={400} />
                        }
                    </div>
                    <div className="flex-1 px-3">

                        <h2 className="font-bold">Storage</h2>
                        <div className="bg-blue-200 p-2 rounded-lg min-h-[10px]">{selected.storage?.name}</div>
                    </div>
                    <Link href={"/pcbuilder/components/storage"} className='bg-blue-400 px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white'>
                        Choose
                    </Link>
                </div>
                <div className="flex justify-between">
                    <p>Total cost for your build is: </p>
                    <p>
                        {
                            calculateTotalCost(selected).toLocaleString()
                        } Bdt
                    </p>
                </div>
                <div className="text-right">
                    <button 
                    disabled={!checkBuildFullFilled(selected)}
                     onClick={() => handleBuildFullFilled()} className={`bg-blue-200 px-3 py-1 rounded-lg font-bold disabled:bg-blue-50 disabled:text-gray-400`}>Complete Build</button>
                </div>
            </div>
        </div>
    );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}