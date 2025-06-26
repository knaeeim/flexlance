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
import DashBoardLayOut from "../LayOut/DashBoardLayOut";
import DashBoard from "../Components/DashBoard";
import CategoryPage from "../Components/CategoryPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayOut></HomeLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch("https://flexlance.vercel.app/allData"),
                hydrateFallbackElement: <LoadingPage></LoadingPage>,
                element: <Home></Home>,
            },
            {
                path: "/browseTasks",
                loader: () => fetch("https://flexlance.vercel.app/allData"),
                hydrateFallbackElement: <LoadingPage></LoadingPage>,
                element: <BrowseTasks></BrowseTasks>,
            },
            {
                path: "/browseTasks/:id",
                loader: ({ params }) =>
                    fetch(`https://flexlance.vercel.app/allData/${params.id}`),
                hydrateFallbackElement: <LoadingPage></LoadingPage>,
                element: (
                    <PrivateRoutes>
                        <BrowseTaskDetails></BrowseTaskDetails>
                    </PrivateRoutes>
                ),
            },
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
            {
                path: "/category-details/:category",
                element: <CategoryPage></CategoryPage>,
                loader: ({ params }) =>{
                    console.log(params);
                    return fetch(
                        `https://flexlance.vercel.app/category?category=${params.category}`
                    );
                }
            },
        ],
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoutes>
                <DashBoardLayOut />
            </PrivateRoutes>
        ),
        children: [
            {
                index: true,
                element: <DashBoard />,
            },
            {
                path: "myPostedTasks/:email",
                loader: ({ params }) =>
                    fetch(
                        `https://flexlance.vercel.app/alldatabyemail/${params.email}`
                    ),
                hydrateFallbackElement: <LoadingPage></LoadingPage>,
                element: (
                    <PrivateRoutes>
                        <MyPostedData></MyPostedData>
                    </PrivateRoutes>
                ),
            },
            {
                path: "updatedPost/:id",
                loader: ({ params }) =>
                    fetch(`https://flexlance.vercel.app/allData/${params.id}`),
                hydrateFallbackElement: <LoadingPage></LoadingPage>,
                element: (
                    <PrivateRoutes>
                        <UpdateTask></UpdateTask>
                    </PrivateRoutes>
                ),
            },
            {
                path: "addTask",
                element: (
                    <PrivateRoutes>
                        <AddTask></AddTask>
                    </PrivateRoutes>
                ),
            },
        ],
    },
]);
