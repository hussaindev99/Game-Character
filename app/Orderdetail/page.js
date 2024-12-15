import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import React from 'react';
import { FaList, FaShoppingCart, FaTags } from 'react-icons/fa';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { TbLayoutDashboard } from 'react-icons/tb';
import { FaCircleNotch } from "react-icons/fa6";
import JessicaMoore from "@/public/image/JessicaMoore.png";
import Chaosbattlom from "@/public/image/ChaosBattletom1.png";
import Navbars from '../(component)/dashboardnavbar/Navbars';

const Page = () => {
    return (
        <div>
            <Navbars />
            <div className="min-h-screen w-full bg-[#121212] text-white flex flex-col md:flex-row">
                {/* Sidebar */}
                <div className="bg-[#1b1b1b] w-full md:w-1/5 p-8 md:p-6">
                    <ul className="space-y-6">
                        {[{ href: '/Dashboard', icon: <TbLayoutDashboard className="mr-3 h-6 w-6" />, text: 'Dashboard' },
                            { href: '/AddProduct', icon: <MdOutlineDashboardCustomize className="mr-3 h-6 w-6" />, text: 'Add Product' },
                            { href: '/ProductList', icon: <FaList className="mr-3 h-5 w-5" />, text: 'Product List' },
                            { href: '/Categories', icon: <FaTags className="mr-3 h-5 w-5" />, text: 'Categories' },
                            { href: '/Orders', icon: <FaShoppingCart className="mr-3 h-5 w-5" />, text: 'Orders' },
                        ].map((item, index) => (
                            <li key={index} className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md cursor-pointer">
                                <Link href={item.href} className="flex items-center w-full">
                                    {item.icon}
                                    <span>{item.text}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-8 w-full">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-semibold">
                            Order <span className="text-[#e3257c]">Detail</span>
                        </h2>
                        <Link href="/Orders" className="bg-[#fd4960] hover:bg-[#ff2f4b] px-6 py-2.5 flex items-center rounded-full text-sm md:text-base">
                            All Order
                        </Link>
                    </div>

                    {/* Order Detail Layout */}
                    <div className="gap-4 flex flex-col lg:flex-row">
                        {/* All Items Section */}
                        <div className="w-full lg:w-2/3 bg-[#1b1b1b] p-6 rounded-lg shadow-md h-auto mb-6 lg:mb-0">
                            <h3 className="text-xl font-semibold mb-4">All Items</h3>
                            {/* Items List */}
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="my-5 bg-[#222222] p-6 rounded-lg shadow-md flex justify-between items-center py-4">
                                    <div className="flex items-center">
                                        {/* Add your order image */}
                                        <Image src={Chaosbattlom} alt="Order Image" width={50} height={50} className="mr-4 rounded" />
                                        <div>
                                            <h4 className="font-semibold text-lg">Chaos Busterstorm</h4>
                                            <p className="text-gray-400 text-sm">Quantity: 1</p>
                                        </div>
                                    </div>
                                    <span className="font-semibold text-lg">$250.00</span>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary Section */}
                        <div className="w-full lg:w-1/3 space-y-5">
                            <div className='bg-[#1b1b1b] rounded-lg shadow-md p-4'>
                                <h3 className="text-xl font-semibold mb-4">Summary</h3>
                                <div className="space-y-4">
                                    <p className='flex justify-between text-gray-400 font-semibold '>Order ID: <span className="text-white font-light">#192847</span></p>
                                    <p className='flex justify-between text-gray-400 font-semibold '>Date <span className="text-white font-light">20 Nov 2024</span> </p>
                                    <p className="justify-between flex text-gray-400 font-semibold ">Total: <span className="text-[#fd4960] font-light"><span className='text-[#fd4960] font-semibold'>$</span> 948.5</span></p>
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div className='bg-[#1b1b1b] rounded-xl shadow-md p-4'>
                                <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
                                <p className='flex items-center pb-16'>
                                    <div>
                                        <span className='flex h-3 w-3 bg-gradient-to-tr from-[#2472FC] to-[#FF1B6B] rounded-full mr-2 items-center '>
                                            <FaCircleNotch className='bg-clip-text text-transparent bg-gradient-to-tr from-[#2472FC] to-[#FF1B6B]' />
                                        </span>
                                    </div>
                                    Credit Card
                                </p>
                            </div>

                            {/* Customer Details */}
                            <div className='bg-[#1b1b1b] rounded-lg shadow-md p-4'>
                                <h3 className="text-xl font-semibold mb-4">Customer</h3>
                                <div className='flex items-center pb-10'>
                                    <div>
                                        <Image src={JessicaMoore} alt='Customer Image' width={50} height={50} className="rounded-full" />
                                    </div>
                                    <div className='ml-3'>
                                        <p className="font-semibold">Jessica Moore</p>
                                        <p className="text-gray-400">This is the first order</p>
                                    </div>
                                </div>
                            </div>

                            {/* Shipping Address */}
                            <div className='bg-[#1b1b1b] rounded-lg shadow-md p-4'>
                                <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
                                <p className="text-gray-400 pb-7">
                                    {" Jessica Moore Random Federation 115302, Moscow ul. Varshavskaya, 15-2-178"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
