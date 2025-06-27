import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BrowseTaskCard from "./BrowseTaskCard";

const BrowseTasks = () => {
    const allPost = useLoaderData();
    const [posts, setPosts] = useState(allPost);
    const [title, setTitle] = useState("All")
    // console.log(allPost);

    const handleSorting = (e) => {
        const sortingType = e.target.value;

        if(sortingType === "A to Z") {
            const sortedPosts = [...posts].sort((a, b) => a.title.localeCompare(b.title));
            setTitle(sortingType);
            setPosts(sortedPosts);
        } else if(sortingType === "Z to A") {
            const sortedPosts = [...posts].sort((a, b) => b.title.localeCompare(a.title));
            setTitle(sortingType);
            setPosts(sortedPosts);
        } else if(sortingType === "Budget High to Low") {
            const sortedPosts = [...posts].sort((a, b) => b.budget - a.budget);
            setTitle(sortingType);
            setPosts(sortedPosts);
        } else if(sortingType === "Budget Low to High") {
            const sortedPosts = [...posts].sort((a, b) => a.budget - b.budget);
            setTitle(sortingType);
            setPosts(sortedPosts);
        }
    }


    return (
        <div className="max-w-[90%] mx-auto mb-20">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-center my-5">
                    Browse {title} Tasks
                </h1>
                <p className="text-center text-gray-500">
                    Find the perfect task for you from our extensive list of
                    available tasks.
                </p>
            </div>
            <div className="flex justify-end items-center mb-10">
                <select onChange={handleSorting} defaultValue="Choose Sorting Style" className="w-2/12 py-2 px-4 rounded-2xl border-2">
                    <option disabled={true}>Choose Sorting Style</option>
                    <option>A to Z</option>
                    <option>Z to A</option>
                    <option>Budget High to Low</option>
                    <option>Budget Low to High</option>
                </select>
            </div>
            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post) => (
                    <BrowseTaskCard key={post._id} post={post}></BrowseTaskCard>
                ))}
            </div>
        </div>
    );
};

export default BrowseTasks;
