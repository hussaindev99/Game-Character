"use client";
import Image from "next/image";
import profileimg from "@/public/image/logoman.png";
import React, { useState } from "react";
import { IoCameraReverseSharp } from "react-icons/io5";
import { FaList, FaRegCreditCard, FaShoppingCart, FaTags } from "react-icons/fa";
import Link from "next/link";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbLayoutDashboard } from "react-icons/tb";
import Navbars from "../(component)/dashboardnavbar/Navbars";

const Page = () => {
    const [profileImage, setProfileImage] = useState(profileimg);
    const [formData, setFormData] = useState({
        name: "John Smith",
        email: "johnsmith@gmail.com",
        contact: "+123456789",
        address: "123 Main Street",
        currentPassword: "",
        newPassword: "",
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Valid email is required.";
        if (!formData.contact) newErrors.contact = "Contact is required.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            setSuccessMessage("Profile updated successfully!");
            setTimeout(() => setSuccessMessage(""), 3000);
        }
    };

    return (
        <div className="bg-[#121212] min-h-screen">
            <Navbars />
            <div className="flex">
                {/* Sidebar */}
                <aside className="bg-[#1b1b1b] w-1/5 p-6">
                    <ul className="space-y-4">
                        <Link href="/Dashboard" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                            <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                                <TbLayoutDashboard className="mr-3 h-6 w-6" /> {/* Icon for Add Product */}
                                <a href="#">Dashboard</a>
                            </li>
                        </Link>
                        <Link href="/AddProduct" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                            <li className="flex items-center  text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                                <MdOutlineDashboardCustomize className="mr-3 h-6 w-6" /> {/* Icon for Add Product */}
                                <a href="#">Add Product</a>
                            </li>
                        </Link>
                        <Link href="/ProductList" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                            <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                                <FaList className="mr-3" /> {/* Icon for Product List */}
                                <a href="#">Product List</a>
                            </li>
                        </Link>
                        <Link href="/Categories" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                            <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                                <FaTags className="mr-3 " /> {/* Icon for Categories */}
                                <a href="#">Categories</a>
                            </li>
                        </Link>
                        <Link href="/Orders" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                            <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                                <FaShoppingCart className="mr-3 " /> {/* Icon for Orders */}
                                <a href="#">Orders</a>
                            </li>
                        </Link>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-8">
                    {/* Profile Header */}
                    <section className="bg-[#1b1b1b] rounded-lg shadow-lg mb-6">
                        <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-24 rounded-t-lg"></div>
                        <div className="relative -mt-12 flex justify-center">
                            <label htmlFor="profileInput" className="relative group cursor-pointer">
                                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <IoCameraReverseSharp className="text-white text-2xl" />
                                </div>
                                <Image
                                    src={profileImage}
                                    alt="Profile"
                                    width={100}
                                    height={100}
                                    className="rounded-full border-4 border-white"
                                />
                                <input
                                    type="file"
                                    id="profileInput"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageChange}
                                />
                            </label>
                        </div>
                        <p className="text-center text-lg mt-3 font-semibold text-white">{formData.name}</p>
                    </section>

                    {/* Profile Form */}
                    <section className="bg-[#1b1b1b] p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold text-white mb-4">Profile Information</h2>
                        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={`w-full bg-[#2b2b2b] p-3 rounded-md focus:outline-none ${errors.name ? "border-red-500" : ""}`}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`w-full bg-[#2b2b2b] p-3 rounded-md focus:outline-none ${errors.email ? "border-red-500" : ""}`}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-400 mb-2">Contact</label>
                                <input
                                    type="text"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleInputChange}
                                    className={`w-full bg-[#2b2b2b] p-3 rounded-md focus:outline-none ${errors.contact ? "border-red-500" : ""}`}
                                />
                                {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
                            </div>
                            <div className="col-span-2">
                                <label className="block text-gray-400 mb-2">Address</label>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="w-full bg-[#2b2b2b] p-3 rounded-md focus:outline-none"
                                    rows="3"
                                ></textarea>
                            </div>
                        </form>
                        <div className="flex justify-center mt-6">
                            <button
                                type="submit"
                                className="bg-red-500 text-white py-3 px-8 rounded-full hover:bg-red-600"
                            >
                                Update
                            </button>
                        </div>
                        {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Page;
