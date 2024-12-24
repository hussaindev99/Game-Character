import React from 'react';
import Image from 'next/image';
import heroImage from '@/public/image/3Dprinted.png';

const BringBattlefields = () => {
    return(
        <>
        
        <section className="bg-gradient-to-r mt-20 from-gray-900 via-black to-[#912a2a34] relative  flex flex-col items-center justify-center min-h-screen  text-white text-center p-6">
                {/* Heading Section */}
                <div className="">
                    <h1 className="text-6xl w-full font-semibold px-12">
                        Bring Battlefields to Life with Custom
                    </h1>
                    <h2 className="text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mt-4">
                        3D Printed Terrain and Models
                    </h2>
                    <div className='flex items-center text-center justify-center  '>

                        <p className="mt-6 max-w-2xl text-gray-300">
                            Discover a vast collection of detailed miniatures,modular terrains,and accessories to
                            elevate your tabletop games.Fully customizable for your unique adventures.
                        </p>
                    </div>
                </div>
                {/* Image Section */}
                <div className="mt-10 flex justify-center items-center">
                    <Image
                        src={heroImage}
                        alt="Cyberpunk Character"
                        className="rounded-2xl shadow-xl object-cover mx-[5%] h-[87vh] "
                        priority
                    />
                </div>
            </section>
        </>
    )
}
export default BringBattlefields;