"use client"
import React, { useEffect, useState } from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import Image from "next/image";
import googleicon from "@/public/image/google-icon-logo.svg";
import LandingNavbar from "../(component)/landingpagenavbar/LandingNavbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const Page = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState('');
  const [loader, setloader] = useState(false)
  const router = useRouter();
  // const {mixdata,setMixdata} = useContext(ContextPage);
  useEffect(() => {
    localStorage.removeItem("heartCount");
    localStorage.removeItem("wishlistArray");
    localStorage.removeItem("countcart01")
    localStorage.removeItem("cartArray")
    if (!localStorage.getItem('refreshed')) {
      // If not, refresh the page and set the flag
      localStorage.setItem('refreshed', 'true');
      window.location.reload();
    }
  }, [])
  const submit = async (e) => {
    e.preventDefault();
    if (name.length <= 3 || email.length <= 3 || password.length <= 3) {
      setHasError(true);
      setError("Please write more than 3 characters in each field.");
      setEmail('');
      setName('');
      setPassword('');
    } else {
      setloader(true)
      try {
        const res = await axios.post('https://gaming-api-kgvd.vercel.app/user/signup', {
          Name: name,
          email: email,
          password: password,
        });
        console.log(res.data.new_user._id);
        router.push('/SignIn')
        setHasError(false);
        setloader(false)
        setError('');
        setEmail('');
        setName('');
        setPassword('');
        setLastename('');
      } catch (err) {
        console.log(err?.response?.data?.msg.code);
        setloader(false)
        setHasError(true);
        if (err?.response?.data?.msg.code == 11000) {
          setError('You already create account so go to login')
        } else {
          setError('Network error')

        }
      }
    }
  };

  return (
    <>

      {loader &&
        <div>
          <div className="relative w-[100%] h-[4px] rounded-[30px] bg-loader-background">
            <div className="absolute top-0 left-0 h-full rounded-[30px] bg-loader-color animate-moving" />
          </div>
        </div>
      }
      <LandingNavbar />
      <div className="flex mt-24 mb-10 rounded-lg bg-[#1b1b1b] items-center  px-4 justify-center min-h-screen sm:mx-8 md:mx-16 lg:mx-[20%]">
        <div className="p-8 rounded-xl w-full max-w-md sm:max-w-lg shadow-lg">
          <h1 className="text-white text-2xl font-bold text-center mb-2">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Company Name
            </span>
          </h1>
          <p className="text-gray-400 text-center mb-6">
            Join us and unlock a world of possibilities.
          </p>
          {!hasError &&
            <p className="text-gray-400 text-center mb-6">Sign in to continue to your account.</p>
          }
          {hasError &&
            <p className='text-[16px] mt-[10px] text-red-500'>{error}</p>
          }
          <form className="space-y-4" onSubmit={submit}>
            {/* Name Input */}
            <div>
              <label className="text-gray-400 block mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-[#1b1b1b] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => setName(e.target.value)} value={name} required />
            </div>

            {/* Email Input */}
            <div>
              <label className="text-gray-400 block mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full p-3 rounded-lg bg-[#1b1b1b] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>

            {/* Password Input */}
            <div>
              <label className="text-gray-400 block mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full mb-5 p-3 rounded-lg bg-[#1b1b1b] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>

            {/* Sign Up Button */}
            <button className="w-full bg-[#fd4960] hover:bg-[#ff2442] text-white py-3 rounded-full transition duration-300">
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
          <div className="flex flex-wrap gap-4">
            <button className="flex-1 bg-[#2b2b2b] cursor-not-allowed hover:bg-[#3b3b3b] text-white py-3 rounded-full flex items-center justify-center transition duration-300">
              <RiFacebookCircleFill className="mr-2 h-5 w-5 text-blue-700" />{" "}
              Continue with Facebook
            </button>
            <button className="flex-1 bg-[#2b2b2b] cursor-not-allowed hover:bg-[#3b3b3b] text-white py-3 rounded-full flex items-center justify-center transition duration-300">
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
