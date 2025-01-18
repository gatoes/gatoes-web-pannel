import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {  ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useApiQuery } from "../../../utils/useApi";
import { apiConfig } from "../../../utils/api.config";
import Loading from "../../UI/Loading";

interface FaqData {
  id: string;
  question: string;
  answer: string;
}

const Faqs: React.FC = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { data, isLoading, isError, error } = useApiQuery<{ data: FaqData[] }, Error>(
    ["getFaqs"], // queryKey
    apiConfig.getFaqs,
  );
   
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading FAQs: {error?.message}</div>;
  }
  if (!data || !data.data) {
    return <div>No FAQs available</div>;
  }


  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  if (isLoading) {
    if (isLoading) return <Loading/>; // Show loading state
  }

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  return (
    <>
      <div className="bg-[#F2F6FB] py-6">
        <h1 className="text-3xl md:text-4xl font-medium text-center mt-6 text-zinc-800 mx-6 md:mx-0">
          Frequently Asked Questions
        </h1>

        <div className="bg-white mx-4 md:mx-20 lg:mx-40 p-6 md:p-14 my-8 shadow-lg rounded-lg">
          {data?.data?.length > 0 ? (
            data.data.map(({ id, question, answer }: FaqData, index: number) => (
              <div key={id} className="border-b border-gray-200">
                <div
                  className="flex justify-between items-center cursor-pointer py-4"
                  onClick={() => toggleAnswer(index)}
                >
                  <h2 className="text-lg md:text-xl font-medium text-zinc-700">
                    {question}
                  </h2>
                  <span
                    className={`text-xl transition-transform duration-300 text-[#8D1B3D] ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    {activeIndex === index ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="text-base md:text-lg text-gray-700 pb-4">
                    <p className="font-light text-gray-500">{answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-red-600">No FAQs available</p>
          )}
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Faqs;
