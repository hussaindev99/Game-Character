import Link from 'next/link';
import React from 'react';
import { FaList, FaShoppingCart, FaTags } from 'react-icons/fa';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { TbLayoutDashboard } from 'react-icons/tb';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { CgSearch } from 'react-icons/cg';
import Navbars from '../(component)/dashboardnavbar/Navbars';

const page = () => {
    const orders = [
        { id: '#58434B', customer: 'John Doe', total: '$100', status: 'Paid', items: 3, orderStatus: 'Completed' },
        { id: '#58434B', customer: 'John Doe', total: '$200', status: 'Unpaid', items: 3, orderStatus: 'Cancelled' },
        { id: '#58434B', customer: 'John Doe', total: '$300', status: 'Paid', items: 3, orderStatus: 'Completed' },
        { id: '#58434B', customer: 'John Doe', total: '$200', status: 'Paid', items: 3, orderStatus: 'Completed' },
        { id: '#58434B', customer: 'John Doe', total: '$150', status: 'Paid', items: 2, orderStatus: 'Completed' },
        { id: '#58434B', customer: 'John Doe', total: '$300', status: 'Paid', items: 3, orderStatus: 'Completed' },
        { id: '#58434B', customer: 'John Doe', total: '$300', status: 'Paid', items: 3, orderStatus: 'Completed' },
        { id: '#58434B', customer: 'John Doe', total: '$300', status: 'Paid', items: 3, orderStatus: 'Completed' },
        { id: '#58434B', customer: 'John Doe', total: '$300', status: 'Paid', items: 3, orderStatus: 'Completed' },
        { id: '#58434B', customer: 'John Doe', total: '$300', status: 'Paid', items: 3, orderStatus: 'Completed' },
    ];

    return (
        <>
            <Navbars />
            <div className='flex flex-col lg:flex-row'>
                {/* Sidebar */}
                <div className="bg-[#1b1b1b] w-full lg:w-1/5 p-8">
                    <ul className="space-y-4">
                        <Link href="/Dashboard" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                            <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                                <TbLayoutDashboard className="mr-3 h-6 w-6" />
                                <a href="#">Dashboard</a>
                            </li>
                        </Link>
                        <Link href="/AddProduct" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                            <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                                <MdOutlineDashboardCustomize className="mr-3 h-6 w-6" />
                                <a href="#">Add Product</a>
                            </li>
                        </Link>
                        <Link href="/ProductList" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                            <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                                <FaList className="mr-3 h-5 w-5" />
                                <a href="#">Product List</a>
                            </li>
                        </Link>
                        <Link href="/Categories" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                            <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                                <FaTags className="mr-3" />
                                <a href="#">Categories</a>
                            </li>
                        </Link>
                        <Link href="/Orders" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                            <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                                <FaShoppingCart className="mr-3" />
                                <a href="#">Orders</a>
                            </li>
                        </Link>
                    </ul>
                </div>

                {/* Main Content */}
                <div className='flex-1 p-6'>
                    <div className='flex justify-between'>
                        <h2 className="text-2xl font-semibold mb-4">
                            All <span className='text-[#e3257c]'>Order List</span>
                        </h2>
                        <Link href="/Orderdetail" className="bg-[#fd4960] hover:bg-[#ff2f4b] px-12 py-2 flex items-center rounded-full">
                            Order Detail
                        </Link>
                    </div>
                    {/* Search and Add Order */}
                    <div className="flex justify-between mb-4">
                        <div className="relative w-full sm:w-80 md:w-96">
                            <input
                                type="text"
                                placeholder="Search order"
                                className="bg-[#2b2b2b] text-white rounded-full px-3 py-2 pl-10 w-full focus:outline-none"
                            />
                            <CgSearch className="absolute h-4 w-4 left-3 top-3 text-gray-400" />
                        </div>
                    </div>

                    {/* Orders Table */}
                    <div className="bg-[#1b1b1b] p-4 rounded-lg flex-grow">
                        <table className="w-full">
                            <thead className="border-b text-left border-[#2b2b2b] text-gray-400">
                                <tr>
                                    <th className="py-2">Order ID</th>
                                    <th className="py-2">Customer</th>
                                    <th className="py-2">Total</th>
                                    <th className="py-2">Payment Status</th>
                                    <th className="py-2">Items</th>
                                    <th className="py-2">Order Status</th>
                                    <th className="py-2 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => (
                                    <tr key={index} className="border-b border-[#2b2b2b] hover:bg-[#2b2b2b]">
                                        <td className="py-3">{order.id}</td>
                                        <td className="py-3">{order.customer}</td>
                                        <td className="py-3">{order.total}</td>
                                        <td className={`py-3 px-2  ${order.status === 'Paid' ? 'text-green-500' : order.status === 'Paid' ? 'bg-green-500 py-1 px-3' : order.status === 'Unpaid' ? 'text-red-500' : ''}`}>{order.status}</td>
                                        <td className="py-3 px-2">{order.items}</td>
                                        <td className={`py-3  ${order.orderStatus === 'Completed' ? 'text-green-500' : order.orderStatus === 'Cancelled' ? 'text-red-500' : ''}`}>{order.orderStatus}</td>
                                        <td className="py-3 text-center">
                                            <BsThreeDotsVertical className="inline-block cursor-pointer" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-between items-center mt-6">
                        <p className="text-sm text-gray-400">Showing 10 entries</p>
                        <div className="flex items-center space-x-2">
                            <button className="px-2 py-2 rounded-full bg-[#2b2b2b] hover:bg-[#3b3b3b]">
                                <IoIosArrowBack />
                            </button>
                            {[1, 2, 3].map((page) => (
                                <button
                                    key={page}
                                    className={`px-3 py-1 rounded-full ${page === 1 ? 'bg-[#fd4960]' : 'bg-[#2b2b2b]'}`}
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

export default page;
