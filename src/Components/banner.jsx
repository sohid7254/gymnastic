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
            <section className="relative -top-23 left-0 ">
                <div className="">
                    <img src={banner} alt="Banner" className="relative w-full" />
                    <div className="absolute text-white text-center top-1/17 left-105 transform -translate-x-1/2 -translate-y-1/2 w-150  ">
                        <div className="nav-container border p-3 rounded-full">
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
                                        <input type="search" placeholder="Search" />
                                        <IoSearch className="text-3xl" />
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-43 left-1/7   ">
                        <h3 className="tilt text-xl text-gray-400 flex items-center gap-5">
                            Follow On :
                            <span>
                                <FaFacebookF />
                            </span>
                            <span>
                                <FaInstagram />
                            </span>
                            <span>
                                <FaXTwitter />
                            </span>
                            <span>
                                <FaLinkedinIn />
                            </span>
                        </h3>
                    </div>
                    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-65 left-1/7  ">
                        <img src={group2} alt="Group 2" className="w-70" />
                    </div>
                    <div className="absolute transform translate-x-1/2 -translate-y-1/2 top-38 left-260  ">
                        <img src={group7} alt="Group 7" className="w-20" />
                    </div>
                    <div className="absolute -top-1 left-78 z-10">
                        <img src={man} alt="Man" className="w-225 h-auto relative" />
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

                <div className="absolute -top-138 -left-1  h-full relative text-white">
                    <img src={group3} alt="Group 3" className="w-69 h-auto" />
                    <div className="absolute flex justify-center border-2 border-[#a5c96b] rounded-2xl items-center gap-5 p-6 bg-[#85b839] top-59 left-34.5 transform -translate-x-1/2 -translate-y-1/2">
                        <img src={runing} alt="Running" className="w-15 h-auto  border-2 border-[#a5c96b] rounded-2xl p-1 bg-[#97c257]" />
                        <h1>Ground Running</h1>
                    </div>
                    <div className="absolute flex justify-center border-2 border-[#a5c96b] rounded-2xl items-center gap-5 p-6 bg-[#85b839] top-89 left-34.5 transform -translate-x-1/2 -translate-y-1/2">
                        <img src={yoga} alt="Running" className="w-15 h-auto border-2 border-[#a5c96b] rounded-2xl p-1 bg-[#97c257]" />
                        <h1>Yoga Assistance</h1>
                    </div>
                    <div className="absolute flex justify-center border-2 border-[#a5c96b] rounded-b-[40px] rounded-t-2xl items-center gap-5 p-6 bg-[#85b839] top-120 left-34.5 transform -translate-x-1/2 -translate-y-1/2">
                        <img src={liftup} alt="Running" className="w-15 h-auto border-2 border-[#a5c96b] rounded-2xl p-1 bg-[#97c257]" />
                        <h1>Personal Trainer</h1>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
