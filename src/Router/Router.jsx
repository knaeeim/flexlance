import { createBrowserRouter } from "react-router";
import HomeLayOut from "../LayOut/HomeLayOut";
import Home from "../Components/Home";
import AddTask from "../Components/AddTask";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoutes from "../Provider/PrivateRoutes";
import BrowseTasks from "../Components/BrowseTasks";
import MyPostedData from "../Components/MyPostedData";
import BrowseTaskDetails from "../Components/BrowseTaskDetails";
import LoadingPage from "../Pages/LoadingPage";
import UpdateTask from "../Components/UpdateTask";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayOut></HomeLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
        children: [
            {
                index: true,
                loader: () => fetch('https://flexlance.vercel.app/allData'),
                element: <Home></Home>,
            },
            {
                path: "/addTask",
                element: <PrivateRoutes>
                    <AddTask></AddTask>
                </PrivateRoutes>,
            },
            {
                path: "/browseTasks",
                loader: () => fetch("https://flexlance.vercel.app/allData"),
                element: <PrivateRoutes>
                    <BrowseTasks></BrowseTasks>
                </PrivateRoutes>,
            },
            {
                path: "/browseTasks/:id",
                loader: ({ params }) => fetch(`https://flexlance.vercel.app/allData/${params.id}`),
                element: <PrivateRoutes>
                    <BrowseTaskDetails></BrowseTaskDetails>
                </PrivateRoutes>
            },
            {
                path: "/myPostedTasks/:email",
                loader: ({params}) => fetch(`https://flexlance.vercel.app/alldatabyemail/${params.email}`),
                element: <PrivateRoutes>
                    <MyPostedData></MyPostedData>
                </PrivateRoutes>,
            },
            {
                path: "/updatedPost/:id",
                loader: ({ params }) => fetch(`https://flexlance.vercel.app/allData/${params.id}`),
                element: <PrivateRoutes>
                    <UpdateTask></UpdateTask>
                </PrivateRoutes>
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
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    }
]);
