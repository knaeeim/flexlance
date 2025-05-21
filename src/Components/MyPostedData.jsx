import React, { use, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { FaCalendarDay } from "react-icons/fa6";
import Swal from "sweetalert2";

const MyPostedData = () => {
    const { user } = use(AuthContext);
    const userPostedTask = useLoaderData();
    const [tasks, setTasks] = useState(userPostedTask);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/deleteData/${id}`, {
                    method: "DELETE"
                })
                .then(result => result.json())
                .then(data => {
                    if(data.deletedCount){
                        setTasks(prev => prev.filter(task => task._id !== id));
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                        });
                    }
                })
            }
        });
    };

    return (
        <div>
            <div className="text-center mt-10">
                <h1 className="text-2xl font-bold">
                    {user.displayName}'s Posted Tasks..
                </h1>
            </div>
            {tasks.length > 0 ? (
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
                            {tasks.map((task, index) => {
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
                                            <button
                                                onClick={() =>
                                                    handleDelete(task._id)
                                                }
                                                className="btn btn-sm btn-warning">
                                                Delete
                                            </button>
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
                <div className="text-center h-[calc(100vh-440px)] flex flex-col justify-center items-center">
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
