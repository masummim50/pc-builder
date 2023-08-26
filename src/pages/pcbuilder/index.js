import React from 'react';
import Layout from '../../components/Layout';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Image from 'next/image';

const PcBuilder = () => {
    const { data } = useSession();
    console.log("login data from pcbuilder: ", data)
    const selected = useSelector(state => state.pcbuilder);
    return (
        <div>
            this is pc builder page
            <Link href={"/pcbuilder/components/motherboard"}>go here</Link>
            <div className="border-2 rounded-md border-blue-400 px-5 py-5">

                <div className="flex items-center border-b-2 border-gray-300 pb-2">
                    <div className="bg-blue-400 h-[50px] w-[50px]">
                        {
                            selected.monitor && <Image src={selected.monitor.image} alt="image" width={400} height={400} />
                        }
                    </div>
                    <div className="flex-1 px-3">

                        <h2>Monitor</h2>
                        <div className="bg-blue-200 min-h-[10px]">{selected.monitor?.name}</div>
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

                        <h2>Cpu/Processor</h2>
                        <div className="bg-blue-200 min-h-[10px]">{selected.cpu?.name}</div>
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

                        <h2>Motherboard</h2>
                        <div className="bg-blue-200 min-h-[10px]">{selected.motherboard?.name}</div>
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

                        <h2>Psu</h2>
                        <div className="bg-blue-200 min-h-[10px]">{selected.psu?.name}</div>
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

                        <h2>Ram</h2>
                        <div className="bg-blue-200 min-h-[10px]">{selected.ram?.name}</div>
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

                        <h2>Storage</h2>
                        <div className="bg-blue-200 min-h-[10px]">{selected.storage?.name}</div>
                    </div>
                    <Link href={"/pcbuilder/components/storage"} className='bg-blue-400 px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white'>
                        Choose
                    </Link>
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