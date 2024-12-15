"use client"; // This must be the first line in your file
import Navbars from '@/app/(component)/dashboardnavbar/Navbars';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaList } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { RiLogoutBoxLine } from 'react-icons/ri';
import Chaosbattlom1 from "@/public/image/ChaosBattletom1.png";
import Image from 'next/image';
import { CiShoppingCart } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const Page = () => {
    const tabs = ['All Orders', 'Cancelled Orders', 'Expired Orders', 'Delivered Orders', 'Pending Orders'];
    const [activeTab, setActiveTab] = useState('All Orders');
    const [dateFilter, setDateFilter] = useState('All/Last year');

    const orders = [
        { id: 1, name: 'Chaos Battlebottom', price: '$160', status: 'Expired' },
        { id: 2, name: 'Chaos Battlebottom', price: '$160', status: 'Cancelled' },
        { id: 3, name: 'Chaos Battlebottom', price: '$160', status: 'Delivered' },
    ];

    const dateOptions = ['All/Last year', 'Last Month', 'Last Week'];

    return (
        <>
            <div className="bg-[#121212] min-h-screen">
                <Navbars />
                <div className="flex flex-col lg:flex-row">
                    {/* Sidebar */}
                    <aside className="bg-[#1b1b1b] w-full lg:w-1/5 p-6">
                        <ul className="space-y-4">
                            <Link href="/Dashboard/UserDashboard" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                                <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                                    <FaUserGroup className="mr-3 h-6 w-6" />
                                    <a href="#">Profile</a>
                                </li>
                            </Link>
                            <Link href="/Dashboard/Wishlist" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                                <li className="flex items-center  text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                                    <MdOutlineDashboardCustomize className="mr-3 h-6 w-6" />
                                    <a href="#">Wish List</a>
                                </li>
                            </Link>
                            <Link href="/Dashboard/OrderHistory" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                                <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                                    <FaList className="mr-3" />
                                    <a href="#">Order History</a>
                                </li>
                            </Link>
                            <Link href="/Dashboard/LogOut" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                                <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                                    <RiLogoutBoxLine className="mr-3 h-6 w-6 font-extrabold text-balance" />
                                    <a href="#">Log Out</a>
                                </li>
                            </Link>
                        </ul>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 p-4 lg:p-6">
                        <h2 className="text-2xl font-semibold mb-4">Order <span className="text-[#EC2277]">History</span></h2>

                        {/* Filter Section */}
                        <div className="text-white bg-[#1b1b1b] p-5 mb-8 rounded-xl">
                            <div className="flex flex-wrap mb-4 text-left justify-start space-x-2">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 rounded-md font-bold ${activeTab === tab
                                            ? 'text-red-500 font-bold underline underline-offset-8'
                                            : 'text-white hover:text-red-500'
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-4">
                                <div className="flex items-center bg-white w-full lg:max-w-lg rounded-full h-12">
                                    <input
                                        type="text"
                                        placeholder="Order ID, product or store name"
                                        className="flex-1 px-4 text-black bg-transparent placeholder-gray-400 focus:outline-none"
                                    />
                                    <button className="px-4 text-gray-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 111.42-1.42l4.35 4.35z"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                <select
                                    value={dateFilter}
                                    onChange={(e) => setDateFilter(e.target.value)}
                                    className="px-4 py-3.5 rounded-full bg-white text-black focus:outline-none"
                                >
                                    {dateOptions.map((option) => (
                                        <option key={option} value={option} className="mt-10">
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Orders Section */}
                        <div className="space-y-4">
                            {orders.map((order) => (
                                (activeTab === 'All Orders' || activeTab.includes(order.status)) && (
                                    <div key={order.id} className="bg-[#1b1b1b] p-4 rounded-xl shadow-md">
                                        <div className="text-gray-400 border-b pb-3 border-gray-400 flex flex-col lg:flex-row justify-between items-start lg:items-center w-full text-sm">
                                            <div className="flex flex-wrap items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-5">
                                                <p><span className="text-gray-300">Order Date:</span> May 10, 2024</p>
                                                <p><span className="text-gray-300">Order ID:</span> 110502419603272</p>
                                            </div>
                                            <div className="flex mt-2 lg:mt-0 items-center justify-between cursor-pointer hover:text-gray-200">
                                                <p>Order Detail</p>
                                                <IoIosArrowForward className="ml-1" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col lg:flex-row justify-between items-center bg-[#1C1C1E] text-white p-4 rounded-lg">
                                            <div className="flex items-center">
                                                <Image
                                                    src={Chaosbattlom1}
                                                    alt="Chaos Battleloom"
                                                    width={80}
                                                    height={80}
                                                    className="rounded-md mr-4"
                                                />
                                                <div className="space-y-2">
                                                    <p className="text-lg font-semibold">{order.name}</p>
                                                    <p className="text-gray-400">{order.price} x 1</p>
                                                </div>
                                            </div>
                                            <div className="flex mt-4 lg:mt-0 space-x-4">
                                                <button className="flex items-center border border-red-500 text-red-500 px-4 py-2 rounded-full hover:bg-red-600 hover:text-white">
                                                    <MdDeleteOutline className="mr-2 h-6 w-6" /> Remove
                                                </button>
                                                <button className="flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full">
                                                    <CiShoppingCart className="mr-2 h-6 w-6" /> Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Page;
