

import React, { useMemo } from 'react';
import { testimonialData } from './testimonialData';
import { motion } from 'framer-motion';
import { useApiQuery } from '../../../utils/useApi';
import { apiConfig } from '../../../utils/api.config';
import testimonialImage from '../../../assets/images/testimonialImage.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Loading from '../../UI/Loading';
// Interface for each FAQ item
interface Feedback {
  id: number;
  shopName: string;
  ownerName: string;
  feedback: string;
}
interface FeedbackResponse {
  statusCode: number;
  message: string;
  data: Feedback[]; // Array of FAQ items
}


const Testimonials: React.FC = () => {
  const { data, isLoading, error } = useApiQuery<FeedbackResponse, Error>(
    ['getFeedback'], // Query key
    apiConfig.getFeedback   // API endpoint (relative to the base URL)
  );

  if (isLoading) return <Loading/>; // Show loading state
  // if (error instanceof Error) return <p>Error: {error.message}</p>; // Handle error

  return (
    <div className="bg-white flex flex-col justify-center items-center text-center px-4 sm:px-16 py-20">
      <h1 className="text-4xl sm:text-5xl font-bold mt-6 text-green-500">
        Our partners <span className="text-zinc-700">say about us</span>
      </h1>

      <div className="mt-12 overflow-hidden relative w-full ">

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 }, // Mobile
            768: { slidesPerView: 4 }, // Tablet
            1024: { slidesPerView: 3 }, // Desktop
          }}
        >

          {data?.data?.map(({ id, feedback, shopName, ownerName }) => (
            <SwiperSlide key={id}>
              <div className="bg-[#F2F6FB] p-8 flex-shrink-0 ">
                <img
                  src={testimonialImage}
                  alt={`Testimonial ${id}`}
                  className="w-18 h-18 mx-auto mb-4"
                />
                <p className="text-xl font-light text-gray-700 mb-4">
                  "{feedback}"
                </p>
                <p className="text-xl font-bold text-zinc-700">{shopName}</p>
                <p className="text-gray-500 text-lg font-light">{ownerName}</p>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
