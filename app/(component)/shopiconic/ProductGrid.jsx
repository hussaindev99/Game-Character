"use client";
import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import productImage from "@/public/image/product.png";
import { FiArrowUpRight } from "react-icons/fi";
import { LuArrowDownLeft } from "react-icons/lu";

const ProductCard = () => {
    return (
        <div className="bg-[#161616] p-4 rounded-lg shadow-lg text-white">
            <Image src={productImage} alt="Product" className="rounded-lg" width={300} height={200} />
            <h2 className="text-lg mt-4">Chaos Battletome</h2>
            <p className="text-gray-400">$98.00</p>
            <button className="flex items-center justify-center mt-4 w-full py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm transition">
                <IoCartOutline className="mr-2" /> Add to Cart
            </button>
        </div>
    );
};

const ProductGrid = () => {
    const [showAll, setShowAll] = useState(false);

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white py-16 px-28">
            <div className="container mx-auto flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-semibold">
                        Shop Iconic <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 ">3D Characters</span>
                    </h1>
                    <p className="text-gray-400 mt-2">Detailed, Handcrafted Figures at Affordable Prices</p>
                </div>
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="mt-4 text-sm text-red-500 border border-red-500 px-7 py-2 rounded-3xl hover:bg-red-500 hover:text-white transition"
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 max-w-6xl mx-auto">
                {/* Render the first 4 cards initially, and all 8 when showAll is true */}
                {[...Array(showAll ? 8 : 4)].map((_, index) => (
                    <ProductCard key={index} />
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
