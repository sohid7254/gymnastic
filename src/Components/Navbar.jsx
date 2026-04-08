import React from "react";
import { IoSearch } from "react-icons/io5";
import icon from "../assets/favicn.png"
import { Link } from "react-router";

const Navbar = () => {
    
    return (
        <div className=" px-2">
            <div className="max-w-7xl mx-auto">
                <nav className="navbar flex items-center justify-between gap-">
                    <div className="bg-[#71AC16] p-4 rounded-full">
                        <img src={icon} alt="Gym Icon" className="w-13" />
                    </div>
                    <div>
                        <Link>
                            <span className="tilt bg-[#71AC16] py-6 px-23 text-white text-xl rounded-full">REGISTER</span>
                        </Link>
                    </div>
                    {/* <div className="nav-container border p-3 rounded-full">
                        <ul className="nav-links flex items-center justify-between gap-5">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/location">Our Gym Location</a>
                            </li>
                            <li>|</li>
                            <li>
                                <label className="input rounded-full bg-gray-200">
                                    <input type="search" required placeholder="Search" />
                                    <IoSearch className="text-3xl" />
                                </label>
                            </li>
                        </ul>
                    </div> */}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
