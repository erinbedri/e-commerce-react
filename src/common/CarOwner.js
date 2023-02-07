import { useEffect, useState, useContext, Navigate } from "react";
import { Outlet, useParams } from "react-router-dom";

import * as carService from "../services/carService";
import { AuthContext } from "../contexts/AuthContext";

const CarOwner = ({ children }) => {
    const { user } = useContext(AuthContext);
    const { carId } = useParams();

    const [currentCar, setCurrentCar] = useState({});

    useEffect(() => {
        carService
            .getOne(carId)
            .then((res) => {
                setCurrentCar(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (user.accessToken && user._id !== currentCar._ownerId) {
        return <Navigate to={"/catalog"} replace />;
    }

    return children ? children : <Outlet />;
};

export default CarOwner;
