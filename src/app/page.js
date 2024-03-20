import ActionButton from '@/components/ActionButton'
import ContactForm from '@/components/ContactForm';
import FooterPage from '@/components/Footer';
import HappyClients from '@/components/HappyClients';
import HomeFirstComponent from '@/components/HomeFirstComponent';
import HomeSecondComponent from '@/components/HomeSecondComponent';
import Navbar from '@/components/Navbar'
import PriceCalculator from '@/components/PriceCalculator';
import SolarSteps from '@/components/SolarSteps';
import React from 'react'
import { FaWhatsappSquare, FaWhatsapp } from "react-icons/fa";

const page = () => {
  return (
    <div className='h-screen w-screen flex flex-col relative'>
      <div className='min-h-[70px] max-h-[400px] w-full fixed bg-black z-50 '><Navbar /></div>
      <div className='h-10 w-10 bottom-10 right-3 fixed z-50 rounded-full bg-[#25d366] p-1.5'>
        <a href="https://wa.me/919873073373?text=Hi%20Ananta%20Power%20Tech" target="_blank" rel="noopener noreferrer"> <FaWhatsapp className='object-fill rounded-full h-full w-full text-white' /></a>
      </div>
      <HomeFirstComponent></HomeFirstComponent>

      {/* SECOND CONTAINER */}
      <div className='md-5 md:mt-0'></div>
      <HomeSecondComponent></HomeSecondComponent>

      {/* THIRD CONTAINER */}
      <PriceCalculator id="calculate-emi"></PriceCalculator>

      <SolarSteps id="about"></SolarSteps>

      {/* FOURTH CONTAINER */}
      <HappyClients></HappyClients>

      {/* FIFTH CONTAINER */}
      <ContactForm id="contact"></ContactForm>

      {/* SIXTH CONTAINER */}
      <FooterPage id="footer"></FooterPage>
    </div>
  )

}

export default page