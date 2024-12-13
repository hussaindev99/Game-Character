"use client";
import { useEffect, useState, useRef } from "react";
import { MdArrowDropDown, MdMenu, MdClose } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoBagOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/image/Logo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
    const shopRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (shopRef.current && !shopRef.current.contains(event.target)) {
                setShopDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-black via-[#1a1a1a] to-black/90 text-white backdrop-blur-md">
            <div className="max-w-[1440px] mx-auto px-4 lg:px-10 flex items-center justify-between h-20">
                {/* Logo */}
                <div>
                    <Link href="/">
                        <Image src={logo} alt="Logo" width={100} height={40} />
                    </Link>
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center space-x-6">
                    <li className="hover:text-[#ff0c0cd5]">
                        <Link href="/">Home</Link>
                    </li>
                    {/* Shop Dropdown */}
                    <li
                        ref={shopRef}
                        className="relative flex items-center cursor-pointer hover:text-[#ff0c0cd5]"
                    >
                        <span
                            onClick={() => setShopDropdownOpen(!shopDropdownOpen)}
                            className="flex items-center"
                        >
                            Shop <MdArrowDropDown className="ml-1" />
                        </span>
                        {shopDropdownOpen && (
                            <ul className="absolute top-7 bg-[#1b1b1bf6] text-white text-sm py-2 w-40 rounded shadow-lg">
                                <li className="px-4 py-2 hover:text-[#ff0c0cd5] cursor-pointer">
                                    <Link href="/3DPrintingservice">3D Characters</Link>
                                </li>
                                <li className="px-4 py-2 hover:text-[#ff0c0cd5] cursor-pointer">
                                    <Link href="/shop/2d-character">2D Characters</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="hover:text-[#ff0c0cd5]">
                        <Link href="/custom-orders">Custom Orders</Link>
                    </li>
                    <li className="hover:text-[#ff0c0cd5]">
                        <Link href="/collections">Collections</Link>
                    </li>
                    <li className="hover:text-[#ff0c0cd5]">
                        <Link href="/searchviewall">Gallery</Link>
                    </li>
                    <li className="hover:text-[#ff0c0cd5]">
                        <Link href="/Contactus">Contact Us</Link>
                    </li>
                </ul>

                {/* Profile and Cart */}
                <div className="hidden md:flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                        <CgProfile className="w-6 h-6" />
                        <div>
                            <span className="text-sm text-gray-400">Welcome</span>
                            <div className="flex space-x-2">
                                <Link href="/SignIn" className="hover:text-[#ff0c0cd5]">
                                    Sign In
                                </Link>
                                <span>/</span>
                                <Link href="/SignUp" className="hover:text-[#ff0c0cd5]">
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center relative">
                        <IoBagOutline className="w-6 h-6" />
                        <span className="absolute top-1 right-2 bg-yellow-400 text-black text-xs font-bold rounded-full px-1">
                            3
                        </span>
                        <div className="ml-2">
                            <p className="text-sm text-gray-400">Shopping Cart</p>
                            <span className="text-red-500">$0.00</span>
                        </div>
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
            {menuOpen && (
                <div className="md:hidden bg-black text-white fixed top-16 left-0 w-full h-screen z-40">
                    <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 md:space-y-0 items-center space-y-4 py-6 text-sm lg:text-base">
                        <li className="hover:text-[#ff0c0cd5]">
                            <Link href="/" className="text-xs sm:text-sm md:text-[12px] lg:text-sm">Home</Link>
                        </li>
                        <li className="relative flex flex-col md:flex-row items-center">
                            <span
                                onClick={() => setShopDropdownOpen(!shopDropdownOpen)}
                                className="flex items-center cursor-pointer hover:text-[#ff0c0cd5] text-xs sm:text-sm md:text-[12px] lg:text-sm"
                            >
                                Shop <MdArrowDropDown className="ml-1" />
                            </span>
                            {shopDropdownOpen && (
                                <ul className="bg-[#1b1b1bf6] text-white text-xs lg:text-sm py-2 w-40 rounded shadow-lg absolute md:static mt-2 md:mt-0">
                                    <li className="px-4 py-2 hover:text-[#ff0c0cd5] cursor-pointer">
                                        <Link href="/3DPrintingservice" className="text-xs md:text-[11px] lg:text-sm">3D Characters</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:text-[#ff0c0cd5] cursor-pointer">
                                        <Link href="/shop/2d-character" className="text-xs md:text-[11px] lg:text-sm">2D Characters</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="hover:text-[#ff0c0cd5]">
                            <Link href="/custom-orders" className="text-xs sm:text-sm md:text-[12px] lg:text-sm">Custom Orders</Link>
                        </li>
                        <li className="hover:text-[#ff0c0cd5]">
                            <Link href="/collections" className="text-xs sm:text-sm md:text-[12px] lg:text-sm">Collections</Link>
                        </li>
                        <li className="hover:text-[#ff0c0cd5]">
                            <Link href="/searchviewall" className="text-xs sm:text-sm md:text-[12px] lg:text-sm">Gallery</Link>
                        </li>
                        <li className="hover:text-[#ff0c0cd5]">
                            <Link href="/Contactus" className="text-xs sm:text-sm md:text-[12px] lg:text-sm">Contact Us</Link>
                        </li>
                        <li className="border-t border-gray-700 md:border-t-0 pt-4 md:pt-0">
                            <div className="flex items-center space-x-2">
                                <CgProfile className="w-6 h-6" />
                                <div>
                                    <span className="text-[10px] md:text-[11px] lg:text-sm text-gray-400">Welcome</span>
                                    <div className="flex space-x-2">
                                        <Link href="/SignIn" className="hover:text-[#ff0c0cd5] text-[10px] md:text-[11px] lg:text-sm">
                                            Sign In
                                        </Link>
                                        <span className="text-[10px] md:text-[11px] lg:text-sm">/</span>
                                        <Link href="/SignUp" className="hover:text-[#ff0c0cd5] text-[10px] md:text-[11px] lg:text-sm">
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center space-x-2 text-xs lg:text-sm">
                            <span className="text-[10px] md:text-[11px] lg:text-sm">Shopping Cart</span>
                            <div className="flex items-center relative mr-10">
                                <IoBagOutline className="w-6 h-6" />
                                <span className="absolute -top-1 right-12 mr-20 bg-yellow-400 text-black text-xs font-bold rounded-full px-1">
                                    3
                                </span>
                                <div className="ml-2">
                                    <p className="text-sm text-gray-400">Shopping Cart</p>
                                    <span className="text-red-500">$0.00</span>
                                </div>
                            </div>                            <span className="text-red-500 text-[10px] md:text-[11px] lg:text-sm">$0.00</span>
                        </li>
                    </ul>

                </div>
            )}
        </nav>
    );
};

export default Navbar;
