import React, { use, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { FaUserAltSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";

const Navbar = () => {
    const { user, userLogout, theme, setTheme } = use(AuthContext);

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        document.documentElement.setAttribute("data-theme", localTheme);
    }, [theme]);

    const links = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                        ? "border-b-2 border-teal-500 pb-1 px-2 mx-4 font-bold"
                        : "mx-4 pb-1 px-2"
                }>
                Home
            </NavLink>
            <NavLink
                to="/browseTasks"
                className={({ isActive }) =>
                    isActive
                        ? "border-b-2 border-teal-500 pb-1 mx-4 px-2"
                        : " mx-4 pb-1 px-2"
                }>
                Browse Tasks
            </NavLink>
            <NavLink
                to="/about-us"
                className={({ isActive }) =>
                    isActive
                        ? "border-b-2 border-teal-500 pb-1 mx-4 px-2"
                        : " mx-4 pb-1 px-2"
                }>
                About Us
            </NavLink>
        </>
    );

    const handleUserLogOut = () => {
        userLogout()
            .then(() => {
                toast.success("User logged out successfully");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const handleLightandDarkMode = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
        localStorage.setItem("theme", theme);
    };

    return (
        <div className="sticky top-0 z-50">
            <div className="flex md:px-20 px-8 pt-2 pb-1 bg-base-300 shadow-sm items-center">
                <div className="navbar-start gap-2">
                    <div className="dropdown">
                        <div tabIndex={0} className="lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="text-xl flex items-center gap-2">
                        <img
                            className="md:w-7 md:h-7 w-5 h-5"
                            src="https://i.ibb.co/DHGHcHRn/flexlance-logo.png"
                            alt=""
                        />
                        <span className="hidden md:block">Flexlance</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>
                <div className="navbar-end gap-3">
                    <div>
                        <label className="swap swap-rotate">
                            {/* this hidden checkbox controls the state */}
                            <input
                                type="checkbox"
                                checked={theme === "light"}
                                onChange={handleLightandDarkMode}
                            />
                            {/* sun icon */}
                            <svg
                                className="swap-on h-7 w-7 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            {/* moon icon */}
                            <svg
                                className="swap-off h-7 w-7 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>
                    </div>
                    {user ? (
                        <>
                            {user?.photoURL && (
                                <>
                                    <div className="avatar avatar-online">
                                        <div className="md:w-[38px] w-6 rounded-full border-2 border-green-500">
                                            <button
                                                data-tooltip-id="user-tooltip"
                                                data-tooltip-content={
                                                    user?.displayName
                                                }
                                                data-tooltip-place="left">
                                                <img
                                                    className="object-center object-cover"
                                                    src={user.photoURL}
                                                />
                                            </button>
                                            <Tooltip id="user-tooltip" />
                                        </div>
                                    </div>
                                </>
                            )}
                            <Link
                                to="/dashboard"
                                className="btn md:btn-sm btn-xs bg-slate-400">
                                DashBoard
                            </Link>
                            <Link
                                onClick={handleUserLogOut}
                                to="/auth/login"
                                className="btn md:btn-sm btn-xs bg-slate-600 text-white">
                                LogOut
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/auth/login"
                                className="btn btn-sm bg-slate-400">
                                Login
                            </Link>
                            <Link
                                to="/auth/register"
                                className="btn btn-sm bg-slate-600 text-white">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
