"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaList, FaShoppingCart, FaTags } from 'react-icons/fa';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { TbLayoutDashboard } from 'react-icons/tb';
import Navbars from '../(component)/dashboardnavbar/Navbars';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Page = () => { // Renamed 'page' to 'Page'
    const [currentPage, setCurrentPage] = useState(2); // Current page set to 2 based on your image
    const totalPages = 3;

    return (
        <>
            <Navbars />
            <div className="flex flex-col lg:flex-row bg-[#111] min-h-screen">
                {/* Sidebar */}
                <div className="bg-[#1b1b1b] w-full lg:w-1/5 p-6">
                    <ul className="space-y-4">
                        <li>
                            <Link href="/Dashboard" className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                                <TbLayoutDashboard className="mr-3 h-6 w-6" />
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="/AddProduct" className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                                <MdOutlineDashboardCustomize className="mr-3 h-6 w-6" />
                                Add Product
                            </Link>
                        </li>
                        <li>
                            <Link href="/ProductList" className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                                <FaList className="mr-3 h-6 w-6" />
                                Product List
                            </Link>
                        </li>
                        <li>
                            <Link href="/Categories" className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                                <FaTags className="mr-3 h-6 w-6" />
                                Categories
                            </Link>
                        </li>
                        <li>
                            <Link href="/Orders" className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                                <FaShoppingCart className="mr-3 h-6 w-6" />
                                Orders
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        Add Category <span className='text-[#e3257c]'>& Sub Category</span>
                    </h2>

                    {/* Category Form */}
                    <div className="bg-[#1b1b1b] p-8 rounded-lg shadow-lg">
                        {/* Add Category Row */}
                        <div className="flex flex-col lg:flex-row justify-between mb-6 space-y-6 lg:space-y-0">
                            <div className="w-full lg:w-[48%]">
                                <p className='text-xl font-semibold'>Add Category</p>
                                <label className="block mb-2 mt-4 text-white">Category Name</label>
                                <input
                                    type="text"
                                    className="w-full text-lg bg-[#2b2b2b] h-14 text-gray-200 px-4 py-2 rounded-md outline-none border border-gray-300"
                                    placeholder="Digital Products"
                                />
                            </div>

                            <div className="w-full lg:w-[48%]">
                                <label className="block mb-2 mt-10 text-white">Category ID</label>
                                <input
                                    type="number"
                                    className="w-full text-lg bg-[#2b2b2b] h-14 text-gray-200 px-4 py-2 rounded-md outline-none border border-gray-300"
                                    placeholder="345123"
                                />
                            </div>
                        </div>

                        {/* Sub Category Row */}
                        <div className=" lg:w-[48%] sm:w-full">
                            <p className='text-xl font-semibold'>Sub Category</p>
                            <label className="block mb-2 mt-4 text-white">Sub Category Name</label>
                            <input
                                type="text"
                                className="w-full text-lg bg-[#2b2b2b] h-14 text-gray-200 px-4 py-2 rounded-md outline-none border border-gray-300"
                                placeholder="Sub category name"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row justify-end mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="bg-[#2b2b2b] text-gray-300 px-16 py-3 rounded-full w-full sm:w-auto">Cancel</button>
                            <button className="bg-[#fd4960] hover:bg-[#ff2f4b] text-white px-16 py-3 rounded-full w-full sm:w-auto">Save</button>
                        </div>

                        <div className="flex justify-between items-center mt-6">
                            <p className="text-sm text-gray-400">Showing 10 entries</p>
                            <div className="flex items-center space-x-2">
                                <button className="px-2 py-2 rounded-full bg-[#2b2b2b] hover:bg-[#3b3b3b]">
                                    <IoIosArrowBack />
                                </button>
                                {[1, 2, 3].map((page) => (
                                    <button
                                        key={page}
                                        className={`px-3 py-1 rounded-full ${page === currentPage ? 'bg-[#fd4960]' : 'bg-[#2b2b2b]'}`}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <button className="px-2 py-2 rounded-full bg-[#2b2b2b] hover:bg-[#3b3b3b]">
                                    <IoIosArrowForward />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                input[type="number"]::-webkit-inner-spin-button,
                input[type="number"]::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
                input[type="number"] {
                    -moz-appearance: textfield; /* Firefox */
                }
            `}</style>
        </>
    );
};

export default Page; // Renamed 'page' to 'Page'
