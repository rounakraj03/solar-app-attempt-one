"use client";

import Image from 'next/image'
import React from 'react'
import { FaBolt } from 'react-icons/fa';
import ActionButton from './ActionButton';
import { scrollToSection } from '@/functions/ScrollToSection';

const HomeFirstComponent = () => {
    return (
        <div className='md:flex  mt-[100px] md:mt-20 pt-10 ' id='home'>
            <div className='md:hidden '>
                <Image
                    style={{ width: "300px", height: "200px", objectFit: 'fill' }}
                    className=' rounded-xl m-auto  mb-10'
                    src="/worker.jpg"
                    alt="My SVG"
                    width="350"
                    height="350" />
            </div>
            <div className=' w-full md:w-1/2 flex flex-col justify-center  gap-12 px-10 md:px-20'>
                <h1 className='text-4xl md:text-6xl font-semibold '>Switch To Green With Innovative Solar Panel</h1>
                <p className='italic text-2xl font-medium text-gray-200'>Green Energy. Clean Energy.</p>
                <div className='flex justify-start gap-5'>
                    <ActionButton text="Get a Quote" onclick={() => { scrollToSection("#contact") }}></ActionButton>
                    <ActionButton text="Call us Now" onclick={() => {
                        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                            window.location.href = 'tel:9873073373';
                        } else {
                            scrollToSection("#footer");
                            console.log("No phone so footer")
                        }
                    }}></ActionButton>
                </div>
                <div className='flex justify-start gap-5'>

                    <div className='flex flex-col items-center'>
                        <div className='flex text-4xl'>
                            <span className='font-semibold'>10</span>
                            <span className='text-[#1addba] font-bold'>+</span>
                        </div>
                        <div className='text-xl font-medium'>Years</div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='flex text-4xl'>
                            <span className='font-semibold'>954</span>
                            <span className='text-[#1addba] font-bold'>+</span>
                        </div>
                        <div className='text-xl font-medium'>Projects</div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='flex text-4xl'>
                            <span className='font-semibold'>500</span>
                            <span className='text-[#1addba] font-bold'>+</span>
                        </div>
                        <div className='text-xl font-medium'>Clients</div>
                    </div>

                </div>
            </div>

            <div className='hidden w-1/2 h-[calc(100vh-70px)] md:flex items-center mt-3 relative'>
                <Image
                    style={{ width: "40vw", height: "80vh", objectFit: 'cover' }}
                    className='rounded-xl'
                    src="/worker.jpg"
                    alt="My SVG"
                    width="350"
                    height="350" />
                <div className='flex flex-col items-center bg-[#babbbf72] absolute bottom-20 left-0 p-2 rounded-r-md'>
                    <div className='flex flex-col text-xl'>
                        <span className='font-semibold'>New Solar Panels</span>
                        <div className='flex items-center'>
                            <span className='text-[#1addba]  text-lg'>+70% Efficiency</span>
                            <FaBolt className='text-[#1addba] text-2xl'></FaBolt>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFirstComponent