import Image from 'next/image'
import React from 'react'
import ActionButton from './ActionButton'
import { FaBolt } from 'react-icons/fa'

const HomeSecondComponent = () => {
  return (
    <div className='flex'>
        <div className='w-1/2 h-[calc(100vh-70px)] flex items-center mt-3 relative px-20'>
          <Image
            style={{ width: "50vw", height: "80vh", objectFit: 'fill' }}
            className='rounded-xl'
            src="/windmill.svg"
            alt="My SVG"
            width="350"
            height="350" />
        </div>

        <div className='w-1/2 h-[calc(100vh-70px)]  flex flex-col justify-center align-middle gap-12 px-20'>
          <h1 className='text-6xl font-semibold '>Switch To Green Energy Was Never Been Easier</h1>
          <p className='italic text-2xl font-medium text-[#1addba]'>Switch To Green</p>
          <div className='flex justify-start gap-5'>
            <ActionButton text="Try Now"></ActionButton>
          </div>
        </div>
      </div>
  )
}

export default HomeSecondComponent