import React from "react";
import Groups from "./Groups";
import orangeC from "../assets/orangeC.png";
import tier from "../assets/tierC.png";
import leafC from "../assets/leafC.png";
import darkC from "../assets/darkC.png";
import barC from "../assets/barC.png";
import cheege from "../assets/cheege.png";
import { CiStar } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";


const Products = () => {
    const products = [
        {
            id: 1,
            name: "Green Mint Square",
            price: "$399.00",
            image: darkC,
        },
        {
            id: 2,
            name: "Mint Flavour Chocolate",
            price: "$399.00",
            image: leafC,
        },
        {
            id: 3,
            name: "Mint Flavour Chocolate",
            price: "$399.00",
            image: tier,
        },
        {
            id: 4,
            name: "Mint Flavour Chocolate",
            price: "$399.00",
            image: orangeC,
        },
        {
            id: 5,
            name: "Mint Flavour Chocolate",
            price: "$399.00",
            image: barC,
        },
        {
            id: 6,
            name: "White Bliss Chocolate",
            price: "$399.00",
            image: cheege,
        },
    ];
    return (
        <>
            <section className="h-0">
                <Groups />
            </section>
            {/* <section>
                <div className=" mt-5">
                    <h2 className="text-3xl font-bold">Our Products</h2>
                    <p className="text-lg font-semibold text-gray-500">Fuel Your Workouts with Protein-Packed Nutrition</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="border bg-[#000000] text-white rounded-2xl p-4 w-100 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <img src={product.image} alt={product.name} className="w-full h-auto mb-4 transition-transform duration-300 hover:scale-95" />
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-bold">{product.name}</h3>
                                    <div className="flex items-center gap-6">
                                        <p className="text-2xl font-bold">{product.price}</p>
                                        <p className="flex items-center text-[#58b334] ">
                                            <TiStarFullOutline />
                                            <TiStarFullOutline />
                                            <TiStarFullOutline />
                                            <TiStarFullOutline />
                                            <span className="text-gray-400">
                                                <TiStarFullOutline />
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className="btn bg-[#58b334] border-none text-white p-3 rounded-xl  hover:bg-[#45e705] transition-transform duration-300 hover:scale-110"
                                    >
                                        <FaPlus />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}
            <section className=" lg:mt-5">
                <div className="mb-6 text-center lg:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold">Our Products</h2>
                    <p className="text-base md:text-lg font-semibold text-gray-500">Fuel Your Workouts with Protein-Packed Nutrition</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="border bg-[#000000] text-white rounded-2xl p-4 md:p-6  transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            {/* Product Image */}
                            <img src={product.image} alt={product.name} className="w-full h-auto mb-4 transition-transform duration-300 hover:scale-95 rounded-xl" />

                            {/* Product Info */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold">{product.name}</h3>
                                    <div className="flex items-center gap-4 md:gap-6">
                                        <p className="text-xl md:text-2xl font-bold">{product.price}</p>
                                        <p className="flex items-center text-[#58b334]">
                                            <TiStarFullOutline />
                                            <TiStarFullOutline />
                                            <TiStarFullOutline />
                                            <TiStarFullOutline />
                                            <span className="text-gray-400">
                                                <TiStarFullOutline />
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* Add Button */}
                                <div>
                                    <button
                                        className="btn bg-[#58b334] border-none text-white p-2 md:p-3 rounded-xl  hover:bg-[#45e705] transition-transform duration-300 hover:scale-110"
                                    >
                                        <FaPlus />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Products;
