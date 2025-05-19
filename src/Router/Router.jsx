import { createBrowserRouter } from "react-router";
import HomeLayOut from "../LayOut/HomeLayOut";
import Home from "../Components/Home";
import AddTask from "../Components/AddTask";
import Login from "../Components/Login";
import Register from "../Components/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayOut></HomeLayOut>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: "/addTask",
                element: <AddTask></AddTask>,
            },
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register> 
            }
        ],
    },
]);
