import Navbars from '@/app/(component)/dashboardnavbar/Navbars';
import Link from 'next/link';
import React from 'react';
import { FaList } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { RiLogoutBoxLine } from 'react-icons/ri';
import Chaosbattlom1 from "@/public/image/ChaosBattletom1.png";
import Image from 'next/image';
import { CiShoppingCart } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const page = () => {
    const wishlistItems = [
        { id: 1, name: 'Chaos Bottom', price: '$58.00', image: Chaosbattlom1 },
        { id: 2, name: 'Chaos Bottom', price: '$58.00', image: Chaosbattlom1 },
        { id: 3, name: 'Chaos Bottom', price: '$58.00', image: Chaosbattlom1 },
    ];

    return (
        <>
            {/* Navbar */}
            <Navbars />
            <div className="flex flex-col lg:flex-row h-screen bg-black text-white">

                {/* Sidebar */}
                <aside className="bg-[#1b1b1b] w-full lg:w-1/5 p-6 lg:h-screen">
                <ul className="space-y-4">
              <Link href="/Dashboard/UserDashboard" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                  <FaUserGroup className="mr-3 h-6 w-6" /> {/* Icon for Add Product */}
                  <a href="#">Profile</a>
                </li>
              </Link>
              <Link href="/Dashboard/Wishlist" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                <li className="flex items-center  text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                  <MdOutlineDashboardCustomize className="mr-3 h-6 w-6" /> {/* Icon for Add Product */}
                  <a href="#">Wish List</a>
                </li>
              </Link>
              <Link href="/Dashboard/OrderHistory" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                  <FaList className="mr-3" /> {/* Icon for Product List */}
                  <a href="#">Order History</a>
                </li>
              </Link>
              <Link href="/Dashboard/LogOut" className="flex items-center text-lg hover:bg-[#2b2b2b] p-1 rounded-md">
                <li className="flex items-center text-lg hover:bg-[#2b2b2b] p-2 rounded-md">
                  <RiLogoutBoxLine className="mr-3 " /> {/* Icon for Categories */}
                  <a href="#">Log Out</a>
                </li>
              </Link>
            </ul>
                </aside>

                {/* Wishlist Section */}
                <main className="flex-1 p-6 lg:p-12">
                    <h2 className="text-2xl font-semibold mb-4">Wish <span className='text-[#EC2277]'>List</span></h2>
                    <div className="space-y-4">
                        {wishlistItems.map((item) => (
                            <div key={item.id} className="flex flex-col lg:flex-row justify-between items-center bg-[#1b1b1b] p-4 rounded-lg shadow-md">
                                <div className="flex items-center mb-4 lg:mb-0">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 rounded-md mr-4"
                                    />
                                    <div>
                                        <p className="text-lg font-semibold">{item.name}</p>
                                        <p>{item.price}</p>
                                        <p className='bg-[#1c3629] px-2.5 text-[#20B16C] py-0.5 rounded-full w-20'>In Stock</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <button className="flex items-center border border-red-500 text-red-500 hover:bg-red-600 hover:text-white px-4 py-2 rounded-full">
                                        <CiShoppingCart className='h-5 w-5 mr-4' /> Add to Cart
                                    </button>
                                    <button className="text-red-500 hover:text-white px-4 py-2 rounded-md">
                                        <MdDeleteOutline className='w-8 h-8'/>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
};

export default page;
