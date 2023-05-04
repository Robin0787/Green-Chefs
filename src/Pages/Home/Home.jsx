import React from 'react';
import Banner from './Banner/Banner';
import BestRecipes from './Best Recipes/BestRecipes';
import Carousel from './Carousel/Carousel';
import Chefs from './Chefs';

const Home = () => {
    return (
        <div>
            <Banner />
            <Chefs />
            <Carousel />
            <BestRecipes />
        </div>
    );
};

export default Home;