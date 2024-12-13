import React from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import Image from "next/image";
import googleicon from "@/public/image/google-icon-logo.svg";
import Navbar from "../(component)/navbar/Navbar";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="flex rounded-lg bg-[#1b1b1b] items-center mt-14 mx-[20%] justify-center min-h-screen  px-4">
        <div className="p-8 rounded-xl w-full shadow-lg">
          <h1 className="text-white text-2xl font-bold text-center mb-2">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Company Name
            </span>
          </h1>
          <p className="text-gray-400 text-center mb-6">
            Join us and unlock a world of possibilities.
          </p>

          <form className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="text-gray-400 block mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-[#1b1b1b] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="text-gray-400 block mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full p-3 rounded-lg bg-[#1b1b1b] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="text-gray-400 block mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full mb-5 p-3 rounded-lg bg-[#1b1b1b] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Sign Up Button */}
            <button className="w-full  bg-[#fd4960] hover:bg-[#ff2442]  text-white py-3 rounded-full transition duration-300">
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="border-t border-gray-700 flex-grow"></div>
            <span className="text-gray-500 mx-4">or</span>
            <div className="border-t border-gray-700 flex-grow"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex space-x-4">
            <button className="flex-1 cursor-not-allowed bg-[#2b2b2b] hover:bg-[#3b3b3b] text-white py-3 rounded-full flex items-center justify-center transition duration-300">
              <RiFacebookCircleFill className="mr-2 h-5 w-5 text-blue-700" />{" "}
              Continue with Facebook
            </button>
            <button className="flex-1 cursor-not-allowed  bg-[#2b2b2b] hover:bg-[#3b3b3b] text-white py-3 rounded-full flex items-center justify-center transition duration-300">
              <Image src={googleicon} alt="Google" width={20} height={20} />
              <span className="ml-2">Continue with Google</span>
            </button>
          </div>

          {/* Sign In Link */}
          <p className="text-center text-gray-400 mt-6">
            Already have an account?{" "}
            <Link
              href="/SignIn"
              className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent hover:underline hover:underline-offset-8"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
