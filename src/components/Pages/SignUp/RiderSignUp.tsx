import React, { useState, ChangeEvent, FormEvent } from 'react';
import signup from '../../../assets/images/signup.png';
import { useApiMutation } from '../../../utils/useApi';
import { apiConfig } from '../../../utils/api.config';
import Motionheader from '../../UI/Motionheader';

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

  const { mutate } = useApiMutation(
    apiConfig.addRiderPatner,  // API endpoint to send data to
    'post',       // HTTP method
    {
      onSuccess: (data) => {
        console.log('Product added successfully:', data);
        // You can also show a success message or trigger other actions here
        alert('Sign-up successful!');
      
        // Optionally reset the form after successful submission
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          drivingLicense: '',
          countryCode: '91',
        });
      },
      onError: (error) => {
        console.error('Error adding product:', error);
        alert('There was an issue with the sign-up process. Please try again.');
      },
    }
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const output = {
      countryCode: formData.countryCode,
      mobileNumber: formData.phoneNumber,
      riderName: formData.fullName,
      drivingLicense: formData.drivingLicense === 'yes',
      email: formData.email,
    };
      await mutate(output)
  };
  

  return (
    <>
<Motionheader/>
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
          <div className="bg-white p-6 md:p-8 rounded-[20px] shadow-lg w-full lg:w-1/3 max-w-md">
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
