import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsFillBoxFill } from "react-icons/bs";
import { RiChatSettingsLine } from "react-icons/ri";

const Features = () => {
  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl  px-4 mx-[10%]">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          Our <span className="text-purple-500">Features</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-around items-center ">
          {/* Feature 1 */}
          <div className="relative text-center">
            <div className="flex justify-center mb-4">
              <IoMdCheckmarkCircleOutline className="h-12 w-12 text-pink-500 mt-10" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              High-Quality Models
            </h3>
            <p className="text-gray-400 mt-3 w-80 mx-6">
              All characters are designed with attention to detail to ensure
              they fit perfectly in your game world.
            </p>
            {/* Dotted Circle */}
            <div className=" absolute top-0 left-0 w-full h-full mt-10 rounded-full border-b-4 border-dotted border-pink-500 opacity-50" ></div>
          </div>

          {/* Feature 2 */}
          <div className="relative text-center">
            <div className="flex justify-center mb-4">
              <BsFillBoxFill className="h-12 w-12 text-purple-500 mt-10" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              Instant Downloads
            </h3>
            <p className="text-gray-400 mt-3 w-80 mx-6">
              After payment, characters are ready to be downloaded instantly for
              a hassle-free experience.
            </p>
            {/* Dotted Circle */}
            <div className="absolute top-0  left-0 w-full h-full rounded-full mb-10 border-t-4 border-dotted border-purple-500 opacity-50"></div>
          </div>

          {/* Feature 3 */}
          <div className="relative text-center">
            <div className="flex justify-center mb-4">
              <RiChatSettingsLine className="h-12 w-12 text-pink-500 mt-10" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              Secure Payments
            </h3>
            <p className="text-gray-400 mt-3 w-80 mx-6">
              We provide a highly secure payment gateway to protect your
              transactions and information.
            </p>
            {/* Dotted Circle */}
            <div className="absolute top-0 left-0 w-full  h-full mt-10 rounded-[300px] border-b-4 border-dotted border-pink-500 opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
