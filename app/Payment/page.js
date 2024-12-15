"use client";
import React, { useState } from "react";
import Image from "next/image";
import product from "@/public/image/product.png";
import creditcard from "@/public/image/CreditCard.png";
import paypal from "@/public/image/paypalcards.jpg";
import mastercard from "@/public/image/masterpaypalcard.png";
import Navbar from "../(component)/navbar/Navbar";

const Payment = () => {
    const [activeMethod, setActiveMethod] = useState("Credit Card");
    const [creditCardData, setCreditCardData] = useState({
        cardholderName: "",
        cardNumber: "",
        expDate: "",
        cvv: "",
    });
    const [paypalData, setPaypalData] = useState({
        email: "",
        password: "",
    });
    const [paypalCreditData, setPaypalCreditData] = useState({
        username: "",
        pin: "",
    });

    const validateCreditCardForm = () => {
        const { cardholderName, cardNumber, expDate, cvv } = creditCardData;
        if (!cardholderName || !cardNumber || !expDate || !cvv) {
            alert("Please fill all required fields for Credit Card!");
            return false;
        }
        if (cardNumber.length !== 16) {
            alert("Card Number must be 16 digits!");
            return false;
        }
        if (cvv.length !== 3) {
            alert("CVV must be 3 digits!");
            return false;
        }
        return true;
    };

    const validatePaypalForm = () => {
        const { email, password } = paypalData;
        if (!email || !password) {
            alert("Please fill all required fields for PayPal!");
            return false;
        }
        return true;
    };

    const validatePaypalCreditForm = () => {
        const { username, pin } = paypalCreditData;
        if (!username || !pin) {
            alert("Please fill all required fields for PayPal Credit!");
            return false;
        }
        return true;
    };

    const handleCheckout = () => {
        let isValid = false;
        if (activeMethod === "Credit Card") {
            isValid = validateCreditCardForm();
        } else if (activeMethod === "PayPal") {
            isValid = validatePaypalForm();
        } else if (activeMethod === "PayPal Credit") {
            isValid = validatePaypalCreditForm();
        }
        
        if (isValid) {
            alert("Payment Successful!");
        }
    };

    const handleInputChange = (e, method) => {
        const { name, value } = e.target;
        if (method === "Credit Card") {
            setCreditCardData((prev) => ({ ...prev, [name]: value }));
        } else if (method === "PayPal") {
            setPaypalData((prev) => ({ ...prev, [name]: value }));
        } else if (method === "PayPal Credit") {
            setPaypalCreditData((prev) => ({ ...prev, [name]: value }));
        }
    };

    return (
        <>
    <Navbar />
    <p className="text-3xl font-bold mx-4 mt-24 text-center md:text-left">Payment</p>
    <div className="min-h-screen bg-black text-white p-4 flex justify-center items-center">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row shadow-lg space-y-6 lg:space-y-0">

            {/* Summary Section */}
            <div className="w-full mx-[2.5%] lg:w-1/2 p-6 bg-[#1B1B1B] rounded-xl">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="space-y-4">
                    {Array(3).fill().map((_, index) => (
                        <div key={index} className="flex items-center justify-between bg-white text-black rounded-md p-2">
                            <div className="flex items-center space-x-4">
                                <Image src={product} alt="Product" className="w-12 h-12 rounded-md" />
                                <span>Chaos Battleborn</span>
                            </div>
                            <span>$98</span>
                        </div>
                    ))}
                </div>
                <div className="mt-6">
                    <div className="text-sm space-y-2">
                        <p className="text-lg">Address</p>
                        <p className="text-gray-400">1831 Dusty Townline, Jacksonville, TX 40322</p>
                    </div>
                    <div className="text-sm space-y-2 mt-4">
                        <p className="text-lg">Shipment method</p>
                        <p className="text-gray-400">Free</p>
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>$2347</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span>Estimated Tax</span>
                            <span>$50</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span>Estimated Shipping & Handling</span>
                            <span>$29</span>
                        </div>
                        <div className="flex justify-between mt-4 font-semibold">
                            <span>Total</span>
                            <span>$2426</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Section */}
            <div className="w-full lg:w-1/2 p-6 rounded-lg mx-[2.5%] bg-[#1B1B1B]">
                <h2 className="text-lg font-semibold mb-4">Payment</h2>
                <div className="flex flex-wrap space-x-4 mb-6 justify-center lg:justify-start">
                    {["Credit Card", "PayPal", "PayPal Credit"].map((method) => (
                        <button
                            key={method}
                            onClick={() => setActiveMethod(method)}
                            className={`px-4 py-2 rounded-md ${activeMethod === method ? "text-blue-500" : "hover:underline hover:underline-offset-8"}`}
                        >
                            {method}
                        </button>
                    ))}
                </div>

                {/* Display Image based on active payment method */}
                {activeMethod === "Credit Card" && (
                    <Image src={creditcard} alt="Credit Card Payment" className="mb-4 w-full md:w-[383px] h-[216px] rounded-2xl mx-auto" />
                )}
                {activeMethod === "PayPal" && (
                    <Image src={paypal} alt="PayPal Payment" className="mb-4 w-full md:w-[383px] h-[216px] rounded-2xl mx-auto" />
                )}
                {activeMethod === "PayPal Credit" && (
                    <Image src={mastercard} alt="PayPal Credit Payment" className="mb-4 w-full md:w-[383px] h-[216px] rounded-lg mx-auto" />
                )}

                {/* Payment Form */}
                <form className="space-y-4 mt-4">
                    {activeMethod === "Credit Card" && (
                        <>
                            <input
                                type="text"
                                name="cardholderName"
                                placeholder="Cardholder Name"
                                value={creditCardData.cardholderName}
                                onChange={(e) => handleInputChange(e, "Credit Card")}
                                className="w-full px-4 py-3 bg-white rounded-md text-black focus:outline-none"
                            />
                            <input
                                type="number"
                                name="cardNumber"
                                placeholder="Card Number"
                                value={creditCardData.cardNumber}
                                onChange={(e) => handleInputChange(e, "Credit Card")}
                                className="w-full px-4 py-3 bg-white rounded-md text-black focus:outline-none"
                            />
                            <div className="flex space-x-4">
                                <input
                                    type="date"
                                    name="expDate"
                                    placeholder="Exp. Date"
                                    value={creditCardData.expDate}
                                    onChange={(e) => handleInputChange(e, "Credit Card")}
                                    className="w-1/2 px-4 py-3 bg-white rounded-md text-black focus:outline-none"
                                />
                                <input
                                    type="number"
                                    name="cvv"
                                    placeholder="CVV"
                                    value={creditCardData.cvv}
                                    onChange={(e) => handleInputChange(e, "Credit Card")}
                                    className="w-1/2 px-4 py-3 bg-white rounded-md text-black focus:outline-none"
                                />
                            </div>
                        </>
                    )}
                    {activeMethod === "PayPal" && (
                        <>
                            <input
                                type="email"
                                name="email"
                                placeholder="PayPal Email"
                                value={paypalData.email}
                                onChange={(e) => handleInputChange(e, "PayPal")}
                                className="w-full px-4 py-3 bg-white rounded-md text-black focus:outline-none"
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="PayPal Password"
                                value={paypalData.password}
                                onChange={(e) => handleInputChange(e, "PayPal")}
                                className="w-full px-4 py-3 bg-white rounded-md text-black focus:outline-none"
                            />
                        </>
                    )}
                    {activeMethod === "PayPal Credit" && (
                        <>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={paypalCreditData.username}
                                onChange={(e) => handleInputChange(e, "PayPal Credit")}
                                className="w-full px-4 py-3 bg-white rounded-md text-black focus:outline-none"
                            />
                            <input
                                type="password"
                                name="pin"
                                placeholder="PIN"
                                value={paypalCreditData.pin}
                                onChange={(e) => handleInputChange(e, "PayPal Credit")}
                                className="w-full px-4 py-3 bg-white rounded-md text-black focus:outline-none"
                            />
                        </>
                    )}

                    <button
                        type="button"
                        onClick={handleCheckout}
                        className="w-full py-3 bg-blue-500 text-white rounded-md"
                    >
                        Checkout
                    </button>
                </form>
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
</>

    );
};

export default Payment;
