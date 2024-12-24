"use client";
import { useState } from "react";
import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import Battlom from '../(component)/battlom/Battlom';
import Navbar from "../(component)/navbar/Navbar";
import Footer from "../(component)/footer/Footer";
import Zahirmays from "../../public/image/zahirmays.png";
import Alecwhitten from "../../public/image/AlecWhitten.png";
import Kellywilliams from "../../public/image/KellyWilliams.png";// Updated path
import Image from "next/image";
import { SlDislike } from "react-icons/sl";
import { SlLike } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
const reviews = [
    {
        id: 1,
        image: Zahirmays,
        name: "Zahir Mays",
        comment:
            "I recently bought a character from this website, and couldn't be happier! The variety available is amazing with options for every game. The transaction was smooth and secure, and I received my character within minutes. Customer support was also responsive and helpful. I highly recommend this site for anyone looking to enhance their gaming experience!",
        time: "11 months ago",
        likeCount: 0,
        dislikeCount: 0,
    },
    {
        id: 2,
        image: Alecwhitten,
        name: "Alice Whitten",
        comment:
            "Fantastic experience buying a character here! The website is user-friendly, making it easy to browse through the impressive selection. My purchase was delivered to me on time, and I was thrilled to receive my character instantly. The support team was friendly and answered all my questions promptly. I'll definitely be returning for more characters in the future!",
        time: "11 months ago",
        likeCount: 0,
        dislikeCount: 0,
    },
    {
        id: 3,
        image: Kellywilliams,
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

    // Function to handle like/dislike click
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
                    {/* Tab Buttons */}
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
                           <FaRegStar className="mr-2"/> REVIEWS
                        </button>
                    </div>
                </div>

                {/* Conditional Rendering for Tabs */}
                {activeTab === "description" && (
                    <div className="mx-[5%]">
                        {/* Intro Paragraph */}
                        <p className="text-sm md:text-base leading-relaxed text-gray-300">
                            Discover premium, game-ready 3D models crafted for wargaming, tabletop RPGs, and video game and 3D development. Our collection features meticulously designed characters, terrains, and accessories. Whether you’re developing a digital world or creating stunning physical miniatures, our models deliver unparalleled detail and flexibility.
                        </p>
                        {/* Bullet Points Section */}
                        <ul className="mt-6 space-y-6 list-none">
                            {/* High Quality 3D Models */}
                            <li className="flex items-center gap-4">
                                <span className="font-bold text-white text-lg">
                                    High Quality 3D Models:
                                </span>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    All models are crafted with intricate detail, ensuring they are perfect for both.
                                </p>
                            </li>

                            {/* Optimized for Game Engines */}
                            <li className="flex items-center gap-4">
                                <span className="font-bold text-white text-lg">
                                    Optimized for Game Engines:
                                </span>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    All models are crafted with intricate detail, ensuring they are perfect.
                                </p>
                            </li>

                            {/* Versatile Use */}
                            <li className="flex items-center gap-4">
                                <span className="font-bold text-white text-lg">
                                    Versatile Use:
                                </span>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    All models are crafted with intricate detail, ensuring they are perfect for both digital and physical use.
                                </p>
                            </li>
                        </ul>
                       
                    </div>
                )}

                {activeTab === "reviews" && (
                    <>
                        {/* Ratings Section */}
                        <div className="flex flex-col lg:flex-row justify-between mx-[4.5%] border-b border-gray-700 pb-6 mb-12">
                            {/* Left: Star Rating */}
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

                            {/* Progress Bars with Stars */}
                            <div className="w-full lg:w-[60%] space-y-4 mb-10 lg:mb-0 border-r rounded-sm border-gray-700">
                                {[5, 4, 3, 2, 1].map((star) => (
                                    <div key={star} className="flex items-center px-10">
                                        <span className="text-yellow-500 w-8 font-bold">{star}★</span>
                                        <div className="relative w-full bg-gray-800 h-2 mx-3 rounded-sm">
                                            <div
                                                className="absolute top-0 left-0 h-2 bg-yellow-500 rounded-sm"
                                                style={{ width: `${star * 20}%` }}
                                            ></div>
                                        </div>
                                        <div className="flex items-center space-x-1 text-gray-400">
                                            <span>{star * 20}%</span>
                                            {/* Stars */}
                                            {[...Array(star)].map((_, index) => (
                                                <svg
                                                    key={index}
                                                    className="w-4 h-4 text-yellow-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M10 15l-5.878 3.09 1.118-6.515L0 6.382l6.637-.966L10 0l2.363 5.416L20 6.382l-5.24 5.093 1.118 6.515z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right: Total Reviews */}
                            <div className="space-y-4 mt-6 md:mt-0">
                                <p>Total Reviews</p>
                                <p className="text-5xl font-bold">1k</p>
                                <p className="text-sm mt-1">Growth in reviews year over year</p>
                                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#0e281b] text-green-500 font-semibold text-sm rounded-full shadow-md">
                                    <FaArrowTrendUp />
                                    <span>9.2%</span>
                                </button>
                            </div>
                        </div>

                        {/* Individual Reviews */}
                        {reviewsState.map(({ id, image, name, likeCount, dislikeCount, comment, time }) => (
                                <div key={id} className="mb-8 border-b mx-[4.5%] border-gray-700 pb-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex">
                                        <div className="flex items-center mb-2">
                                            {/* Image Component with alt text */}
                                            <Image
                                                src={image} // Ensure the correct image path is passed
                                                alt={name}
                                                width={50}
                                                height={50}
                                                className="rounded-full"
                                            />
                                            <div className="ml-4 items-center">
                                                <h3 className="font-bold">{name}</h3>
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
                                                <div className="flex mb-3">
                                                    <p className="mr-4">{time}</p>
                                                    <span className="text-[#5861AE] font-semibold">Verified</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            
                                    {/* Like/Dislike */}
                                    <div className="flex gap-4 items-center">
                                        <button
                                            className="flex items-center gap-1"
                                            onClick={() => handleLike(id)} // Handle like click
                                        >
                                            <SlLike className="text-2xl text-blue-500" />
                                            <span>{likeCount}</span>
                                        </button>
                                        <button
                                            className="flex items-center gap-1"
                                            onClick={() => handleDislike(id)} // Handle dislike click
                                        >
                                            <SlDislike className="text-2xl text-red-500" />
                                            <span>{dislikeCount}</span>
                                        </button>
                                    </div>
                                </div>
            
                                {/* Comment Section */}
                                <div className="flex mt-6 mb-4 text-sm">{comment}</div>
                            </div>
                        ))}

                    </>
                )}
            </div>
            {activeTab === "reviews" && (
                <div className="text-center flex justify-center mt-8">
                    <button className="flex items-center justify-center px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
                        See more reviews
                        <IoIosArrowDown className="ml-2" />
                    </button>
                </div>
            )}

            <Footer />
        </>
    );
};

export default ReviewPage;
