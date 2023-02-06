import { useEffect, useState, useContext } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";

import * as carService from "../services/carService";
import { AuthContext } from "../contexts/AuthContext";

const CarOwner = ({ children }) => {
    const { user } = useContext(AuthContext);
    const { carId } = useParams();
    const navigate = useNavigate();

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

    useEffect(() => {
        if (user.accessToken && user._id !== currentCar._ownerId) {
            return navigate("/catalog", { replace: true });
        }

        return children ? children : <Outlet />;
    }, []);
};

export default CarOwner;
