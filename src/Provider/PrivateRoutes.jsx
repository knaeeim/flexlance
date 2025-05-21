import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import LoadingPage from "../Pages/LoadingPage";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
    const { loading, user } = use(AuthContext);

    const location = useLocation();

    if (loading) {
        return <LoadingPage></LoadingPage>;
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoutes;
