import React, { use } from "react";
import { FaSackDollar } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";

const BrowseTaskCard = ({ post }) => {
    const { _id, title, category, date, budget, cover, name } =
        post;
    const { user } = use(AuthContext);

    return (
        <div>
            <div className="block rounded-lg p-4 shadow-xs shadow-indigo-100">
                <img
                    alt=""
                    src={cover}
                    className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2">
                    <div className="space-y-1">
                        <div>
                            <dt className="sr-only">Category</dt>

                            <button className="btn btn-xs bg-accent-content text-white">
                                {category}
                            </button>
                        </div>

                        <div>
                            <dt className="sr-only">Title</dt>

                            <dd className="font-medium">{title}</dd>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center gap-8 text-xs">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <FaSackDollar size={25} />
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Budget</p>

                                <p className="font-medium">${budget}</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <MdOutlineDateRange size={28} />
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Deadline</p>

                                <p className="font-medium">{date}</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-5 rounded-full ring-2 ring-offset-2">
                                    <img src={user.photoURL} />
                                </div>
                            </div>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Posted By</p>

                                <p className="font-medium">{name}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-4">
                    <Link to={`/browseTasks/${_id}`} className="btn btn-primary w-full">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default BrowseTaskCard;
