"use client";
import { useState } from "react";
import Image from "next/image";
import Visa from "@/public/image/Visa.png";
import Mastercardlogo from "@/public/image/Mastercardlogo.png";
import Paypallogo from "@/public/image/PayPallogo.png";
import Bitcoin from "@/public/image/Bitcoin.png";
import AmazonPay from "@/public/image/AmazonPay.png";
import Klarna from "@/public/image/Klarna.png";
import Payoneer from "@/public/image/Payoneer.png";
import Etherium from "@/public/image/Etherium.png";

export default function Page() {
    const [cardNumber, setCardNumber] = useState("");
    const [nameOnCard, setNameOnCard] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [cvv, setCvv] = useState("");

    return (
        <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-80 px-4">
            <div className="bg-[#1a1a1a86] text-white rounded-2xl shadow-lg w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold">Add New Card</h2>
                    <button className="text-gray-400 hover:text-white text-2xl">&times;</button>
                </div>

                {/* Payment Icons */}
                <div className="flex flex-wrap justify-between gap-4 mb-6">
                    {[Visa, Mastercardlogo, Paypallogo, Bitcoin, AmazonPay, Klarna, Payoneer, Etherium].map((icon, index) => (
                        <Image key={index} src={icon} alt="Payment Icon" className="w-14" />
                    ))}
                </div>

                {/* Form */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm mb-1">Card Number</label>
                        <input
                            type="text"
                            value={cardNumber}
                            onChange={(e) => {
                                const inputCardNumber = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                                if (inputCardNumber.length <= 16) setCardNumber(inputCardNumber); // Allow only 16 digits
                            }}
                            className="w-full px-4 py-2 bg-[#2b2b2b] text-white rounded-md focus:outline-none"
                            placeholder="1234567812345678"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Name on Card</label>
                        <input
                            type="text"
                            value={nameOnCard}
                            onChange={(e) => setNameOnCard(e.target.value)}
                            className="w-full px-4 py-2 bg-[#2b2b2b] text-white rounded-md focus:outline-none"
                            placeholder="John Smith"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                        <div className="flex-1">
                            <label className="block text-sm mb-1">Month</label>
                            <select
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                                className="w-full px-4 py-3 bg-[#2b2b2b] text-white rounded-md focus:outline-none"
                            >
                                <option value="" disabled>Select Month</option>
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">August</option>
                                <option value="09">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </div>

                        <div className="flex-1">
                            <label className="block text-sm mb-1">Year</label>
                            <input
                                type="number"
                                value={year}
                                onChange={(e) => {
                                    const inputYear = e.target.value;
                                    if (inputYear.length <= 4) setYear(inputYear); // Ensure only 4 digits are entered
                                }}
                                className="w-full px-4 py-2 bg-[#2b2b2b] text-white rounded-md focus:outline-none"
                                placeholder="YYYY"
                            />
                        </div>

                        <div className="flex-1">
                            <label className="block text-sm mb-1">CVV</label>
                            <input
                                type="number"
                                value={cvv}
                                onChange={(e) => {
                                    const inputCvv = e.target.value;
                                    if (inputCvv.length <= 3) setCvv(inputCvv); // Allow only 3 digits
                                }}
                                className="w-full px-4 py-2 bg-[#2b2b2b] text-white rounded-md focus:outline-none"
                                placeholder="123"
                            />
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row justify-end space-y-4 md:space-y-0 md:space-x-6 items-center mt-6">
                    <button className="px-8 py-3 rounded-full bg-transparent border border-[#FD4960] text-[#FD4960] hover:bg-red-600 hover:text-white w-full md:w-auto">
                        Cancel
                    </button>
                    <button className="px-8 py-3 rounded-full bg-[#FD4960] text-white hover:bg-red-600 w-full md:w-auto">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
