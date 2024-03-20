"use client";

import React, { useRef, useState } from 'react'



const ContactForm = ({ id }) => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const form = useRef();

    const submitFormData = async (message) => {
        const response = await fetch('https://bksw2g62q6.execute-api.ap-south-1.amazonaws.com/telegramApiForAll', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "botToken": "5653079724:AAFVaLKHygXXR22DzReWxu2KIRg6bbnCn7s",
                "chatId": "1772754206",
                "message": `ANANTA POWER TECH NEW QUERY  \n  Name: ${message.name} \n   phone: ${message.phoneNumber} \n `
            })
        });
    
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        else {
            const data = await response.json();
            return data;
        }
    }
    
    const sendEmail = async (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        const formData = new FormData(form.current);
        const message = {
            name: formData.get('name'),
            phoneNumber: formData.get('phoneNumber')
        }
        try {
            const result = await submitFormData(message);
            console.log("result -> ", result);
            if (result == "Message sent successfully!") {
                setSuccess(result);
            }
            else {
                setError(true);
            }
        } catch (error) {
            setError(true);
        }
    }

    return (
        <div className='w-screen h-200vh px-20 flex flex-col items-center gap-10' id={id}>
            <h1 className=' text-4xl md:text-6xl font-semibold max-w-[60vw] m-auto text-center'>
                Contact Us
            </h1>
            {/* CONTAINER FORM */}
            <div className='h-full w-full md:w-[500px] md:px-[10px]'>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-10 justify-center items-center'>
                    <input type='text' placeholder='Name' className='w-full p-1 text-xl text-[#1addba] bg-transparent border-b-2 border-b-[#1addba] outline-none' name='name'></input>
                    <input type='text' placeholder='Phone Number' className='w-full p-1 text-xl text-[#1addba] bg-transparent border-b-2 border-b-[#1addba] outline-none' name='phoneNumber'></input>
                    <button className=' w-[150px] h-[50px] font-semibold text-[#1addba] border-2 border-[#1addba] rounded-lg  p-2 hover:bg-[#1addba] hover:text-white ' type='submit'>Submit</button>
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