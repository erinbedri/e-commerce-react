import React from "react";

export default function CarItem({
    imageUrl,
    manufacturer,
    model,
    category,
    mileage,
    year,
    price,
    location,
    ownerStyle,
}) {
    return (
        <div className="catalog-item" style={ownerStyle ? { backgroundColor: "#ffedef" } : null}>
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
