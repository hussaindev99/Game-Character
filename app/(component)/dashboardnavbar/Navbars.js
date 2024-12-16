"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaRegBell, FaChevronDown, FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import logomaan from "@/public/image/logoman.png";
import Link from "next/link";

const Navbars = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);

  // Close Notification Panel when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="w-full flex items-center border-b border-gray-700">
      {/* Left Panel */}
      <div className="w-[20%] bg-[#1b1b1b] h-24 border-r border-gray-700"></div>

      {/* Header Content */}
      <div className="w-[80%] py-6 flex justify-between items-center px-9">
        {/* Mobile Menu Icon */}
        <div
          className="lg:hidden text-white cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <IoClose className="text-3xl" />
          ) : (
            <FaChevronDown className="text-3xl" />
          )}
        </div>

        {/* Search Bar */}
        <div className="relative w-[50%] max-w-[400px]">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 p-3 rounded-full bg-[#121212] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition duration-300"
          />
        </div>

        {/* Profile Section */}
        <div className="flex items-center space-x-6">
          {/* Notification Bell */}
          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="relative w-10 h-10 bg-[#1b1b1b] rounded-full flex items-center justify-center hover:bg-[#292929] transform hover:scale-110 transition duration-300"
            >
              <FaRegBell className="text-white text-xl" />
              <span className="absolute -top-1.5 -right-1 bg-[#FD4960] text-white text-xs font-bold px-1 py-0.5 rounded-full">
                10
              </span>
            </button>

            {/* Notification Panel */}
            {isNotificationOpen && (
              <div className="absolute top-12 right-0 w-96 bg-[#1b1b1b] text-white border border-gray-700 rounded-lg shadow-lg z-50">
                {/* Panel Header */}
                <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
                  <h3 className="text-lg font-semibold">Notification</h3>
                  <button
                    onClick={() => setIsNotificationOpen(false)}
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    <IoClose className="text-2xl" />
                  </button>
                </div>

                {/* Notification Items */}
                <ul className="text-sm">
                  <li className="p-4 bg-[#292929] mb-1">
                    <p className="font-semibold mb-1">
                      {" New 3D character ‘Shadow Knight’ is now available. Check it out!"}
                    </p>
                    <span className="text-xs text-gray-400">7 August 2024</span>
                  </li>
                  <li className="p-4 hover:bg-[#292929] cursor-pointer transition">
                    <p className="font-semibold mb-1">
                      Payment failed for Order #1008. Please try again.
                    </p>
                    <span className="text-xs text-gray-400">6 August 2024</span>
                  </li>
                  <li className="p-4 hover:bg-[#292929] cursor-pointer transition">
                    <p className="font-semibold mb-1">
                      {"Your cart will expire in 2 hours. Don’t miss out!"}
                    </p>
                    <span className="text-xs text-gray-400">6 August 2024</span>
                  </li>
                  <li className="p-4 hover:bg-[#292929] cursor-pointer transition">
                    <p className="font-semibold mb-1">
                      Maintenance scheduled from 12 AM - 2 PM.
                    </p>
                    <span className="text-xs text-gray-400">6 August 2024</span>
                  </li>
                  <li className="p-4 hover:bg-[#292929] cursor-pointer transition">
                    <p className="font-semibold mb-1">
                      {"Your review on ‘Fire Mage Model’ is now live!"}
                    </p>
                    <span className="text-xs text-gray-400">6 August 2024</span>
                  </li>
                </ul>

                {/* Footer */}
                <div className="px-4 py-3 border-t border-gray-700 text-[#FBAE17] text-sm font-semibold cursor-pointer hover:text-[#ffca5f] transition duration-300">
                  Mark all as read
                </div>
              </div>
            )}
          </div>

          {/* Profile Image with Dropdown */}
          <div
            className="relative flex items-center space-x-2 cursor-pointer"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            ref={dropdownRef}
          >
            <div className="w-10 h-10 bg-[#121212] rounded-full overflow-hidden hover:shadow-lg transform hover:scale-110 transition duration-300">
              <Image
                src={logomaan}
                alt="User Profile"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>

            <FaChevronDown
              className={`text-white transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-10 right-0 bg-[#1b1b1b] border border-gray-600 shadow-lg rounded-lg w-40 z-50">
                <ul className="text-white text-sm py-[10%]">
                  <li>
                    <span className="px-4 mx-[10%] py-2 hover:bg-[#292929] flex items-center space-x-2 cursor-pointer rounded-lg transition-colors duration-300">
                     <Link href="/Dashboard/UserDashboard">Profile </Link>
                    </span>
                  </li>
                  <li>
                    <span className="px-4 mx-[10%] py-2 hover:bg-[#292929] flex items-center space-x-2 cursor-pointer rounded-lg transition-colors duration-300">
                    
                    <Link href="/Dashboard/Wishlist"> Wish List </Link>
                    </span>
                  </li>
                  <li>
                    <span className="px-4 mx-[10%] py-2 hover:bg-[#292929] flex items-center space-x-2 cursor-pointer rounded-lg transition-colors duration-300">
                     <Link href="/Orders">Orders</Link> 
                    </span>
                  </li>
                  <li>
                    <span className="px-4 mx-[10%] py-2 hover:bg-[#292929] flex items-center space-x-2 cursor-pointer rounded-lg transition-colors duration-300">
                      Log Out
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbars;
