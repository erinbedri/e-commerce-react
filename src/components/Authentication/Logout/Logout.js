import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";
import * as authService from "../../../services/authService";

export default function Logout() {
    const navigate = useNavigate();
    const { user, userLogout } = useContext(AuthContext);

    useEffect(() => {
        authService
            .logout(user.accessToken)
            .then(() => {
                userLogout();
                navigate("/");
            })
            .catch(() => {
                navigate("/");
            });
    });
    return null;
}
