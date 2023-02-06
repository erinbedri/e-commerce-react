import { useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

const AuthenticatedUser = ({ children }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.accessToken) {
            return navigate("/catalog", { replace: true });
        }

        return children ? children : <Outlet />;
    }, []);
};

export default AuthenticatedUser;
