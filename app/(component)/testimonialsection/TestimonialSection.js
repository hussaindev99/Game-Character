import Image from 'next/image';
import kristinwatson from "@/public/image/kristinwatson.png";

const TestimonialSection = () => {
    return (
        <>
            <section className="w-full max-w-6xl p-6 md:p-9 mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold mb-4 text-white flex justify-between">
                        What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">Client Says</span>
                    </h2>
                    <div className="flex justify-center">
                        <button className="text-gray-500 h-10 w-10 bg-[#1b1b1b] rounded-full flex justify-center items-center outline outline-1 outline-gray-400 hover:outline-white hover:text-white focus:outline-none mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="text-gray-500 h-10 w-10 bg-[#1b1b1b] rounded-full flex justify-center items-center outline outline-1 outline-gray-400 hover:outline-white hover:text-white focus:outline-none mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Testimonial Cards */}
                <div className="flex flex-wrap md:flex-nowrap gap-4">
                    {/* Testimonial Card */}
                    <div className="bg-[#1b1b1b] p-6 md:p-14 rounded-lg w-full md:w-[48%] flex">
                        <p className='w-0.5 h-28 bg-[#E31B61]'></p>
                        <div className='w-[95%]'>
                            <p className="text-sm md:text-[16px] text-gray-300 mb-4 ml-5">
                                “Lorem ipsum dolor sit amet elit, consectetur adipiscing elit. Vivamus sit amet elit massa tincidunt elit blandit et eu sem. Bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“
                            </p>
                            <div className="flex items-center mt-10 -ml-3">
                                <Image src={kristinwatson} alt="User Image" width={50} height={50} className="rounded-full mr-3" />
                                <div>
                                    <h3 className="text-base font-semibold">Kristin Watson</h3>
                                    <p className="text-xs text-gray-400">Fashion Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Duplicate the card for another testimonial */}
                    <div className="bg-[#1b1b1b] p-6 md:p-14 rounded-lg w-full md:w-[48%] flex">
                        <p className='w-0.5 h-28 bg-[#E31B61]'></p>
                        <div className='w-[95%]'>
                            <p className="text-sm md:text-[16px] text-gray-300 mb-4 ml-5">
                                “Lorem ipsum dolor sit amet elit, consectetur adipiscing elit. Vivamus sit amet elit massa tincidunt elit blandit et eu sem. Bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“
                            </p>
                            <div className="flex items-center mt-10 -ml-3">
                                <Image src={kristinwatson} alt="User Image" width={50} height={50} className="rounded-full mr-3" />
                                <div>
                                    <h3 className="text-base font-semibold">Kristin Watson</h3>
                                    <p className="text-xs text-gray-400">Fashion Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Newsletter Section */}
            <div className="flex flex-col items-center justify-center mt-12">
                <div className="w-full  max-w-[86%] p-6 md:p-20 bg-gradient-to-r from-red-500 to-red-900 rounded-xl shadow-lg">
                    <h2 className="text-2xl md:text-5xl font-bold text-white text-center mb-6">
                        Subscribe to Newsletter!
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-[80%] md:w-[70%] py-3 px-4 rounded-l-full bg-black text-white placeholder-gray-500 focus:outline-none mb-4 md:mb-0"
                        />
                        <button className="bg-white text-red-700 font-bold py-3 px-6 rounded-r-full transition duration-300 hover:bg-red-600 hover:text-white">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialSection;
