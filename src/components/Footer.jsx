import Image from 'next/image'
import birdLogo from '../../public/bird_logo.svg'
import React from 'react'

const FooterPage = () => {
    return (
        <div className='w-full   pb-10 flex flex-col items-center  '>
            <div className='flex w-full'>
                <div className='w-1/3 flex flex-col bg-yellow-200'>
                    <Image
                        // className='bg-blue-500'
                        src={birdLogo}
                        alt="My SVG"
                        width={100}
                        height={100}
                        priority
                    />
                    <h1 className='-m-4 font-bold text-xl text-white'>ANANTA POWER TECH</h1>
                </div>
                <div className='w-1/3 flex flex-col gap-5 justify-center bg-red-400'>
                    <h3 className='-m-4 font-bold text-xl text-white'>Useful Links</h3>
                    <div className='flex gap-5'>
                        <p>Home</p>
                        <p>Calculate EMI</p>
                    </div>
                    <div className='flex gap-5'>
                        <p>Contact</p>
                        <p>About</p>
                    </div>
                </div>
                <div className='w-1/3 flex flex-col bg-green-300'>
                    <Image
                        // className='bg-blue-500'
                        src={birdLogo}
                        alt="My SVG"
                        width={100}
                        height={100}
                        priority
                    />
                    <h1 className='-m-4 font-bold text-xl text-white'>ANANTA POWER TECH</h1>
                </div>
            </div>

        </div>
    )
}



export default FooterPage