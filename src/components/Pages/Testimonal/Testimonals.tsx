import React from 'react';
import { testimonialData } from './testimonialData';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center text-center px-4 sm:px-16 py-20">
      <h1 className="text-4xl sm:text-5xl font-bold mt-6 text-green-500">
        Our partners <span className="text-zinc-700">say about us</span>
      </h1>

      <div className="mt-12 overflow-hidden relative w-full">
        <motion.div
          className="flex gap-8"
          initial={{ x: '4%' }}  // Start from right
          animate={{ x: '-50%' }}  // Move to left
          transition={{
            x: { repeat: Infinity, repeatType: 'loop', duration: 4, ease: 'linear' },
          }}
        >
          {testimonialData.map(({ id, image, quote, name, role }) => (
            <div key={id} className="bg-[#F2F6FB] p-8 flex-shrink-0 w-72">
              <img
                src={image}
                alt={`Testimonial ${id}`}
                className="w-18 h-18 mx-auto mb-4"
              />
              <p className="text-xl font-light text-gray-700 mb-4">
                "{quote}"
              </p>
              <p className="text-xl font-bold text-zinc-700">{name}</p>
              <p className="text-gray-500 text-lg font-light">{role}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
