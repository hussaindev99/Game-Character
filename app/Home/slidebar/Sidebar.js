"use client";
import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Header from "../header/Header";

export default function Sidebar() {
    const [isCategoryOpen, setIsCategoryOpen] = useState(true);
    const [isScaleOpen, setIsScaleOpen] = useState(true);
    const [isBudgetOpen, setIsBudgetOpen] = useState(true);

    // State for budget inputs
    const [minPrice, setMinPrice] = useState(12);
    const [maxPrice, setMaxPrice] = useState(238);
    const [sliderValue, setSliderValue] = useState(maxPrice);

    // Handle slider change
    const handleSliderChange = (e) => {
        const value = parseInt(e.target.value);
        setSliderValue(value);
        setMaxPrice(value); // Update "To" input field
    };

    return (
        <>
            <div className="flex flex-col md:flex-row mt-5">
                {/* Sidebar */}
                <div className="mt-12 left-0 top-0 w-full md:w-60 bg-black text-white p-4 overflow-y-auto">
                    {/* Categories Section */}
                    <div className="mb-6">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                        >
                            <p className="text-lg font-semibold">Categories</p>
                            {isCategoryOpen ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        {isCategoryOpen && (
                            <>
                                <div className="relative mt-3">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="w-full p-2 text-black rounded outline-none"
                                    />
                                    <CiSearch className="absolute text-black right-3 top-3 text-lg" />
                                </div>

                                {/* Scale Section */}
                                <div className="mt-4">
                                    <div
                                        className="flex justify-between items-center cursor-pointer"
                                        onClick={() => setIsScaleOpen(!isScaleOpen)}
                                    >
                                        <p className="font-semibold">Scale</p>
                                        {isScaleOpen ? <FaAngleUp /> : <FaAngleDown />}
                                    </div>
                                    {isScaleOpen && (
                                        <div className="ml-4 mt-2 space-y-2">
                                            <p>28mm</p>
                                            <p>32mm</p>
                                            <p>75mm</p>
                                        </div>
                                    )}
                                </div>

                                {/* Budget Section */}
                                <div className="mb-6">
                                    <div
                                        className="flex justify-between items-center cursor-pointer"
                                        onClick={() => setIsBudgetOpen(!isBudgetOpen)}
                                    >
                                        <p className="text-lg font-semibold">Budget</p>
                                        {isBudgetOpen ? <FaAngleUp /> : <FaAngleDown />}
                                    </div>
                                    {isBudgetOpen && (
                                        <>
                                            <div className="items-center mt-4 space-x-2">
                                                <div className="flex items-center justify-between">
                                                    <p>From</p>
                                                    <p>To</p>
                                                </div>
                                                <div className="flex">
                                                    <input
                                                        type="number"
                                                        value={minPrice}
                                                        onChange={(e) => setMinPrice(Number(e.target.value))}
                                                        className="ml-[-10px] w-2/3 p-1 text-black rounded outline-none text-center"
                                                    />
                                                    <p className="mx-4 text-2xl">-</p>
                                                    <input
                                                        type="number"
                                                        value={maxPrice}
                                                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                                                        className="w-2/3 p-1 text-black rounded outline-none text-center"
                                                    />
                                                </div>
                                            </div>

                                            {/* Slider */}
                                            <div className="mt-4">
                                                <input
                                                    type="range"
                                                    min={minPrice}
                                                    max={5000}
                                                    value={sliderValue}
                                                    onChange={handleSliderChange}
                                                    className="w-full h-2 cursor-pointer appearance-none rounded-full"
                                                    style={{
                                                        background: `linear-gradient(to right, #FD4960 ${((sliderValue - minPrice) / (5000 - minPrice)) * 100
                                                            }%, white ${((sliderValue - minPrice) / (5000 - minPrice)) * 100
                                                            }%)`,
                                                    }}
                                                />
                                                <style jsx>{`
    input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: #fd4960;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        border: 2px solid white;
    }

    input[type='range']::-moz-range-thumb {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: #fd4960;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        border: 2px solid white;
    }

    input[type='range']::-webkit-slider-runnable-track {
        height: 8px;
        border-radius: 10px;
    }

    /* Hide spinner buttons but keep the number input functional */
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type='number'] {
        appearance: textfield; /* Keeps number input functional */
    }
`}</style>
                                            </div>

                                            <div className="mt-4">
                                                <p>Add Custom</p>
                                                <input
                                                    type="text"
                                                    className="w-full p-2 text-black rounded outline-none mt-2"
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    <Header />
                </div>

            </div>

        </>
    );
}
