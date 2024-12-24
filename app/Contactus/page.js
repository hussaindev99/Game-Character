"use client";
import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { RiAttachment2 } from "react-icons/ri";
import Navbar from "../(component)/navbar/Navbar";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        attachment: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "attachment") {
            setFormData((prev) => ({ ...prev, attachment: files[0] }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Example: Submit the form data to an API
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="bg-black">
            <Navbar />
            <div className="min-h-screen mt-12 bg-black flex items-center justify-center px-4 md:px-[8%]">
                <div className="w-full bg-black rounded-lg shadow-md p-6 md:p-12 flex flex-col lg:flex-row">
                    {/* Contact Info Section */}
                    <div className="w-full lg:w-1/2 space-y-4 text-gray-200">
                        <h2 className="text-2xl font-bold">Contact Us</h2>
                        <p className="text-gray-400">Just leave us a note, we are always ready to help.</p>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <div className="h-10 w-10 bg-[#FD4960] rounded-full flex justify-center items-center">
                                    <span className="text-2xl">
                                        <HiOutlineMail />
                                    </span>
                                </div>
                                <div>
                                    <p className="text-gray-400">Email</p>
                                    <a href="mailto:contact@xyzgmail.com" className="hover:underline text-sm">
                                        contact@xyzgmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 my-4">
                                <div className="h-10 w-10 bg-[#FD4960] rounded-full flex justify-center items-center">
                                    <span>
                                        <FiPhoneCall />
                                    </span>
                                </div>
                                <div>
                                    <p className="text-gray-400">Phone</p>
                                    <a href="tel:+923027868970" className="hover:underline text-sm">
                                        +92 302 786 8970
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2">



                                <div className="h-10 w-10 bg-[#FD4960] rounded-full flex justify-center items-center">
                                    <span>
                                        <MdLocationPin />
                                    </span>
                                </div>

                                <div>
                                    <p className="text-gray-400">Location</p>
                                    <p className="text-sm">
                                        Building 4, 4th Floor, Plot No. 31, Arkan Plaza Business Complex, Sheikh.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-8 bg-[#1b1b1b] p-8 rounded-2xl">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-[#1b1b1b] text-gray-200 p-3 rounded-lg border border-gray-400 outline-none"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-[#1b1b1b] text-gray-200 p-3 rounded-lg border border-gray-400 outline-none"
                                required
                            />
                            <input
                                type="number"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-[#1b1b1b] text-gray-200 p-3 rounded-lg border border-gray-400 outline-none"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-[#1b1b1b] text-gray-200 p-3 rounded-lg border border-gray-400 outline-none"
                                rows="4"
                                required
                            ></textarea>
                            <div className="w-full">
                                <label
                                    htmlFor="file-upload"
                                    className="flex items-center justify-center w-full bg-[#1b1b1b] text-gray-200 py-3 rounded-lg border border-dashed border-gray-500 cursor-pointer hover:bg-gray-800 transition"
                                >
                                    <RiAttachment2 className="mr-3" />
                                    Add Attachment
                                </label>
                                <input
                                    id="file-upload"
                                    type="file"
                                    name="attachment"
                                    onChange={handleChange}
                                    className="hidden"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#FD4960] text-white p-3 rounded-full hover:bg-[#ff304c] transition duration-300"
                            >
                                Sign in
                            </button>
                        </form>
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
        </div>
    );
}
