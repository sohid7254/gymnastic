import React from "react";
import group4 from "../assets/group4.png";
import vector from "../assets/vector.png";

const Service = () => {
    return (
        <section className="relative mt-5">
            {/* Top decorative image */}
            <div className="flex justify-end items-center mb-2 lg:mb-0">
                <img src={group4} alt="Group 4" className="rotate-270 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 mr-2" />
            </div>

            {/* Main content box */}
            <div
                className="relative flex flex-col justify-center items-center 
                            bg-black text-white rounded-[30px] border 
                            lg:w-270 w-80 p-6 lg:py-20 mx-auto space-y-4"
            >
                <h1 className="text-base md:text-lg font-semibold">Join Our Community</h1>

                <div className="relative">
                    <h3 className="lg:text-2xl md:text-4xl tilt text-center">Subscribe to our newsletter</h3>
                    {/* Decorative underline image */}
                    <img src={vector} alt="Vector" className="absolute lg:left-2 left-45 transform -translate-x-1/2 lg:translate-x-1/2 top-1/2 mt-2 w-20 lg:w-55" />
                </div>

                <p className="text-[7px] lg:text-sm md:text-sm text-gray-300 text-center">
                    Join Our Community Of Fitness Enthusiasts And Athletes! By Subscribing To Our Newsletter, You'll Receive Expert <br /> Training Tips, Nutrition Guides, Exclusive Discounts, And The Latest News On Upcoming Events And Products.
                </p>

                {/* Input + Button */}
                <div
                    className="flex items-center border border-white rounded-full overflow-hidden bg-black 
                                lg:w-full lg:max-w-md w- p-2"
                >
                    <input type="email" placeholder="Enter Your Email" className="flex-1 px-3 py-2 text-white bg-transparent focus:outline-none text-sm md:text-base" />
                    <button
                        type="submit"
                        className="bg-white rounded-full text-black font-bold px-2 md:px-10 py-2 md:py-3 
                            hover:bg-gray-100 transition text-sm md:text-base"
                    >
                        SUBSCRIBE
                    </button>
                </div>
            </div>

            {/* Bottom decorative image */}
            <img src={group4} alt="Group 4" className="absolute top-67 lg:top-110 z-20 w-15 lg:w-22" />
        </section>
    );
};

export default Service;
