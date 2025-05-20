import { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import LoadingPage from "../Pages/LoadingPage";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CgLogOff } from "react-icons/cg";
import toast from "react-hot-toast";

const AddTask = () => {
    const { user } = use(AuthContext);
    const [startDate, setStartDate] = useState(new Date());

    const handleAddTask = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const obj = Object.fromEntries(formData.entries());
        const taskObj = { email: user.email, ...obj };
        console.log(taskObj);

        // send data to database
        fetch("http://localhost:3000/addTask", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(taskObj),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    toast.success("Task added successfully");
                }
            });
    };

    return (
        <div className="max-w-7xl mx-auto p-4 mb-20">
            <div>
                <h1 className="text-3xl font-bold text-center mb-5">
                    Add Task
                </h1>
                <p className="text-center text-gray-500 mb-5">
                    Fill in the details below to add a new task.
                </p>
            </div>
            <form onSubmit={handleAddTask} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="fieldset-legend">Task Title</label>
                        <input
                            name="title"
                            type="text"
                            className="input w-full"
                            placeholder="Enter your title Here"
                        />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="fieldset-legend">Category</label>
                        <select className="input w-full" name="category">
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
                    value="Add Task"
                />
            </form>
        </div>
    );
};

export default AddTask;
