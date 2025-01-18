import React from 'react'

const AboutUs: React.FC = () => {
    return (
        <div className="bg-[#F2F6FB]">
            <div className="bg-white p-6 sm:p-8 lg:p-16 mx-4 sm:mx-8 lg:mx-36 my-10 lg:my-20">
                <h1 className="text-4xl font-light text-left mb-6 text-[#8D1B3D]">About Us</h1>
                <div className="text-lg">
                    <div className="">
                        <h4 className="text-3xl font-bold text-zinc-700 my-6">What is Gatoes?</h4>
                        <p className="font-light text-lg text-zinc-700 ">
                            Gatoes is a platform based on a hyperlocal on-demand food & grocery delivery business operation. Working as a bridge between vendors and customers, Gatoes utilizes an innovative technology platform that works as a single point of contact. The app allows foodies to order food from nearby restaurants & shoppers to order from nearby stores and get it delivered at their doorstep.
                        </p>
                    </div>

                    <div className="">
                        <h4 className="text-3xl font-bold text-zinc-700 my-6">Company Statistics</h4>
                        <p className="font-light text-lg text-zinc-700 ">Partnered with more than 200+ restaurants</p> <br />
                        <p className="font-light text-lg text-zinc-700 ">Processes thousands of daily orders</p>
                    </div>


                    <div className="">
                        <h4 className="text-3xl font-bold text-zinc-700 my-6">How it works</h4>
                        <p className="font-light text-lg text-zinc-700 ">Gatoes helps you order food from wherever you are.</p><br />
                        <p className="font-light text-lg text-zinc-700 ">How it works: you type in an address; we tell you the restaurants & stores that deliver to that locale as well as showing you takeaway options near you. Want to be more specific?</p><br />
                        <p className="font-light text-lg text-zinc-700 ">Oh, and we also give you access to reviews, coupons, special deals and a 24/7 customer care team that tracks each order and makes sure you get exactly what you want.</p><br />
                    </div>


                    <div className="">
                        <h4 className="text-3xl font-bold text-zinc-700 my-6">Company Timeline</h4>
                        <p className="font-light text-lg text-zinc-700 ">Founded March, 2020.</p><br />
                        <p className="font-light text-lg text-zinc-700 ">How it works: you type in an address; we tell you the restaurants & stores that deliver to that locale as well as showing you takeaway options near you. Want to be more specific?</p><br />
                        <p className="font-light text-lg text-zinc-700 ">Partnered with more than 200+ vendors April-May, 2020.</p><br />
                        <p className="font-light text-lg text-zinc-700 ">Public Access June, 2020.</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default AboutUs