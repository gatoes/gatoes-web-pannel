import React, { useState } from 'react';
import { faqsData } from './FaqsData'; // Ensure this file contains your FAQ data
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { IoMdThumbsUp, IoMdThumbsDown } from 'react-icons/io';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Faqs: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleFeedback = (isHelpful: boolean) => {
        const message = isHelpful
            ? 'Thanks for your positive feedback!'
            : 'Thanks for your feedback!';

        toast(message, {
            position: "top-right",
            autoClose: 1000,
            closeOnClick: false,
            progressClassName: "progress-bar",
            hideProgressBar: false,
            bodyClassName: "italic text-gray-800",
        });
    };

    return (
        <>
            <div className="bg-[#F2F6FB] py-6">
                <h1 className="text-3xl md:text-4xl font-medium text-center mt-6 text-zinc-800 mx-6 md:mx-0">
                    Frequently Asked Questions
                </h1>

                <div className="bg-white mx-4 md:mx-20 lg:mx-40 p-6 md:p-14 my-8 shadow-lg rounded-lg">
                    {faqsData.map(({ id, question, answer }, index) => (
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
                                        activeIndex === index ? 'rotate-180' : ''
                                    }`}
                                >
                                    {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </span>
                            </div>
                            {activeIndex === index && (
                                <div className="text-base md:text-lg text-gray-700 pb-4">
                                    <p className="font-light text-gray-500">{answer}</p>
                                    <div className="mt-4">
                                        <p className="text-md font-medium italic text-zinc-700">
                                            Was this article helpful?
                                        </p>
                                        <div className="flex space-x-4 mt-2">
                                            <button
                                                onClick={() => handleFeedback(true)}
                                                className="flex items-center text-green-600 rounded-full bg-green-600 p-2 bg-opacity-10"
                                            >
                                                <IoMdThumbsUp />
                                            </button>
                                            <button
                                                onClick={() => handleFeedback(false)}
                                                className="flex items-center text-red-600 rounded-full bg-red-600 p-2 bg-opacity-10"
                                            >
                                                <IoMdThumbsDown />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <ToastContainer />
        </>
    );
};

export default Faqs;
