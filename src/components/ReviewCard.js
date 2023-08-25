import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
const ReviewCard = ({review}) => {
    return (

            <div  className='flex justify-center items-center h-[100px] bg-gray-500 rounded-lg p-2 mx-1'>
            <div className="bg-white rounded-[50%] p-3 font-bold mr-2">{review.name.slice(0,1).toUpperCase()}</div>
            <div className="flex flex-col">
                <p className="font-bold text-gray-300">{review.name}</p>
                <p className="font-thin text-gray-200">{review.review}</p>
            </div>
            </div>
    );
};

export default ReviewCard;