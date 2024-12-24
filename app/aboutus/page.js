"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import gamecharacter from "@/public/image/gamecharacter.png";
import Features from "./features/Features";
import ProcessWork from "./processwork/ProcessWork";
import Footer from "../(component)/footer/Footer";
import Navbar from "../(component)/navbar/Navbar";

const AnimatedSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-out", once: true });
    }, []);

    return (
        <>
            <Navbar />
            <div className="flex mt-9  items-center justify-center h-screen bg-black text-white">
                <div
                    className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl p-6 rounded-lg shadow-lg relative overflow-hidden"
                >
                    {/* Background Overlay */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            background:
                                "linear-gradient(to bottom right, rgba(0,0,0,0.6), transparent 70%)",
                        }}
                    ></div>

                    {/* Content Section */}
                    <div
                        className="md:w-1/2 p-6 relative z-10 text-center md:text-left"
                        data-aos="fade-right"
                    >
                        <button
                            className="text-white px-4 py-2 rounded mb-4"
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(255,0,150,0.8), rgba(0,0,255,0.7))",
                            }}
                        >
                            What About Us
                        </button>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
                            Unleash Creativity with{" "}
                            <span
                                style={{
                                    backgroundImage:
                                        "linear-gradient(135deg, rgba(255,0,150,0.8), rgba(0,0,255,0.7))",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Premium Game Characters
                            </span>
                        </h2>

                        <p className="text-lg text-gray-300 mb-6">
                            Our platform is your ultimate destination for downloading premium
                            game characters. Designed for gamers and developers alike, we bring
                            you a diverse collection of high-quality, customizable characters.
                            Our seamless payment system ensures quick and secure downloads, so
                            you can focus on creating and playing incredible games. Join us and
                            unlock the potential of your next adventure!
                        </p>
                        <a
                            href="#"
                            className="bg-[#FD4960] text-white px-7 py-3 rounded-3xl hover:bg-[#c03044] transition duration-200"
                        >
                            Explore Characters
                        </a>
                    </div>

                    {/* Image Section */}
                    <div
                        className="md:w-1/2 flex items-center justify-center relative z-10 mt-6 md:mt-0"
                        data-aos="fade-left"
                    >
                        <Image
                            src={gamecharacter}
                            alt="Gaming Character"
                            className="rounded-lg shadow-lg w-full md:w-auto"
                        />
                    </div>
                </div>
            </div>


            <Features />
            <ProcessWork />
            <Footer />
        </>
    );
};

export default AnimatedSection;
