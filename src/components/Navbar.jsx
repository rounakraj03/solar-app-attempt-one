import React from 'react'
import birdLogo from '../../public/bird_logo.svg'
import Image from 'next/image'
import Navlink from './Navlink';

const Navbar = () => {


    const routeList = [
        {title: "Home", route: "/"},
        {title: "Contact", route: "/contact"},
        {title: "About us", route: "/about-us"},
        {title: "Privacy policy", route: "/privacy-policy"},
    ];

    return (
        <div className='h-[70px] mt-5 w-screen max-w-7xl flex items-center justify-evenly m-auto'>
            <div className='flex items-center gap-0 -mx-20'>
            <Image 
                // className='bg-blue-500'
                src={birdLogo}
                alt="My SVG"
                width={100}
                height={100}
                priority
            />
            <h1  className='-m-4 font-bold text-xl text-white'>ANANTA SOLAR</h1>
            </div>
            <div className='  px-20  '>
                {routeList.map((item, index) => (
                    <Navlink  key={index} name={item.title} route={item.route}></Navlink>
                ))}
            </div>
            <div className='ring ring-2 ring-[#1addba] p-4  font-bold hover:bg-[#1addba] hover:text-black cursor-pointer'>
                Call Now
            </div>
            
        </div>
    )
}

export default Navbar