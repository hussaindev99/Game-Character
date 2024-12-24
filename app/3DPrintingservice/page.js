"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import Footer from "../(component)/footer/Footer";
import Navbar from "../(component)/navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState("");

    // Initialize AOS on component mount
    useEffect(() => {
        AOS.init({
            duration: 2000, // Animation duration
            easing: "ease-in-out", // Easing function
            once: true, // Animation happens only once
        });
    }, []);

    // Handle file selection
    const handleFileUpload = (event) => {
        setFile(event.target.files[0]);
    };

    // Handle file drag-and-drop
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const uploadedFile = event.dataTransfer.files[0];
        setFile(uploadedFile);
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen mt-10 bg-black text-white">
                <div className="max-w-7xl mx-auto p-6">
                    {/* Heading */}
                    <h1
                        className="text-3xl font-bold mb-6 mt-10"
                        data-aos="fade-down"
                    >
                        3D{" "}
                        <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent hover:underline hover:underline-offset-8">
                            Printing Services
                        </span>
                    </h1>

                    {/* Service Cards */}
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8"
                        data-aos="fade-right"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500"
                    >
                        {/* Digital & Physical Models */}
                        <div className="bg-[#1b1b1b] p-8 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4">
                                Digital & Physical 3D Models
                            </h2>
                            <p className="text-gray-400 mb-6">
                                We offer both digital copies (.STL files) and physical copies
                                (3D printed models) of a wide range of designs. Choose from our
                                collection of models and get them in the format you prefer
                            </p>
                            <button className="bg-[#fd4960] hover:bg-[#ff2442] text-white py-3 px-12 rounded-full transition duration-300">
                                Browse Models
                            </button>
                        </div>

                        {/* Physical 3D Models Only */}
                        <div className="bg-[#1b1b1b] p-8 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4">
                                Physical 3D Models Only
                            </h2>
                            <p className="text-gray-400 mb-6">
                                We offer both digital copies (.STL files) and physical copies
                                (3D printed models) of a wide range of designs. Choose from our
                                collection of models and get them in the format you prefer
                            </p>
                            <button className="bg-[#fd4960] hover:bg-[#ff2442] text-white py-3 px-12 rounded-full transition duration-300">
                                View Physical Models
                            </button>
                        </div>

                        {/* Scanning Services */}
                        <div className="bg-[#1b1b1b] p-8 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4">Scanning Services</h2>
                            <p className="text-gray-400 mb-6">
                                We offer both digital copies (.STL files) and physical copies
                                (3D printed models) of a wide range of designs. Choose from our
                                collection of models and get them in the format you prefer
                            </p>
                            <button className="bg-[#fd4960] hover:bg-[#ff2442] text-white py-3 px-12 rounded-full transition duration-300">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* File Upload Section */}
                    <div
                        className="bg-[#1b1b1b] p-6 rounded-lg shadow-md text-center mb-8"
                        data-aos="fade-up"
                        
                    >
                        <h2 className="text-xl font-bold mb-4">
                            Custom 3D Printing Orders
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Have your own design? Upload your STL file, and we’ll review it to
                            provide you with a quote for 3D printing.
                        </p>

                        {/* Drag and Drop Area */}
                        <div
                            className="border-2 mx-4 sm:mx-16 md:mx-[18%] border-dashed border-gray-600 rounded-lg p-6 h-72 flex flex-col justify-center items-center cursor-pointer"
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                        >
                            {file ? (
                                <p className="text-gray-300">{file.name}</p>
                            ) : (
                                <div className="text-center">
                                    {/* Upload Icon */}
                                    <div className="h-14 mb-4 pt-3 ml-11 w-14 bg-gray-600 rounded-full flex justify-center items-center text-center">
                                        <AiOutlineUpload className="text-white text-3xl mx-auto mb-4" />
                                    </div>

                                    {/* Drag & Drop Text */}
                                    <div className="mb-4">
                                        <p className="text-white">Drag & Drop Image </p>
                                        <span className="mt-2 ">or</span>
                                    </div>

                                    {/* Styled Input Field */}
                                    <input
                                        type="file"
                                        onChange={handleFileUpload}
                                        className="hidden"
                                        id="fileInput"
                                    />
                                    <label
                                        htmlFor="fileInput"
                                        className="inline-block bg-transparent border border-[#fd4960] text-[#fd4960] hover:bg-[#fd4960] hover:text-white py-2 px-8 rounded-full transition cursor-pointer"
                                    >
                                        Browse file
                                    </label>
                                </div>
                            )}
                        </div>

                        {/* Input Field Below the Uploaded File */}
                        <div className="mt-6 mx-4 sm:mx-16 md:mx-[18%] rounded-lg">
                            <textarea
                                type="text"
                                placeholder="Add a description or additional details..."
                                className="w-full p-3 rounded-lg bg-[#0a0a0a] text-white h-64 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fd4960]"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <button className="mt-6 bg-[#fd4960] hover:bg-[#ff2442] text-white py-3 px-12 rounded-full transition duration-300">
                            Request for Quote
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Page;
