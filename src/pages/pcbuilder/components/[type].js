import React from 'react';
import Layout from '../../../components/Layout';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { AiFillStar } from "react-icons/ai"
import { useDispatch } from 'react-redux';
import { setCpu, setMonitor, setMotherBoard, setPsu, setRam, setStorage } from '../../../redux/features/pcbuilder/pcbuilderSlice';


const Components = ({ products }) => {
    const dispatch = useDispatch()
    const router = useRouter();
    const handleSelect = (product)=> {
        switch (product.category) {
            case 'motherboard':
                dispatch(setMotherBoard(product));
                break;
            
            case 'ram':
                dispatch(setRam(product));
                break;
                    
            case 'powerSupply':
                dispatch(setPsu(product));
                break;
                
            case 'monitor':
                dispatch(setMonitor(product));
                break;
                
            case 'storage':
                dispatch(setStorage(product));
                break;
                
            case 'cpu':
                dispatch(setCpu(product));
                break;  
        
            default:
                break;
        }
        router.push("/pcbuilder")
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            {
                products?.map((product) => (
                    <div key={product?._id} className='h-full mb-3 rounded-lg border-t-4 border-t-indigo-500/25 hover:border-t-indigo-500'>
                        <div className="p-3 shadow gap-3 rounded-lg hover:shadow-lg h-auto transition-all ease-in">

                            <div style={{ width: '100%', height: '100%', position: 'relative' }} className=' flex items-center justify-center'>
                                <Image
                                    alt='Mountains'
                                    src={product.image}
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <h2 className='font-bold h-[50px] text-gray-700 overflow-hidden mb-2 font-serif'>{product.name}</h2>
                            <div className="flex gap-2">
                                <div className="bg-pink-200 rounded-lg px-3 py-2 text-[11px]">{product.brand}</div>
                                <div className="bg-green-200 text-green-900 rounded-lg px-3 py-2 text-[11px]">{product.status}</div>
                            </div>
                            <div className='mt-2'><span className='font-bold'>Price: </span>{product.price.toLocaleString("en-US")} Bdt</div>
                            <div>
                                {product.reviews.length}
                                (
                                {
                                    Array(product.rating).fill("").map((_, index) => <AiFillStar className='inline text-orange-300' key={index} />)
                                }
                                )
                            </div>
                            <button onClick={()=> handleSelect(product)} className='bg-green-400 px-6 py-2 mt-2 rounded-lg hover:bg-green-800 hover:text-white'>
                                Select
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Components;

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://pc-builder-hazel.vercel.app/api/products/category/${context.query.type}`);
    const data = await res.json();

    return {
        props: {
            products: data?.data
        }
    }
}



Components.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}