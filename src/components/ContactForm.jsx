"use client";

import React, { useRef, useState } from 'react'



const ContactForm = () => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);
    }

    return (
        <div className='w-screen h-200vh px-20 flex flex-col items-center gap-10'>
            <h1 className='text-6xl font-semibold max-w-[60vw] m-auto text-center'>
                Contact Us
            </h1>
            {/* CONTAINER FORM */}
            <div className='h-full w-[500px]'>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-10 justify-center items-center'>
                    <input type='text' placeholder='Name' className='w-full p-1 text-xl text-[#1addba] bg-transparent border-b-2 border-b-[#1addba] outline-none' name='name'></input>
                    <input type='text' placeholder='Phone Number' className='w-full p-1 text-xl text-[#1addba] bg-transparent border-b-2 border-b-[#1addba] outline-none' name='phoneNumber'></input>
                    <button className=' w-[150px] h-[50px] font-semibold text-[#1addba] border-2 border-[#1addba] rounded-lg  p-2 hover:bg-[#1addba] hover:text-white '   type='submit'>Submit</button>
                    <div>
                    {success && <span className='text-green-600 font-semibold'>Your message has been sent successfully!</span>}
                    {error && <span className='text-red-600 font-semibold '>Something went wrong!</span>}
                    </div>
                </form>
            </div>
            <div className='h-[1px] w-screen mt-5 bg-white'></div>



        </div>
    )
}

export default ContactForm