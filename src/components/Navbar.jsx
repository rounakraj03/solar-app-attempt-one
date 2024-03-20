"use client"

import React, { useState } from 'react'
import birdLogo from '../../public/bird_logo.svg'
import Image from 'next/image'
import Navlink from './Navlink';
import ActionButton from './ActionButton';
import { motion } from 'framer-motion';


const Navbar = () => {


    const [isCollapsed, setIsCollapsed] = useState(false);

    const changeIsCollapsed = () => {
        setIsCollapsed(!isCollapsed);
        console.log(isCollapsed);
    }

    const topVariants = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255,255,255)"
        }
    }

    const centerVariants = {
        closed: {
            opacity: 1
        },
        opened: {
            opacity: 0
        }
    }

    const bottomVariants = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255,255,255)"
        }
    }

    const menuVariants = {
        closed: {
            height: 'auto'
        },
        opened: {
            height: 0
        }
    }

    const handleClick = (route) => {
        const section = document.querySelector(route);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 1000 });
        }
    };


    const routeList = [
        { title: "Home", route: "#home" },
        { title: "Calculate EMI", route: "#calculate-emi" },
        { title: "About", route: "#about" },
        { title: "Contact", route: "#contact" },
    ];
    return (
        <div className='h-full overflow-hidden flex flex-col border-[#292929] border-b-2 rounded-b-lg'>
            <div className='min-h-[70px] mt-5 w-screen max-w-7xl flex items-center justify-between md:justify-evenly  md:m-auto px-2 '>
                <div className='flex items-center gap-0  md:-mx-20'>
                    <Image
                        src={birdLogo}
                        alt="My SVG"
                        width={100}
                        height={100}
                        priority
                    />

                    <h1 className='-m-4  font-bold text-base  md:text-xl text-white'>ANANTA POWER TECH</h1>
                </div>
                {/* MENU BUTTON */}
                <button className='md:hidden w-10 h-8 flex flex-col justify-between relative' onClick={() => changeIsCollapsed()}>
                    <motion.div variants={topVariants} animate={isCollapsed ? "opened" : "closed"} className='w=10 h-1 bg-white rounded origin-left'></motion.div>
                    <motion.div variants={centerVariants} animate={isCollapsed ? "opened" : "closed"} className='w=10 h-1 bg-white rounded'></motion.div>
                    <motion.div variants={bottomVariants} animate={isCollapsed ? "opened" : "closed"} className='w=10 h-1 bg-white rounded origin-left'></motion.div>
                </button>

                <div className='  px-20 hidden md:inline '>
                    {routeList.map((item, index) => (
                        <Navlink key={index} name={item.title} route={item.route} closeMenu={() => {}}></Navlink>
                    ))}
                </div>
                <div className='hidden md:inline'>
                    <ActionButton text="Call Now" onclick={() => {handleClick("#footer")}}></ActionButton>
                </div>
            </div>
            {isCollapsed && (
                <motion.div
                    variants={menuVariants} animate={!isCollapsed ? "opened" : "closed"}
                >
                    <div className='w-full flex flex-col gap-5 items-start py-5 px-1'>
                        {routeList.map((item, index) => (
                            <Navlink key={index} name={item.title} route={item.route} closeMenu={changeIsCollapsed}></Navlink>
                        ))}
                        <div className='w-[100px] h-[50px] mx-5'>
                            <ActionButton text="Call Now"></ActionButton>
                        </div>
                    </div>
                </motion.div>
            )}
            {isCollapsed && (
                <div className='max-h-full'></div>
            )}
        </div>
    )
}

export default Navbar