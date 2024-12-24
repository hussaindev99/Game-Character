"use client";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import chaosbattletome from "@/public/image/ChaosBattletome.png";
import Image from "next/image";
import { FaShippingFast, FaHeadset, FaRedoAlt } from "react-icons/fa";

const products = [
  {
    id: 1,
    title: "Chaos Battletome",
    price: "$98.00",
    Image: chaosbattletome,
  },
  {
    id: 2,
    title: "Chaos Battletome",
    price: "$98.00",
    Image: chaosbattletome,
  },
  {
    id: 3,
    title: "Chaos Battletome",
    price: "$98.00",
    Image: chaosbattletome,
  },
  {
    id: 4,
    title: "Chaos Battletome",
    price: "$98.00",
    Image: chaosbattletome,
  },
  {
    id: 1,
    title: "Chaos Battletome",
    price: "$98.00",
    Image: chaosbattletome,
  },
  {
    id: 2,
    title: "Chaos Battletome",
    price: "$98.00",
    Image: chaosbattletome,
  },
  {
    id: 3,
    title: "Chaos Battletome",
    price: "$98.00",
    Image: chaosbattletome,
  },
  {
    id: 4,
    title: "Chaos Battletome",
    price: "$98.00",
    Image: chaosbattletome,
  },
  {
    id: 1,
    title: "Chaos Battletome",
    price: "$98.00",
    Image: chaosbattletome,
  },
  {
    id: 2,
    title: "Chaos Battletome",
    price: "$98.00",
    Image: chaosbattletome,
  },
  {
    id: 3,
    title: "Chaos Battletome",
    price: "$98.00",
    Image: chaosbattletome,
  },
  {
    id: 4,
    title: "Chaos Battletome",
    price: "$98.00",
    Image: chaosbattletome,
  },
];

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [repeated, setRepeated] = useState(false);

  const handleNext = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (currentIndex === products.length - 1 && !repeated) {
      setRepeated(true);
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (repeated && currentIndex === 0) {
      setRepeated(false);
      setCurrentIndex(products.length - 1);
    } else if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const isNextDisabled = repeated && currentIndex === products.length - 1;
  const isPrevDisabled = !repeated && currentIndex === 0;

  const features = [
    {
      icon: <FaShippingFast size={30} />,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery on all orders over $100",
    },
    {
      icon: <FaHeadset size={30} />,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: <FaRedoAlt size={30} />,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center py-10 mx-[0.5%]">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={isPrevDisabled}
          className={`text-white p-2 ${isPrevDisabled ? "cursor-not-allowed opacity-50" : ""}`}
        >
          <AiOutlineLeft size={24} />
        </button>

        {/* Product Cards Slider */}
        <div className="w-full max-w-full md:max-w-6xl overflow-hidden">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {products.map((product, index) => (
              <div key={index} className="w-3/4 sm:w-1/2 md:w-1/4 p-4 flex-shrink-0">
                <div className="bg-black rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src={product.Image}
                    alt={product.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 text-center text-white">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">{product.title}</h2>
                    <p className="text-gray-400 text-sm sm:text-base">{product.price}</p>
                    <button className="mt-4 px-6 py-2 bg-transparent border-2 border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white">
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
          disabled={isNextDisabled}
          className={`text-white p-2 ${isNextDisabled ? "cursor-not-allowed opacity-50" : ""}`}
        >
          <AiOutlineRight size={24} />
        </button>
      </div>

      {/* Features Section */}
      <div className="py-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-white mb-8 sm:mb-0">
              {/* Icon */}
              <div className="bg-gray-900 p-2 rounded-full mb-4">
                <div className="bg-black p-3 rounded-full">
                  {feature.icon}
                </div>
              </div>
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold">{feature.title}</h3>
              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductSlider;
