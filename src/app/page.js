import ActionButton from '@/components/ActionButton'
import ContactForm from '@/components/ContactForm';
import FooterPage from '@/components/Footer';
import HappyClients from '@/components/HappyClients';
import HomeFirstComponent from '@/components/HomeFirstComponent';
import HomeSecondComponent from '@/components/HomeSecondComponent';
import Navbar from '@/components/Navbar'
import PriceCalculator from '@/components/PriceCalculator';
import SolarSteps from '@/components/SolarSteps';
import Image from 'next/image'
import React from 'react'
import { FaBolt } from 'react-icons/fa';

const page = () => {
  return (

    <div className='h-screen w-screen flex flex-col relative'>
      <div className='min-h-[70px] max-h-[400px] w-full fixed bg-black z-50 '><Navbar /></div>
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