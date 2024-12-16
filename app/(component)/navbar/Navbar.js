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
        <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-black via-[#1a1a1a] to-black/90 text-white backdrop-blur-md transition-all ease-in-out duration-300">
            <div className="max-w-[1440px] mx-auto px-4 lg:px-10 flex items-center justify-between h-20">
                {/* Logo */}
                <div>
                    <Link href="/">
                        <Image src={logo} alt="Logo" width={100} height={40} />
                    </Link>
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center space-x-6">
                    <li className="hover:text-[#ff0c0cd5] transition duration-300">
                        <Link href="/">Home</Link>
                    </li>
                    {/* Shop Dropdown */}
                    <li
                        ref={shopRef}
                        className="relative flex items-center cursor-pointer hover:text-[#ff0c0cd5] transition duration-300"
                    >
                        <span
                            onClick={() => setShopDropdownOpen(!shopDropdownOpen)}
                            className="flex items-center"
                        >
                            Shop <MdArrowDropDown className="ml-1" />
                        </span>
                        {shopDropdownOpen && (
                            <ul className="absolute top-7 bg-[#1b1b1bf6] text-white text-sm py-2 w-40 rounded shadow-lg transition-all ease-in-out duration-300">
                                <li className="px-4 py-2 hover:text-[#ff0c0cd5] cursor-pointer">
                                    <Link href="/3DPrintingservice">3D Characters</Link>
                                </li>
                                <li className="px-4 py-2 hover:text-[#ff0c0cd5] cursor-pointer">
                                    <Link href="/shop/2d-character">2D Characters</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="hover:text-[#ff0c0cd5] transition duration-300">
                        <Link href="/custom-orders">Custom Orders</Link>
                    </li>
                    <li className="hover:text-[#ff0c0cd5] transition duration-300">
                        <Link href="/collections">Collections</Link>
                    </li>
                    <li className="hover:text-[#ff0c0cd5] transition duration-300">
                        <Link href="/searchviewall">Gallery</Link>
                    </li>
                    <li className="hover:text-[#ff0c0cd5] transition duration-300">
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
                                <Link href="/SignIn" className="hover:text-[#ff0c0cd5] transition duration-300">
                                    Sign In
                                </Link>
                                <span>/</span>
                                <Link href="/SignUp" className="hover:text-[#ff0c0cd5] transition duration-300">
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
                <div className="md:hidden bg-black text-white fixed top-0 left-0 w-full h-full z-40 overflow-y-auto flex flex-col items-start p-6 space-y-6">
                    <ul className="w-full space-y-4">
                        <li className="hover:text-[#ff0c0cd5] transition duration-300">
                            <Link href="/">Home</Link>
                        </li>

                        {/* Shop Full-Screen Dropdown */}
                        <li className="relative flex flex-col items-start w-full">
                            <span
                                onClick={() => setShopDropdownOpen(!shopDropdownOpen)}
                                className="flex items-center cursor-pointer hover:text-[#ff0c0cd5]"
                            >
                                Shop <MdArrowDropDown className="ml-1" />
                            </span>
                            {shopDropdownOpen && (
                                <div className="absolute top-0 left-0 bg-[#1b1b1bf6] w-full h-full text-white text-sm py-2 flex flex-col items-start justify-center space-y-4">
                                    <li className="px-4 py-2 hover:text-[#ff0c0cd5] cursor-pointer">
                                        <Link href="/3DPrintingservice">3D Characters</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:text-[#ff0c0cd5] cursor-pointer">
                                        <Link href="/shop/2d-character">2D Characters</Link>
                                    </li>
                                </div>
                            )}
                        </li>

                        <li className="hover:text-[#ff0c0cd5] transition duration-300">
                            <Link href="/custom-orders">Custom Orders</Link>
                        </li>
                        <li className="hover:text-[#ff0c0cd5] transition duration-300">
                            <Link href="/collections">Collections</Link>
                        </li>
                        <li className="hover:text-[#ff0c0cd5] transition duration-300">
                            <Link href="/searchviewall">Gallery</Link>
                        </li>
                        <li className="hover:text-[#ff0c0cd5] transition duration-300">
                            <Link href="/Contactus">Contact Us</Link>
                        </li>
                        <li className="border-t border-gray-700 pt-4">
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
                        </li>
                        <li className="flex items-center space-x-2 text-sm">
                            <span>Shopping Cart</span>
                            <div className="flex items-center relative">
                                <IoBagOutline className="w-6 h-6" />
                                <span className="absolute -top-1 right-2 bg-yellow-400 text-black text-xs font-bold rounded-full px-1">
                                    3
                                </span>
                                <div className="ml-2">
                                    <p className="text-sm text-gray-400">Shopping Cart</p>
                                    <span className="text-red-500">$0.00</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
