"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import productImage from "@/public/image/product.png"; // Ensure this path is correct
import product1Image from "@/public/image/product1.png";
import bgimg from "@/public/image/ChaosBattltom.png";
import "aos/dist/aos.css"; // Import AOS styles
import { FaRegHeart } from "react-icons/fa";
import AOS from "aos";

export default function Page() {
    const [quantity, setQuantity] = useState(1); // Default quantity
    const [isWishlisted, setIsWishlisted] = useState(false); // Wishlist state
    const [cart, setCart] = useState([]); // Cart state

    const product = {
        title: "Chaos Battletome",
        description:
            "Step into the chaotic realms where every decision shapes your fate. Command powerful armies and unleash devastating tactics to dominate the battlefield. Victory favors the bold in this high-stakes, action-packed strategy game.",
        price: "98.00",
        images: [
            productImage,
            productImage,
            productImage,
            product1Image, // Fourth image (main image)
        ],
    };

    // Initialize AOS on component mount
    useEffect(() => {
        AOS.init();
    }, []);

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
            {/* Hero Section */}
            <div className="mt-14">
                <div
                    className="relative bg-cover bg-center bg-no-repeat text-white py-24 px-6"
                    style={{
                        backgroundImage: `url(${bgimg.src})`,
                    }}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-center uppercase tracking-wide">
                        Chaos Battletome
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="min-h-screen bg-black text-white flex flex-col">
                {/* Back Button */}
                <div className="p-4 mx-4 my-5 md:ml-24">
                    <button
                        className="text-xl font-semibold"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        &larr; Back
                    </button>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center md:items-start mx-auto px-4 gap-8 max-w-6xl">
                    {/* Thumbnail Images */}
                    <div
                        className="flex flex-row md:flex-col gap-4 overflow-x-scroll md:overflow-visible no-scrollbar"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        {product.images.slice(0, 4).map((src, index) => (
                            <div
                                key={index}
                                className="w-20 h-20 md:w-28 md:h-28 bg-gray-800 rounded-lg overflow-hidden"
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

                    {/* Main Product Image */}
                    <div className="w-full md:w-auto">
                        <div
                            className="w-full h-64 md:w-[500px] md:h-[500px] bg-gray-800 rounded-lg overflow-hidden mx-auto"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            <Image
                                src={product.images[3]}
                                alt="Main Product Image"
                                width={500}
                                height={500}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Product Details */}
                    <div
                        className="max-w-md mx-auto mt-10 text-center md:text-left"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.title}</h1>
                        <p className="text-gray-300 mb-6 mt-5 text-sm md:text-base">
                            {product.description}
                        </p>
                        <div className="text-2xl font-semibold mb-4">${product.price}</div>

                        {/* Quantity and Wishlist */}
                        <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                            <div className="flex items-center border border-gray-600 rounded-md">
                                <button
                                    onClick={() => handleQuantityChange("decrease")}
                                    className="px-3 py-2 text-lg border-r border-gray-500"
                                >
                                    -
                                </button>
                                <span className="px-4 py-2">{quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange("increase")}
                                    className="px-3 py-2 text-lg border-l border-gray-500"
                                >
                                    <p>+</p>
                                </button>
                            </div>
                            <button
                                onClick={handleWishlistToggle}
                                className={`text-xl border border-gray-600 rounded-full w-10 h-10 flex justify-center items-center ${isWishlisted ? "bg-red-600 text-black" : ""
                                    }`}
                                aria-label="Add to Wishlist"
                            >
                                <FaRegHeart />
                            </button>
                        </div>

                        {/* Add to Cart */}
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
        </div>
    );
}
