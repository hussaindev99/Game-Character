 "use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaList, FaTags, FaShoppingCart, } from 'react-icons/fa'; // Importing icons
import { IoMdClose } from "react-icons/io";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import Navbars from '../(component)/dashboardnavbar/Navbars';
import { TbLayoutDashboard } from "react-icons/tb";
import Link from 'next/link';

export default function AddProduct() {
    const keywords = ["Best Seller", "New Arrival", "Sale", "Best"];
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setSelectedImages((prev) => [...prev, ...files]);
    };
    return (
        <>
            <Navbars />
            <div className="flex flex-col md:flex-row bg-[#0a0a0a] min-h-screen text-white">
                {/* Sidebar */}
                <div className="bg-[#1b1b1b] w-full md:w-1/5 p-6 md:my-0">
                    <div className="flex flex-col">
                        <ul className="space-y-4">
                            <Link href="/Dashboard" className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                                <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                                    <TbLayoutDashboard className="mr-3 h-6 w-6" />
                                    <span>Dashboard</span>
                                </li>
                            </Link>
                            <Link href="/AddProduct" className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                                <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                                    <MdOutlineDashboardCustomize className="mr-2 h-6 w-6" />
                                    <span>Add Product</span>
                                </li>
                            </Link>
                            <Link href="/ProductList" className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                                <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                                    <FaList className="mr-3" />
                                    <span>Product List</span>
                                </li>
                            </Link>
                            <Link href="/Categories" className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                                <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                                    <FaTags className="mr-3" />
                                    <span>Categories</span>
                                </li>
                            </Link>
                            <Link href="/Orders" className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                                <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                                    <FaShoppingCart className="mr-3" />
                                    <span>Orders</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4 md:p-8">
                    <div className="max-w-5xl mx-auto bg-[#0a0a0a] p-6 rounded-lg shadow-md">
                        <div className='flex flex-col md:flex-row justify-between mb-5'>
                            <h2 className="text-2xl font-semibold mb-4 md:mb-0">Add <span className='text-[#e3257c]'>Product</span></h2>
                            <button className="bg-[#fd4960] hover:bg-[#ff2f4b] px-12 py-2 rounded-full">
                                Product List
                            </button>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                            {/* General Information */}
                            <div className='bg-[#1b1b1b] p-8 rounded-2xl'>
                                <h3 className="text-2xl mb-2">General Information</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="cursor-pointer flex items-center gap-2">Product Name</label>
                                        <input type="text" placeholder="Chaos Battletom" className="w-full p-4 rounded-md bg-[#1b1b1b] border border-gray-600 focus:outline-none" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="cursor-pointer">Category</label>
                                            <select className="w-full p-4 rounded-md bg-[#1b1b1b] border border-gray-600 focus:outline-none">
                                                <option>Choose Category</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="cursor-pointer">Sub-Category</label>
                                            <select className="w-full p-4 rounded-md bg-[#1b1b1b] border border-gray-600 focus:outline-none">
                                                <option>Choose Sub-Category</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="cursor-pointer">Quantity</label>
                                            <input type="number" placeholder="300" className="w-full p-4 rounded-md bg-[#1b1b1b] border border-gray-600 focus:outline-none" />
                                        </div>
                                        <div>
                                            <label className="cursor-pointer">Price</label>
                                            <input type="number" placeholder="$50" className="w-full p-4 rounded-md bg-[#1b1b1b] border border-gray-600 focus:outline-none" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="cursor-pointer flex items-center gap-2">Description</label>
                                        <textarea placeholder="Description" className="w-full p-3 rounded-md bg-[#1b1b1b] border border-gray-600 h-24 focus:outline-none"></textarea>
                                    </div>
                                    <div>
                                        <label className="cursor-pointer flex items-center gap-2">Custom Keywords</label>
                                        <input type="text" placeholder="Add Custom Keywords" className="w-full p-4 rounded-md bg-[#1b1b1b] border border-gray-600 focus:outline-none" />
                                    </div>



                                    <div className="p-4">
                                        <label className="cursor-pointer flex items-center gap-4 text-white mb-4">
                                            Add Custom Keywords
                                        </label>
                                        <div className="flex flex-wrap flex-row gap-3">
                                            {keywords.map((keyword, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-2 bg-gray-200 px-4 py-2 cursor-pointer rounded-full shadow-sm text-gray-800 hover:bg-gray-300 transition-all"
                                                >
                                                    <span className="text-sm">{keyword}</span>
                                                    <button>
                                                        <IoMdClose className="w-4 h-4 text-gray-600" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Upload Images */}
                            <div className='bg-[#1b1b1b] p-8 rounded-2xl'>
                                <h3 className="text-lg mb-2">Upload Images</h3>
                                <div className="border-dashed border-2 border-gray-500 rounded-full p-4 text-center cursor-pointer hover:bg-[#252525]">
                                    <input
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                        id="image-upload"
                                    />
                                    <label htmlFor="image-upload" className="cursor-pointer block">
                                        Drag or click to upload images
                                    </label>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                                    {selectedImages.map((file, index) => (
                                        <div key={index} className="relative w-full h-48">
                                            <Image
                                                src={URL.createObjectURL(file)}
                                                alt={`uploaded-${index}`}
                                                width={160}
                                                height={192}
                                                className="object-cover overflow-hidden rounded-md h-full"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col sm:flex-row justify-end mt-6 gap-4">
                                    <button className="bg-gray-600 hover:bg-gray-700 px-8 py-2 rounded-full">
                                        Cancel
                                    </button>
                                    <button className="bg-[#fd4960] hover:bg-[#ff2f4b] px-8 py-2 rounded-full">
                                        Save
                                    </button>
                                </div>
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
}
