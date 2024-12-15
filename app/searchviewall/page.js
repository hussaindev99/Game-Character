import React from "react";
import Sidebar from "./slidebar/Sidebar";
import PopularProduct from "./popularproducts/PopularProducts";
import Navbar from "../(component)/navbar/Navbar";
import Footer from "../(component)/footer/Footer";


export default function page() {
    return (
        <>
            <div className="bg-[#000000]">
                <Navbar />
                <Sidebar />
                <PopularProduct />
                <Footer />
            </div>
        </>
    )
}