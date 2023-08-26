import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    const {data} = useSession();
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
                {
                    data?.user ? 
                    <button onClick={()=>signOut()} className='border border-black rounded-lg px-5 py-2 hover:bg-black hover:text-white transition-all'>

                <Link href={"/login"}>
                    logout
                </Link>
                </button> :

<button className='border border-black rounded-lg px-5 py-2 hover:bg-black hover:text-white transition-all'>

<Link href={"/login"}>
    Login
</Link>
</button>
                }
            </div>
        </div>
    );
};

export default Header;