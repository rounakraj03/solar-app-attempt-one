import ActionButton from '@/components/ActionButton'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import { FaBolt } from 'react-icons/fa';

const page = () => {
  return (
    <div className='h-screen w-screen bg-gradient-conic  before:dark:to-blue-700 flex flex-col'>
      <div className='flex'>
      <div className='w-1/2 h-[calc(100vh-70px)]  flex flex-col justify-center align-middle gap-12 px-20'>
        <h1 className='text-6xl font-semibold '>Switch To Green With Innovative Solar Panel</h1>
        <p className='italic text-2xl font-medium text-gray-200'>Green Energy. Clean Energy.</p>
        <div className='flex justify-start gap-5'>
          <ActionButton text="Get a Quote"></ActionButton>
          <ActionButton text="Call us Now"></ActionButton>
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

      <div className='w-1/2 h-[calc(100vh-70px)] flex items-center mt-3 relative'>
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

      {/* SECOND CONTAINER */}

      <div className='flex'>
      

      <div className='w-1/2 h-[calc(100vh-70px)] flex items-center mt-3 relative'>
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

      <div className='w-1/2 h-[calc(100vh-70px)]  flex flex-col justify-center align-middle gap-12 px-20'>
        <h1 className='text-6xl font-semibold '>Switch To Green With Innovative Solar Panel</h1>
        <p className='italic text-2xl font-medium text-gray-200'>Green Energy. Clean Energy.</p>
        <div className='flex justify-start gap-5'>
          <ActionButton text="Get a Quote"></ActionButton>
          <ActionButton text="Call us Now"></ActionButton>
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



      </div>




    </div>
  )

}

export default page