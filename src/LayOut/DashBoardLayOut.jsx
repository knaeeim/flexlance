import React, { use, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import {
    FaHome,
    FaPlus,
    FaTasks,
    FaUserEdit,
    FaSignOutAlt,
} from "react-icons/fa";

const DashBoardLayOut = () => {
    const { user, theme, userLogout } = use(AuthContext);
    const location = useLocation();

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        document.documentElement.setAttribute("data-theme", localTheme);
    }, [theme]);

    const dashBoardLink = (
        <div className="flex flex-col justify-between min-h-[calc(100vh-150px)]">
            <div className="justify-start space-y-6">
                <li>
                    <Link
                        to={"/dashboard"}
                        className={
                            location.pathname === "/dashboard"
                                ? "bg-slate-400 pb-1 mx-4 px-2 flex items-center gap-2"
                                : "mx-4 pb-1 px-2 flex items-center gap-2"
                        }>
                        <FaHome className="text-sm" />
                        DashBoard Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/dashboard/addTask"
                        className={
                            location.pathname === "/dashboard/addTask"
                                ? "bg-slate-400 pb-1 mx-4 px-2 flex items-center gap-2"
                                : "mx-4 pb-1 px-2 flex items-center gap-2"
                        }>
                        <FaPlus className="text-sm" />
                        Add Task
                    </Link>
                </li>
                <li>
                    <Link
                        to={`/dashboard/myPostedTasks/${user?.email}`}
                        className={
                            location.pathname ===
                            `/dashboard/myPostedTasks/${user?.email}`
                                ? "bg-slate-400 pb-1 mx-4 px-2 flex items-center gap-2"
                                : "mx-4 pb-1 px-2 flex items-center gap-2"
                        }>
                        <FaTasks className="text-sm" />
                        My Posted Tasks
                    </Link>
                </li>
                <li>
                    <Link
                        to={"/dashboard/update-profile"}
                        className={
                            location.pathname === "/dashboard/update-profile"
                                ? "bg-slate-400 pb-1 mx-4 px-2 flex items-center gap-2"
                                : "mx-4 pb-1 px-2 flex items-center gap-2"
                        }>
                        <FaUserEdit className="text-sm" />
                        Update Profile
                    </Link>
                </li>
            </div>
            <div className="">
                <li>
                    <button
                        onClick={async() => await userLogout()}
                        className="mx-4 pb-1 px-2 flex items-center gap-2 text-red-500 hover:text-red-700"
                    >
                        <FaSignOutAlt className="text-sm" />
                        Log Out
                    </button>
                </li>
            </div>
        </div>
    );
    return (
        <div
            data-aos="zoom-in-up"
            className="drawer lg:drawer-open md:max-w-[90%] mx-auto">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center">
                {/* Navbar */}
                <div className="navbar bg-base-300 w-full lg:hidden">
                    <div className="flex-none">
                        <label
                            htmlFor="my-drawer-2"
                            aria-label="open sidebar"
                            className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2">User DashBoard</div>
                </div>
                {/* Page content here */}
                <div className="w-full min-h-screen pt-10 bg-base-200 rounded-2xl">
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"></label>
                <ul className="menu bg-base-300 text-base-content min-h-screen w-80 shadow-2xl p-4 rounded-2xl">
                    <Link
                        to="/"
                        className="w-full flex items-center ml-3 mb-10">
                        <img
                            src="https://i.ibb.co/DHGHcHRn/flexlance-logo.png"
                            alt=""
                            className="h-10 w-10"
                        />
                        <span className="ml-2">FlexLance</span>
                    </Link>
                    {/* Sidebar content here */}
                    {dashBoardLink}
                </ul>
            </div>
        </div>
    );
};

export default DashBoardLayOut;
