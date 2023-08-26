import React from 'react';
import ProductCard from './ProductCard';
import { useRouter } from 'next/router';

const ProductsCardContainer = ({products, headline}) => {
    const router = useRouter();
    console.log("the page being rendered: ", router.query)
    console.log("while building products: ", products?.length)
    return (
        <div className='mt-6 mb-3'>
        <h2 className="text-gray-700 font-bold underline text-[30px] mb-3">
            {headline && headline.toUpperCase() }
            {(!headline && router.query.category) && router.query.category.toUpperCase()}
        </h2>
        <div className='grid grid-cols-3 gap-4 container mx-auto'>
            {
                products?.map((product)=> (
                    <ProductCard className="col-span-1 bg-gray-200 rounded-lg h-full " product={product} key={product._id}/>
                    ))
                }
        </div>
                </div>
    );
};

export default ProductsCardContainer;