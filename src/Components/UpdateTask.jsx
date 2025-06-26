import { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router";
import CustomError from "../Pages/CustomError";

const UpdateTask = () => {
    const { user } = use(AuthContext);
    const updatedTask = useLoaderData();
    const navigate = useNavigate();
    const { _id, title, category, date, budget, cover, description } =
        updatedTask;
    const [startDate, setStartDate] = useState(new Date(date));

    if (user.email !== updatedTask.email) {
        return <CustomError></CustomError>;
    }

    // const selectedDate = new Date(startDate);
    // const today = new Date();

    // selectedDate.setHours(0, 0, 0, 0);
    // today.setHours(0, 0, 0, 0);

    // if (selectedDate < today) {
    //     return toast.error("Date can't be in the past");
    // }

    const handleUpdateTask = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const obj = Object.fromEntries(formData.entries());
        const taskObj = { email: user.email, name: user.displayName, ...obj };
        // console.log(taskObj);

        // send data to database
        fetch(`https://flexlance.vercel.app/updateData/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(taskObj),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.modifiedCount) {
                    toast.success("Task Updated successfully");
                    navigate(`/myPostedTasks/${user.email}`);
                }
                else{
                    toast.error("Please make some changes to update the task");
                }
            });
    };

    return (
        <div className="max-w-[90%] mx-auto p-4 mb-20">
            <div>
                <h1 className="text-3xl font-bold text-center mb-5">
                    Update Task
                </h1>
                <p className="text-center text-gray-500 mb-5">
                    Change in the details below to update your task.
                </p>
            </div>
            <form onSubmit={handleUpdateTask} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="fieldset-legend">Task Title</label>
                        <input
                            defaultValue={title}
                            name="title"
                            type="text"
                            className="input w-full"
                            placeholder="Enter your title Here"
                        />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="fieldset-legend">Category</label>
                        <select
                            className="input w-full"
                            name="category"
                            defaultValue={category}>
                            <option disabled={true} selected>
                                Choose Your Task Category
                            </option>
                            <option>Design</option>
                            <option>Writing</option>
                            <option>Marketing</option>
                            <option>Web Development</option>
                            <option>Mobile Development</option>
                            <option>Data Science</option>
                            <option>Machine Learning</option>
                            <option>Artificial Intelligence</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="fieldset-legend">
                            Task Description
                        </label>
                        <input
                            defaultValue={description}
                            name="description"
                            type="text"
                            className="input w-full"
                            placeholder="Enter your Task Description"
                        />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="fieldset-legend">Deadline</label>
                        <DatePicker
                            name="date"
                            className="w-full input"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="fieldset-legend">Budget</label>
                        <input
                            defaultValue={budget}
                            name="budget"
                            type="text"
                            className="input w-full"
                            placeholder="Enter your Estimated Budget"
                        />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="fieldset-legend">User Email</label>
                        <input
                            name="email"
                            type="text"
                            className="input w-full"
                            value={user?.email}
                            disabled
                        />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="fieldset-legend">User Name</label>
                        <input
                            name="name"
                            type="text"
                            className="input w-full"
                            value={user?.displayName}
                            disabled
                        />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="fieldset-legend">Task Image</label>
                        <input
                            defaultValue={cover}
                            name="cover"
                            type="text"
                            className="input w-full"
                            placeholder="Enter Your Image Url"
                        />
                    </fieldset>
                </div>
                <input
                    className="btn btn-primary w-full"
                    type="submit"
                    value="Update Task"
                />
            </form>
        </div>
    );
};

export default UpdateTask;
