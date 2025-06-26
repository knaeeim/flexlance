import React from 'react';
import Banner from './Banner';
import FeaturedTasks from './FeaturedTasks';
import Counting from './Counting';
import ImageFeature from './imageFeature';
import PopularCategories from './PopularCategories';

const Home = () => {
    return (
        <div className='max-w-[90%] mx-auto'>
            <Banner></Banner>
            <PopularCategories></PopularCategories>
            <FeaturedTasks></FeaturedTasks>
            <ImageFeature></ImageFeature>
            <Counting></Counting>
        </div>
    );
};

export default Home;