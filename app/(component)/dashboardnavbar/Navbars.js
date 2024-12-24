"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaRegBell, FaChevronDown, FaSearch, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import logomaan from "@/public/image/logoman.png";
import Link from "next/link";
import logo from "@/public/image/Logo.png";

const Navbars = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);

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
    <div className="w-full flex flex-wrap items-center border-b border-gray-700 bg-[#121212]">
      {/* Left Panel */}
      <div className="w-[20%]  pl-8 flex items-center h-20  lg:w-[20%]">
        <Image src={logo} alt="Logo" width={120} height={40} />
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="lg:hidden text-white cursor-pointer ml-4"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <IoClose className="text-3xl" />
        ) : (
          <FaBars className="text-3xl" />
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden w-full bg-[#1b1b1b] text-white py-4 px-6 space-y-4">
          <Link href="/Dashboard/UserDashboard" className="block">
            Profile
          </Link>
          <Link href="/Dashboard/Wishlist" className="block">
            Wish List
          </Link>
          <Link href="/Orders" className="block">
            Orders
          </Link>
          <button className="block text-red-400 hover:text-red-600">
            Log Out
          </button>
        </div>
      )}

      {/* Header Content */}
      <div className="w-full lg:w-[80%] py-4 border-l border-gray-700 px-6 flex justify-between items-center lg:flex-row flex-col">
        {/* Search Bar */}
        <div className="relative w-full max-w-md mb-4 lg:mb-0">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 p-3 rounded-full bg-[#1b1b1b] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition duration-300"
          />
        </div>

        {/* Icons Section */}
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
              <div className="absolute top-12 right-[-150px] sm:right-[-20px] lg:w-96 w-64 sm:w-80 bg-[#1b1b1b] text-white border border-gray-700 rounded-lg shadow-lg z-50">
                <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
                  <h3 className="text-lg font-semibold">Notifications</h3>
                  <button
                    onClick={() => setIsNotificationOpen(false)}
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    <IoClose className="text-2xl" />
                  </button>
                </div>
                <ul className="text-sm">
                  <li className="p-4 hover:bg-[#292929] transition mt-2 mx-4 rounded-lg px-3 py-2">
                    <p className="font-semibold ">New 3D character {"‘Shadow Knight’"} is now available. Check it out!</p>
                    <span className="text-xs text-gray-400">7 August 2024</span>
                  </li>
                  <li className=" hover:bg-[#292929] transition mx-4 rounded-lg px-3 py-2">
                    <p className="font-semibold  ">Payment failed for Order #1008. Please try again.</p>
                    <span className="text-xs text-gray-400">6 August 2024</span>
                  </li>
                  <li className="p-4 hover:bg-[#292929] transition mx-4 rounded-lg px-3 py-2">
                    <p className="font-semibold">Your cart will expire in 2 hours. {"Don’t"} miss out!</p>
                    <span className="text-xs text-gray-400">6 August 2024</span>
                  </li>
                  <li className="p-4  hover:bg-[#292929] transition mx-4 rounded-lg px-3 py-2">
                    <p className="font-semibold">Maintenance scheduled from 12 AM - 2 PM.</p>
                    <span className="text-xs text-gray-400">6 August 2024</span>
                  </li>
                  <li className="p-4 hover:bg-[#292929] transition mx-4 rounded-lg px-3 py-2 mb-2">
                    <p className="font-semibold">Your review on {"‘Fire Mage Model’"} is now live!</p>
                    <span className="text-xs text-gray-400">6 August 2024</span>
                  </li>
                </ul>
                <div className="px-4 py-3 border-t border-gray-700 text-[#E09D18] text-sm font-semibold hover:text-[#ffc041] cursor-pointer transition duration-300">
                  Mark all as read
                </div>
              </div>
            )}
          </div>

          {/* Profile Section */}
          <div
            className="relative flex items-center cursor-pointer"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            ref={dropdownRef}
          >
            <div className="w-10 h-10 bg-[#1b1b1b] rounded-full overflow-hidden">
              <Image src={logomaan} alt="User Profile" width={40} height={40} />
            </div>

            <FaChevronDown
              className={`text-white ml-2 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />

            {isDropdownOpen && (
              <div className="absolute top-10 right-0 bg-[#1b1b1b] border border-gray-600 shadow-lg rounded-lg w-40 z-50">
                <ul className="text-white text-sm">
                  <li className="px-4 mx-4 mt-4 py-2 hover:bg-[#292929] rounded-lg">
                    <Link href="/Dashboard/UserDashboard">Profile</Link>
                  </li>
                  <li className="px-4 mx-4 my-1 py-2 hover:bg-[#292929] rounded-lg">
                    <Link href="/Dashboard/Wishlist">Wish List</Link>
                  </li>
                  <li className="px-4 mx-4 my-1 py-2 hover:bg-[#292929] rounded-lg">
                    <Link href="/Orders">Orders</Link>
                  </li>
                  <li className="px-4 mx-4 mb-4 mt-2 py-2 hover:bg-[#292929] text-red-400 rounded-lg">
                    Log Out
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
