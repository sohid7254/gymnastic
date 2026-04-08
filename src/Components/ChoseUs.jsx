import React from 'react';
import group4 from '../assets/group4.png';
import boxer from '../assets/boxer.png';
import polygon from '../assets/polygon.png';
import stroke from '../assets/stroke.png';

const ChoseUs = () => {
    return (
        <>
            <section className="flex flex-col lg:flex-row items-center justify-between mt-5 gap-6">
                <img src={group4} alt="Why Choose Us" className="" />
                <img src={group4} alt="Why Choose Us" className=" rotate-270 lg:mr-12" />
            </section>

            <section className="mt-5">
                <div className="text-center lg:text-left mb-6">
                    <h4 className="text-2xl md:text-3xl font-bold">Train Like a Champion</h4>
                    <p className="text-lg md:text-xl text-gray-500 font-normal">Unleash Your Power with Expert Boxing Training</p>
                </div>

                <div className="border bg-black text-white p-6 rounded-3xl flex flex-col lg:flex-row gap-10 justify-center items-center">
                    {/* Boxer Image */}
                    <img src={boxer} alt="Boxer" className="w-60 md:w-80 lg:w-90" />

                    {/* Training Focus Areas */}
                    <div className="flex flex-col gap-6 lg:w-1/3">
                        <h3 className="text-xl md:text-2xl font-bold">Training Focus Areas:</h3>
                        <div className="text-gray-300">
                            <h2 className="text-base md:text-lg font-semibold">Strength & Conditioning</h2>
                            <p className="text-sm md:text-base">Develop knockout power with a mix of strength training and explosive movements.</p>
                        </div>
                        <div className="text-gray-300">
                            <h2 className="text-base md:text-lg font-semibold">Speed & Agility</h2>
                            <p className="text-sm md:text-base">Sharpen your reflexes and footwork with dynamic drills that improve speed and coordination.</p>
                        </div>
                        <div className="text-gray-300">
                            <h2 className="text-base md:text-lg font-semibold">Endurance Training</h2>
                            <p className="text-sm md:text-base">Boost your stamina with high-intensity circuits that keep you fighting strong till the final round.</p>
                        </div>
                    </div>

                    {/* Why Train With Us */}
                    <div className="flex flex-col gap-5 lg:w-1/3">
                        <h3 className="text-lg md:text-xl font-bold">Why Train With Us:</h3>
                        <div className="text-gray-300">
                            <h2 className="text-base md:text-lg font-semibold">Expert Coaches</h2>
                            <p className="text-sm md:text-base">Our experienced boxing trainers have worked with amateur and professional athletes, ensuring you get the best training tailored to your goals.</p>
                        </div>
                        <div className="text-gray-300">
                            <h2 className="text-base md:text-lg font-semibold">Flexible Programs</h2>
                            <p className="text-sm md:text-base">Whether you're a beginner or seasoned boxer, we offer flexible programs that fit your schedule and needs.</p>
                        </div>

                        {/* Button + Animation */}
                        <div className="flex items-center gap-5">
                            <button className="btn p-4 md:p-6 bg-[#58b334] text-lg md:text-xl border-none text-white rounded-xl hover:bg-[#45e705] transition">Punch Now</button>
                            <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                                {/* Stroke image with rotation animation */}
                                <img src={stroke} alt="Stroke" className="absolute w-full h-full animate-spin-slow" />
                                {/* Polygon image centered */}
                                <img src={polygon} alt="Polygon" className="relative w-5 h-5 md:w-6 md:h-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChoseUs;