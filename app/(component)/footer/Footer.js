import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-14 text-white py-12">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">

          {/* Logo and Description */}
          <div className="md:col-span-1">
            <p className="text-lg font-bold mb-4">
              <Image src="/image/logo.png" alt="logo" width={100} height={40} />
            </p>
            <p className="text-sm mb-4 w-[78%]">
              On 1 ceases makes it easy to create, sell, market, and scale your online business with your personal brand.
            </p>
            <div className="flex space-x-4 text-gray-400 mt-4">
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaLinkedinIn className="hover:text-white cursor-pointer" />
              <FaYoutube className="hover:text-white cursor-pointer" />
              <FaTiktok className="hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-2">
            {/* Product Links */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul>
                <li className="text-sm mb-2 hover:text-white text-gray-400"><a href="#">Pricing</a></li>
                <li className="text-sm mb-2 hover:text-white text-gray-400"><a href="#">Features</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul>
                <li className="text-sm mb-2 hover:text-white text-gray-400"><a href="#">About</a></li>
                <li className="text-sm mb-2 hover:text-white text-gray-400"><a href="#">Contact</a></li>
                <li className="text-sm mb-2 hover:text-white text-gray-400"><a href="#">Influencers</a></li>
              </ul>
            </div>

            {/* Access Links */}
            <div>
              <h3 className="font-semibold mb-4">Access</h3>
              <ul>
                <li className="text-sm mb-2 hover:text-white text-gray-400"><a href="#">Login</a></li>
                <li className="text-sm mb-2 hover:text-white text-gray-400"><a href="#">Start Free Trial</a></li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul>
                <li className="text-sm mb-2 hover:text-white text-gray-400"><a href="#">AI Blog</a></li>
                <li className="text-sm mb-2 hover:text-white text-gray-400"><a href="#">Community</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul>
                <li className="text-sm mb-2 hover:text-white text-gray-400"><a href="#">FAQs</a></li>
                <li className="text-sm mb-2 hover:text-white text-gray-400"><a href="#">Contact Support</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul>
                <li className="text-sm mb-2 hover:text-white text-gray-400"><a href="#">Privacy Policy</a></li>
                <li className="text-sm mb-2 hover:text-white text-gray-400"><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8">
          <p className="text-xs text-gray-500">&copy; FRONXSOLUTION {"–"} All Rights Reserved © 2024</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button className="bg-gray-800 hover:bg-[#292828] hover:outline-2 hover:outline-[#a09e9e] hover:outline py-1 px-2 rounded text-xs outline-2 outline-[#7a7979] outline">
              <Image src="/image/visa-logo.png" alt="visa" width={20} height={10} />
            </button>
            <button className="bg-gray-800 hover:bg-[#292828] hover:outline-2 hover:outline-[#a09e9e] hover:outline py-1 px-2 rounded text-xs outline-2 outline-[#7a7979] outline">
              <Image src="/image/PayPal.png" alt="paypal" width={20} height={10} />
            </button>
            <button className="bg-gray-800 hover:bg-[#292828] hover:outline-2 hover:outline-[#a09e9e] hover:outline py-1 px-2 rounded text-xs outline-2 outline-[#7a7979] outline">
              <Image src="/image/Mastercard.png" alt="payment" width={20} height={10} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
