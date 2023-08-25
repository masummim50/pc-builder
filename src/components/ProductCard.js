import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <Link href={`/product/${product._id}`} className='h-full rounded-lg border-t-4 border-t-pink-500/25 hover:border-t-pink-500'>
            <div className="p-3 shadow gap-3 rounded-lg hover:shadow-lg h-auto transition-all ease-in">

            <div style={{ width: '100%', height: '100%', position: 'relative' }} className=' flex items-center justify-center'>
                <Image
                    alt='Mountains'
                    src={product.image}
                    width={200}
                    height={200}
                    />
            </div>
            <h2 className='font-bold h-[40px]'>{product.name}</h2>
                    </div>
        </Link>
    );
};

export default ProductCard;