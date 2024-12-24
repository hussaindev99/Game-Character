"use client";
import React, { useState } from "react";
import Image from "next/image";
import productImage from "@/public/image/product.png"; // Replace with your product image
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../(component)/navbar/Navbar";
import Footer from "../(component)/footer/Footer";
import Link from "next/link";

const ShoppingCart = () => {
    // Initial Cart Data
    const [cart, setCart] = useState([
        { id: 1, name: "Chaos Battlem", price: 98, quantity: 2 },
        { id: 2, name: "Chaos Battlem", price: 98, quantity: 1 },
        { id: 3, name: "Chaos Battlem", price: 98, quantity: 3 },
    ]);

    const [discountCode, setDiscountCode] = useState("");
    const [CardNum, setCardNum] = useState("");
    const [discountApplied, setDiscountApplied] = useState(false);

    // Update Quantity
    const updateQuantity = (id, delta) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
                    : item
            )
        );
    };

    // Remove Item
    const removeItem = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    // Calculate Totals
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = Math.round(subtotal * 0.05); // 5% Tax
    const shipping = cart.length > 0 ? 29 : 0; // Flat shipping fee
    const total = subtotal + tax + shipping - (discountApplied ? 20 : 0); // Discount of $20

    // Apply Discount
    const applyDiscount = () => {
        if (discountCode === "SAVE20") {
            setDiscountApplied(true);
            alert("Discount applied!");
        } else {
            alert("Invalid discount code.");
        }
    };

    return (
        <>
        <Navbar />
        <div className="min-h-screen bg-black text-white p-8 mt-7">
            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <button className="mb-6 text-sm flex items-center space-x-2">
                    <FaArrowLeft />
                    <span>Back</span>
                </button>

                {/* Main Container */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Product List */}
                    <div className="lg:col-span-2 space-y-14">
                        <h1 className="text-2xl font-semibold">Shopping Cart</h1>
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between border-b border-gray-700 pb-10"
                            >
                                <div className="flex items-center">
                                    {/* Product Image */}
                                    <Image
                                        src={productImage}
                                        alt="Product"
                                        width={70}
                                        height={70}
                                        className="rounded"
                                    />
                                    <div className="ml-4">
                                        <h2 className="font-semibold text-sm sm:text-base">{item.name}</h2>
                                        <p className="text-gray-400 text-xs sm:text-sm">Lorem ipsum</p>
                                    </div>
                                </div>
                                {/* Price & Quantity */}
                                <div className="flex items-center">
                                    <p className="font-semibold text-lg mr-6">${item.price}</p>
                                    <div className="flex items-center border border-gray-700 rounded">
                                        <button
                                            onClick={() => updateQuantity(item.id, -1)}
                                            className="px-2 py-1 border-r border-gray-700"
                                        >
                                            -
                                        </button>
                                        <p className="px-3">{item.quantity}</p>
                                        <button
                                            onClick={() => updateQuantity(item.id, 1)}
                                            className="px-2 py-1 border-l border-gray-700"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                {/* Remove Icon */}
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-gray-400 hover:text-red-500 ml-4"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="bg-[#1B1B1B] p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                        <div className="space-y-4">
                            {/* Discount Code */}
                            <div>
                                <label className="block text-sm mb-2">
                                    Discount code / Promo code
                                </label>
                                <input
                                    type="text"
                                    placeholder="Code"
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                    className="w-full px-3 py-2 rounded border border-gray-700 text-black outline outline-1 outline-gray-900"
                                />
                                <label className="block text-sm mb-2 mt-2">
                                    Your bonus card number
                                </label>
                                <input
                                    type="number"
                                    placeholder="Enter Card Number"
                                    value={CardNum}
                                    onChange={(e) => setCardNum(e.target.value)}
                                    className="w-full px-3 py-2 rounded border border-gray-700 text-black outline outline-1 outline-gray-900"
                                />
                                <button
                                    onClick={applyDiscount}
                                    className="w-full bg-[#fd4960] hover:bg-red-600 px-4 py-2 mt-4 rounded"
                                >
                                    Apply
                                </button>
                            </div>
                        </div>
                        <hr className="my-4 border-gray-700" />
                        {/* Order Details */}
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${subtotal}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Estimated Tax</span>
                                <span>${tax}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Estimated Shipping & Handling</span>
                                <span>${shipping}</span>
                            </div>
                            {discountApplied && (
                                <div className="flex justify-between text-green-500">
                                    <span>Discount</span>
                                    <span>-$20</span>
                                </div>
                            )}
                        </div>
                        <hr className="my-4 border-gray-700" />
                        {/* Total */}
                        <div className="flex justify-between text-lg font-semibold">
                            <span>Total</span>
                            <span>${total}</span>
                        </div>
                        {/* Checkout Button */}
                        <Link href="/Payment">
                        <button className="w-full mt-6 py-3 bg-[#fd4960] hover:bg-red-600 rounded text-white font-semibold">
                            Checkout
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
            <style jsx>{`
                input[type="number"]::-webkit-inner-spin-button,
                input[type="number"]::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
                input[type="number"] {
                    -moz-appearance: textfield; /* Firefox */
                }
            `}</style>
        </div>
        <Footer />
        </>
    );
};

export default ShoppingCart;







