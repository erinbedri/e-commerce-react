import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import "./car-details.css";
import * as carService from "../../services/carService";
import { AuthContext } from "../../contexts/AuthContext";

export default function CarDetails() {
    const params = useParams();

    const { user } = useContext(AuthContext);

    const [currentCar, setCurrentCar] = useState({});

    useEffect(() => {
        carService
            .getOne(params.carId)
            .then((res) => {
                setCurrentCar(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section id="details" className="container">
            <h2 className="title">Car Details</h2>
            <div className="details-wrapper">
                <div className="details-text">
                    <span>
                        <b>Manufacturer: </b>
                        {currentCar.manufacturer}
                    </span>
                    <span>
                        <b>Model : </b>
                        {currentCar.model}
                    </span>
                    <span>
                        <b>Category: </b>
                        {currentCar.category}
                    </span>
                    <span>
                        <b>Mileage: </b>
                        {Number(currentCar.mileage).toLocaleString()} km
                    </span>
                    <span>
                        <b>Year: </b>
                        {currentCar.year}
                    </span>
                    <span>
                        <b>Price: </b>
                        EUR {Number(currentCar.price).toLocaleString()}
                    </span>
                    <span>
                        <b>Location: </b>
                        {currentCar.location}
                    </span>
                    <span className="with-line-breaks">
                        <b>Description: </b> {currentCar.description}
                    </span>
                    <span>
                        <b>Contact Person: </b>
                        {user.accessToken ? `${currentCar.fname} ${currentCar.lname}` : `Please login to reveal`}
                    </span>
                    <span>
                        <b>Telephone Number: </b>
                        {user.accessToken ? currentCar.telNumber : `Please login to reveal`}
                    </span>
                </div>
                <div className="details-img">
                    <img src={currentCar.imageUrl} alt="car" />
                </div>
            </div>

            {user.accessToken && user._id == currentCar._id ? (
                <div className="car-details-controls">
                    <Link to={`/catalog/${currentCar._id}/edit`}>
                        <button className="btn">Edit</button>
                    </Link>
                    <Link to={`/catalog/${currentCar._id}/delete`}>
                        <button className="btn">Delete</button>
                    </Link>
                </div>
            ) : (
                ""
            )}
        </section>
    );
}
