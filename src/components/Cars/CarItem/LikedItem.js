import React, { useContext, useEffect, useState } from "react";

import * as carServices from "../../services/carService";
import { AuthContext } from "../../contexts/AuthContext";

export default function LikedItem({ _ownerId, likedCar }) {
    const { user } = useContext(AuthContext);
    const [car, setCar] = useState({});
    const owner = user._id === car._ownerId;

    useEffect(() => {
        carServices.getOne(likedCar).then((res) => {
            setCar(res);
        });
    }, []);

    return (
        <div className="catalog-item" style={owner ? { backgroundColor: "#ffedef" } : null}>
            <img src={car.imageUrl} alt="car" />
            <span>{car.manufacturer}</span>
            <span>{car.model}</span>
            <span>{car.category}</span>
            <span>{Number(car.mileage).toLocaleString()} km</span>
            <span>{car.year}</span>
            <span>EUR {Number(car.price).toLocaleString()}</span>
            <span>{car.location}</span>
        </div>
    );
}
