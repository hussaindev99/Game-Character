"use client";
import React, { useState } from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import Image from "next/image";
import googleicon from "@/public/image/google-icon-logo.svg";
import LandingNavbar from "../(component)/landingpagenavbar/LandingNavbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

const Page = () => { // Changed 'page' to 'Page'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState('');
    const [loader, setLoader] = useState(false); // Fixed variable name to 'setLoader'

    const router = useRouter();

    const submit = async (e) => {
        e.preventDefault();
        if (email.length <= 3 || password.length <= 3) {
            setHasError(true);
            setError("Please write more than 3 characters in each field.");
            toast.error("Please write more than 3 characters in each field.");
            setEmail('');
            setPassword('');
        } else {
            setLoader(true); // Fixed variable name to 'setLoader'

            try {
                const res = await axios.post('https://gaming-api-kgvd.vercel.app/user/login', {
                    email,
                    password,
                });

                console.log(res.data);
                localStorage.clear();
                localStorage.setItem('token', res.data?.token);
                localStorage.setItem('password', password);
                localStorage.setItem('id', res?.data?._id);
                toast.success("Login successful!");
                router.push('/Home');
                setError('');
                setEmail('');
                setPassword('');
                setHasError(false);
                setLoader(false); // Fixed variable name to 'setLoader'

            } catch (error) {
                console.log(error);
                setLoader(false); // Fixed variable name to 'setLoader'
                setHasError(true);
                toast.error(error?.response?.data?.msg);
                setError(error?.response?.data?.msg);
            }
        }
    };

    return (
        <>
            <LandingNavbar />

            {loader && (
                <div>
                    <div className="relative w-[100%] h-[4px] rounded-[30px] bg-loader-background">
                        <div className="absolute top-0 left-0 h-full rounded-[30px] bg-loader-color animate-moving" />
                    </div>
                </div>
            )}
            <div className="flex mt-28 mb-10 rounded-lg bg-[#1b1b1b] items-center px-4 justify-center min-h-screen sm:mx-8 md:mx-16 lg:mx-[20%]">
                <div className="p-8 rounded-xl w-full max-w-lg shadow-lg">
                    <h1 className="text-white text-2xl font-bold text-center mb-2">
                        Welcome Back to <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Company Name</span>
                    </h1>
                    {!hasError && (
                        <p className="text-gray-400 text-center mb-6">Sign in to continue to your account.</p>
                    )}
                    {hasError && (
                        <p className="text-[16px] mt-[10px] text-red-500">{error}</p>
                    )}
                    <form className="space-y-4" onSubmit={submit}>
                        <div>
                            <label className="text-gray-400 block mb-2">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="w-full p-3 rounded-lg bg-[#1b1b1b] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>

                        <div>
                            <label className="text-gray-400 block mb-2">Password</label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="w-full p-3 rounded-lg bg-[#1b1b1b] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center text-gray-400">
                                <input
                                    type="checkbox"
                                    className="peer h-4 w-4 text-pink-500 bg-[#1b1b1b] border-gray-600 focus:ring-pink-500"
                                />
                                <span className="ml-2 peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-blue-500 peer-checked:bg-clip-text peer-checked:text-transparent transition duration-300">
                                    Remember me
                                </span>
                            </label>

                            <Link href="/ResetPassword" className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent hover:underline hover:underline-offset-8">
                                Forgot Password?
                            </Link>
                        </div>

                        <button className="w-full bg-[#fd4960] hover:bg-[#ff2442] text-white py-3 rounded-full transition duration-300">
                            Sign in
                        </button>
                    </form>

                    <div className="flex items-center my-6">
                        <div className="border-t border-gray-700 flex-grow"></div>
                        <span className="text-gray-500 mx-4">or</span>
                        <div className="border-t border-gray-700 flex-grow"></div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <button className="flex-1 bg-[#2b2b2b] cursor-not-allowed hover:bg-[#3b3b3b] text-white py-3 rounded-full flex items-center justify-center transition duration-300">
                            <RiFacebookCircleFill className="mr-2 h-5 w-5 text-blue-700" /> Continue with Facebook
                        </button>
                        <button className="flex-1 cursor-not-allowed bg-[#2b2b2b] hover:bg-[#3b3b3b] text-white py-3 rounded-full flex items-center justify-center transition duration-300">
                            <Image src={googleicon} alt="" className="h-4 w-4" />
                            <span className="mr-2" /> Continue with Google
                        </button>
                    </div>

                    <p className="text-center text-gray-400 mt-6">
                        Not a member yet? <Link href="SignUp" className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent hover:underline hover:underline-offset-8">Sign Up</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Page; // Use the updated name
