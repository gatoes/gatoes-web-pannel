import React from "react";
import { motion } from "framer-motion";
import step1 from '../../../assets/images/step1.png';
import step2 from '../../../assets/images/step2.png';
import step3 from '../../../assets/images/step3.png';

const WorkSteps: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center pb-10 bg-white py-16 mt-2 z-50"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl text-gray-800 mb-8">
        How <span className="text-green-500">Gatoes</span> works?
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        <motion.div
          className="w-80 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white rounded-[15px] overflow-hidden">
            <img
              src={step1}
              alt="Order food"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-lg font-semibold text-[#A1A0A9] mt-2">Step 1</h2>
          <p className="text-[#23212E] text-lg px-10 font-semibold pt-2">Order your favourite food at your home</p>
        </motion.div>

        <motion.div
          className="w-80 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-white rounded-[15px] overflow-hidden">
            <img
              src={step2}
              alt="Choose restaurants"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-lg font-semibold text-[#A1A0A9] mt-2">Step 2</h2>
          <p className="text-[#23212E] text-lg px-10 font-semibold pt-2">Choose from the best restaurants around you</p>
        </motion.div>

        <motion.div
          className="w-80 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="bg-white rounded-[15px] overflow-hidden">
            <img
              src={step3}
              alt="Fast delivery"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-lg font-semibold text-[#A1A0A9] mt-2">Step 3</h2>
          <p className="text-[#23212E] text-lg px-10 font-semibold pt-2">Fast delivery at your doorstep</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WorkSteps;
