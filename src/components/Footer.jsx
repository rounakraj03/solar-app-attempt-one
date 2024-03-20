"use client"

import Image from 'next/image'
import birdLogo from '../../public/bird_logo.svg'
import React from 'react'
import { MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const FooterPage = ({id}) => {
    
    const handleClick = (route) => {
        const section = document.querySelector(route);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 1000 });
        }
    };

    return (
        <div className='w-full  flex flex-col items-center justify-center' id={id}>
            <div className='flex flex-col md:flex-row w-full'>
                <div className='w-full md:w-1/3 h-[200px] flex flex-col items-center'>
                    <Image
                        // className='bg-blue-500'
                        src={birdLogo}
                        alt="My SVG"
                        width={150}
                        height={150}
                        priority
                    />
                    <h1 className='-m-4 font-bold text-xl text-white'>ANANTA POWER TECH</h1>
                </div>
                <div className='w-full md:w-1/3 h-[200px] flex flex-col gap-10 justify-center items-center '>
                    <h3 className='-m-4 font-bold text-xl text-white'>Useful Links</h3>
                    <div className='flex flex-col items-center gap-5'>
                        <div className='flex gap-5'>
                            <p className='cursor-pointer' onClick={() => handleClick("#home")} >Home</p>
                            <p className='cursor-pointer'  onClick={() => handleClick("#calculate-emi")}>Calculate-EMI</p>
                        </div>
                        <div className='flex gap-5'>
                            <p className='cursor-pointer' onClick={() => handleClick("#contact")} >Contact</p>
                            <p className='cursor-pointer' onClick={() => handleClick("#about")} >About</p>
                        </div>
                    </div>

                </div>
                <div className='w-full md:w-1/3 md:h-[200px] flex flex-col gap-8 md:gap-5 justify-center items-center mb-10 md:mb-0'>
                    <h3 className='-m-4 font-bold text-xl text-white'>Info</h3>
                    <div className='flex flex-col gap-3'>
                        <p className='cursor-pointer flex gap-5 items-center justify-center'><MdCall /> 9873073373</p>
                        <p className='cursor-pointer flex gap-5 items-center justify-center'><FaWhatsapp /> 9873073373</p>
                        <p className='cursor-pointer flex gap-5 items-center justify-center'><CiMail /> anantapowertech@gmail.com</p>
                    </div>

                </div>

            </div>

        </div>
    )
}



export default FooterPage