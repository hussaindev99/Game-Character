"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaRegBell, FaChevronDown, FaSearch } from "react-icons/fa";
import Image from "next/image";
import logomaan from "@/public/image/logoman.png";

const Navbars = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full flex items-center border-b border-gray-600 ">
      {/* Left Panel */}
      <div className="w-[20%] bg-[#1b1b1b] h-24 border-r border-gray-600"></div>

      {/* Header Content */}
      <div className="w-[80%] py-6 flex justify-between items-center px-4">
        {/* Search Bar */}
        <div className="relative w-[50%] max-w-[400px]">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FaSearch className="text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 p-3 rounded-full bg-[#121212] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#e3257c] transition duration-300"
          />
        </div>

        {/* Profile Section */}
        <div className="flex items-center space-x-6">
          {/* Notification Bell */}
          <div className="relative">
            <button className="relative w-10 h-10 bg-[#121212] rounded-full flex items-center justify-center hover:bg-[#292929] transform hover:scale-110 transition duration-300">
              <FaRegBell className="text-white text-xl" />
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                10
              </span>
            </button>
          </div>

          {/* Profile Picture and Dropdown */}
          <div className="relative flex items-center space-x-2"  onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {/* Profile Image with Click Toggle */}
            <div className="flex items-center cursor-pointer">
              <div
                className="w-10 h-10 bg-[#121212] rounded-full overflow-hidden hover:shadow-lg transform hover:scale-110 transition duration-300"
                // Toggle dropdown on click
              >
                <Image
                  src={logomaan}
                  alt="User Profile"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            </div>
            {/* Chevron Icon with Hover Effect */}
            <div
              className="text-white ml-2 cursor-pointer "
            >
              <FaChevronDown className="text-white ml-2" />
            </div>
          </div>

          {/* Dropdown Menu (Visible on Click) */}
          <div
            ref={dropdownRef}
            className={`absolute top-12 right-0 bg-[#121212] shadow-lg rounded-lg w-40 opacity-0 transition-all duration-300 ease-in-out ${
              isDropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <ul className="text-white text-sm">
              <li className="px-4 py-2 hover:bg-[#292929] cursor-pointer rounded-lg transition-colors duration-300">
                Profile
              </li>
              <li className="px-4 py-2 hover:bg-[#292929] cursor-pointer transition-colors duration-300">
                Settings
              </li>
              <li className="px-4 py-2 hover:bg-[#292929] cursor-pointer rounded-lg transition-colors duration-300">
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbars;
