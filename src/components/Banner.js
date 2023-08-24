import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import React from 'react';
import Image from 'next/image';

const Banner = () => {
    return (

        <div className="grid grid-cols-12 gap-1">
          <div className="hidden md:block md:col-span-4">

          <Swiper
      slidesPerView={1}
      loop={true}
      className='rounded-lg'
      autoplay={1}

    >
      <SwiperSlide className=' bg-red-200 text-center'>
        <div className="bg-white bg-[url('../assets/images/g1.webp')] h-[300px] bg-center bg-cover">
        </div>
      </SwiperSlide>
      <SwiperSlide className=' bg-red-200 text-center'>
        <div className="bg-white bg-[url('../assets/images/g2.webp')] h-[300px] bg-center bg-cover">
        </div>
      </SwiperSlide>
      <SwiperSlide className=' bg-red-200 text-center'>
        <div className="bg-white bg-[url('../assets/images/g3.webp')] h-[300px] bg-center bg-cover">
        </div>
      </SwiperSlide>
    </Swiper>

          </div>
          <div className="col-span-12 md:col-span-8">
            
          <Swiper
      slidesPerView={1}
      loop={true}
      className='rounded-md'
      autoplay={1}

    >
      <SwiperSlide className=' bg-red-200 text-center'>
        <div className="bg-white bg-[url('../assets/images/m1.jpg')] h-[300px] bg-center bg-cover">
        </div>
      </SwiperSlide>
      <SwiperSlide className=' bg-red-200 text-center'>
        <div className="bg-white bg-[url('../assets/images/m2.jpg')] h-[300px] bg-center bg-cover">
        </div>
      </SwiperSlide>
      <SwiperSlide className=' bg-red-200 text-center'>
        <div className="bg-white bg-[url('../assets/images/m3.jpg')] h-[300px] bg-center bg-cover">
        </div>
      </SwiperSlide>
    </Swiper>
          </div>
        </div>
    );
};

export default Banner;

