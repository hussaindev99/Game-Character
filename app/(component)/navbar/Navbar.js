"use client";
import { useEffect, useState, useRef } from "react";
import { MdArrowDropDown, MdMenu, MdClose } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoBagOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import logomaan from "@/public/image/logoman.png";
import logo from "@/public/image/Logo.png";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const shopRef = useRef(null);
    const profileRef = useRef(null);


    // Close dropdown when clicking outsides
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (shopRef.current && !shopRef.current.contains(event.target)) {
                setShopDropdownOpen(false);
            }
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setProfileDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-black via-[#1a1a1a] to-black/90 text-white backdrop-blur-md transition-all ease-in-out duration-300">
            <div className="max-w-[1440px] mx-auto px-4 lg:px-10 flex items-center justify-between h-auto py-4">
                {/* Logo */}
                <Link href="/">
                    <Image src={logo} alt="Logo" width={100} height={40} />
                </Link>
                {/* Desktop Links */}
                <ul className="hidden md:flex items-center space-x-6">
                    <li className="hover:text-[#ff0c0cd5] transition duration-300">
                        <Link href="/">Home</Link>
                    </li>
                    <li
                        ref={shopRef}
                        className="relative flex items-center cursor-pointer hover:text-[#ff0c0cd5] transition duration-300"
                        onClick={() => setShopDropdownOpen(!shopDropdownOpen)}
                    >
                        <span className="flex items-center">
                            Shop <MdArrowDropDown className="ml-1" />
                        </span>
                        {shopDropdownOpen && (
                            <ul className="absolute top-7 bg-[#1b1b1bf6] text-white text-sm py-2 w-40 rounded shadow-lg">
                                <li className="px-4 py-2 hover:text-[#ff0c0cd5]">
                                    <Link href="/3DPrintingservice">3D Characters</Link>
                                </li>
                                {/* <li className="px-4 py-2 hover:text-[#ff0c0cd5]">
                                    <Link href="/shop/2d-character">2D Characters</Link>
                                </li> */}
                            </ul>
                        )}
                    </li>
                    <li className="hover:text-[#ff0c0cd5] transition duration-300">
                        <Link href="#">Custom Orders</Link>
                    </li>
                    <li className="hover:text-[#ff0c0cd5] transition duration-300">
                        <Link href="#">Collections</Link>
                    </li>
                    <li className="hover:text-[#ff0c0cd5] transition duration-300">
                        <Link href="/Gallery">Gallery</Link>
                    </li>
                    <li className="hover:text-[#ff0c0cd5] transition duration-300">
                        <Link href="/Contactus">Contact Us</Link>
                    </li>
                </ul>
                {/* Profile and Cart */}
                <div className="hidden md:flex items-center space-x-6">
                    <Link href="/Cart">
                        <div className="flex items-center relative">
                            <IoBagOutline className="w-6 h-6" />
                            <span className="absolute top-1 right-24 bg-yellow-400 text-black text-xs font-bold rounded-full px-1">
                                3
                            </span>
                            <div className="ml-2">
                                <p className="text-sm text-gray-400">Shopping Cart</p>
                                <span className="text-red-500">$0.00</span>
                            </div>
                        </div>
                    </Link>
                    <div
                        ref={profileRef}
                        className="relative flex items-center cursor-pointer"
                        onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                    >
                        <div className="w-10 h-10 bg-[#1b1b1b] rounded-full overflow-hidden">
                            <Image src={logomaan} alt="User Profile" width={40} height={40} />
                        </div>

                        <FaChevronDown
                            className={`text-white ml-2 transition-transform duration-300 ${profileDropdownOpen ? "rotate-180" : ""
                                }`}
                        />
                        {profileDropdownOpen && (
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
                {/* Mobile Menu Toggle */}
                <button
                    className="text-2xl md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <MdClose /> : <MdMenu />}
                </button>
            </div>
            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed  bg-[#000000fb] text-white mt-[-75px] transition-transform duration-300 z-10 ${menuOpen ? "translate-x-0" : "translate-y-[-800px] "
                    }`}
            >
                <div className="p-6">

                    <ul className="space-y-6">
                        <li>
                            <Link href="/" onClick={() => setMenuOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <div
                                className="flex items-center cursor-pointer"
                                onClick={() => setShopDropdownOpen(!shopDropdownOpen)}
                            >
                                Shop <MdArrowDropDown className="ml-1" />
                            </div>
                            {shopDropdownOpen && (
                                <ul className="pl-4 space-y-2">
                                    <li>
                                        <Link
                                            href="/3DPrintingservice"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            3D Characters
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link href="#" onClick={() => setMenuOpen(false)}>
                                Custom Orders
                            </Link>
                        </li>
                        <li>
                            <Link href="#" onClick={() => setMenuOpen(false)}>
                                Collections
                            </Link>
                        </li>
                        <li>
                            <Link href="/Gallery" onClick={() => setMenuOpen(false)}>
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link href="/Contactus" onClick={() => setMenuOpen(false)}>
                                Contact Us
                            </Link>
                        </li>
                        {/* Login/Sign Up */}
                        {/* Cart */}
                        <li>
                            <Link href="/Cart">
                                <div className="flex items-center space-x-4">
                                    <div className="relative inline-block">
                                        <IoBagOutline className="w-6 h-6" />
                                        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-black text-[10px] font-bold rounded-full px-1 py-0.5 leading-none">
                                            3
                                        </span>
                                    </div>
                                    <span>Shopping Cart - $0.00</span>
                                </div>
                            </Link>
                        </li>
                        <div
                            ref={profileRef}
                            className="relative flex items-center cursor-pointer"
                            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                        >
                            <div className="w-10 h-10 bg-[#1b1b1b] rounded-full overflow-hidden">
                                <Image src={logomaan} alt="User Profile" width={40} height={40} />
                            </div>

                            <FaChevronDown
                                className={`text-white ml-2 transition-transform duration-300 ${profileDropdownOpen ? "rotate-180" : ""
                                    }`}
                            />
                            {profileDropdownOpen && (
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
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
