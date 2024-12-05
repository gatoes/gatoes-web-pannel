import React from 'react';
import Logo from '../../../assets/images/Logo.png';
import heroSectionImage from '../../../assets/images/heroSectioniImage.png';
import { motion } from 'framer-motion';

const MainHeroSection: React.FC = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-green-50 to-white m-0 p-0 overflow-hidden">
    <motion.div
  className=""
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>
  <header className="text-white px-4 sm:px-10 lg:px-20 py-12 flex justify-between items-center">
    {/* Logo Section */}
    <a href="/" className="mb-4 sm:mb-0">
      <img src={Logo} alt="Logo" className="h-8 sm:h-10" />
    </a>

    {/* Buttons Section */}
    <div className="flex lg:space-x-6 space-x-[-10px]">
      <a href="https://devmerchant.trestplus.com/dashboard">
        <button className="font-sans font-semibold text-[#5E5C66] px-4 sm:px-6 py-2 sm:py-3 rounded-[15px] hover:bg-[#06C17D] text-sm sm:text-md hover:text-white transition duration-300">
          Partner With Us
        </button>
      </a>
      <a href="/ride">
        <button className="font-sans text-[#5E5C66] font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-[15px] hover:bg-[#06C17D] text-sm sm:text-md hover:text-white transition duration-300">
          Ride With Us
        </button>
      </a>
    </div>
  </header>
</motion.div>



        <div className="flex flex-col md:flex-row justify-between items-center relative">
        <motion.div
  className="flex flex-col justify-center items-center sm:items-start w-full px-4 sm:px-8 lg:px-28 mb-8"
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl pt-10 sm:pt-16 lg:pt-0 font-semibold text-zinc-800 bg-transparent text-center sm:text-left">
    Your favourite
    <span className="block sm:inline text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#119477] sm:mt-4 ml-0 sm:ml-4">
      restaurants <span className="text-zinc-800 font-semibold">and takeaways,</span>
    </span>
    <span className="block sm:inline text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#119477]  sm:mt-4 ml-0 sm:ml-4">
      delivered to your door
    </span>
  </h2>
</motion.div>




          <div className="w-full hidden lg:flex md:w-1/2 flex justify-end relative -mb-40">
            <img
              src={heroSectionImage}
              alt="Large Image"
              className="rounded-[15px] object-cover h-[670px] w-auto -mr-36 z-10 -translate-y-8"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeroSection;
