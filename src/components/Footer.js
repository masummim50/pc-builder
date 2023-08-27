import React from 'react';
import { AiFillPhone } from "react-icons/ai"
import { BiLocationPlus } from "react-icons/bi"

const about = [
    "EMI",
    "Online Delivery",
    "Privacy Policy",
    "Terms and Conditions",
    "Refund and Return Policy",
    "Star Point Policy",
    "Blog",
    "Contact Us",
]


const Footer = () => {
    return (
        <div className='min-h-[300px] bg-gray-700 mt-5 rounded-t-lg'>
            <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-5 pt-7">

                <div className="support">
                    <h2 className=" text-white font-bold text-[18px] mb-4">Contact us</h2>
                    <div className="rounded-lg border-2 border-gray-500 inline-block px-6 py-2 text-white hover:cursor-pointer hover:border-gray-200">
                        <AiFillPhone className='mx-auto inline-block mr-2' />|<span className='ml-2'>0000000000</span>
                    </div>
                    <br />
                    <div className="rounded-lg border-2 border-gray-500 inline-block px-6 py-2 text-white mt-4 hover:cursor-pointer hover:border-gray-200">
                        <BiLocationPlus className='mx-auto inline-block mr-2' />|<span className='ml-2'>Find Our store</span>
                    </div>
                </div>
                <div className="about text-white font-bold text-[18px]">
                    <h2 className=' mb-4'>About Us</h2>
                    {
                        about.map((a, index) => (
                            <p key={index} className='hover:underline text-gray-500'>{a}</p>
                        ))
                    }
                </div>
                <div className="contact text-gray-300">
                    <h2 className="text-white font-bold text-[18px] mb-4">Our Shop</h2>
                    <h2 className='text-[15px]'>Technologist</h2>
                    <p>Address</p>
                    <p>Email:</p>
                    <p>Technologist@gmail.com</p>

                </div>
            </div>
        </div>
    );
};

export default Footer;