import React from "react";
import banner from "../assets/Subtract.svg";
import group3 from "../assets/group3.png";
import runing from "../assets/runing.png";
import liftup from "../assets/liftup.png";
import yoga from "../assets/yoga.png";
import group2 from "../assets/group2.png";
import group7 from "../assets/group7.png";
import man from "../assets/man.png";
import { IoLocationSharp, IoSearch } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Banner = () => {
    return (
        <>
            {/* -------- MOBILE / TABLET LAYOUT  */}
            <section className="xl:hidden relative bg-[#111] overflow-hidden h-225 py-10 px-4 flex flex-col items-center">
                {/* Background effect */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <img src={banner} alt="Banner bg" className="w-full  object-cover" />
                </div>

                {/* Navbar Container */}
                <div className="relative z-50 w-full max-w-2xl mb-10">
                    <div className="nav-container border border-gray-600 p-3 sm:p-5 rounded-4xl sm:rounded-full bg-black/60 shadow-2xl backdrop-blur-md">
                        <ul className="nav-links font-bold flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-6 text-white text-sm sm:text-base">
                            <li><a href="/" className="hover:text-[#85b839] transition duration-200">Home</a></li>
                            <li><a href="/location" className="hover:text-[#85b839] transition duration-200">Our Gym Location</a></li>
                            <li className="hidden sm:block text-gray-500">|</li>
                            <li className="w-full sm:w-auto mt-2 sm:mt-0 flex-1">
                                <label className="input rounded-full cursor-pointer bg-[#333] hover:bg-[#404040] transition duration-200 w-full flex items-center pr-3 group">
                                    <input type="search" placeholder="Search" className="pointer-events-auto flex-1 px-4 py-3 text-white bg-transparent focus:outline-none w-full text-sm placeholder-gray-400" />
                                    <IoSearch className="text-xl text-gray-400 group-hover:text-white transition" />
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Overlay Section: Text, Buttons, and Image */}
                <div className="relative w-full flex flex-col items-center mt-2 sm:mt-8 min-h-125 sm:min-h-150 justify-center py-10">
                    {/* Background Image (Man) */}
                    <div className="absolute -top-30 -left-22 inset-0 z-10 flex justify-center items-center opacity-70 pointer-events-none drop-shadow-2xl">
                        <img src={man} alt="Man" className="w-[110%] sm:w-full max-w-125 h-[110%] object-contain " />
                    </div>

                    {/* Main Text & Buttons overlay */}
                    <div className="relative z-20 flex flex-col items-center text-center w-full">
                        <h3 className="text-[62px] sm:text-[85px] md:text-[100px] leading-none text-white outline-text font-black tracking-tight drop-shadow-2xl absolute -top-25">
                            POWER YOUR <br />
                            <span className="ghost-text text-[68px] sm:text-[95px] md:text-[110px]">PONTETIALE</span>
                        </h3>
                        
                        <div className=" absolute  flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-12 backdrop-blur-[2px] bg-black/20 px-6 py-4 rounded-3xl border border-white/5">
                            <button className="bg-[#1a1a1a] hover:bg-[#85b839] border border-[#333] shadow-xl text-white px-8 py-4 rounded-xl text-base sm:text-lg font-bold flex items-center gap-2 transform hover:-translate-y-1 transition duration-300">
                                SHOP NOW <span className="text-white font-black">→</span>
                            </button>
                            <button className="bg-[#1a1a1a] hover:bg-[#85b839] border border-[#333] shadow-xl text-white p-4 rounded-xl transform hover:-translate-y-1 transition duration-300">
                                <IoLocationSharp className="text-2xl sm:text-3xl text-white" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Feature Cards Grid */}
                <div className="relative z-20 w-full flex flex-row flex-wrap justify-center gap-4 sm:gap-6 -top-30">
                    <div className="flex border-2 border-[#a5c96b]/30 hover:border-[#a5c96b] rounded-2xl items-center gap-5 p-5 sm:p-6 bg-[#85b839] shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-white w-full max-w-[320px] transition duration-300">
                        <img src={runing} alt="Running" className="w-14 sm:w-16 h-14 sm:h-16 object-contain border-2 border-[#a5c96b] rounded-2xl p-2 bg-[#97c257]" />
                        <h1 className="font-bold text-lg sm:text-xl">Ground Running</h1>
                    </div>
                    <div className="flex border-2 border-[#a5c96b]/30 hover:border-[#a5c96b] rounded-2xl items-center gap-5 p-5 sm:p-6 bg-[#85b839] shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-white w-full max-w-[320px] transition duration-300">
                        <img src={yoga} alt="Yoga" className="w-14 sm:w-16 h-14 sm:h-16 object-contain border-2 border-[#a5c96b] rounded-2xl p-2 bg-[#97c257]" />
                        <h1 className="font-bold text-lg sm:text-xl">Yoga Assistance</h1>
                    </div>
                    <div className="flex border-2 border-[#a5c96b]/30 hover:border-[#a5c96b] rounded-2xl items-center gap-5 p-5 sm:p-6 bg-[#85b839] shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-white w-full max-w-[320px] transition duration-300">
                        <img src={liftup} alt="Trainer" className="w-14 sm:w-16 h-14 sm:h-16 object-contain border-2 border-[#a5c96b] rounded-2xl p-2 bg-[#97c257]" />
                        <h1 className="font-bold text-lg sm:text-xl">Personal Trainer</h1>
                    </div>
                </div>
            </section>

            {/* DESKTOP LAYOUT  */}
            <section className="hidden xl:block relative -top-23 left-0 h-201.25 overflow-hidden">
                <div className="">
                    <img src={banner} alt="Banner" className="relative w-" />
                    <div className="absolute text-white text-center top-1/17 left-105 transform -translate-x-1/2 -translate-y-1/2 w-150  ">
                        <div className="nav-container border p-3 rounded-full z-50">
                            <ul className="nav-links font-bold flex items-center justify-between gap-5">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/location">Our Gym Location</a>
                                </li>
                                <li>|</li>
                                <li>
                                    <label className="input rounded-full cursor-pointer bg-[#404040] w-40">
                                        <input type="search" placeholder="Search" className="pointer-events-auto flex-1 px-3 py-2 text-white bg-transparent focus:outline-none" />
                                        <IoSearch className="text-3xl" />
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-43 left-1/7   ">
                        <h3 className="tilt text-xl text-gray-400 flex items-center gap-5">
                            Follow On :
                            <span className="cursor-pointer">
                                <FaFacebookF />
                            </span>
                            <span className="cursor-pointer">
                                <FaInstagram />
                            </span>
                            <span className="cursor-pointer">
                                <FaXTwitter />
                            </span>
                            <span className="cursor-pointer">
                                <FaLinkedinIn />
                            </span>
                        </h3>
                    </div>
                    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-65 left-1/7  ">
                        <img src={group2} alt="Group 2" className="w-70 block" />
                    </div>
                    <div className="absolute transform translate-x-1/2 -translate-y-1/2 top-38 left-260  ">
                        <img src={group7} alt="Group 7" className="w-20 block" />
                    </div>
                    <div className="absolute z-50 text-white text-center top-1/17 left-105 transform -translate-x-1/2 -translate-y-1/2 w-150  ">
                        {/* Ensure nav bar clickable by adding Z-INDEX here since we know the original was broken */}
                        <div className="nav-container border p-3 rounded-full z-50">
                            <ul className="nav-links font-bold flex items-center justify-between gap-5">
                                <li><a href="/">Home</a></li>
                                <li><a href="/location">Our Gym Location</a></li>
                                <li>|</li>
                                <li>
                                    <label className="input rounded-full cursor-pointer bg-[#404040] w-40">
                                        <input type="search" placeholder="Search" className="pointer-events-auto flex-1 px-3 py-2 text-white bg-transparent focus:outline-none" />
                                        <IoSearch className="text-3xl" />
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="absolute -top-1 left-78 z-10">
                        <img src={man} alt="Man" className="w-225 max-h-201.25 relative object-contain block" />
                    </div>
                    <h3 className="absolute top-89 left-60 transform translate-x-65 translate-y-1/7 text-[110px]  leading-[0.9] text-white z-20 outline-text">
                        POWER YOUR <br />
                        <span className="ghost-text text-[121px]">PONTETIALE</span>
                    </h3>
                    <div className="flex items-center gap-6 absolute top-160 left-60 transform translate-x-65 translate-y-1/7 z-20">
                        {/* Shop Now Button */}
                        <button className="bg-[#1a1a1a]  text-white px-8 py-4 rounded-xl text-lg font-bold flex items-center gap-2 hover:bg-gray-800 transition border">
                            SHOP NOW <span>→</span>
                        </button>

                        {/* Location Button */}
                        <button className="bg-[#1a1a1a] border text-white p-3 rounded-xl hover:bg-gray-800 transition">
                            <IoLocationSharp className="text-4xl" />
                        </button>
                    </div>
                </div>

                <div className="absolute -top-138 -left-1 relative text-white overflow-hidden">
                    <img src={group3} alt="Group 3" className="w-69 h-auto block" />
                    <div className="absolute flex justify-center border-2 border-[#a5c96b] rounded-2xl items-center gap-5 p-6 bg-[#85b839] top-59 left-34.5 transform -translate-x-1/2 -translate-y-1/2">
                        <img src={runing} alt="Running" className="w-15 h-auto block  border-2 border-[#a5c96b] rounded-2xl p-1 bg-[#97c257]" />
                        <h1>Ground Running</h1>
                    </div>
                    <div className="absolute flex justify-center border-2 border-[#a5c96b] rounded-2xl items-center gap-5 p-6 bg-[#85b839] top-89 left-34.5 transform -translate-x-1/2 -translate-y-1/2">
                        <img src={yoga} alt="Running" className="w-15 h-auto block border-2 border-[#a5c96b] rounded-2xl p-1 bg-[#97c257]" />
                        <h1>Yoga Assistance</h1>
                    </div>
                    <div className="absolute flex justify-center border-2 border-[#a5c96b] rounded-b-[40px] rounded-t-2xl items-center gap-5 p-6 bg-[#85b839] top-120 left-34.5 transform -translate-x-1/2 -translate-y-1/2">
                        <img src={liftup} alt="Running" className="w-15 h-auto block border-2 border-[#a5c96b] rounded-2xl p-1 bg-[#97c257]" />
                        <h1>Personal Trainer</h1>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
