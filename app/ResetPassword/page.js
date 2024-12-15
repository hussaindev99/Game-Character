import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-[#1b1b1b] rounded-lg shadow-lg p-8 mx-4 sm:mx-[10%] md:mx-[25%] w-full">
        {/* Heading */}
        <h1 className="text-white text-2xl font-bold text-center mb-2">
          Reset <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Password</span>
        </h1>
        <p className="text-gray-400 text-center mb-6">
          We’ll send you an email so you can reset your password
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="text-gray-400 block mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full p-3 rounded-lg bg-[#1b1b1b] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Reset Password Button */}
          <button className="w-full bg-[#fd4960] hover:bg-[#ff2442] text-white py-3 rounded-lg transition duration-300">
            Reset Password
          </button>
        </form>

        {/* Sign In Link */}
        <p className="text-center text-gray-400 mt-6">
          Already a member?{" "}
          <a
            href="#"
            className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page;
