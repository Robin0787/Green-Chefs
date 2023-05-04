import React from 'react';
import Marquee from "react-fast-marquee";
import second from '../../../assets/Home_Images/beef_vuna.avif';
import first from '../../../assets/Home_Images/chapli_kabab.avif';
import fourth from '../../../assets/Home_Images/chicken_biriyani.avif';
import third from '../../../assets/Home_Images/chicken_roast.avif';
const BestRecipes = () => {
    return (
            <section className='mt-10 space-y-10 bg-gray-100 py-10 px-10'>
                <h2 className="text-4xl font-bold text-center text-black">The Best of <span className="text-green-600">Us!</span></h2>
                <Marquee speed={90} className='rounded-lg'>
               <div className='cursor-pointer relative h-36 mx-2'>
                    <img className='z-0 w-full h-full rounded-lg' src={first} />
                    <div className='bg-black h-full bg-opacity-50 opacity-0 hover:opacity-100 duration-300  text-gray-300 absolute top-0 left-0 inset-0 rounded-lg flex justify-center items-end'>
                        <h2 className="text-lg font-thin mb-2">Chapli Kabab</h2>
                    </div>
                </div>
                <div className='cursor-pointer relative h-36 mx-2'>
                    <img className='z-0 w-full h-full rounded-lg' src={second} />
                    <div className='bg-black h-full bg-opacity-50 opacity-0 hover:opacity-100 duration-300  text-gray-300 absolute top-0 left-0 inset-0 rounded-lg flex justify-center items-end'>
                        <h2 className="text-lg font-thin mb-2">Beef Bhuna</h2>
                    </div>
                </div>
               <div className='cursor-pointer relative h-36 mx-2'>
                    <img className='z-0 w-full h-full rounded-lg' src={third} />
                    <div className='bg-black h-full bg-opacity-50 opacity-0 hover:opacity-100 duration-300  text-gray-300 absolute top-0 left-0 inset-0 rounded-lg flex justify-center items-end'>
                        <h2 className="text-lg font-thin mb-2">Chicken Roast</h2>
                    </div>
                </div>
                <div className='cursor-pointer relative h-36 mx-2'>
                    <img className='z-0 w-full h-full rounded-lg' src={fourth} />
                    <div className='bg-black h-full bg-opacity-50 opacity-0 hover:opacity-100 duration-300  text-gray-300 absolute top-0 left-0 inset-0 rounded-lg flex justify-center items-end'>
                        <h2 className="text-lg font-thin mb-2">Chicken Biryani</h2>
                    </div>
                </div>
                <div className='cursor-pointer relative h-36 mx-2'>
                    <img className='z-0 w-full h-full rounded-lg' src={second} />
                    <div className='bg-black h-full bg-opacity-50 opacity-0 hover:opacity-100 duration-300  text-gray-300 absolute top-0 left-0 inset-0 rounded-lg flex justify-center items-end'>
                        <h2 className="text-lg font-thin mb-2">Beef Bhuna</h2>
                    </div>
                </div>
                <div className='cursor-pointer relative h-36 mx-2'>
                    <img className='z-0 w-full h-full rounded-lg' src={fourth} />
                    <div className='bg-black h-full bg-opacity-50 opacity-0 hover:opacity-100 duration-300  text-gray-300 absolute top-0 left-0 inset-0 rounded-lg flex justify-center items-end'>
                        <h2 className="text-lg font-thin mb-2">Chicken Biryani</h2>
                    </div>
                </div>
            </Marquee>
            </section>
    );
};

export default BestRecipes;