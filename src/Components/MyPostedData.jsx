import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { FaCalendarDay } from "react-icons/fa6";

const MyPostedData = () => {
    const { user } = use(AuthContext);
    const userPostedTask = useLoaderData();
    console.log(userPostedTask);
    return (
        <div>
            <div className="text-center mt-10">
                <h1 className="text-2xl font-bold">
                    {user.displayName}'s Posted Tasks..
                </h1>
            </div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 my-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Task Title</th>
                            <th>Category</th>
                            <th>Date & Budget</th>
                            <th>Action</th>
                            <th>Bids</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userPostedTask.map((task, index) => {
                            return (
                                <tr className="font-bold">
                                    <th>{index + 1}</th>
                                    <td>{task.title.split(" ", 6).join(" ")}</td>
                                    <td>{task.category}</td>
                                    <td className="">
                                        <span className="flex items-center gap-2 font-bold"><FaCalendarDay/> {task.date}</span>{" "}
                                        <span className="font-bold">${task.budget}</span>
                                    </td>
                                    <td className="flex gap-2">
                                        <button className="btn btn-sm btn-primary">Edit</button>
                                        <button className="btn btn-sm btn-warning">Delete</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-sm btn-primary text-white">Bids</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedData;
