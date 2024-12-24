import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-20 text-white ">
      <div className="px-6 lg:px-0 border-t border-gray-700 pt-10">
        {/* Top Section */}
        <div className='w-full border-b border-gray-700'>
          <div className="grid grid-cols-1 lg:mx-16 md:grid-cols-3 gap-8  pb-8">

            {/* Logo and Description */}
            <div className="md:col-span-1 lg:ml-8">
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
                  <li className="text-sm mb-2 hover:text-white text-gray-400"><a href="/aboutus">About</a></li>
                  <li className="text-sm mb-2 hover:text-white text-gray-400"><a href="/Contactus">Contact</a></li>
                  <li className="text-sm mb-2 hover:text-white text-gray-400"><a href="#">Influencers</a></li>
                </ul>
              </div>

              {/* Access Links */}
              <div>
                <h3 className="font-semibold mb-4">Access</h3>
                <ul>
                  <li className="text-sm mb-2 hover:text-white text-gray-400"><a href="/SignIn">Login</a></li>
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
        </div>
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between my-4 lg:mx-24">
          <p className="text-xs text-gray-500">&copy; FRONXSOLUTION {"–"} All Rights Reserved © 2024</p>
          <div className="flex space-x-4 mt-4 md:mt-0 mr-14">
            <button className="bg-[#1b1b1b] hover:bg-[#292828]  hover:border-[#a09e9e] hover:border-spacing-1 py-0.5 px-2 rounded text-xs border border-[#7a7979] ">
              <Image src="/image/visa-logo.png" alt="visa" width={20} height={10} />
            </button>
            <button className="bg-[#1b1b1b] hover:bg-[#292828] hover:border-[#a09e9e] hover:border-spacing-1 py-0.5 px-2 rounded text-xs  border border-[#7a7979]">
              <Image src="/image/PayPal(1).png" alt="paypal" width={20} height={10} />
            </button>
            <button className="bg-[#1b1b1b] hover:bg-[#292828] hover:border-[#a09e9e] hover:border-spacing-1 py-0.5 px-2 rounded text-xs border border-[#7a7979]">
              <Image src="/image/Mastercard.png" alt="payment" width={20} height={10} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
