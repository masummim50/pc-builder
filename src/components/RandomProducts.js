import React from 'react';
import ProductCard from './ProductCard';

const RandomProducts = ({products}) => {
    return (
        <div className='grid grid-cols-3 gap-4 container mx-auto'>
            {
                products.map((product)=> (
                    <ProductCard className="col-span-1 bg-gray-200 rounded-lg h-full " product={product} key={product._id}/>
                ))
            }
        </div>
    );
};

export default RandomProducts;