import React, { use, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { FaCalendarDay } from "react-icons/fa6";
import Swal from "sweetalert2";

const MyPostedData = () => {
    const { user } = use(AuthContext);
    const userPostedTask = useLoaderData();

    // console.log(userPostedTask);
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
                fetch(`https://flexlance.vercel.app/deleteData/${id}`, {
                    method: "DELETE",
                })
                    .then((result) => result.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            setTasks((prev) =>
                                prev.filter((task) => task._id !== id)
                            );
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                        }
                    });
            }
        });
    };

    return (
        <div data-aos="zoom-in-up" className="w-full px-4 sm:px-10">
            <div className="text-center mt-10">
                <h1 className="text-2xl font-bold">
                    {user.displayName}'s Posted Tasks..
                </h1>
            </div>

            {tasks.length > 0 ? (
                <div className="overflow-x-auto rounded-box border border-base-content/10 bg-base-100 my-10 shadow-md">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-neutral-200 text-base font-semibold text-base-content">
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
                            {tasks.map((task, index) => (
                                <tr
                                    key={task._id}
                                    className="hover:bg-base-300/20">
                                    <td>{index + 1}</td>
                                    <td className="max-w-[140px] sm:max-w-[200px] truncate">
                                        {task.title.split(" ", 6).join(" ")}
                                    </td>
                                    <td>{task.category}</td>
                                    <td>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                            <span className="inline-flex items-center gap-1">
                                                <FaCalendarDay className="text-base-content/70" />
                                                {task.date}
                                            </span>
                                            <span className="text-primary font-semibold">
                                                ${task.budget}
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex flex-wrap gap-2">
                                            <Link
                                                to={`/dashboard/updatedPost/${task._id}`}
                                                className="btn btn-xs sm:btn-sm btn-primary">
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDelete(task._id)
                                                }
                                                className="btn btn-xs sm:btn-sm btn-error">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-xs sm:btn-sm btn-outline"
                                            onClick={() =>
                                                document
                                                    .getElementById(
                                                        `my_modal_${task._id}`
                                                    )
                                                    .showModal()
                                            }>
                                            See Bids
                                        </button>
                                        <dialog
                                            id={`my_modal_${task._id}`}
                                            className="modal">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">
                                                    Bids Count
                                                </h3>
                                                <p className="py-4">
                                                    Bids Count for this task is{" "}
                                                    {task.bidCount}
                                                </p>
                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        <button className="btn">
                                                            Close
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </td>
                                </tr>
                            ))}
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
