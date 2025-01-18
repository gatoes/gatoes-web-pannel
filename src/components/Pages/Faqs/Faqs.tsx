import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useApiQuery } from "../../../utils/useApi";
import { apiConfig } from "../../../utils/api.config";
import Loading from "../../UI/Loading";

interface Faq {
  id: string;
  question: string;
  answer: string;
}

interface RatedFaq {
  hasLiked: boolean;
  hasDisliked: boolean;
}

const Faqs: React.FC = () => {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [ratedFaqs, setRatedFaqs] = useState<Record<string, RatedFaq>>({});

  // Load ratedFaqs from localStorage on mount
  // useEffect(() => {
  //   const storedRatedFaqs = localStorage.getItem("ratedFaqs");
  //   if (storedRatedFaqs) {
  //     setRatedFaqs(JSON.parse(storedRatedFaqs));
  //   }
  // }, []);

  // // Save ratedFaqs to localStorage whenever it changes
  // useEffect(() => {
  //   localStorage.setItem("ratedFaqs", JSON.stringify(ratedFaqs));
  // }, [ratedFaqs]);

  // useEffect(() => {
  //   const fetchFaqsData = async () => {
  //     try {
  //       setIsLoading(true);
  //       const response = await fetch("http://localhost:6969/api/v1/user/rateFaq");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch FAQs");
  //       }
  //       const data = await response.json();
  //       setFaqs(data.data);

  //       // Merge existing ratedFaqs with new FAQs
  //       setRatedFaqs((prev) => {
  //         const updatedRatedFaqs = { ...prev };
  //         data.data.forEach(({ id }: { id: string | number }) => {
  //           if (!updatedRatedFaqs[id as string]) {
  //             updatedRatedFaqs[id as string] = { hasLiked: false, hasDisliked: false };
  //           }
  //         });
  //         return updatedRatedFaqs;
  //       });
  //     } catch (error) {
  //       console.error("Error fetching FAQ data:", error);
  //       setError("Failed to load FAQ data");
  //       toast.error("Failed to load FAQ data");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchFaqsData();
  // }, []);


  const { data, isLoading, isError, error } = useApiQuery<Faq,Error>(
    ['getFaqs'], // queryKey
    apiConfig.getFaqs,
    // {
    //   onSuccess: (data) => {
    //     // Set the FAQ data and update ratedFaqs
    //     console.log('dtat',data);
        
    //     setFaqs(data?.data);
    //     setRatedFaqs((prev) => {
    //       const updatedRatedFaqs = { ...prev };
    //       data.data.forEach(({ id }: { id: string | number }) => {
    //         if (!updatedRatedFaqs[id as string]) {
    //           updatedRatedFaqs[id as string] = { hasLiked: false, hasDisliked: false };
    //         }
    //       });
    //       return updatedRatedFaqs;
    //     });
    //   },
    //   onError: (error: any) => {
    //     // React Query handles the error internally, but you can log it or show a toast
    //     toast.error("Failed to load FAQ data");
    //     console.error("Error fetching FAQ data:", error);
    //   }
    // }
  );
   
  // setFaqs(data?.data);
  // console.log('data',data?.data);
  
  // setRatedFaqs((prev) => {
  //   const updatedRatedFaqs = { ...prev };
  //   data?.forEach(({ id }: { id: string | number }) => {
  //     if (!updatedRatedFaqs[id as string]) {
  //       updatedRatedFaqs[id as string] = { hasLiked: false, hasDisliked: false };
  //     }
  //   });
  //   return updatedRatedFaqs;
  // });

  // Handle loading and error states directly using React Query's states
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading FAQs: {error?.message}</div>;
  }

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // const handleFeedback = async (id: string, rating: number) => {
  //   console.log("Button clicked for id:", id, "rating:", rating);
  //   console.log("ratedFaqs[id]?.hasLiked:", ratedFaqs[id]?.hasLiked);

  //   // Check if the FAQ is already rated
  //   if (rating === 1 && ratedFaqs[id]?.hasLiked) {
  //     toast.error("You have already liked this FAQ!");
  //     return;
  //   }
  //   if (rating === 0 && ratedFaqs[id]?.hasDisliked) {
  //     toast.error("You have already disliked this FAQ!");
  //     return;
  //   }

  //   try {
  //     const response = await fetch("http://localhost:6969/api/v1/user/rating", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         faqId: id,
  //         rating,
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to submit feedback");
  //     }

  //     const result = await response.json();
  //     console.log("Feedback submitted:", result);

  //     const message =
  //       rating === 1
  //         ? "Thanks for your positive feedback!"
  //         : "Thanks for your feedback!";
  //     toast.success(message);

  //     // Update the ratedFaqs state
  //     setRatedFaqs((prev) => ({
  //       ...prev,
  //       [id]: {
  //         hasLiked: rating === 1 ? true : prev[id]?.hasLiked || false,
  //         hasDisliked: rating === 0 ? true : prev[id]?.hasDisliked || false,
  //       },
  //     }));
  //   } catch (error) {
  //     console.error("Error submitting feedback:", error);
  //     toast.error("Failed to submit feedback");
  //   }
  // };

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
            data.data?.map(({ id, question, answer }, index) => (
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
                    {/* <div className="mt-4">
                      <p className="text-md font-medium italic text-zinc-700">
                        Was this article helpful?
                      </p>
                      <div className="flex space-x-4 mt-2">
                        <button
                          onClick={() => handleFeedback(id, 1)} // 1 for positive feedback
                          className={`flex items-center text-green-600 rounded-full p-2 bg-opacity-10 ${
                            ratedFaqs[id]?.hasLiked
                              ? "bg-green-200"
                              : "bg-green-600 hover:bg-green-200"
                          }`}
                          
                        >
                          <IoMdThumbsUp />
                        </button>
                        <button
                          onClick={() => handleFeedback(id, 0)} // 0 for negative feedback
                          className={`flex items-center text-red-600 rounded-full p-2 bg-opacity-10 ${
                            ratedFaqs[id]?.hasDisliked
                              ? "bg-red-200 "
                              : "bg-red-600 hover:bg-red-200"
                          }`}
                         
                        >
                          <IoMdThumbsDown />
                        </button>
                      </div>
                    </div> */}
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
