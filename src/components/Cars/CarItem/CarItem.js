import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function CarItem({ imageUrl, manufacturer, model, category, mileage, year, price, location, _ownerId }) {
    const { user } = useContext(AuthContext);
    const owner = user._id === _ownerId;

    return (
        <div className="catalog-item" style={owner ? { backgroundColor: "#ffedef" } : null}>
            <img src={imageUrl} alt="car" />
            <span>{manufacturer}</span>
            <span>{model}</span>
            <span>{category}</span>
            <span>{Number(mileage).toLocaleString()} km</span>
            <span>{year}</span>
            <span>EUR {Number(price).toLocaleString()}</span>
            <span>{location}</span>
        </div>
    );
}
