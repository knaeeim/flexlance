import React from "react";
import TrueFocus from "../SmallComp/TrueFocus";
import { useLoaderData } from "react-router";
import BrowseTaskCard from "./BrowseTaskCard";

const FeaturedTasks = () => {
    
    const allData = useLoaderData();
    const featuredTasks = allData.slice().sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, 6);
    

    return (
        <div className="md:my-20 my-10 md:px-10 px-5">
            <div className="my-10">
                <TrueFocus
                    sentence="Featured Flexlancers"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="gray"
                    animationDuration={2}
                    pauseBetweenAnimations={1}
                />
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
