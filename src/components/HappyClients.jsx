"use client"

import Image from 'next/image';
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const reviews = [
    {
        id: 1,
        name: 'Rahul Singh',
        review: 'Great Work! Very Supportive and Helpful. I highly recommend it.',
        images: '/customer-reviews-images/img1.jpg'
    },
    {
        id: 2,
        name: 'Manish Sharma',
        review: 'I had a great experience with this company. Thank you Ananta Power Tech. I save money every month.',
        images: '/customer-reviews-images/img2.jpg'
    },
    {
        id: 3,
        name: 'Vivek Rai',
        review: 'Very Helpul and Affordable Pricing.',
        images: '/customer-reviews-images/img3.jpg'
    },
    {
        id: 4,
        name: 'Raj Khurana',
        review: 'Very Good Work and very nice people. Completed teh project before time.',
        images: '/customer-reviews-images/img4.jpg'
    },
    {
        id: 5,
        name: 'Mohit Singh',
        review: 'Best Solar Company I know of',
        images: '/customer-reviews-images/img5.jpg'
    },
    
];


const HappyClients = () => {
    return (
        <div className='w-screen h-200vh px-5 md:px-20 pb-20 flex flex-col items-center gap-10'>
            <h1 className='text-2xl font-normal'>Our Happy Clients</h1>
            <h1 className='text-3xl md:text-6xl font-semibold md:max-w-[60vw] m-auto text-center'>
                Here&apos;s what our <span className="text-[#1addba]">satisfied clients</span> are saying.
            </h1>
            {/* Swiper Container */}
            <div className='hidden md:inline w-full'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3} // Number of slides visible at once
                    navigation
                    scrollbar={{ draggable: true }}
                    pagination={{ clickable: true }}
                >
                    {reviews.map((client) => (
                        <SwiperSlide key={client.id}>
                            <ClientCard client={client} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* Swiper Container Small Screen */}
            <div className='inline md:hidden w-3/4'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    // spaceBetween={40}
                    slidesPerView={1} // Number of slides visible at once
                    navigation
                    scrollbar={{ draggable: true }}
                    pagination={{ clickable: true }}
                >
                    {reviews.map((client) => (
                        <SwiperSlide key={client.id}>
                            <ClientCard client={client} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
      <div className='h-[1px] w-screen mt-5 bg-white'></div>

        </div>
    );
};

const ClientCard = ({ client }) => {
    return (
        <div className='h-[400px] w-80 bg-[#1f1e1f] flex flex-col rounded-lg gap-5 p-5'>
            <Image src={client.images} alt='img' width={300} height={200} className='z-50 w-[320px] h-[200px]  object-fill rounded-lg' />
            <h2 className='font-semibold pt-4'>{client.name}</h2>
            <p className='italic'>{client.review}</p>
        </div>
    )
}

export default HappyClients;