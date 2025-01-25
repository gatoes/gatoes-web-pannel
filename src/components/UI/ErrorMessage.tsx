import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Error Message */}
      <h1 className="text-2xl font-semibold text-gray-800">Something went wrong.</h1>
      <p className="text-gray-600 mt-2">Please try again later.</p>

      {/* Go Back Button */}
      <button
        className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all"
        onClick={() => navigate("/")}
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
