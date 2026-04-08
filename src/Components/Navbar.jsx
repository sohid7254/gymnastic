import React from "react";
import { IoSearch } from "react-icons/io5";
import icon from "../assets/favicn.png";
import { Link } from "react-router";

const Navbar = () => {
    return (
        <div className="px-4 xl:px-2 py-4 xl:py-0">
            <div className="max-w-7xl mx-auto">
                <nav className="navbar flex items-center justify-between relative z-50 bg-transparent">
                    <div className="bg-[#71AC16] hover:bg-[#8bcf25] p-2 sm:p-3 xl:p-4 rounded-full transition-all">
                        <a href="/">
                            <img src={icon} alt="Gym Icon" className="w-10 sm:w-12 xl:w-13" />
                        </a>
                    </div>
                    <div>
                        <Link to="/register">
                            <span className="tilt bg-[#71AC16] py-3 px-6 sm:py-4 sm:px-10 xl:py-6 xl:px-23 text-white text-sm sm:text-base xl:text-xl rounded-full transition-all hover:bg-[#83c91a] whitespace-nowrap">REGISTER</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
