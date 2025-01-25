import React from "react";
import { useApiQuery } from "../../../utils/useApi";
import { apiConfig } from "../../../utils/api.config";
import SkeletonLoader from "./SkeletonLoader"; // Import Skeleton Component
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import testimonialImage from "../../../assets/images/testimonialImage.png";

interface Feedback {
  id: number;
  shopName: string;
  ownerName: string;
  feedback: string;
}

interface FeedbackResponse {
  statusCode: number;
  message: string;
  data: Feedback[];
}

const Testimonials: React.FC = () => {
  const { data, isLoading } = useApiQuery<FeedbackResponse, Error>(
    ["getFeedback"],
    apiConfig.getFeedback
  );

  return (
    <div className="bg-white flex flex-col justify-center items-center text-center px-4 sm:px-16 py-20">
     
      <div className="overflow-hidden relative w-full">
        {isLoading ? (
          <SkeletonLoader count={4} /> // Render Skeleton Loader
        ) : (<>
  
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {data?.data?.map(({ id, feedback, shopName, ownerName }: Feedback) => (<>
              <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-green-500">
              Our partners <span className="text-zinc-700">say about us</span>
            </h1>
              <SwiperSlide key={id}>
                <div className="bg-[#F2F6FB] p-8 rounded-lg shadow-md">
                  <img
                    src={testimonialImage}
                    alt={`Testimonial ${id}`}
                    className="w-16 h-16 mx-auto mb-4 rounded-full"
                  />
                  <p className="text-xl font-light text-gray-700 mb-4">
                    "{feedback}"
                  </p>
                  <p className="text-xl font-bold text-zinc-700">{shopName}</p>
                  <p className="text-gray-500 text-lg font-light">{ownerName}</p>
                </div>
              </SwiperSlide>
              </>
            ))}
          </Swiper></>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
