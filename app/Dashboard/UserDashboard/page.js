"use client";
import Image from "next/image";
import profileimg from "@/public/image/logoman.png";
import React, { useState } from "react";
import { IoCameraReverseSharp } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import Link from "next/link";
import fyibankimg from "@/public/image/fyibankcard.png"
import { MdOutlineDashboardCustomize } from "react-icons/md";
// import Navbars from "../(component)/dashboardnavbar/Navbars";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaUserGroup } from "react-icons/fa6";
import { RiLogoutBoxLine } from "react-icons/ri";
import Navbars from "@/app/(component)/dashboardnavbar/Navbars";

const Page = () => {
    const [showPassword, setShowPassword] = useState(false);
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
            <div className="flex flex-col lg:flex-row">
                {/* Sidebar */}
                <aside className="bg-[#1b1b1b] w-full lg:w-1/5 p-6">
                    <ul className="space-y-4">
                        <Link href="/Dashboard/UserDashboard" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                            <FaUserGroup className="mr-3 h-6 w-6" />
                            <a href="#">Profile</a>
                        </Link>
                        <Link href="/Dashboard/Wishlist" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                            <MdOutlineDashboardCustomize className="mr-3 h-6 w-6" />
                            <a href="#">Wish List</a>
                        </Link>
                        <Link href="/Dashboard/OrderHistory" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                            <FaList className="mr-3" />
                            <a href="#">Order History</a>
                        </Link>
                        <Link href="/Dashboard/LogOut" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                            <RiLogoutBoxLine className="mr-3 h-6 w-6 font-extrabold text-balance" />
                            <a href="#">Log Out</a>
                        </Link>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6 lg:p-8">
                    {/* Profile Header */}
                    <div className="mb-8 ml-0 lg:ml-7">
                        <p className="text-2xl font-semibold">Profile <span className="text-pink-500">Information</span></p>
                        <p className="text-xl text-gray-400">Manage your profile details</p>
                    </div>
                    <section className="bg-[#1b1b1b] rounded-lg shadow-xl mb-6 mx-[2%]">
                        <div className="p-6">
                            <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-24 rounded-lg"></div>
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
                            <p className="text-center text-lg mt-3 font-semibold text-white ">{formData.name}</p>
                        </div>
                    </section>

                    {/* Profile Form */}
                    <section className="p-6 rounded-lg shadow-lg">
                        <div className="bg-[#1b1b1b] p-6 rounded-xl">
                            <h2 className="text-xl font-bold text-white mb-4">Profile Information</h2>
                            <form onSubmit={handleSubmit} className="flex flex-col sm:grid sm:grid-cols-1 md:grid-cols-2 gap-6 bg-[#1b1b1b] p-6 rounded-xl">
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
                                        type="number"
                                        name="contact"
                                        placeholder="+12345689"
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
                        </div>
                    </section>

                    {/* Security Section */}
                    <div className="bg-[#1b1b1b] p-6 rounded-xl mt-10">
                        <h2 className="text-xl font-bold text-white mb-4">Security</h2>
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-6">
                            <div>
                                <label className="block text-gray-400 mb-2">Old Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Enter old password"
                                        className={`w-full bg-[#2b2b2b] p-3 rounded-md focus:outline-none pr-10 ${errors.contact ? "border-red-500" : ""}`}
                                    />
                                    <span
                                        className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                                    </span>
                                </div>
                                {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-400 mb-2">New Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Enter new password"
                                        className={`w-full bg-[#2b2b2b] p-3 rounded-md focus:outline-none pr-10 ${errors.contact ? "border-red-500" : ""}`}
                                    />
                                    <span
                                        className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                                    </span>
                                </div>
                                {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-400 mb-2">Confirm Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Confirm your password"
                                        className={`w-full bg-[#2b2b2b] p-3 rounded-md focus:outline-none pr-10 ${errors.contact ? "border-red-500" : ""}`}
                                    />
                                    <span
                                        className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                                    </span>
                                </div>
                                {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
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
                    </div>

                    {/* Payment Information */}
                    <section className="bg-[#1b1b1b] mt-10 rounded-xl text-white py-10 px-6">
                        <h2 className="text-xl font-bold text-white mb-4">Payment Information</h2>
                        <h2 className="text-lg font-semibold mb-4">Cards</h2>
                        <div className="flex gap-4 flex-wrap">
                            {/* Existing Card (Using Image) */}
                            <div className="w-full sm:w-1/3 lg:w-1/4">
                                <Image
                                    src={fyibankimg} // Replace this with your card image URL
                                    alt="Bank Card"
                                    className="w-full h-40 bg-cover rounded-lg shadow-lg"
                                />
                            </div>

                            {/* Add New Card */}
                            <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
                                <div className="bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 p-[2px] rounded-lg">
                                    <div className="bg-black flex flex-col justify-center items-center w-full h-40 rounded-lg">
                                        <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-2">
                                            <span className="text-lg font-bold">+</span>
                                        </div>
                                        <p className="text-sm text-center">Add New Card</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </main>
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
        </div>

    );
};

export default Page;
