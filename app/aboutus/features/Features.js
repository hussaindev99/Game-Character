"use client"
import React, { useEffect } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsFillBoxFill } from "react-icons/bs";
import { RiChatSettingsLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

const Features = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Animation easing
      once: true, // Only animate once
    });
  }, []);

  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl px-4 mx-auto">
        <h2
          className="text-3xl font-bold text-center text-white mb-16"
          data-aos="fade-right"
        >
          Our <span className="text-purple-500">Features</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="relative text-center" data-aos="zoom-in">
            <div className="flex justify-center mb-4">
              <IoMdCheckmarkCircleOutline className="h-12 w-12 text-pink-500 mt-10" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              High-Quality Models
            </h3>
            <p className="text-gray-400 mt-3 w-full mx-6 md:w-80">
              All characters are designed with attention to detail to ensure
              they fit perfectly in your game world.
            </p>
            <div className="absolute top-0 left-0 w-full h-full mt-10 rounded-full border-b-4 border-dotted border-pink-500 opacity-50"></div>
          </div>

          {/* Feature 2 */}
          <div className="relative text-center" data-aos="zoom-in">
            <div className="flex justify-center mb-4">
              <BsFillBoxFill className="h-12 w-12 text-purple-500 mt-10" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              Instant Downloads
            </h3>
            <p className="text-gray-400 mt-3 w-full mx-6 md:w-80">
              After payment, characters are ready to be downloaded instantly for
              a hassle-free experience.
            </p>
            <div className="absolute top-0 left-0 w-full h-full rounded-full mb-10 border-t-4 border-dotted border-purple-500 opacity-50"></div>
          </div>

          {/* Feature 3 */}
          <div className="relative text-center" data-aos="zoom-in">
            <div className="flex justify-center mb-4">
              <RiChatSettingsLine className="h-12 w-12 text-pink-500 mt-10" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              Secure Payments
            </h3>
            <p className="text-gray-400 mt-3 w-full mx-6 md:w-80">
              We provide a highly secure payment gateway to protect your
              transactions and information.
            </p>
            <div className="absolute top-0 left-0 w-full h-full mt-10 rounded-[300px] border-b-4 border-dotted border-pink-500 opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
