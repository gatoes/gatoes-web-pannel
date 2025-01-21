import React from "react";

const SkeletonLoader: React.FC<{ count?: number }> = ({ count = 4 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 animate-pulse mx-10">
      {[...Array(count)].map((_, index) => (<>
        <div key={index} className="bg-[#F2F6FB] p-8 rounded-lg shadow-md">
          {/* Circle Placeholder */}
          <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-6"></div>
          {/* Text Placeholders */}
          <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3 mx-auto"></div>
        </div></>
      ))}
    </div>
  );
};

export default SkeletonLoader;
