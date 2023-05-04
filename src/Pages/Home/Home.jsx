import React from 'react';
import Banner from './Banner/Banner';
import Carousel from './Carousel/Carousel';
import Chefs from './Chefs';

const Home = () => {
    return (
        <div>
            <Banner />
            <Chefs />
            <Carousel />
        </div>
    );
};

export default Home;