"use client";

import React, { useState } from "react";
import Image from "next/image";
import productImage from "@/public/image/product.png"; // Ensure this path is correct
import product1Image from "@/public/image/product1.png";
import bgimg from "@/public/image/ChaosBattltom.png";
import PopularProduct from "../searchviewall/popularproducts/PopularProducts";
import Navbar from "../(component)/navbar/Navbar";
import Footer from "../(component)/footer/Footer";

export default function Page() {

    const [quantity, setQuantity] = useState(1); // Default quantity
    const [isWishlisted, setIsWishlisted] = useState(false); // Wishlist state
    const [cart, setCart] = useState([]); // Cart state
    const [activeTab, setActiveTab] = useState("description");

    
    const product = {
        
        title: "Chaos Battltom",
        description:
            "Step into the chaotic realms where every decision shapes your fate. Command powerful armies and unleash devastating tactics to dominate the battlefield. Victory favors the bold in this high-stakes, action-packed strategy game.",
        price: "98.00",
        images: [
            productImage, // First image
            productImage, // Second image
            productImage, // Third image
            product1Image, // Fourth image (main image)
        ],

        
    };

    // Handlers
    const handleQuantityChange = (type) => {
        if (type === "decrease" && quantity > 1) {
            setQuantity(quantity - 1);
        } else if (type === "increase") {
            setQuantity(quantity + 1);
        }
    };

    const handleWishlistToggle = () => {
        setIsWishlisted(!isWishlisted);
    };

    const handleAddToCart = () => {
        setCart([...cart, { product, quantity }]);
        alert(`Added ${quantity} "${product.title}" to the cart!`);
    };

    return (
        <div className="bg-black">
            <Navbar />
            <div className="mt-14">
                <div
                    className="relative bg-cover bg-center bg-no-repeat text-white py-24 px-6"
                    style={{
                        backgroundImage: `url(${bgimg.src})`, // Background Image
                    }}
                >
                    {/* Heading */}
                    <h1 className="text-4xl md:text-6xl font-bold text-center uppercase tracking-wide">
                        Chaos Battletome
                    </h1>
                </div>
            </div>

            <div className="min-h-screen bg-black text-white flex flex-col">
                {/* Back Button */}
                <div className="p-4 mx-4 my-5 md:ml-24">
                    <button className="text-xl font-semibold">&larr; Back</button>
                </div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start mx-auto px-4 gap-8 max-w-6xl">
                    {/* Left Images */}
                    <div className="flex flex-col md:flex-col gap-4 justify-center md:justify-start overflow-hidden no-scrollbar">
                        {product.images.slice(0, 4).map((src, index) => (
                            <div
                                key={index}
                                className="w-24 h-24 md:w-28 md:h-28 bg-gray-800 rounded-lg overflow-hidden "
                            >
                                <Image
                                    src={src}
                                    alt={`Product Thumbnail ${index + 1}`}
                                    width={112}
                                    height={112}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Right Main Image */}
                    <div className="w-full md:w-auto">
                        <div className="w-full h-64 md:w-[500px] md:h-[500px] bg-gray-800 rounded-lg overflow-hidden mx-auto">
                            <Image
                                src={product.images[3]} // Use the fourth image as the main image
                                alt="Main Product Image"
                                width={500}
                                height={500}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="max-w-md mx-auto mt-10 text-center md:text-left">
                        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
                        <p className="text-gray-300 mb-6 mt-10">{product.description}</p>
                        <div className="text-2xl font-semibold mb-4">${product.price}</div>

                        {/* Quantity and Actions */}
                        <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                            {/* Quantity Selector */}
                            <div className="flex items-center border border-gray-600 rounded-md">
                                <button
                                    onClick={() => handleQuantityChange("decrease")}
                                    className="px-3 py-2 text-lg"
                                >
                                    -
                                </button>
                                <span className="px-4 py-2">{quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange("increase")}
                                    className="px-3 py-2 text-lg"
                                >
                                    +
                                </button>
                            </div>

                            {/* Wishlist Button */}
                            <button
                                onClick={handleWishlistToggle}
                                className={`text-xl border border-gray-600 rounded-full w-10 h-10 flex justify-center items-center ${isWishlisted ? "bg-red-600 text-white" : ""
                                    }`}
                                aria-label="Add to Wishlist"
                            >
                                ❤️
                            </button>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={handleAddToCart}
                            className="flex items-center justify-center gap-2 border border-red-500 text-red-500 text-lg py-3 px-10 rounded-full hover:bg-red-500 hover:text-white transition-colors w-full md:w-auto"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1 5h13m-3-5a1 1 0 011 1v1a1 1 0 01-1 1m-10 0a1 1 0 011-1v-1a1 1 0 00-1-1"
                                />
                            </svg>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>




            <div className="bg-black mx-[4%] text-white p-6 md:p-10 lg:p-16">
                {/* Tab Buttons */}
                <div className="flex gap-6 border-b border-gray-700">
                    <button
                        onClick={() => setActiveTab("description")}
                        className={`px-4 py-2 text-sm md:text-base font-semibold transition-colors ${activeTab === "description"
                            ? "border-b-2 border-red-500 text-red-500"
                            : "text-gray-400"
                            }`}
                    >
                        DESCRIPTION
                    </button>
                    <button
                        onClick={() => setActiveTab("reviews")}
                        className={`px-4 py-2 text-sm md:text-base font-semibold transition-colors ${activeTab === "reviews"
                            ? "border-b-2 border-red-500 text-red-500"
                            : "text-gray-400"
                            }`}
                    >
                        REVIEWS
                    </button>
                </div>

                {/* Tab Content */}
                <div className="mt-6">
                    {activeTab === "description" && (
                        <div>
                            {/* Intro Paragraph */}
                            <p className="text-sm md:text-base leading-relaxed text-gray-300">
                                Discover premium, game-ready 3D models crafted for wargaming, tabletop RPGs, and video game and 3D development. Our collection features meticulously designed characters, terrains, and accessories. Whether you’re developing a digital world or creating stunning physical miniatures, our models deliver unparalleled detail and flexibility.
                            </p>
                            {/* Bullet Points Section */}
                            <ul className="mt-6 space-y-6 list-none">
                                {/* High Quality 3D Models */}
                                <li className="flex items-center gap-4">
                                    <span className="font-bold text-white text-lg">
                                        High Quality 3D Models:
                                    </span>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        All models are crafted with intricate detail, ensuring they are perfect for both.
                                    </p>
                                </li>

                                {/* Optimized for Game Engines */}
                                <li className="flex items-center gap-4">
                                    <span className="font-bold text-white text-lg">
                                        Optimized for Game Engines:
                                    </span>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        All models are crafted with intricate detail, ensuring they are perfect.
                                    </p>
                                </li>

                                {/* Versatile Use */}
                                <li className="flex items-center gap-4">
                                    <span className="font-bold text-white text-lg">
                                        Versatile Use:
                                    </span>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        All models are crafted with intricate detail, ensuring they are perfect for both digital and physical use.
                                    </p>
                                </li>
                            </ul>
                            <div className="border-b border-gray-700 mt-14"></div>
                        </div>
                    )}

                    {activeTab === "reviews" && (
                        <div>
                            <p className="text-sm md:text-base text-gray-300">
                                No reviews yet. Be the first to review this product!
                            </p>
                        </div>
                    )}
                </div>
            </div>


            <PopularProduct />

            <Footer />
        </div>
    );
}
