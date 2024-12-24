"use client";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import chaosbattletome from "@/public/image/product.png";
import Image from "next/image";

const products = [
  { id: 1, title: "Chaos Battletome", price: "$98.00", Image: chaosbattletome },
  { id: 2, title: "Chaos Battletome", price: "$98.00", Image: chaosbattletome },
  { id: 3, title: "Chaos Battletome", price: "$98.00", Image: chaosbattletome },
  { id: 4, title: "Chaos Battletome", price: "$98.00", Image: chaosbattletome },
  { id: 5, title: "Chaos Battletome", price: "$98.00", Image: chaosbattletome },
  { id: 6, title: "Chaos Battletome", price: "$98.00", Image: chaosbattletome },
];

const PopularProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < products.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="mx-[4%]">
      <div className="">
        <h2 className="text-2xl font-bold mb-2">
          Popular{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
            Products
          </span>
        </h2>
        <p className="text-sm mt-0 pt-0">
          Detailed, Handcrafted Figures at Affordable Prices
        </p>
      </div>
      <div className="flex items-center  py-10">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`text-white p-2 ${
            currentIndex === 0 ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          <AiOutlineLeft size={24} />
        </button>
        {/* Product Cards Slider */}
        <div className="w-full max-w-6xl overflow-hidden">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${currentIndex * 100 / 4}%)` }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/4 p-4 flex-shrink-0"
              >
                <div className="bg-[#1B1B1B] rounded-lg shadow-lg">
                  {/* Product Image */}
                  <div className="relative h-64 w-full">
                    <Image
                      src={product.Image}
                      alt={product.title}
                      className="w-full h-full object-cover p-4 rounded-3xl"
                    />
                  </div>
                  {/* Product Details */}
                  <div className="p-4">
                    <h2 className="text-white text-lg font-semibold text-left">
                      {product.title}
                    </h2>
                    <p className="text-gray-400 text-sm text-left">
                      {product.price}
                    </p>
                    <button className="mt-4 w-full py-2 text-sm font-bold text-red-500 border border-red-500 rounded-3xl hover:bg-red-500 hover:text-white transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentIndex === products.length - 4}
          className={`text-white p-2 ${
            currentIndex === products.length - 4
              ? "cursor-not-allowed opacity-50"
              : ""
          }`}
        >
          <AiOutlineRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default PopularProduct;
