import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Faqs: React.FC = () => {
    const [faqs, setFaqs] = useState([]);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFaqsData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(
                    "http://localhost:6969/api/v1/user/rateFaq"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch FAQs");
                }
                const data = await response.json();
                setFaqs(data.data);
            } catch (error) {
                console.error("Error fetching FAQ data:", error);
                setError("Failed to load FAQ data");
                toast.error("Failed to load FAQ data");
            } finally {
                setIsLoading(false);
            }
        };

        fetchFaqsData();
    }, []);

    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleFeedback = async (id: string, rating: number) => {
        try {
            const response = await fetch("http://localhost:6969/api/v1/user/rating", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    faqId: id,
                    rating,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to submit feedback");
            }

            const result = await response.json();
            console.log("Feedback submitted:", result);

            const message =
                rating === 1
                    ? "Thanks for your positive feedback!"
                    : "Thanks for your feedback!";
            toast(message, {
                position: "top-right",
                autoClose: 1000,
                closeOnClick: false,
                progressClassName: "progress-bar",
                hideProgressBar: false,
                bodyClassName: "italic text-gray-800",
            });
        } catch (error) {
            console.error("Error submitting feedback:", error);
            toast.error("Failed to submit feedback");
        }
    };



    if (isLoading) {
        return <div>Loading...</div>; // Show loading indicator
    }

    if (error) {
        return <div className="text-red-600">{error}</div>; // Display error message
    }

    return (
        <>
            <div className="bg-[#F2F6FB] py-6">
                <h1 className="text-3xl md:text-4xl font-medium text-center mt-6 text-zinc-800 mx-6 md:mx-0">
                    Frequently Asked Questions
                </h1>

                <div className="bg-white mx-4 md:mx-20 lg:mx-40 p-6 md:p-14 my-8 shadow-lg rounded-lg">
                    {faqs.length > 0 ? (
                        faqs.map(({ id, question, answer }, index) => (
                            <div key={id} className="border-b border-gray-200">
                                <div
                                    className="flex justify-between items-center cursor-pointer py-4"
                                    onClick={() => toggleAnswer(index)}
                                >
                                    <h2 className="text-lg md:text-xl font-medium text-zinc-700">
                                        {question}
                                    </h2>
                                    <span
                                        className={`text-xl transition-transform duration-300 text-[#8D1B3D] ${activeIndex === index ? "rotate-180" : ""
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
                                        <div className="mt-4">
                                            <p className="text-md font-medium italic text-zinc-700">
                                                Was this article helpful?
                                            </p>
                                            <div className="flex space-x-4 mt-2">
                                                <button
                                                    onClick={() => handleFeedback(id, 1)} // 1 for positive feedback
                                                    className="flex items-center text-green-600 rounded-full bg-green-600 p-2 bg-opacity-10 hover:bg-green-200"
                                                >
                                                    <IoMdThumbsUp />
                                                </button>
                                                <button
                                                    onClick={() => handleFeedback(id, 0)} // 0 for negative feedback
                                                    className="flex items-center text-red-600 rounded-full bg-red-600 p-2 bg-opacity-10 hover:bg-red-200"
                                                >
                                                    <IoMdThumbsDown />
                                                </button>
                                            </div>


                                        </div>
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
