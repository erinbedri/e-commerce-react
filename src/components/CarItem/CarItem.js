import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function CarItem({ car }) {
    const { user } = useContext(AuthContext);
    const owner = user._id === car._ownerId;

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
