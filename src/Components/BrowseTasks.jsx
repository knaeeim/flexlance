import React from 'react';
import { useLoaderData } from 'react-router';
import BrowseTaskCard from './BrowseTaskCard';

const BrowseTasks = () => {
    const allPost = useLoaderData();
    console.log(allPost);
    return (
        <div className='max-w-7xl mx-auto mb-20'>
            <div className='mb-8'>
                <h1 className='text-3xl font-bold text-center my-5'>Browse All Tasks</h1>
                <p className='text-center text-gray-500'>Find the perfect task for you from our extensive list of available tasks.</p>
            </div>
            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    allPost.map((post) => <BrowseTaskCard key={post._id} post={post}></BrowseTaskCard> )
                }
            </div>
        </div>
    );
};

export default BrowseTasks;