"use client"

import ActionButton from './ActionButton'
import Windmill from './Windmill'
import { scrollToSection } from '@/functions/ScrollToSection'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';

const HomeSecondComponent = () => {

  const titleRef = useRef();
  const isTitleInView = useInView(titleRef);

  return (
    <div className='md:flex mb-10  md:mb-0'>
      {/* <div className='w-1/2 h-[calc(100vh-70px)] flex items-center mt-3 relative px-20'> */}
      <div className='md:w-1/2 md:h-[[calc(100vh-70px)]] flex items-center mt-3 relative px-5 md:px-20 overflow-hidden'>
        <Windmill />
      </div>

      <div className='md:w-1/2 pt-12 md:h-[calc(100vh-60px)]  flex flex-col justify-center align-middle gap-12  px-5 md:px-20 overflow-x-hidden' ref={titleRef}>
        <motion.h1 
        initial={{ x: "200px", opacity: 0 }}
        animate={isTitleInView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className='text-4xl md:text-6xl font-semibold '>Switch To Green Energy Was Never Been Easier</motion.h1>
        <p className='italic text-2xl font-medium text-[#1addba]'>Switch To Green</p>
        <div className='flex justify-start gap-5'>
          <ActionButton text="Try Now" onclick={() => {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
              window.location.href = 'tel:9873073373'; // Replace with your phone number
            } else {
              scrollToSection("#footer");
            }
          }}></ActionButton>
        </div>
      </div>
    </div>
  )
}

export default HomeSecondComponent