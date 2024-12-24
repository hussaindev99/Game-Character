"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Chaosimg from "@/public/image/ChaosBattletom1.png";
import product1 from "@/public/image/product2.png"
import img from "@/public/image/ItemImage.png"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaList, FaShoppingCart, FaTags } from "react-icons/fa";
import { TbLayoutDashboard } from "react-icons/tb";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import Navbars from "../(component)/dashboardnavbar/Navbars";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Link from "next/link";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Data for Revenue Chart
const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Revenue",
      price: "650",
      data: [400, 450, 300, 500, 400, 550, 480, 520, 600, 700, 500, 650],
      borderColor: "#4ade80",
      backgroundColor: "rgba(74, 222, 128, 0.2)",
      tension: 0.4,
    },
  ],
};

// Sample data for Orders and Products
const orders = [
  {
    name: "Chaos Battletam",
    price: "$600",
    image: Chaosimg, // Replace with your image URL
    date: "26 Nov 2024",
  },
  {
    name: "Chaos Battletam",
    price: "$500",
    image: Chaosimg, // Replace with your image URL
    date: "25 Nov 2024",
  },
  {
    name: "Chaos Battletam",
    price: "$400",
    image: Chaosimg, // Replace with your image URL
    date: "24 Nov 2024",
  },
  {
    name: "Chaos Battletam",
    price: "$500",
    image: Chaosimg, // Replace with your image URL
    date: "25 Nov 2024",
  },
  {
    name: "Chaos Battletam",
    price: "$400",
    image: Chaosimg, // Replace with your image URL
    date: "24 Nov 2024",
  },
];


const toporders = [
  {
    name: "Chaos Battletam",
    price: "$600",
    image: Chaosimg, // Replace with your image URL
    date: "100 Items",
  },
  {
    name: "Chaos Battletam",
    price: "$500",
    image: product1, // Replace with your image URL
    date: "100 Items",
  },
  {
    name: "Chaos Battletam",
    price: "$400",
    image: Chaosimg, // Replace with your image URL
    date: "100 Items",
  },
  {
    name: "Chaos Battletam",
    price: "$500",
    image: product1, // Replace with your image URL
    date: "100 Items",
  },
  {
    name: "Chaos Battletam",
    price: "$400",
    image: img, // Replace with your image URL
    date: "100 Items",
  },
];



const products = [
  {
    name: "Chaos Battletam",
    id: "234454545",
    price: "$8.20",
    quantity: "1A",
    revenue: "$238.25",
    status: "Not Available",
    image: img, // Replace with your product image URL
  },
  {
    name: "Chaos Battletam",
    id: "234454546",
    price: "$10.25",
    quantity: "2B",
    revenue: "$123.30",
    status: "Available",
    image: Chaosimg, // Replace with your product image URL
  },
  {
    name: "Chaos Battletam",
    id: "234454547",
    price: "$12.30",
    quantity: "3C",
    revenue: "$255.35",
    status: "Available",
    image: Chaosimg, // Replace with your product image URL
  },
  {
    name: "Chaos Battletam",
    id: "234454548",
    price: "$14.35",
    quantity: "4D",
    revenue: "$223.40",
    status: "Not Available",
    image: product1, // Replace with your product image URL
  },
  {
    name: "Chaos Battletam",
    id: "234454549",
    price: "$16.40",
    quantity: "5E",
    revenue: "$355.45",
    status: "Not Available",
    image: Chaosimg, // Replace with your product image URL
  },
];


