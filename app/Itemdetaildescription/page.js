import React from 'react';
import Image from "next/image";
import Showcase from "@/public/image/artistshowcase.png"
import cartoon from "@/public/image/cartoon.png"
import cartoon1 from "@/public/image/cartoon(1).png"
import overviewimg from "@/public/image/overviewimg.png"
import rocksand from "@/public/image/rocksandcrystals.png"
import modularmushrooms from "@/public/image/modularmushrooms.png"
import giantmushrooms from "@/public/image/giantmushrooms.png"
import PopularProduct from '../searchviewall/popularproducts/PopularProducts';
import Footer from '../(component)/footer/Footer';
import Navbar from '../(component)/navbar/Navbar';
export default function ArtistShowcase() {

    return (
        <>
        <Navbar />
        <div className="bg-black">
          {/* First section */}
          <section>
            <div className="min-h-screen text-white py-12 px-6 mt-10">
              <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-6 ml-8">
                  Artist <span className="text-pink-500">Showcase</span>
                </h1>
      
                {/* Content Wrapper */}
                <div className="rounded-lg p-6 md:p-8">
                  {/* Images Grid */}
                  <div className="gap-7 mb-6 flex flex-col md:flex-row w-full">
                    <Image
                      src={Showcase}
                      alt="Main Character"
                      className="rounded-lg object-cover w-full md:w-[70%]"
                    />
                    <div className="w-full md:w-[30%] gap-7 mt-6 md:mt-0">
                      <Image
                        src={Showcase}
                        alt="Gallery Image"
                        className="rounded-lg object-cover h-60"
                      />
                      <Image
                        src={Showcase}
                        alt="Gallery Image"
                        className="rounded-lg object-cover mt-7 h-60"
                      />
                    </div>
                  </div>
      
                  {/* Description */}
                  <h2 className="text-xl font-bold mb-2">
                    This is a Late Pledge of my Kickstarter Campaign - Crossroads:
                    Fungal Tunnels
                  </h2>
                  <p className="text-white mb-4 bg-[#1B1B1B] w-full md:w-[43%] rounded-md px-4 py-2">
                    Available: <span className="text-gray-400">Non-commercial personal license and commercial license.</span>
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      It has been successfully funded thanks to the support of 403
                      backers in December 2023.
                    </li>
                    <li>
                      Models from this set are made for FDM printing and do not require
                      using any supports.
                    </li>
                  </ul>
                </div>
              </div>
      
              <div className="flex gap-7 ml-[5%] flex-wrap justify-between">
                <Image src={cartoon} alt="" className="w-full md:w-[47%]" />
                <Image src={cartoon1} alt="" className="w-full md:w-[47%]" />
              </div>
            </div>
          </section>
      
          {/* Second section */}
          <section>
            <div className="min-h-screen text-white py-12 mx-[6%]">
              <div className="max-w-7xl mx-auto">
                {/* Navigation */}
                <div className="mb-8">
                  <h1 className="text-2xl">
                    <span className="border-l-2 border-pink-500 pl-2">Overview</span>
                  </h1>
                </div>
      
                {/* Section Title */}
                <h2 className="text-3xl font-bold mb-6">
                  Example of <span className="text-pink-500">Uses</span>
                </h2>
      
                {/* Image Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  {Array(8)
                    .fill(0)
                    .map((_, index) => (
                      <div
                        key={index}
                        className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700"
                      >
                        <Image
                          src={overviewimg}
                          alt="Example Use"
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                </div>
      
                {/* Details Section */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Details of the <span className="text-pink-500">sets</span>
                  </h3>
                  <p className="mb-4 text-2xl">
                    Crossroads: Fungal Tunnels includes models divided into three
                  </p>
      
                  {/* Categories */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold my-6 border-l-2 border-pink-500 pl-2">Categories</h4>
                    <ul className="list-disc flex flex-wrap gap-4">
                      <li className="bg-transparent rounded-md py-2 px-3">Rocks and Crystals</li>
                      <li className="bg-transparent rounded-md py-2 px-3">Modular Mushrooms</li>
                      <li className="bg-transparent rounded-md py-2 px-3">Giant Mushrooms</li>
                    </ul>
                  </div>
      
                  {/* Highlighted Category */}
                  <div className="bg-[#1b1b1b] text-[#fd4960] py-2 px-5 rounded-lg inline-block font-bold">
                    Rocks and Crystals
                  </div>
                </div>
              </div>
            </div>
          </section>
      
          {/* Third section */}
          <section className="w-full">
            <div className="text-white py-10">
                             {/* Section 1 */}
                             <div className="container px-[4%] mb-10">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ml-9">
                        <div className="rounded overflow-hidden">
                            <Image
                                src={rocksand}
                                alt="Multicolor Illustration 1"
                                className="h-full w-full"
                            />
                        </div>
                        <div className="rounded overflow-hidden">
                            <Image
                                src={rocksand}
                                alt="Multicolor Illustration 2"
                                className="h-full w-full"
                            />
                        </div>
                        <div className="space-y-4">
                            <div className="rounded overflow-hidden">
                                <Image
                                    src={rocksand}
                                    alt="Multicolor Illustration 2"
                                    className="h-48 object-cover rounded-lg"
                                />
                            </div>
                            <div className="rounded overflow-hidden">
                                <Image
                                    src={rocksand}
                                    alt="Multicolor Illustration 2"
                                    className="h-48 mt-4 object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>

              {/* Section 2 */}
              <div className="container px-[4%] mb-10">
                    <div className="bg-[#1b1b1b] mb-10 ml-8 text-[#fd4960] py-2 px-5 rounded-lg inline-block font-bold">
                        Modular Mushrooms
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ml-9">
                        <div className="rounded overflow-hidden">
                            <Image
                                src={modularmushrooms}
                                alt="Multicolor Illustration 1"
                                className="h-full w-full"
                            />
                        </div>
                        <div className="rounded overflow-hidden">
                            <Image
                                src={modularmushrooms}
                                alt="Multicolor Illustration 2"
                                className="h-full w-full"
                            />
                        </div>
                        <div className="space-y-4">
                            <div className="rounded overflow-hidden">
                                <Image
                                    src={modularmushrooms}
                                    alt="Multicolor Illustration 2"
                                    className="h-48 object-cover rounded-lg"
                                />
                            </div>
                            <div className="rounded overflow-hidden">
                                <Image
                                    src={modularmushrooms}
                                    alt="Multicolor Illustration 2"
                                    className="h-48 mt-4 object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="container px-[4%] mb-10">
                    <div className="bg-[#1b1b1b] mb-10 ml-8 text-[#fd4960] py-2 px-5 rounded-lg inline-block font-bold">
                        Giant Mushrooms
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ml-9">
                        <div className="rounded overflow-hidden">
                            <Image
                                src={giantmushrooms}
                                alt="Multicolor Illustration 1"
                                className="h-full w-full"
                            />
                        </div>
                        <div className="rounded overflow-hidden">
                            <Image
                                src={giantmushrooms}
                                alt="Multicolor Illustration 2"
                                className="h-full w-full"
                            />
                        </div>
                        <div className="space-y-4">
                            <div className="rounded overflow-hidden">
                                <Image
                                    src={giantmushrooms}
                                    alt="Multicolor Illustration 2"
                                    className="h-48 object-cover rounded-lg"
                                />
                            </div>
                            <div className="rounded overflow-hidden">
                                <Image
                                    src={giantmushrooms}
                                    alt="Multicolor Illustration 2"
                                    className="h-48 mt-4 object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
          </section>
      
          <PopularProduct />
        </div>
        <Footer />
      </>
      
    );
}
