"use client"
import React, { useEffect } from "react";
import kristinwatson from "@/public/image/kristinwatson.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const ProcessWork = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000, // Animation duration in ms
            easing: "ease-in-out", // Animation easing
            once: true, // Animation runs once on scroll
        });
    }, []);

    const steps = [
        {
            id: 1,
            title: "Digital",
            description:
                "Explore our wide selection of premium, customizable game characters. Use filters to find exactly what fits your needs.",
        },
        {
            id: 2,
            title: "Physical",
            description:
                "Select your favorite characters and add them to your cart. You can choose multiple characters for your game.",
        },
        {
            id: 3,
            title: "Submission",
            description:
                "Complete the checkout process with our secure payment gateway. We ensure all transactions are safe and encrypted.",
        },
        {
            id: 4,
            title: "Scanning",
            description:
                "Once payment is confirmed, your characters are available for immediate download in the format that you set.",
        },
    ];

    return (
        <>
            <section
                className="bg-gradient-to-tr from-[#e94e963d] via-black to-[#002fff3d] text-white py-16 px-4"
                data-aos="fade-up"
            >
                <div className="max-w-6xl mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        The Process : <span className="font-bold">How</span>{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6757D0] to-blue-500"> We Work</span>
                    </h2>
                    <p
                        className="text-gray-300 text-lg mb-12 text-center px-4 md:px-[12%]"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        After we+{'’'}ve broken the ice, our masterminds lock themselves in a room
                        to brainstorm how we can best reflect your brand creatively. We don{'’'}t
                        let ourselves out till we are satisfied with the results!
                    </p>

                    {/* Steps */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className="bg-[#1b1b1ba8] bg-opacity-90 rounded-lg p-6 shadow-lg hover:shadow-xl transition"
                                data-aos="zoom-in"
                                data-aos-delay={`${index * 200}`}
                            >
                                {/* Circle with Step Number */}
                                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#e94e96] via-[#A041AA] to-[#002fff] text-white rounded-full text-2xl font-bold mb-4 mx-auto">
                                    {step.id}
                                </div>
                                {/* Step Title */}
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                {/* Step Description */}
                                <p className="text-gray-400 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full max-w-6xl p-9 mx-auto" data-aos="fade-up">
                    <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold mb-4 text-white flex justify-between">
                        What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">Client Says</span>
                    </h2>
                    <div className="flex justify-center">
                        <button className="text-gray-500 h-10 w-10 bg-[#1b1b1b] rounded-full flex justify-center items-center outline outline-1 outline-gray-400 hover:outline-white hover:text-white focus:outline-none mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="text-gray-500 h-10 w-10 bg-[#1b1b1b] rounded-full flex justify-center items-center outline outline-1 outline-gray-400 hover:outline-white hover:text-white focus:outline-none mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-4"
                    data-aos="zoom-in"
                >
                    {/* Testimonial Card */}
                    <div className="bg-[#1b1b1b] p-14 rounded-lg w-full sm:w-[60%] flex">
                        <p className="w-0.5 h-28 bg-[#E31B61]"></p>
                        <div className="w-[95%]">
                            <p className="text-[16px] text-gray-300 mb-4 ml-5">
                                “Lorem ipsum dolor sit amet elit, consectetur adipiscing elit. Vivamus sit amet elit massa tincidunt elit blandit et eu sem. Bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“
                            </p>
                            <div className="flex items-center mt-10 -ml-3">
                                <Image src={kristinwatson} alt="User Image" width={50} height={50} className="rounded-full mr-3" />
                                <div>
                                    <h3 className="text-base font-semibold">Kristin Watson</h3>
                                    <p className="text-xs text-gray-400">Fashion Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Duplicate the card for another testimonial */}
                    <div className="bg-[#1b1b1b] p-14 rounded-lg w-full sm:w-[60%] flex">
                        <p className="w-0.5 h-28 bg-[#E31B61]"></p>
                        <div className="w-[95%]">
                            <p className="text-[16px] text-gray-300 mb-4 ml-5">
                                “Lorem ipsum dolor sit amet elit, consectetur adipiscing elit. Vivamus sit amet elit massa tincidunt elit blandit et eu sem. Bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“
                            </p>
                            <div className="flex items-center mt-10 -ml-3">
                                <Image src={kristinwatson} alt="User Image" width={50} height={50} className="rounded-full mr-3" />
                                <div>
                                    <h3 className="text-base font-semibold">Kristin Watson</h3>
                                    <p className="text-xs text-gray-400">Fashion Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default ProcessWork;