const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);


  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    // Close the dropdown if the click is outside the dropdown container
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Top Header */}
      <Navbars />
      <div className="flex flex-col lg:flex-row w-full">
        <div className="bg-[#1b1b1b] w-full lg:w-1/5 p-6 my-0">
          <div className="flex flex-col">
            <ul className="space-y-4">
              <Link href="/Dashboard" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                  <TbLayoutDashboard className="mr-3 h-6 w-6" /> {/* Icon for Dashboard */}
                  <a href="#">Dashboard</a>
                </li>
              </Link>
              <Link href="/AddProduct" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                  <MdOutlineDashboardCustomize className="mr-3 h-6 w-6" /> {/* Icon for Add Product */}
                  <a href="#">Add Product</a>
                </li>
              </Link>
              <Link href="/ProductList" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                  <FaList className="mr-3" /> {/* Icon for Product List */}
                  <a href="#">Product List</a>
                </li>
              </Link>
              <Link href="/Categories" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                  <FaTags className="mr-3 " /> {/* Icon for Categories */}
                  <a href="#">Categories</a>
                </li>
              </Link>
              <Link href="/Orders" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                  <FaShoppingCart className="mr-3 " /> {/* Icon for Orders */}
                  <a href="#">Orders</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-[80%] p-8 bg-[#0a0a0a] text-white min-h-screen">
          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Total Revenue", "Total Income", "Total Orders"].map((title, index) => (
              <div key={index} className="bg-[#1B1B1B] p-6 rounded-lg flex flex-col items-center shadow-md space-y-2">
                <p className="text-gray-400 text-sm">{title}</p>
                <p className="text-2xl font-bold">$456</p>
              </div>
            ))}
          </div>

          {/* Revenue Overview Chart */}
          <div className="bg-[#1B1B1B] mt-10 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Revenue Overview</h2>
            <div className="h-64">
              <Line data={lineData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>

          {/* Top Orders and Orders */}
          <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-6">
            {/* Top Orders */}
            <div className="bg-[#1B1B1B] p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Top Orders</h2>
              <ul className="space-y-4">
                {toporders.map((order, index) => (
                  <li key={index} className="flex justify-between items-center border-b border-gray-700 pb-4">
                    <div className="flex items-center space-x-4">
                      <Image src={order.image} alt={order.name} width={48} height={48} className="object-cover" />
                      <div>
                        <p className="font-semibold">{order.name}</p>
                        <p className="text-gray-400 text-sm">{order.date}</p>
                      </div>
                    </div>
                    <p className="text-green-400 font-bold">{order.price}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Orders Section */}
            <div className="bg-[#1B1B1B] p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Orders</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="py-3 px-4">Image</th>
                      <th className="py-3 ">Name</th>
                      <th className="py-3 px-4">Price</th>
                      <th className="py-3 px-4">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={index} className="border-b border-gray-700">
                        <td className="py-3 ">
                          <Image src={order.image} alt="" width={50} height={50} className="object-cover" />
                        </td>
                        <td className="py-3 text-start">{order.name}</td>
                        <td className="py-3 px-4 text-green-400 font-bold">{order.price}</td>
                        <td className="py-3 px-4">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Products Overview Section */}
          <div className="bg-[#1B1B1B] mt-10 p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-center md:text-left mb-4 md:mb-0">Products Overview</h2>
              {/* Search Input */}
              <div className="flex items-center border border-gray-600 rounded-full w-full md:w-auto">
                <p className="bg-transparent text-2xl text-white py-2 pl-3 rounded-l-full">
                  <CiSearch />
                </p>
                <input
                  type="text"
                  placeholder="Search product"
                  className="bg-transparent text-white py-2 px-1 rounded-r-full w-full md:w-64 outline-none"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-3 px-4">Image</th>
                    <th className="py-3 px-4">Name</th>
                    <th className="py-3 px-4">ID #</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Quantity</th>
                    <th className="py-3 px-4">Revenue</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index} className="border-b border-gray-700">
                      <td className="py-3 px-4">
                        <Image src={product.image} alt={product.name} width={40} height={40} className="object-cover" />
                      </td>
                      <td className="py-3 px-4">{product.name}</td>
                      <td className="py-3 px-4">{product.id}</td>
                      <td className="py-3 px-4">{product.price}</td>
                      <td className="py-3 px-4">{product.quantity}</td>
                      <td className="py-3 px-4">{product.revenue}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`py-1 px-3 rounded-full text-sm font-bold ${product.status === "Available"
                            ? "bg-green-500 text-white"
                            : "bg-orange-500 text-white"}`}
                        >
                          {product.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button className="bg-[#1b1b1b] p-2 rounded-full">
                          <i className="fa fa-ellipsis-h text-white">
                            <BsThreeDotsVertical />
                          </i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-400">Showing 5 entries</span>
              <div className="flex space-x-2 items-center">
                <p className="h-8 w-8 items-center flex bg-[#262626] text-xl justify-center rounded-full">
                  <IoIosArrowBack />
                </p>
                <button className="py-1 px-3 bg-transparent text-white rounded-full">1</button>
                <button className="py-1 px-3 bg-[#fd4960] text-white rounded-full">2</button>
                <button className="py-1 px-3 bg-transparent text-white rounded-full">3</button>
                <p className="h-8 w-8 items-center flex bg-[#262626] text-xl justify-center rounded-full">
                  <IoIosArrowForward />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Dashboard;
