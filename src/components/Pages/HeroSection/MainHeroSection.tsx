import React from 'react';
import heroSectionImage from '../../../assets/images/heroSectioniImage.png';
import { motion } from 'framer-motion';
import Motionheader from '../../UI/Motionheader';

const MainHeroSection: React.FC = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-green-50 to-white m-0 p-0 overflow-hidden">
       <Motionheader/>

        <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
          <motion.div
            className="flex flex-col justify-center items-start w-full px-4 md:w-[700px] md:ml-20 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl pt-16 md:pt-20 lg:pt-0 md:text-4xl lg:text-5xl font-semibold text-zinc-800 bg-transparent">
              Your favourite
              <span className="block text-3xl md:text-4xl lg:text-5xl font-semibold text-[#119477]">
                restaurants <span className="text-zinc-800 font-semibold">and takeaways,</span>
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-semibold text-[#119477]">
                delivered to your door
              </span>
            </h2>
          </motion.div>

          <div className="w-full hidden lg:flex md:w-1/2 justify-end relative -mb-40 md:mt-2">
            <img
              src={heroSectionImage}
              alt="Large Image"
              className="rounded-[20px] object-cover h-[670px] w-auto -mr-36 z-10 -translate-y-8"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeroSection;
