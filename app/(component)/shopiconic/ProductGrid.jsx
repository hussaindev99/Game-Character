"use client";
import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import productImage from "@/public/image/product.png";
import { FiArrowUpRight } from "react-icons/fi";
import { LuArrowDownLeft } from "react-icons/lu";

const ProductCard = () => {
    return (
        <div>
        <div className="bg-[#161616]  w-full p-4 md:p-6 lg:p-6 rounded-lg shadow-lg text-white">
            <Image src={productImage} alt="Product" className="rounded-lg" width={300} height={200} />
            <h2 className="text-lg md:text-xl lg:text-2xl mt-4">Chaos Battletome</h2>
            <p className="text-gray-400 text-sm md:text-base">$98.00</p>
            <button className="flex items-center justify-center mt-4 w-full py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm md:text-base transition">
                <IoCartOutline className="mr-2" /> Add to Cart
            </button>
        </div>
        </div>
    );
};

const ProductGrid = () => {
    const [showAll, setShowAll] = useState(false);

    return (
        <div>
        <div className="min-h-screen bg-[#0A0A0A] text-white py-16 px-6 md:px-12 lg:mx-4">
            <div className="container w-full flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                    <h1 className="text-3xl md:text-4xl font-semibold">
                        Shop Iconic <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 ">3D Characters</span>
                    </h1>
                    <p className="text-gray-400 mt-2 text-sm md:text-base">Detailed, Handcrafted Figures at Affordable Prices</p>
                </div>
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="mt-4 md:mt-0 text-sm md:text-base text-red-500 border border-red-500 px-7 py-2 rounded-3xl hover:bg-red-500 hover:text-white transition"
                >
                    {showAll ? (
                        <div className="flex justify-center text-center items-center">
                            Hide All <FiArrowUpRight className="ml-1"/>
                        </div>
                    ) : (
                        <div className="flex justify-center text-center items-center">
                            View All <LuArrowDownLeft className="ml-1"/>
                        </div>
                    )}
                </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 max-w-6xl mx-auto">
                {/* Render the first 4 cards initially, and all 8 when showAll is true */}
                {[...Array(showAll ? 8 : 4)].map((_, index) => (
                    <ProductCard key={index} />
                ))}
            </div>
        </div>
        </div>
    );
};

export default ProductGrid;
