import React from 'react';
import appStore from '../../../assets/images/appStore.png';
import googlePlay from '../../../assets/images/googlePlay.png';
import Favicon from '../../../assets/images/Favicon.png';
import  { constants } from '../../../utils/contants'

const MerchantsPage: React.FC = () => {
  return (
    <div className="bg-[#E8FBF2] flex flex-col justify-center items-center text-center px-4 sm:px-16 pb-24 mt-16">
      <div
        className="bg-white p-4 rounded-[32px] shadow-[10px_30px_50px_-10px_rgba(6,193,125,0.62)] relative top-[-70px]">
        <img
          src={Favicon}
          alt="Gatoes Icon"
          className="w-24 h-24 relative"
        />
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold text-[#06C17D]">
        Gatoes <span className="text-zinc-800 font-bold">for Merchants</span>
      </h1>

      <p className="sm:text-xl md:text-2xl font-light text-gray-500 mt-4 max-w-[600px]">
        A free app that allows you to manage your restaurant directly from your smartphone
      </p>

      <div className="flex space-x-4 mt-8">
        <a href={constants.AppStore} target="_blank" rel="noopener noreferrer">
          <img
            src={appStore}
            alt="Download on the App Store"
            className="w-40 h-auto"
          />
        </a>
        <a href={constants.Android} target="_blank" rel="noopener noreferrer">
          <img
            src={googlePlay}
            alt="Get it on Google Play"
            className="w-40 h-auto"
          />
        </a>
      </div>
    </div>
  );
};

export default MerchantsPage;
