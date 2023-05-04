import React from 'react';
// import first from "../../../assets/Carousel_Images/first.avif";
// import second from "../../../assets/Carousel_Images/second.avif";
// import third from "../../../assets/Carousel_Images/third.avif";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Carousel = () => {
    return (
        <article className='p-10 bg-gray-100'>
           
            <AwesomeSlider>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </AwesomeSlider>
        </article>
    );
};

export default Carousel;