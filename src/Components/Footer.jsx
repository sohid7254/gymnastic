import React from 'react';
import { AiOutlineCopyright } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <>
            <section className="mt-25 px-4">
                <div className="border border-gray-300 lg:w-270 mx-auto"></div>
                <footer className="footer lg:w-270 mx-auto  sm:footer-horizontal  text-base-content mt-10">
                    <aside>
                        <h6 className="text-xl font-bold">About</h6>
                        <p>
                            At MuscleForge. we believe in the power of dedication and hard <br /> work. Our mission is to provide you with the tools, resources, <br /> and community you need to build the body of your dreams.
                        </p>
                        <p className="border w-43 mt-3 border-gray-400"></p>
                        <div className="flex justify-center items-center gap-3">
                            <p className=" font-bold">Social Media:</p>
                            <Link to="#">
                                <FaFacebookF />
                            </Link>
                            <Link to="#">
                                <FaLinkedinIn />
                            </Link>
                            <Link to="#">
                                <FaXTwitter />
                            </Link>
                        </div>
                    </aside>
                    <nav>
                        <h6 className="text-xl font-bold">Quick Links</h6>
                        <a href="/" className="link link-hover">
                            Home
                        </a>
                        <a className="link link-hover">Our Gym Location</a>
                        <a className="link link-hover">Contact Us</a>
                        <a className="link link-hover">Privacy Policy</a>
                    </nav>
                    <nav>
                        <h6 className="text-xl font-bold">Our Service</h6>
                        <a className="link link-hover">Indoor Gym</a>
                        <a className="link link-hover">OutdoorGym</a>
                        <a className="link link-hover">On Ground Gym</a>
                        <a className="link link-hover">Yoga Class</a>
                    </nav>
                    <nav>
                        <h6 className="text-xl font-bold">Contact Info</h6>
                        <a className="link link-hover">
                            <span className="font-semibold">Mail:</span> info@example.com
                        </a>
                        <a className="link link-hover">
                            <span className="font-semibold">Call:</span> +91 2274885876
                        </a>
                        <a className="link link-hover">
                            <span className="font-semibold">Location:</span> New York, 235 Lane, 10001
                        </a>
                        <a className="link link-hover">
                            <span className="font-semibold">Time:</span> Workout Hours: 5AM - 8PM
                        </a>
                    </nav>
                </footer>
                <div className="border border-gray-300 lg:w-120 mx-auto mt-10"></div>
                    <h3 className='flex justify-center items-center my-5'>
                        MuscleForge.com
                        <AiOutlineCopyright /> 2026
                        All Rights Reserved
                    </h3>
            </section>
        </>
    );
};

export default Footer;