import React, { useState, ChangeEvent, FormEvent } from 'react';
import signup from '../../../assets/images/signup.png';
import { motion } from 'framer-motion';
import Logo from '../../../assets/images/Logo.png';

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  drivingLicense: 'yes' | 'no' | '';
  countryCode: string;
}

const RiderSignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    drivingLicense: '',
    countryCode: '91',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, name, value } = e.target;

    if (name === 'license') {
      setFormData({ ...formData, drivingLicense: value as 'yes' | 'no' });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const output = {
      countryCode: formData.countryCode,
      mobileNumber: formData.phoneNumber,
      riderName: formData.fullName,
      drivingLicense: formData.drivingLicense === 'yes',
      email: formData.email,
    };
    console.log(output);
    // Further processing can be added here, like sending data to an API.
  };

  return (
    <>
      <motion.div
        className="bg-green-50"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <header className="text-white px-4 md:px-16 lg:px-36 py-4 flex justify-between items-center">
          <a href="/">
            <img src={Logo} alt="Logo" className="h-8 md:h-10" />
          </a>
          <div className="flex space-x-4 md:space-x-6">
            <a href="https://devmerchant.trestplus.com/dashboard">
              <button className="text-[#5E5C66] px-4 md:px-6 py-2 md:py-3 rounded-[15px] hover:bg-[#06C17D] text-sm md:text-md hover:text-white transition duration-300">
                Partner With Us
              </button>
            </a>
            <a href="/ride">
              <button className="text-[#5E5C66] px-4 md:px-6 py-2 md:py-3 rounded-[15px] hover:bg-[#06C17D] text-sm md:text-md hover:text-white transition duration-300">
                Ride With Us
              </button>
            </a>
          </div>
        </header>
      </motion.div>

      <div className="py-12 px-4 bg-gradient-to-b from-green-50 to-white flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 w-full max-w-screen-xl">
          {/* Left Section */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-700">
              Become a Rider, <span className="text-[#119477]">Make money</span> on your schedule
            </h1>
            <p className="mt-4 text-sm md:text-base text-[#A1A0A9]">
              We are always looking for Pick-up and Delivery Partners who take
              exceptional pride in being a Hunger Saviour.
            </p>
            <img
              src={signup}
              alt="Delivery Rider"
              className="mt-0 w-full max-w-md mx-auto lg:mx-0"
            />
          </div>

          {/* Right Section */}
          <div className="bg-white p-6 md:p-8 rounded-[15px] shadow-lg w-full lg:w-1/3 max-w-md">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Sign up now</h2>
            <p className="mt-2 text-base md:text-lg text-gray-500">Fill out the questions to apply</p>
            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="fullName" className="block text-base md:text-lg font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="e.g., John"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full mt-1 py-2 md:py-3 px-4 border border-gray-300 bg-[#F4F4F8] rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-base md:text-lg font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  pattern="\d{10}"
                  placeholder="10 Digit Mobile Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  maxLength={10}
                  className="w-full mt-1 py-2 md:py-3 px-4 border border-gray-300 bg-[#F4F4F8] rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base md:text-lg font-medium text-gray-700">
                  Email <span className="text-gray-400">(Optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g., mail@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 py-2 md:py-3 px-4 border border-gray-300 bg-[#F4F4F8] rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <p className="block text-base md:text-lg font-medium text-gray-700 mb-2">
                  Do you have a valid driver's license?
                </p>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="license"
                      value="yes"
                      onChange={handleChange}
                      checked={formData.drivingLicense === 'yes'}
                      required
                    />
                    Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="license"
                      value="no"
                      onChange={handleChange}
                      checked={formData.drivingLicense === 'no'}
                      required
                    />
                    No
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#06C17D] text-white rounded-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Proceed
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiderSignUp;
