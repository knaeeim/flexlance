import React from "react";
import { useLoaderData } from "react-router";
import BrowseTaskCard from "./BrowseTaskCard";

const CategoryPage = () => {
    const categoryData = useLoaderData();

    return (
        <div>
            <div className="max-w-[90%] mx-auto mb-20">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-center my-5">
                        Category: {categoryData[0]?.category}
                    </h1>
                    <p className="text-center text-gray-500">
                        Explore tasks in the {categoryData[0]?.category}{" "}
                        category.
                    </p>
                </div>
                {categoryData && categoryData.length > 0 ? (
                    <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {categoryData.map((post) => (
                            <BrowseTaskCard
                                key={post._id}
                                post={post}></BrowseTaskCard>
                        ))}
                    </div>
                ) : (
                    <div className="text-center h-[300px] flex justify-center items-center w-full text-4xl text-gray-500">
                        No tasks available in this category.
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
