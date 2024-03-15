import React from 'react'

const reviews = [
    {
        id: 1,
        name: 'John Doe',
        review: 'This is an amazing product! I highly recommend it.',
        images: ''
    },
    {
        id: 2,
        name: 'Jane Smith',
        review: 'I had a great experience with this company. The service was excellent.',
        images: ''
    },
    {
        id: 3,
        name: 'Bob Johnson',
        review: 'I love using this product. It has made my life so much easier.',
        images: ''
    },
];



const HappyClients = () => {
    return (
        <div className='w-screen h-screen px-20 flex flex-col items-center gap-10' >
            <h1 className='text-2xl font-normal '>Our Happy Clients</h1>
            <h1 className='text-6xl font-semibold max-w-[60vw] m-auto text-center'>Here's what our <span className="text-[#1addba]">satisfied clients</span> are saying.</h1>
            <div className='h-[calc(100vh-70px)]  flex flex-col justify-start items-center gap-20 py-5'>
            </div>
        </div>
    )
}

export default HappyClients