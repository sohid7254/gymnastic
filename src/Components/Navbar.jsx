import React from "react";
import { IoSearch } from "react-icons/io5";
import icon from "../assets/favicn.png";
import { Link } from "react-router";

const Navbar = () => {
    return (
        <div className=" px-2">
            <div className="max-w-7xl mx-auto">
                <nav className="navbar flex items-center justify-between relative z-50 bg-transparent">
                    <div className="bg-[#71AC16] p-4 rounded-full">
                        <a href="/">
                            <img src={icon} alt="Gym Icon" className="w-13" />
                        </a>
                    </div>
                    <div>
                        <Link to="/register">
                            <span className="tilt bg-[#71AC16] py-6 px-23 text-white text-xl rounded-full">REGISTER</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
