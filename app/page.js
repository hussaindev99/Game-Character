import Image from "next/image";
import PopularCategories from "./(component)/popularcategories/PopularCategories";
import ProductGrid from "./(component)/shopiconic/ProductGrid";
import WARHAMMER from "./(component)/warhammer/WARHAMMER";
import ProductSlider2 from "./(component)/productslider2/ProductSlider2";
import TestimonialSection from "./(component)/testimonialsection/TestimonialSection";
import BringBattlefields from "./(component)/bringbattlefields/BringBattlefields";
import Navbar from "./(component)/navbar/Navbar";
import Footer from "./(component)/footer/Footer";
export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <BringBattlefields />
        <PopularCategories />
        <ProductGrid />
        <WARHAMMER />
        <ProductSlider2 />
        <TestimonialSection />
        <Footer />
      </div>
    </>
  );
}
