import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const BrowseTaskDetails = () => {
    const {
        _id,
        email,
        title,
        category,
        date,
        budget,
        cover,
        name,
        description,
        bidCount,
    } = useLoaderData();
    const [bid, setBid] = useState(bidCount);
    const [userPhoto, setUserPhoto] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/users/${email}`)
            .then((res) => res.json())
            .then((data) => {
                setUserPhoto(data);
            });
    }, [email]);

    const handleBidCount = () => {
        const newBidCount = bid + 1;
        setBid(newBidCount);

        // ? update bid Count in database
        fetch(`http://localhost:3000/updateData/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ bidCount: newBidCount }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Data updated successfully", data);
            });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-xl mb-3 font-bold">
                    You have bid for this Task <span className="text-green-600">{bid}</span> times.
                </h1>
                <h2 className="text-4xl font-extrabold mb-2">Gig Overview</h2>
                <p>
                    A closer look into{" "}
                    <span className="font-semibold text-[#0D9488]">{name}</span>
                    's task offer.
                </p>
            </div>

            {/* Card Container */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-10">
                {/* Image */}
                <div className="overflow-hidden rounded-2xl">
                    <img
                        src={cover}
                        alt="Task Cover"
                        className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105 rounded-xl"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between space-y-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                            {title}
                        </h1>

                        {/* Author Info */}
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src={userPhoto.photo}
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full border-2 border-teal-500"
                            />
                            <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                                Posted by <br />{" "}
                                <span className="font-semibold">{name}</span>
                            </span>
                        </div>

                        {/* Category Badge */}
                        <span className="inline-block bg-[#0D9488] text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
                            {category}
                        </span>

                        {/* Description */}
                        <p className="mt-4 text-gray-600 dark:text-gray-400 text-justify">
                            {description}
                        </p>
                    </div>

                    {/* Metadata */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="p-4 border rounded-xl bg-gray-50 dark:bg-gray-800">
                            <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
                                Deadline
                            </p>
                            <p className="font-semibold">{date}</p>
                        </div>
                        <div className="p-4 border rounded-xl bg-gray-50 dark:bg-gray-800">
                            <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
                                Budget
                            </p>
                            <p className="font-semibold">${budget}</p>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button
                        onClick={handleBidCount}
                        className="w-full md:w-auto bg-[#0D9488] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0F766E] transition duration-300">
                        Bid for This Task
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BrowseTaskDetails;
