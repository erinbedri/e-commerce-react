import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import "./car-details.css";
import * as carService from "../../services/carService";
import { AuthContext } from "../../contexts/AuthContext";

export default function CarDetails() {
    const params = useParams();
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const [currentCar, setCurrentCar] = useState({});

    useEffect(() => {
        carService
            .getOne(params.carId)
            .then((res) => {
                if (!res._id) {
                    navigate("/404");
                }

                setCurrentCar(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section id="details" className="container">
            <h2 className="title">
                {currentCar.year} {currentCar.manufacturer} {currentCar.model}
            </h2>
            <div className="details-wrapper">
                <div className="details-text">
                    <h2>
                        <u>Basics</u>
                    </h2>
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

                    <h2>
                        <u>Details & Features</u>
                    </h2>
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

                    <h2>
                        <u>Seller's Info</u>
                    </h2>
                    <span>
                        <b>Contact Person: </b>
                        {user.accessToken ? (
                            `${currentCar.fname} ${currentCar.lname}`
                        ) : (
                            <Link to={"/login"}>Login to reveal</Link>
                        )}
                    </span>
                    <span>
                        <b>Telephone Number: </b>
                        {user.accessToken ? currentCar.telNumber : <Link to={"/login"}>Login to reveal</Link>}
                    </span>
                </div>
                <div className="details-img">
                    <img src={currentCar.imageUrl} alt="car" />
                </div>
            </div>

            {user.accessToken && user._id == currentCar._ownerId ? (
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
