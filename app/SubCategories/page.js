"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaList, FaShoppingCart, FaTags } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbLayoutDashboard } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CgSearch } from "react-icons/cg";
import { BiCategory } from "react-icons/bi";
import Navbars from "../(component)/dashboardnavbar/Navbars";

const Page = () => {
  const [categories] = useState(Array(10).fill({ name: "Scale", id: "xyz" }));
  const [currentPage, setCurrentPage] = useState(3); // Current page set to 2 based on your image
  const totalPages = 3; // Total pages (as shown in the image)

  return (
    <>
      <Navbars />
      <div className="flex min-h-screen bg-[#121212] text-white flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="bg-[#1b1b1b] w-full lg:w-1/5 p-6 lg:h-screen">
          <ul className="space-y-4">
            <li>
              <Link
                href="/Dashboard"
                className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md"
              >
                <TbLayoutDashboard className="mr-3 h-6 w-6" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/AddProduct"
                className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md"
              >
                <MdOutlineDashboardCustomize className="mr-3 h-6 w-6" />
                <span>Add Product</span>
              </Link>
            </li>
            <li>
              <Link
                href="/ProductList"
                className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md"
              >
                <FaList className="mr-3 h-5 w-5" />
                <span>Product List</span>
              </Link>
            </li>
            <li className="">
              <Link
                href="/Categories"
                className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md"
              >
                <FaTags className="mr-3 h-6 w-6" />
                <span>Categories</span>
              </Link>
            </li>
            <li className="">
              <Link
                href="/SubCategories"
                className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md"
              >
                <BiCategory className="mr-3 h-6 w-6" />
                <span>Sub-Categories</span>
              </Link>
            </li>
            <li>
              <Link
                href="/Orders"
                className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md"
              >
                <FaShoppingCart className="mr-3" />
                <span>Orders</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-4/5 p-8 flex flex-col rounded-2xl">
          <div className="flex justify-between mb-5 flex-col lg:flex-row">
            <h2 className="text-2xl font-semibold">
              Sub-<span className="text-[#e3257c]">Categories</span>
            </h2>
            <Link
              href="/AddCategory"
              className="bg-[#fd4960] hover:bg-[#ff2f4b] px-6 py-2 rounded-full mt-4 lg:mt-0"
            >
              Add Category
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex justify-end mb-4">
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Search product"
                className="bg-[#2b2b2b] text-white rounded-full px-3 py-2 pl-10 w-full focus:outline-none"
              />
              <CgSearch className="absolute h-4 w-4 left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Category Table */}
          <div className="bg-[#1b1b1b] p-4 rounded-lg flex-grow">
            <table className="w-full text-left">
              <thead className="border-b border-[#2b2b2b] text-gray-400">
                <tr>
                  <th className="py-2">Sub-Categories Name</th>
                  <th className="py-2">Categories</th>
                  <th className="py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#2b2b2b] hover:bg-[#2b2b2b]"
                  >
                    <td className="py-3">{category.name}</td>
                    <td className="py-3">{category.id}</td>
                    <td className="py-3 text-center">
                      <BsThreeDotsVertical className="inline-block cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6 flex-col lg:flex-row">
            <p className="text-sm text-gray-400">Showing 10 entries</p>
            <div className="flex items-center space-x-2 mt-4 lg:mt-0">
              <button className="px-2 py-2 rounded-full bg-[#2b2b2b] hover:bg-[#3b3b3b]">
                <IoIosArrowBack />
              </button>
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 rounded-full ${
                    page === currentPage
                      ? "bg-[#fd4960]"
                      : "bg-[#2b2b2b]"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-2 py-2 rounded-full bg-[#2b2b2b] hover:bg-[#3b3b3b]">
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
