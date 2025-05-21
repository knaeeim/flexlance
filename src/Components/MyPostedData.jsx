import React, { use } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { FaCalendarDay } from "react-icons/fa6";

const MyPostedData = () => {
    const { user } = use(AuthContext);
    const userPostedTask = useLoaderData();

    return (
        <div>
            <div className="text-center mt-10">
                <h1 className="text-2xl font-bold">
                    {user.displayName}'s Posted Tasks..
                </h1>
            </div>
            {userPostedTask.length > 0 ? (
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
                                    <tr key={task._id} className="font-bold">
                                        <th>{index + 1}</th>
                                        <td>
                                            {task.title.split(" ", 6).join(" ")}
                                        </td>
                                        <td>{task.category}</td>
                                        <td className="">
                                            <span className="flex items-center gap-2 font-bold">
                                                <FaCalendarDay /> {task.date}
                                            </span>{" "}
                                            <span className="font-bold">
                                                ${task.budget}
                                            </span>
                                        </td>
                                        <td className="flex gap-2">
                                            <Link
                                                to={`/updatedPost/${task._id}`}
                                                className="btn btn-sm btn-primary">
                                                Edit
                                            </Link>
                                            <Link className="btn btn-sm btn-warning">
                                                Delete
                                            </Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-sm btn-primary text-white">
                                                Bids
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center mt-10">
                    <h1 className="text-2xl font-bold">No Task Posted Yet!</h1>
                    <Link to="/addTask" className="btn btn-primary mt-5">
                        Post a Task
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MyPostedData;
