import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import {AiOutlineLogin, AiOutlineLogout} from "react-icons/ai"
import {BiSolidDownArrow} from "react-icons/bi"

const Header = () => {
    const { data } = useSession();
    return (
        <div className='px-2 md:px-6 lg:px-10 flex justify-between items-center py-2 shadow-md'>
            <Link href={"/"}>
                <div className="logo">
                    Logo
                </div>
            </Link>

            <div className="flex gap-2">
                <button className='border border-black rounded-lg px-5 py-2 hover:bg-black hover:text-white transition-all'>

                    <Link href={"/pcbuilder"}>
                        Pc Builder
                    </Link>
                </button>
                <div className='group border border-black rounded-lg px-5 py-2 hover:bg-black hover:text-white transition-all relative'>
                    <div>
                        Categories <BiSolidDownArrow className='inline'/>
                    </div>
                    <div className='hidden group-hover:block absolute left-0 top-[100%] bg-gray-700 h-auto z-30 rounded-b-lg'>
                        <div className="flex flex-col gap-3"> 

                        <Link href={"/product/category/monitor"} className=' hover:bg-gray-900 border-gray-700 hover:border-amber-700 px-8 hover:border-l-4 border-l-4 py-1'>Monitor</Link>
                        <Link href={"/product/category/motherboard"} className=' hover:bg-gray-900 border-gray-700 hover:border-amber-700 px-8 hover:border-l-4 border-l-4 py-1'>Motherboards</Link>
                        <Link href={"/product/category/cpu"} className=' hover:bg-gray-900 border-gray-700 hover:border-amber-700 px-8 hover:border-l-4 border-l-4 py-1'>Processors</Link>
                        <Link href={"/product/category/ram"} className=' hover:bg-gray-900 border-gray-700 hover:border-amber-700 px-8 hover:border-l-4 border-l-4 py-1'>Ram</Link>
                        <Link href={"/product/category/powerSupply"} className=' hover:bg-gray-900 border-gray-700 hover:border-amber-700 px-8 hover:border-l-4 border-l-4 py-1'>Power Supply</Link>
                        <Link href={"/product/category/storage"} className=' hover:bg-gray-900 border-gray-700 hover:border-amber-700 px-8 hover:border-l-4 border-l-4 py-1'>Storage Devices</Link>
                        <Link href={"/product/category/other"} className=' hover:bg-gray-900 border-gray-700 hover:border-amber-700 px-8 hover:border-l-4 border-l-4 py-1'>Others</Link>
                        </div>
                    </div>
                </div>
                {
                    data?.user ?
                    <>
                        <button onClick={() => signOut()} className='border border-black rounded-[100%] md:rounded-lg px-5 py-2 hover:bg-black hover:text-white transition-all'>

                            <div className=' md:block hidden'>
                                logout
                            </div>
                            <div className=' md:hidden'>
                                <AiOutlineLogout/>
                            </div>

                        </button>

                        </> :

                        <button className=' border border-black rounded-[100%] md:rounded-lg px-5 py-2 hover:bg-black hover:text-white transition-all'>

                            <Link className=' md:block hidden' href={"/login"}>
                                Login
                            </Link>
                            <Link className=' md:hidden' href={"/login"}>
                                <AiOutlineLogin/>
                            </Link>
                        </button>
                }
            </div>
        </div>
    );
};

export default Header;