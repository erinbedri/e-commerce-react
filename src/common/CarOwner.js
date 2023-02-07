import { useEffect, useState, useContext } from "react";
import { Outlet, useParams, Navigate } from "react-router-dom";

import * as carService from "../services/carService";
import { AuthContext } from "../contexts/AuthContext";

const CarOwner = ({ children }) => {
    const { user } = useContext(AuthContext);
    const { carId } = useParams();

    useEffect(() => {
        carService
            .getOne(carId)
            .then((res) => {
                if (res._ownerId !== user._id) {
                    return <Navigate to={"/catalog"} replace />;
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (user.accessToken) {
        return children ? children : <Outlet />;
    }
    return <Navigate to={"/catalog"} replace />;
};

export default CarOwner;
