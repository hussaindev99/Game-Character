"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct import for `useRouter`
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Image from "next/image";
import PopularCategories from "./(component)/popularcategories/PopularCategories";
import ProductGrid from "./(component)/shopiconic/ProductGrid";
import WARHAMMER from "./(component)/warhammer/WARHAMMER";
import ProductSlider2 from "./(component)/productslider2/ProductSlider2";
import TestimonialSection from "./(component)/testimonialsection/TestimonialSection";
import BringBattlefields from "./(component)/bringbattlefields/BringBattlefields";
import Navbar from "./(component)/navbar/Navbar";
import Footer from "./(component)/footer/Footer";
import LandingNavbar from "./(component)/landingpagenavbar/LandingNavbar";

export default function Home() {
  const router = useRouter(); // Initialize router here

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can change the duration as per your preference
      once: true, // Animation runs only once
    });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/"); // Use `router.push` to navigate
    }
  }, [router]);

  return (
    <div>
      <LandingNavbar />
      <div data-aos="fade-up">
        <BringBattlefields />
      </div>
      <div data-aos="fade-right" data-aos-delay="100">
        <PopularCategories />
      </div>
      <div data-aos="fade-right" data-aos-delay="200">
        <ProductGrid />
      </div>
      <div data-aos="fade-right" data-aos-delay="300">
        <WARHAMMER />
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <ProductSlider2 />
      </div>
      <div data-aos="fade-right" data-aos-delay="500">
        <TestimonialSection />
      </div>
      <div data-aos="fade-right" data-aos-delay="600">
        <Footer />
      </div>
    </div>
  );
}
