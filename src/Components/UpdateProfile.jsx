import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
    const { user, profileDataUpdate } = use(AuthContext);
    const navigate = useNavigate();

    const handleUpdateProfile = async(e) => {
        e.preventDefault();

        const form = e.target; 
        const name = form.name.value;
        const photoURL = form.photo.value;

        // console.log(name, photoURL);
        const userData = { displayName: name, photoURL: photoURL}

        try {
            await profileDataUpdate(userData);
            toast.success("Profile updated successfully");
            navigate("/")
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className="max-w-[90%] mx-auto pb-8">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
                Update Profile
            </h2>

            {/* Profile Update Section */}
            <div className="shadow-2xl rounded-xl p-6 mb-12">
                <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                    👤 Profile Information
                </h3>
                <form onSubmit={handleUpdateProfile} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block mb-1 font-medium">
                            Display Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            defaultValue={user?.displayName}
                            placeholder="Your name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            name="photo"
                            defaultValue={user?.photoURL}
                            placeholder="Link to your avatar"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div className="">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold">
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>

            {/* Password Update Section */}
            {/* <div className="shadow-2xl rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                    🔒 Change Password
                </h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label className="block mb-1 font-medium">
                            Current Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter current password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">
                            New Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Re-type new password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                </form>

                <div className="mt-6">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md font-semibold">
                        Change Password
                    </button>
                </div>
            </div> */}
        </div>
    );
};

export default UpdateProfile;
