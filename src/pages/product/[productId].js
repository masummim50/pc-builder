import React from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import ProductsCardContainer from '../../components/ProductsCardContainer';
import Image from 'next/image';
import ReviewCard from '../../components/ReviewCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import 'swiper/css';
const ProductDetails = ({ product }) => {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>

      <div className='flex'>
        <div className="p-4">
          <Image src={product.image} alt={product.name} width={300} height={400} />
        </div>
        <div className="mt-3">
          <h2 className='font-serif text-[15px] md:text-[35px] text-gray-600'>{product.name}</h2>
          <span className='my-3 inline-block'>Price: <span className="font-bold">{product.price.toLocaleString()} Bdt</span> </span>
          <div className='text-[11px] '>Brand: <div className="bg-pink-200 px-2 py-1 inline-block rounded-lg">{product.brand}</div></div>
          <div className='text-[11px] mt-2'>Status: <div className="bg-green-200 px-2 py-1 inline-block rounded-lg">{product.status}</div></div>
          <div className='text-[15px] font-bold text-gray-800 mb-2 mt-5'>
            Key Features
          </div>
          {
            product.key_features.map((feature, index) => (
              <div key={index} className='mb-2'>
                <span className=" bg-gray-200 px-2 py-1 rounded-md">

                  {feature}
                </span>
              </div>
            ))
          }

        </div>
      </div>
      <h2 className='mt-4 mb-3 font-bold text-[18px] bg-red-700 text-white inline-block px-4 py-2 rounded-lg'>Description</h2>

      <p>{product.description}</p>
      <h2 className='mt-4 mb-3 font-bold text-[18px] bg-red-700 text-white inline-block px-4 py-2 rounded-lg'>Reviews</h2>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 800, disableOnInteraction: false }}
        >

        {
          product.reviews.map((review, index) => (
            <SwiperSlide  key={index}> 
              <ReviewCard review={review}/>
            </SwiperSlide>
          ))
        }

      </Swiper>

    </div>


  );
};

export default ProductDetails;


export const getStaticPaths = async () => {
  
  const res = await fetch("http://localhost:5000/api/products");
  const products = await res.json();

  const paths = products.data.map(product => ({
    params: { productId: product._id }
  }));
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`http://localhost:5000/api/product/${params.productId}`);
    console.log("before error")
    const data = await res.json();
    console.log("after error")
    return {
      props: {
        product: data.data,
      },
    }

  } catch (error) {
    console.log("error in props: ", error);
    return { notFound: true }
  }
}


ProductDetails.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}