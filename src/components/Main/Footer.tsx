import React from 'react';
import { FaAngleUp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import appStore from '../../assets/images/appStore.png';
import googlePlay from '../../assets/images/googlePlay.png';
import footerLogo from '../../assets/images/footerLogo.png';
import { Link } from 'react-router-dom';
import { constants } from '../../utils/contants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = () => {
    scrollToTop();
  };

  return (
    <>
      <footer className="bg-[#23212D] text-[#716D82] p-6 sm:p-16 relative">
        <button
          onClick={scrollToTop}
          className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 rounded-full p-4 transition duration-300 bg-[#06C17D] shadow-[rgba(6,193,125,0.22)] shadow-[0_12px_32px_0]"
        >
          {/* shadow-[10px_30px_50px_-10px_rgba(6,193,125,0.62)]  */}
          <FaAngleUp className="w-8 h-8 text-[#E1DFE8] font-light" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mt-6 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <div>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src={footerLogo} alt="Gatoes Logo" className="w-36 sm:w-48" />
              </a>
            </div>
            <div className="sm:space-x-4 mt-8 flex flex-col sm:flex-row items-center sm:items-start">
              <a href={constants.AppStore} target="_blank" rel="noopener noreferrer">
                <img src={appStore} alt="App Store" className="w-36 sm:w-48" />
              </a>
              <a href={constants.Android} target="_blank" rel="noopener noreferrer">
                <img src={googlePlay} alt="Google Play" className="w-36 sm:w-48 mt-4 sm:mt-0" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg text-[#716D82] mb-4">Discover Gatoes</h3>
            <ul className="space-y-3">
            
            {/* <li><Link to="/about-us" onClick={handleLinkClick} className="hover:text-green-400 text-[#E1DFE8] font-light">About Us</Link></li> */}
              <li><a href={constants.MerchantWebPannel} target='_blank' className="hover:text-green-400 text-[#E1DFE8] font-light">Become a partner</a></li>
              <li><Link to="/ride" onClick={handleLinkClick} className="hover:text-green-400 text-[#E1DFE8] font-light">Ride with us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-[#716D82] mb-4">Help</h3>
            <ul className="space-y-3">
              <li><Link to="/ride" onClick={handleLinkClick} className="hover:text-green-400 text-[#E1DFE8] font-light">Contact us</Link></li>
              <li><Link to="/faqs" onClick={handleLinkClick} className="hover:text-green-400 text-[#E1DFE8] font-light">Faqs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-[#716D82] mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/terms" onClick={handleLinkClick} className="hover:text-green-400 text-[#E1DFE8] font-light">Terms & Conditions</Link></li>
              <li><Link to="/policy-refund" onClick={handleLinkClick} className="hover:text-green-400 text-[#E1DFE8] font-light">Refund & Cancellation</Link></li>
              <li><Link to="/privacy-policy" onClick={handleLinkClick} className="hover:text-green-400 text-[#E1DFE8] font-light">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" onClick={handleLinkClick} className="hover:text-green-400 text-[#E1DFE8] font-light">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="flex flex-col sm:flex-row bottom-0 justify-between items-center bg-[#1D1B27] sm:mt-0 px-6 sm:px-36 py-6">
        <div className="flex space-x-6 mb-4 sm:mb-0">
          <a href="https://www.facebook.com/gatoesIN/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-[#716D82] text-3xl hover:text-zinc-400 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/gatoes.official?igsh=MjVveWQ5N2ExZnM3" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-[#716D82] text-3xl hover:text-zinc-400 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/company/gatoes" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-[#716D82] text-3xl hover:text-zinc-400 transition duration-300" />
          </a>
        </div>

        <div className="flex justify-center flex-grow">
          <p className="text-[#716D82] text-md text-center">&copy; {(new Date()).getFullYear()} Gatoes. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
