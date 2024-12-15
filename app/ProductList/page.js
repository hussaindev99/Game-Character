import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { FaList, FaShoppingCart, FaTags } from 'react-icons/fa';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { TbLayoutDashboard } from 'react-icons/tb';
import { CgSearch } from "react-icons/cg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import listimg from "../../public/image/itemimage.png"; // Updated import path
import Navbars from '../(component)/dashboardnavbar/Navbars';

const Page = () => {
  return (
    <>
      <Navbars />
      <div className="flex min-h-screen bg-[#121212] text-white flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="bg-[#1b1b1b] w-full lg:w-1/5 p-6 lg:h-screen lg:sticky top-0">
          <ul className="space-y-6">
            <li>
              <Link href="/Dashboard">
                <div className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md cursor-pointer">
                  <TbLayoutDashboard className="mr-3 h-6 w-6" />
                  <span>Dashboard</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/AddProduct">
                <div className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md cursor-pointer">
                  <MdOutlineDashboardCustomize className="mr-3 h-6 w-6" />
                  <span>Add Product</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/ProductList">
                <div className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md cursor-pointer">
                  <FaList className="mr-3 h-6 w-6" />
                  <span>Product List</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/Categories">
                <div className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md cursor-pointer">
                  <FaTags className="mr-3 h-6 w-6" />
                  <span>Categories</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/Orders">
                <div className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md cursor-pointer">
                  <FaShoppingCart className="mr-3 h-6 w-6" />
                  <span>Orders</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-4/5 p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">
              Product <span className="text-[#e3257c]">List</span>
            </h2>
            <button className="bg-[#fd4960] hover:bg-[#ff2f4b] px-6 py-2 rounded-full">
              Add Product
            </button>
          </div>

          {/* Table */}
          <div className="bg-[#1b1b1b] p-6 rounded-2xl">
            {/* Search Bar */}
            <div className="flex justify-end mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search product"
                  className="bg-[#2b2b2b] text-white rounded-full px-3 py-2 pl-10 w-full sm:w-64 focus:outline-none"
                />
                <CgSearch className="absolute h-4 w-4 left-3 top-3 text-gray-400" />
              </div>
            </div>

            {/* Table Headers */}
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400">
                  <th className="pb-4">Product Name</th>
                  <th>Product ID</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Category</th>
                  <th>Sale</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Array(10).fill(null).map((_, index) => (
                  <tr key={index} className="border-t border-gray-700">
                    <td className="py-4 flex items-center">
                      <Image
                        src="/image/itemimage.png" // Use the correct path without '../../public'
                        alt="product"
                        width={20}
                        height={20}
                        className="w-10 h-10 mr-4 rounded-md"
                      />

                      Chaos Battletome
                    </td>
                    <td>234454545</td>
                    <td>$220</td>
                    <td>400</td>
                    <td>Scal</td>
                    <td>200</td>
                    <td>
                      <button className="text-white bg-[#2b2b2b] rounded-full px-3 py-1">
                        •••
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-6 flex-col sm:flex-row">
              <span className="text-gray-400">Showing 10 entries</span>
              <div className="flex space-x-2 mt-2 sm:mt-0">
                <button className="bg-[#2b2b2b] px-2 py-1 rounded-full">
                  <IoIosArrowBack />
                </button>
                <button className="bg-[#fd4960] px-3 py-1 rounded-full">1</button>
                <button className="bg-[#2b2b2b] px-3 py-1 rounded-full">2</button>
                <button className="bg-[#2b2b2b] px-3 py-1 rounded-full">3</button>
                <button className="bg-[#2b2b2b] px-2 py-1 rounded-full">
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
