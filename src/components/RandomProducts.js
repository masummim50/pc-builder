import React from 'react';
import ProductCard from './ProductCard';

const RandomProducts = ({products}) => {
    return (
        <div className='mt-6 mb-3'>
        <h2 className="text-gray-700 font-bold underline text-[30px] mb-3">
            Featured Products
        </h2>
        <div className='grid grid-cols-3 gap-4 container mx-auto'>
            {
                products.map((product)=> (
                    <ProductCard className="col-span-1 bg-gray-200 rounded-lg h-full " product={product} key={product._id}/>
                    ))
                }
        </div>
                </div>
    );
};

export default RandomProducts;