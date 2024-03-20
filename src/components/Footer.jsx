"use client"

import Image from 'next/image'
import birdLogo from '../../public/bird_logo.svg'
import React from 'react'
import { MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { scrollToSection } from '@/functions/ScrollToSection';

const FooterPage = ({ id }) => {

    return (
        <div className='w-full  flex flex-col items-center justify-center' id={id}>
            <div className='flex flex-col md:flex-row w-full'>
                <div className='w-full md:w-1/3 h-[200px] flex flex-col items-center'>
                    <Image
                        className='cursor-pointer'
                        onClick={() => scrollToSection("#home")}
                        src={birdLogo}
                        alt="My SVG"
                        width={150}
                        height={150}
                        priority
                    />
                    <h1 className='-m-4 font-bold text-xl text-white cursor-pointer' onClick={() => scrollToSection("#home")}>ANANTA POWER TECH</h1>
                </div>
                <div className='w-full md:w-1/3 h-[200px] flex flex-col gap-10 justify-center items-center '>
                    <h3 className='-m-4 font-bold text-xl text-white'>Useful Links</h3>
                    <div className='flex flex-col items-center gap-5'>
                        <div className='flex gap-5'>
                            <p className='cursor-pointer hover:text-[#1addba]' onClick={() => scrollToSection("#home")} >Home</p>
                            <p className='cursor-pointer hover:text-[#1addba]' onClick={() => scrollToSection("#calculate-emi")}>Calculate-EMI</p>
                        </div>
                        <div className='flex gap-5'>
                            <p className='cursor-pointer hover:text-[#1addba]' onClick={() => scrollToSection("#contact")} >Contact</p>
                            <p className='cursor-pointer hover:text-[#1addba]' onClick={() => scrollToSection("#about")} >About</p>
                        </div>
                    </div>

                </div>
                <div className='w-full md:w-1/3 md:h-[200px] flex flex-col gap-8 md:gap-5 justify-center items-center mb-10 md:mb-0'>
                    <h3 className='-m-4 md:mb-1 font-bold text-xl text-white'>Info</h3>
                    <div className='flex flex-col gap-3'>
                        <p className='cursor-pointer flex gap-5 items-center justify-center hover:text-[#1addba]' onClick={() => {
                                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                                    window.location.href = 'tel:9873073373'; 
                                } else {
                                    scrollToSection("#footer");
                                    console.log("No phone so footer")
                                }
                            }} ><MdCall /> 9873073373</p>
                        <p className='cursor-pointer flex gap-5 items-center justify-center hover:text-[#1addba]'><FaWhatsapp /> <a href="https://wa.me/919873073373?text=Hi%20Ananta%20Power%20Tech" target="_blank" rel="noopener noreferrer">
                            9873073373
                        </a></p>
                        <p className='cursor-pointer flex gap-5 items-center justify-center hover:text-[#1addba]'><CiMail /> <a href="mailto:anantapowertech@gmail.com">
                            anantapowertech@gmail.com
                        </a></p>
                    </div>

                </div>

            </div>

        </div>
    )
}



export default FooterPage