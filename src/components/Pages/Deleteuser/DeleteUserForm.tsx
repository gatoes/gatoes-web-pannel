import React, { useState } from 'react';
import signup from '../../../assets/images/signup.png';
import { useApiMutation } from '../../../utils/useApi';
import { apiConfig } from '../../../utils/api.config'
import building from '../../../assets/svg/ic_bulding.svg'


interface FormData {
  password: string;
  phoneNumber: string;
}


const DeleteUserForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    phoneNumber: '',
    password:''
  });

  const { mutate,isPending } = useApiMutation(
    apiConfig.deactivateAccountWeb,  // API endpoint to send data to
    'delete',       // HTTP method
    {
      onSuccess: (data) => {
        console.log('Product added successfully:', data);
        // You can also show a success message or trigger other actions here
        // alert('Sign-up successful!');
      
        // Optionally reset the form after successful submission
        setFormData({
          phoneNumber: '',
          password:''
        });
      },
      onError: (error:any) => {
        console.error('Error adding product:', error.message);
        alert(error.message)
        // alert('There was an issue with the sign-up process. Please try again.');
      },
    }
  );


  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const output = {
      password: formData.password,
      phoneNumber: formData.phoneNumber,
    };
    console.log('Form submitted');
      await mutate(output)
  };

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...e});
  // };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };
  

  return (
    <div
      className="py-24 px-4 flex flex-col items-center justify-center h-100vh"
      style={{
        background: 'linear-gradient(172.87deg, #e6fef5 0%, #ffffff 100%)',
      }}
    >
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full max-w-screen-xl mx-auto">   
     
        {/* Left Side - 50% */}
        <div className="flex flex-col justify-center items-center lg:items-start">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-700 text-center lg:text-left">
            Do you want to delete <br /> <span className="text-[#119477]">the account?</span>
          </h1>
          <div
            className="relative mt-8 w-full max-w-md mx-auto lg:mx-0"
            style={{
              backgroundImage: `url(${building})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
            }}
          >
         <img
              src={signup}
              alt="Signup Image"
              className="w-full h-auto relative z-10"
              // style={{ mixBlendMode: 'multiply' }}
            />
          </div>
        </div>
        {/* Right Side - 50% */}
        <div className="flex justify-center items-center">
          <div className="bg-white p-6 md:p-8 rounded-[20px] shadow-lg w-full lg:w-3/4 max-w-md">
            <h2 className="text-xl md:text-3xl font-semibold text-[#536376] tracking-tight leading-[24px] mb-2">
              Delete account
            </h2>
            <p className="mt-2 text-base md:text-lg text-[#A1A0A9]">
              Please fill out the form to apply
            </p>
            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
              {/* Phone Number Input */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-base md:text-lg font-medium text-[#4A5970]"
                >
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

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-base md:text-lg font-medium text-[#4A5970]"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full mt-1 py-2 md:py-3 px-4 border border-gray-300 bg-[#F4F4F8] rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              {/* Submit Button */}
              {/* <button
                type="submit"
                className="w-full py-3 px-4 bg-[#06C17D] text-white rounded-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Proceed
              </button> */}
                <button
                type="submit"
                disabled={isPending}
                className={`w-full py-3 px-4 rounded-md text-white focus:outline-none focus:ring-2 ${
                  isPending
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-[#06C17D] hover:shadow-lg focus:ring-green-500'
                }`}
              >
                {isPending ? 'Loading...' : 'Proceed'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserForm;
