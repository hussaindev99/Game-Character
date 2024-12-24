"use client";
// components/CategoriesSlider.js
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import heroImage from '@/public/image/image.png';
import fantasyImage from '@/public/image/image(1).png';
import monstersImage from '@/public/image/image(2).png';
import scifiImage from '@/public/image/image(3).png';

const categories = [
    {
        title: 'Heroes & Villains',
        image: heroImage,
    },
    {
        title: 'Fantasy Creatures',
        image: fantasyImage,
    },
    {
        title: 'Monsters & Beasts',
        image: monstersImage,
    },
    {
        title: 'Sci-Fi Characters',
        image: scifiImage,
    },
    {
        title: 'Heroes & Villains',
        image: heroImage,
    },
    {
        title: 'Fantasy Creatures',
        image: fantasyImage,
    },
    {
        title: 'Monsters & Beasts',
        image: monstersImage,
    },
    {
        title: 'Sci-Fi Characters',
        image: scifiImage,
    },
];

export default function CategoriesSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(4);

    // Adjust the number of visible cards based on screen size
    useEffect(() => {
        const updateVisibleCards = () => {
            if (window.innerWidth < 640) {
                setVisibleCards(1); // Show 1 card on mobile
            } else if (window.innerWidth < 1024) {
                setVisibleCards(2); // Show 2 cards on tablets
            } else {
                setVisibleCards(4); // Show 4 cards on larger screens
            }
        };

        updateVisibleCards();
        window.addEventListener('resize', updateVisibleCards);
        return () => window.removeEventListener('resize', updateVisibleCards);
    }, []);

    const handleNext = () => {
        if (currentIndex < categories.length - visibleCards) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <div className="w-full bg-[#0A0A0A] text-white py-10">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8">
                    Popular <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">Categories</span>
                </h2>
                <div className="relative flex items-center">
                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        className={`absolute left-0 z-10 p-2 bg-[#1B1B1B] hover:bg-[#1b1b1bc2] rounded-full transition-all ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        <FaChevronLeft size={20} />
                    </button>

                    {/* Slider */}
                    <div className="w-full overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
                        >
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 p-2`}
                                    style={{ width: `${100 / visibleCards}%` }}
                                >
                                    <div className="bg-[#1B1B1B] rounded-lg overflow-hidden shadow-lg">
                                        {/* Display the Image */}
                                        <Image
                                            src={category.image}
                                            alt={category.title}
                                            width={250}
                                            height={100}
                                            className="object-cover w-full h-36"
                                            priority
                                        />
                                        <div className="p-3 text-center">
                                            <h3 className="text-lg font-medium">{category.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        className={`absolute right-0 z-10 p-2 bg-[#1B1B1B] hover:bg-[#1b1b1bc2] rounded-full transition-all ${currentIndex >= categories.length - visibleCards
                                ? 'opacity-50 cursor-not-allowed'
                                : ''
                            }`}
                    >
                        <FaChevronRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
