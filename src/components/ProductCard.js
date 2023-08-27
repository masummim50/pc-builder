import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {AiFillStar} from "react-icons/ai"

const ProductCard = ({ product }) => {
    return (
        <Link href={`/product/${product._id}`} className='h-full rounded-lg border-t-4 border-t-indigo-500/25 hover:border-t-indigo-500'>
            <div className="p-3 shadow gap-3 rounded-lg hover:shadow-lg h-auto transition-all ease-in">

                <div style={{ width: '100%', height: '100%', position: 'relative' }} className=' flex items-center justify-center'>
                    <Image
                        alt='Mountains'
                        src={product.image}
                        width={200}
                        height={200}
                    />
                </div>
                <h2 className='font-bold h-[30px] md:h-[50px] md:text-[15px] text-gray-700 overflow-hidden mb-2 font-serif text-[10px]'>{product.name}</h2>
                <div className="flex justify-between text-[8px] md:text-[11px]">
                    <div className="bg-pink-200 rounded-lg py-px px-1 md:px-3 md:py-2">{product.brand}</div>
                    <div className="bg-purple-200 rounded-lg py-px px-1 md:px-3 md:py-2">{product.status}</div>
                </div>
                <div className='mt-2 text-[8px] md:text-[15px]'><span className='font-bold'>Price: </span>{product.price.toLocaleString("en-US")} Bdt</div>
                <div className='text-[8px] md:text-[12px]'>
                    {product.reviews.length}
                    (
                        {
                            Array(product.rating).fill("").map((_,index)=> <AiFillStar className='inline text-orange-300' key={index}/>)
                        }
                    )
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;