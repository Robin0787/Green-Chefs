import React from 'react';
import first from "../../assets/Home_Images/beef_vuna.avif";
import second from "../../assets/Home_Images/chapli_kabab.avif";
import third from "../../assets/Home_Images/chicken_biriyani.avif";
import fourth from "../../assets/Home_Images/chicken_roast.avif";
const Home = () => {
    return (
        <div className='p-10 grid grid-cols-[6fr_4fr]   gap-5'>
            <div className='p-5 py-10 text-black space-y-5'>
                <h1 className="text-5xl font-bold leading-tight">Discover Authentic Bangladeshi Cuisine with <span className="text-green-600">Green Chef</span></h1>
                <p className="text-md w-4/5 text-justify text-gray-500"> Indulge in the rich and diverse flavors of Bangladeshi cuisine with Green Chef. Our website features a wide variety of authentic recipes that are sure to tantalize your taste buds. From spicy curries to savory snacks, we have everything you need to create an authentic Bangladeshi meal right in your own kitchen. Join us on a culinary adventure and discover the delicious and unique dishes of Bangladesh with Green Chef</p>
            </div>
            <div className='grid grid-cols-2 gap-3'>
                <div className='shadow-lg transform hover:-translate-y-1 duration-300 cursor-pointer relative'>
                    <img className='z-0 w-full h-full rounded-lg' src={first} />
                    <div className='bg-black h-full bg-opacity-50 opacity-0 hover:opacity-100 duration-300  text-gray-300 absolute top-0 left-0 inset-0 rounded-lg flex justify-center items-end'>
                        <h2 className="text-lg font-thin mb-2">Beef Bhuna</h2>
                    </div>
                </div>
                <div className='shadow-lg transform hover:-translate-y-1 duration-300 cursor-pointer relative'>
                    <img className='z-0 w-full h-full rounded-lg' src={second} />
                    <div className='bg-black h-full bg-opacity-50 opacity-0 hover:opacity-100 duration-300  text-gray-300 absolute top-0 left-0 inset-0 rounded-lg flex justify-center items-end'>
                        <h2 className="text-lg font-thin mb-2">Chapli Kabab</h2>
                    </div>
                </div>
                <div className='shadow-lg transform hover:-translate-y-1 duration-300 cursor-pointer relative'>
                    <img className='z-0 w-full h-full rounded-lg' src={third} />
                    <div className='bg-black h-full bg-opacity-50 opacity-0 hover:opacity-100 duration-300  text-gray-300 absolute top-0 left-0 inset-0 rounded-lg flex justify-center items-end'>
                        <h2 className="text-lg font-thin mb-2">Chicken Biryani</h2>
                    </div>
                </div>
                <div className='shadow-lg transform hover:-translate-y-1 duration-300 cursor-pointer relative'>
                    <img className='z-0 w-full h-full rounded-lg' src={fourth} />
                    <div className='bg-black h-full bg-opacity-50 opacity-0 hover:opacity-100 duration-300  text-gray-300 absolute top-0 left-0 inset-0 rounded-lg flex justify-center items-end'>
                        <h2 className="text-lg font-thin mb-2">Chicken Roast</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;