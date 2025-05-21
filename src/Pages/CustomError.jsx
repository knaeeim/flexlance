import React from "react";

const CustomError = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
            <div className="text-center max-w-md">
                <h1 className="text-7xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-pulse">
                    404
                </h1>
                <p className="mt-4 text-2xl sm:text-3xl text-white font-semibold">
                    ভাইয়া প্লিজ চালাকি কম কর 
                </p>
                <p className="mt-2 text-slate-400">
                    আপনি/তুমি/তুই গিয়ে নিজেরটা এডিট কর মানুষের ডাটা কেন এডিট করতে মন চায়? ভালো হয়ে যাও!
                </p>
                <a
                    href="/"
                    className="inline-block mt-6 px-6 py-3 text-white font-medium bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl shadow-lg hover:scale-105 transition-transform">
                    Back to Home
                </a>
            </div>
        </div>
    );
};

export default CustomError;
