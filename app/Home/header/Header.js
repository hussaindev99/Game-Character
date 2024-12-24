"use client";
import React, { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import ProductCard from "../productcard/ProductCard";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown when an option is selected
  const handleOptionClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full mt-20">
      {/* Header Section */}
      <div className="mt-10 w-full bg-black p-4">
        {/* Search Input */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center w-full lg:w-[40%] max-w-3xl mb-4 md:mb-0">
            <CiSearch className="text-lg p-2 w-auto h-[48px] rounded-l-full bg-white text-black outline-none focus:ring-2 focus:ring-pink-500 transition-all" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search here..."
              className="w-full h-12 pr-12 py-3 rounded-r-full bg-white text-black text-sm outline-none transition-all"
            />
            <button
              onClick={clearSearch}
              className="bg-[#FD4960] p-2 h-9 rounded-full ml-[-42px] text-white hover:bg-[#ff314c] transition-all"
            >
              <CiSearch className="text-lg" />
            </button>
          </div>

          {/* Dropdown Menu */}
          <div className="relative ml-4">
            <button
              onClick={toggleDropdown}
              className="flex items-center px-5 py-3.5 bg-white text-black text-sm rounded-full outline-none hover:text-white hover:bg-[#ff314c] transition-all"
            >
              Digital Purchase
              <FaAngleDown className="ml-2 text-xs" />
            </button>

            {/* Dropdown Content */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded-lg shadow-lg text-white z-10">
                <p className="text-sm px-4 py-2 text-[#ff314c]">
                  Digital Products
                </p>
                <div className="border-t border-gray-700"></div>
                <p
                  className="text-sm px-4 py-2 hover:bg-gray-800 cursor-pointer"
                  onClick={handleOptionClick}
                >
                  3D Characters
                </p>
                {/* <p
                  className="text-sm px-4 py-2 hover:bg-gray-800 cursor-pointer"
                  onClick={handleOptionClick}
                >
                  2D Characters
                </p> */}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Card Section */}
      <div className="w-full mt-16">
        <ProductCard />
      </div>
    </div>
  );
}
