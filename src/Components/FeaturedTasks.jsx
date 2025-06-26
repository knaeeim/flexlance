import React from "react";
import TrueFocus from "../SmallComp/TrueFocus";
import { useLoaderData } from "react-router";
import BrowseTaskCard from "./BrowseTaskCard";

const FeaturedTasks = () => {
    
    const allData = useLoaderData();
    const featuredTasks = allData.slice().sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, 6);
    

    return (
        <div data-aos="zoom-in-up" className="md:my-20 my-10">
            <div className="text-center space-y-4 md:w-10/12 w-full mx-auto mb-4">
                <h1 className="text-3xl font-bold">
                    Featured Posts 
                </h1>
                <p className="md:text-lg text-xs max-w-[70%] mx-auto">
                    Explore our featured tasks, handpicked to help you find the perfect opportunity. Whether you're a freelancer or a client, these posts are designed to connect you with the right projects and talents.
                </p>
            </div>
            
            <div>
                {
                    featuredTasks.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {featuredTasks.map((post) => <BrowseTaskCard post={post}></BrowseTaskCard>)}
                        </div>
                    ) : " "
                }
            </div>
        </div>
    );
};

export default FeaturedTasks;
