import React from 'react';
import Logo from '../../assets/images/Logo.png';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md px-1 md:px-10 lg:px-36 py-4 flex justify-between items-center z-50">
      {/* Logo */}
      <a href="/">
        <img src={Logo} alt="Logo" className="h-6 md:h-8" />
      </a>

      {/* Navigation Links */}
      <div className="flex space-x-0 md:space-x-6">
        <a href="https://devmerchant.trestplus.com">
          <button className="font-sans font-semibold text-[#5E5C66] px-2 py-2 md:px-6 md:py-3 rounded-lg md:rounded-[15px] hover:bg-[#06C17D] text-sm md:text-md hover:text-white transition duration-300">
            Partner With Us
          </button>
        </a>
        <a href="/ride">
          <button className="font-sans font-semibold text-[#5E5C66] px-2 py-2 md:px-6 md:py-3 rounded-lg md:rounded-[15px] hover:bg-[#06C17D] text-sm md:text-md hover:text-white transition duration-300">
            Ride With Us
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
