import React from 'react';
import Banner from './Banner';
import FeaturedTasks from './FeaturedTasks';
import Counting from './Counting';
import ImageFeature from './imageFeature';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedTasks></FeaturedTasks>
            <ImageFeature></ImageFeature>
            <Counting></Counting>
        </div>
    );
};

export default Home;