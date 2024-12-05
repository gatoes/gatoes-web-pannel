import React from 'react';
import Logo from '../../assets/images/Logo.png';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md text-white px-36 py-4 flex justify-between items-center z-50">
      <a href="/"><img src={Logo} alt="Logo" className="h-10" /></a>

      <div className="flex space-x-6">
        <a href="https://devmerchant.trestplus.com"><button className="font-sans font-semibold text-[#5E5C66] px-6 py-3 rounded-[15px] hover:bg-[#06C17D] text-md hover:text-white transition duration-300">
          Partner With Us
        </button></a>
        <a href="/ride"><button className="font-sans text-[#5E5C66] font-semibold px-6 py-3 rounded-[15px] z-50 hover:bg-[#06C17D] text-md hover:text-white transition duration-300">
          Ride With Us
        </button></a>
      </div>
    </header>
  );
};

export default Header;
