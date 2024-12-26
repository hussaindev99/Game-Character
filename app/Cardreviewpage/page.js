"use client";
import { useState } from "react";
import React from "react";
import Battlom from "../(component)/battlom/Battlom";
import Navbar from "../(component)/navbar/Navbar";
import Footer from "../(component)/footer/Footer";
import Image from "next/image";
import { SlDislike, SlLike } from "react-icons/sl";
import { FaRegStar } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";

// Reviews Data
const reviews = [
  {
    id: 1,
    image: "/image/zahir.png", // Corrected path
    name: "Zahir Mays",
    comment:
      "I recently bought a character from this website, and couldn't be happier! The variety available is amazing with options for every game. The transaction was smooth and secure, and I received my character within minutes. Customer support was also responsive and helpful. I highly recommend this site for anyone looking to enhance their gaming experience!",
    time: "11 months ago",
    likeCount: 0,
    dislikeCount: 0,
  },
  {
    id: 2,
    image: "/image/AlecWhitten.png", // Corrected path
    name: "Alice Whitten",
    comment:
      "Fantastic experience buying a character here! The website is user-friendly, making it easy to browse through the impressive selection. My purchase was delivered to me on time, and I was thrilled to receive my character instantly. The support team was friendly and answered all my questions promptly. I'll definitely be returning for more characters in the future!",
    time: "11 months ago",
    likeCount: 0,
    dislikeCount: 0,
  },
  {
    id: 3,
    image: "/image/KellyWilliams.png", // Corrected path
    name: "Kelly Williams",
    comment:
      "This site exceeded my expectations when I purchased a game character! The range of characters available is top-notch, and I found exactly what I was looking for. The checkout process was seamless, and I was amazed at how quickly I got my character. Plus, the customer service was outstanding—they really care about the customer. I highly recommend this site to fellow gamers!",
    time: "11 months ago",
    likeCount: 0,
    dislikeCount: 0,
  },
];

const ReviewPage = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [reviewsState, setReviewsState] = useState(reviews);

  // Handle like/dislike click
  const handleLike = (id) => {
    setReviewsState((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id
          ? { ...review, likeCount: review.likeCount + 1 }
          : review
      )
    );
  };

  const handleDislike = (id) => {
    setReviewsState((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id
          ? { ...review, dislikeCount: review.dislikeCount + 1 }
          : review
      )
    );
  };

  return (
    <>
      <Navbar />
      <Battlom />
      <div className="bg-black text-white min-h-screen p-6">
        {/* Tabs Section */}
        <div className="bg-black text-white p-6 md:p-10 lg:p-16">
          <div className="flex gap-6 border-b border-gray-700">
            <button
              onClick={() => setActiveTab("description")}
              className={`px-4 py-2 text-sm md:text-base font-semibold transition-colors ${activeTab === "description"
                  ? "border-b-2 border-red-500 text-red-500"
                  : "text-gray-400"
                }`}
            >
              DESCRIPTION
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`px-4 py-2 flex items-center text-sm md:text-base font-semibold transition-colors ${activeTab === "reviews"
                  ? "border-b-2 border-red-500 text-red-500"
                  : "text-gray-400"
                }`}
            >
              <FaRegStar className="mr-2" /> REVIEWS
            </button>
          </div>
        </div>

        {/* Conditional Rendering */}
        {activeTab === "description" && (
          <div className="mx-[5%]">
            <p className="text-sm md:text-base leading-relaxed text-gray-300">
              Discover premium, game-ready 3D models crafted for wargaming, tabletop RPGs, and video game and 3D development. Our collection features meticulously designed characters, terrains, and accessories. Whether you’re developing a digital world or creating stunning physical miniatures, our models deliver unparalleled detail and flexibility.
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <>
            <div className="flex flex-col lg:flex-row justify-between mx-[4.5%] border-b border-gray-700 pb-6 mb-12">
              <div className="flex-1 mb-4 lg:mb-0">
                <span className="text-6xl font-extrabold">5.0</span>
                <div>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-6 h-6 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.118-6.515L0 6.382l6.637-.966L10 0l2.363 5.416L20 6.382l-5.24 5.093 1.118 6.515z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-500 mt-1">2,576 ratings</p>
                </div>
              </div>

              <div className="w-full lg:w-[60%] space-y-4 mb-10 lg:mb-0 border-r rounded-sm border-gray-700">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center px-10">
                    <span className="text-yellow-500 w-8 font-bold">
                      {star}★
                    </span>
                    <div className="relative w-full bg-gray-800 h-2 mx-3 rounded-sm">
                      <div
                        className="absolute top-0 left-0 h-2 bg-yellow-500 rounded-sm"
                        style={{ width: `${star * 20}%` }}
                      ></div>
                    </div>
                    <span>{star * 20}%</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mt-6 pl-14 md:mt-0">
                <p className="text-2xl font-bold">Total Reviews</p>
                <p className="text-5xl font-bold">1k</p>
                <p>Growth on review on this year</p>
                <button className="flex items-center bg-[#0e281b] py-2 px-3 rounded-full text-[#1EB06A]"><IoMdTrendingUp className="mr-2"/>9.2%</button>
              </div>
            </div>

            {/* Individual Reviews */}
            {reviewsState.map(({ id, image, name, likeCount, dislikeCount, comment, time }) => (
              <div key={id} className="mb-8 border-b mx-[4.5%] border-gray-700 pb-6">
                <div className="flex items-center justify-between">
                  <div className="flex">
                    <Image
                      src={image}
                      alt={name}
                      width={50}
                      height={20}
                      className="rounded-full h-14 w-14"
                    />
                    <div className="ml-4 items-center">
                      <h3 className="font-bold">{name}</h3>
                      <div className="flex items-center space-x-4">
                        <div className="flex my-2">
                          {[...Array(5)].map((_, index) => (
                            <svg
                              key={index}
                              className="w-5 h-5 text-yellow-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.118-6.515L0 6.382l6.637-.966L10 0l2.363 5.416L20 6.382l-5.24 5.093 1.118 6.515z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-600">{time}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <button onClick={() => handleLike(id)}>
                      <SlLike className="text-2xl text-blue-500" />
                      <span>{likeCount}</span>
                    </button>
                    <button onClick={() => handleDislike(id)}>
                      <SlDislike className="text-2xl text-red-500" />
                      <span>{dislikeCount}</span>
                    </button>
                  </div>
                </div>
                <p>{comment}</p>
              </div>
            ))}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ReviewPage;
