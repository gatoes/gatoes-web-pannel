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
          <header className="text-white px-52 p-6 flex justify-between items-center">
            <a href="/"><img src={Logo} alt="Logo" className="h-8" /></a>

            <div className="flex space-x-6">
              <a href="https://devmerchant.trestplus.com/dashboard"><button className="font-sans font-semibold text-[#5E5C66] px-6 py-3 rounded-[15px] hover:bg-[#06C17D] text-md hover:text-white transition duration-300">
                Partner With Us
              </button>
              </a>
              <a href="/ride"><button className="font-sans text-[#5E5C66] font-semibold px-6 py-3 rounded-[15px] z-100 hover:bg-[#06C17D] text-md hover:text-white transition duration-300">
                Ride With Us
              </button></a>

            </div>
          </header>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center relative">
          <motion.div
            className="flex flex-col justify-center items-start w-full md:w-[900px] md:ml-28 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl pt-20 lg:pt-0 md:text-5xl font-semibold text-zinc-800 bg-transparent">
              Your favourite
              <span className="text-4xl md:text-5xl font-semibold text-[#119477] mt-4 ml-4">
                restaurants <span className="text-zinc-800 font-semibold">and takeaways,</span>
              </span>
              <span className="text-4xl ml-4 md:text-5xl font-semibold text-[#119477] mt-4">
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
