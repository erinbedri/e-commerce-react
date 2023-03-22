import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

const AuthenticatedUser = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user.accessToken) {
        return <Navigate to={"/"} replace />;
    }

    return children ? children : <Outlet />;
};

export default AuthenticatedUser;
