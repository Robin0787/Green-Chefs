import React from 'react';
import first from "../../../assets/Carousel_Images/first.avif";
import second from "../../../assets/Carousel_Images/second.avif";
import third from "../../../assets/Carousel_Images/third.avif";

const Carousel = () => {
    return (
        <article className='p-10 bg-gray-100'>
                    <h1 className="text-4xl md:text-5xl text-center text-black font-bold leading-tight">Good Food <br className='md:hidden '/> <span className="text-green-600">Good Mode</span></h1>
            <article className='my-10'>
                <div className="carousel mx-auto">
                    <div id="item1" className="carousel-item w-full">
                        <img src={first} className="mx-auto rounded-lg" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={second} className="mx-auto rounded-lg" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={third} className="mx-auto rounded-lg" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src={first} className="mx-auto rounded-lg" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-4">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </article>
        </article>
    );
};

export default Carousel;