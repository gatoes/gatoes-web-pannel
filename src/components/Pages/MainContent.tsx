import React from 'react';

const ImageGrid: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-10 bg-gradient-to-b from-green-50 to-white">
      {/* Text Section - Left */}
      <div className="flex flex-col justify-center items-start w-full md:w-1/2 ml-8 md:ml-28 mb-8 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-bold text-zinc-800">Partner with Gatoes</h2>
        <p className="text-4xl md:text-5xl font-bold text-green-600 mt-4">
          Online Delivery <span className="text-zinc-800 font-bold">Marketplace</span>
        </p>
        <p className="text-xl md:text-2xl mt-4 text-zinc-500 font-light">
          Sign up for lightning fast delivery to your customers
        </p>
      </div>

      <div className="grid grid-cols-2 w-full md:w-1/2 md:grid-cols-2">
  {/* First Row */}
  <div className='space-y-[40px] mt-28 ml-16'>
  <img 
    src="https://gatoes.com/assets/images/img-1.jpg" 
    alt="Small Image"
    className="rounded-[15px] ml-[100px] w-32 h-32 md:w-48 md:h-36 object-cover"
  />
  <img 
    src="https://gatoes.com/assets/images/img-2.jpg" 
    alt="Large Image"
    className="rounded-[15px] ml-[40px] w-48 h-40 object-cover"
  />
  </div>

<div className='space-y-10 '>
  {/* Second Row */}
  <img 
    src="https://gatoes.com/assets/images/img-4.jpg" 
    alt="Large Image 3"
    className="rounded-[15px] w-72 h-72 ml-12 object-cover"
  />
  <img 
    src="https://gatoes.com/assets/images/img-3.jpg" 
    alt="Large Image 2"
    className="rounded-[15px] w-72 h-52 md:w-96 md:h-52 object-cover"
  />
  
  </div>
</div>


    </div>
  );
};

export default ImageGrid;
