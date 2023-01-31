import React from "react";

export default function CarItem({ car }) {
    return (
        <div className="catalog-item">
            <img src={car.imageUrl} alt="car" />
            <span>{car.manufacturer}</span>
            <span>{car.model}</span>
            <span>{car.category}</span>
            <span>{car.mileage.toLocaleString()} km</span>
            <span>{car.year}</span>
            <span>EUR {car.price.toLocaleString()}</span>
            <span>{car.location}</span>
        </div>
    );
}
