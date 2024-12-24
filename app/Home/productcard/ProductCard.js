"use client"
import React, { useState } from "react";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing icons
import product from "@/public/image/product.png";
import Link from "next/link";

// Dummy product data (Replace with your actual product data)
const products = [...Array(27)].map((_, i) => ({
  id: i + 1,
  name: "Chaos Battletome",
  price: 98.00,
  image: product,
}));

export default function ProductCard() {
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const productsPerPage = 9; // Number of products to show per page

  // Calculate the index of the products to display for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Go to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(currentPage + 1); // Increment the page number
    }
  };

  // Go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); // Decrement the page number
    }
  };

  return (
    <div className="w-full bg-black p-8">
      {/* Grid Layout for displaying products */}
      <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="bg-[#1B1B1B] rounded-lg p-4 border border-gray-800 shadow-lg transform scale-95 transition-all duration-300 hover:scale-105 hover:-translate-y-4"
          >
            {/* Product Image */}
            <Link href="/Cardreviewpage" className="cursor-pointer">
              <div className="w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded-t-lg"
                  width={500} // Ensure proper dimensions
                  height={500}
                />
              </div>

              {/* Title and Price aligned to the top */}
              <div className="py-4">
                <h2 className="text-white text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-400">${product.price.toFixed(2)}</p>
              </div>
            </Link>

            {/* Add to Cart Button */}
            <button className="flex items-center justify-center gap-2 w-full bg-transparent border border-[#D24053] text-[#D24053] py-2 rounded-full hover:bg-[#dd4156] hover:text-white transition-all duration-300">
              <FiShoppingCart />
              Add to Cart
            </button>
          </div>

        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex  justify-center mt-4">
        {/* Previous Button */}
        <button
          onClick={prevPage}
          disabled={currentPage === 1} // Disable if we're on the first page
          className={`flex items-center mr-7 gap-2 bg-white hover:text-white text-black py-2 px-4 rounded-lg hover:bg-gray-700 transition ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <FaChevronLeft /> {/* Previous Icon */}
          Previous
        </button>

        {/* Next Button */}
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(products.length / productsPerPage)} // Disable if we're on the last page
          className={`flex items-center gap-2 bg-white hover:text-white text-black py-2 px-4 rounded-lg hover:bg-gray-700 transition ${currentPage === Math.ceil(products.length / productsPerPage) ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next
          <FaChevronRight /> {/* Next Icon */}
        </button>
      </div>
    </div>
  );
}
