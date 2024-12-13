// components/WarhammerSection.js
"use client";
import React from "react";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import warhammerLogo from "@/public/image/warriorlogo.png";
import warhammerImage from "@/public/image/warrior.png";

const WARHAMMER = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-l from-gray-900 via-black to-[#912a2a6b] p-8 rounded-lg shadow-lg w-full mx-auto">
      {/* Left Section: Text and Button */}
      <div className="w-1/2 text-white px-24 space-y-6">
        <Image src={warhammerLogo} alt="Warhammer Logo" className="h-16 w-52" width={150} height={100} />
        <h1 className="text-4xl font-bold text-yellow-400">WARHAMMER AGE OF SIGMAR</h1>
        <p className="text-lg text-gray-300">
          Use our specialist motion graphics agency and access highly skilled motion designers giving you access to modern.
        </p>
        <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-lg text-lg">
          Buy Now
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="relative w-1/2 flex justify-center items-center">
        <Image
          src={warhammerImage}
          alt="Warhammer Age of Sigmar"
          className="rounded-lg"
          width={500}
          height={300}
        />
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600">
          <MdArrowForwardIos size={28} />
        </button>
      </div>
    </div>
  );
};

export default WARHAMMER;
