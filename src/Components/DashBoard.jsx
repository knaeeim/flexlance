import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import userProfile from "../assets/userProfile.json";
import Lottie from "lottie-react";

const DashBoard = () => {
    const { user } = use(AuthContext);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                `https://flexlance.vercel.app/alldatabyemail/${user.email}`
            );
            const data = await res.json();
            console.log(data);
            setUserData(data);
        };

        fetchData();
    }, [user.email]);

    // Fake data – replace with real data from backend or context
    const postedTasks = userData?.length || 0;
    const totalBids = userData
        ?.map((task) => task.bidCount)
        .reduce((acc, count) => acc + count, 0);
    const ongoingProject = null; // null means no active project

    // Current time and date
    const now = new Date();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const formattedDate = now.toLocaleDateString(undefined, options);
    const formattedTime = now.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <div className="max-w-[90%] mx-auto">
            <h1 className="flex justify-center items-center md:text-3xl text-2xl font-bold text-green-700 mb-6">
                Welcome to User DashBoard
            </h1>

            {/* Task Overview Section */}
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-center mb-5">
                    OverView
                </h1>
                <p className="text-center mb-5">
                    Here you can see your tasks, bids etc.
                </p>

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
                    {/* Card 1 - Posted Tasks */}
                    <div className="bg-green-100 p-5 rounded-xl shadow-md">
                        <h2 className="text-xl font-bold text-green-700 mb-2">
                            📋 Posted Tasks
                        </h2>
                        <p className="text-2xl font-semibold text-gray-800">
                            {postedTasks}
                        </p>
                    </div>

                    {/* Card 2 - Total Bids */}
                    <div className="bg-blue-100 p-5 rounded-xl shadow-md">
                        <h2 className="text-xl font-bold text-blue-700 mb-2">
                            📨 Total Bids
                        </h2>
                        <p className="text-2xl font-semibold text-gray-800">
                            {totalBids}
                        </p>
                    </div>

                    {/* Card 3 - Ongoing Project */}
                    <div className="bg-yellow-100 p-5 rounded-xl shadow-md">
                        <h2 className="text-xl font-bold text-yellow-700 mb-2">
                            🔧 Ongoing Project
                        </h2>
                        <p className="text-2xl font-semibold text-gray-800">
                            {ongoingProject ? ongoingProject : "-"}
                        </p>
                    </div>

                    {/* Card 4 - Current Date & Time */}
                    <div className="bg-purple-100 p-5 rounded-xl shadow-md">
                        <h2 className="text-xl font-bold text-purple-700 mb-2">
                            📅 Date & Time
                        </h2>
                        <p className="text-md text-gray-700">{formattedDate}</p>
                        <p className="text-lg font-semibold text-gray-800">
                            {formattedTime}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between md:flex-row flex-col-reverse md:gap-2 gap-5 items-center my-10">
                <div>
                    <div className="flex flex-col items-center space-y-3">
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                                <img src={user.photoURL} />
                            </div>
                        </div>
                        <p className="text-lg  mt-2">
                            Name: {user?.displayName || "Guest"}
                        </p>
                        <p className="text-lg ">
                            Email: {user?.email || "Not logged in"}
                        </p>
                    </div>
                </div>

                <div className="md:flex items-center justify-center h-72 hidden">
                    <div className="divider divider-horizontal">User Info</div>
                </div>

                <div className="md:w-1/3 w-2/3">
                    <Lottie animationData={userProfile}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
