import { useEffect, useState, useContext } from "react";
import { Outlet, useParams, Navigate } from "react-router-dom";

import * as carService from "../services/carService";
import { AuthContext } from "../contexts/AuthContext";

const CarOwner = ({ children }) => {
    const { user } = useContext(AuthContext);
    const { carId } = useParams();
    const [currentCar, setCurrentCar] = useState("");
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const res = await carService.getOne(carId);
                if (res._ownerId !== user._id) {
                    setShouldRedirect(true);
                } else {
                    setCurrentCar(res);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchCar();
    }, []);

    if (shouldRedirect) {
        return <Navigate to={"/catalog"} replace />;
    }

    if (user.accessToken) {
        return children ? children : <Outlet />;
    }

    return <Navigate to={"/catalog"} replace />;
};

export default CarOwner;
