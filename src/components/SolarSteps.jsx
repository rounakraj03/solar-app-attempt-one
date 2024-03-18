"use client"
import React, { useRef } from 'react'
import { motion, useInView, useScroll } from 'framer-motion';

const SolarSteps = ({id}) => {

    const experienceRef = useRef();
    const isExperienceInView = useInView(experienceRef);


    const steps = [
        {
          name: "Site Survey",
          image: "/worker.jpg",
          desc: "Check if the site is good for solar panels by looking at the roof, shade, and local rules."
        },
        {
          name: "System Design",
          image: "/worker.jpg",
          desc: "Plan how much energy is needed, choose the right solar panels and equipment, and design the electrical setup."
        },
        {
          name: "Installation",
          image: "/worker.jpg",
          desc: "Put up the racking, install the solar panels, connect them to the inverters and wiring, and link to the main electricity or backup."
        },
        {
          name: "Maintenance",
          image: "/worker.jpg",
          desc: "Set up a system to watch how it's working, make a plan to clean, check, and fix anything that needs it."
        }
      ]



    return (
        <div className='w-screen h-[200vh] px-20 '>
            <h1 className='text-6xl font-semibold max-w-[60vw] m-auto  mb-10 text-center' id={id}>
                How we works
            </h1>
            <div className='md:px-10'>
                {/* EXPERIENCE CONTAINER */}
                <div className='w-full h-full flex-col gap-12 justify-center  items-center pb-48' ref={experienceRef}>
                    {/* EXPERIENCE TITLE */}
                    <motion.h1
                        initial={{ x: "-300px" }}
                        animate={isExperienceInView ? { x: 0 } : {}}
                        transition={{ delay: 0.5 }}
                        className='font-bold text-2xl my-20' >EXPERIENCE</motion.h1>
                    {/* EXPEIRENCE LIST */}
                    <motion.div
                        // initial={{ x: "-300px" }}
                        // animate={isExperienceInView ? { x: 0 } : {}}
                        // transition={{ delay: 2 }}
                        className='text-black'>
                        {/* EXPERIENCE LIST ITEM */}

                        {/* 1 ROW */}
                        <div className='flex justify-between h-48 '>
                            {/* LEFT */}
                            <div className='w-1/3'>
                                {/* JOB TITLE */}
                                <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Site Survey</div>
                                {/* JOB DATE */}
                                <div className='p-3 text-white text-sm font-semibold'>{steps[0]['desc']}</div>
                            </div>
                            {/* CENTER */}
                            <div className='w-1/6 flex justify-center'>
                                {/* LINE */}
                                <div className='w-1 h-full bg-gray-600 rounded relative'>
                                    {/* LINE CIRCLE */}
                                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                                </div>
                            </div>
                            {/* RIGHT */}
                            <div className='w-1/3'></div>
                        </div>

                        {/* 2 ROW */}
                        <div className='flex justify-between h-48 '>
                            {/* LEFT */}
                            <div className='w-1/3'></div>
                            {/* CENTER */}
                            <div className='w-1/6 flex justify-center '>
                                {/* LINE */}
                                <div className='w-1 h-full bg-gray-600 rounded relative'>
                                    {/* LINE CIRCLE */}
                                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                                </div>
                            </div>
                            {/* RIGHT */}
                            <div className='w-1/3'>
                                {/* JOB TITLE */}
                                <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>System Design</div>
                                {/* JOB DATE */}
                                <div className='p-3 text-white text-sm font-semibold'>{steps[1]["desc"]}</div>
                            </div>
                        </div>

                        {/* 3 ROW */}
                        <div className='flex justify-between h-48 '>
                            {/* LEFT */}
                            <div className='w-1/3 '>
                                {/* JOB TITLE */}
                                <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Installation</div>
                                {/* JOB DATE */}
                                <div className='p-3 text-white text-sm font-semibold'>{steps[2]["desc"]}</div>
                            </div>
                            {/* CENTER */}
                            <div className='w-1/6flex justify-center '>
                                {/* LINE */}
                                <div className='w-1 h-full bg-gray-600 rounded relative'>
                                    {/* LINE CIRCLE */}
                                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                                </div>
                            </div>
                            {/* RIGHT */}
                            <div className='w-1/3'></div>
                        </div>


                        {/* 4 ROW */}
                        <div className='flex justify-between h-48 '>
                            {/* LEFT */}
                            <div className='w-1/3'></div>
                            {/* CENTER */}
                            <div className='w-1/6 flex justify-center '>
                                {/* LINE */}
                                <div className='w-1 h-full bg-gray-600 rounded relative'>
                                    {/* LINE CIRCLE */}
                                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                                </div>
                            </div>
                            {/* RIGHT */}
                            <div className='w-1/3'>
                                {/* JOB TITLE */}
                                <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Maintainence</div>
                                {/* JOB DATE */}
                                <div className='p-3 text-white text-sm font-semibold'>{steps[3]["desc"]}</div>
                            </div>
                        </div>


                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default SolarSteps