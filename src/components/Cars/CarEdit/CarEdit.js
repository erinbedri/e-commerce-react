import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as carService from "../../../services/carService";

export default function CarEdit() {
    const [error, setError] = useState([]);

    const params = useParams();

    const navigate = useNavigate();

    const [currentCar, setCurrentCar] = useState({});

    const isFormValid =
        currentCar.manufacturer != "" &&
        currentCar.model != "" &&
        currentCar.category != "" &&
        currentCar.mileage != null &&
        currentCar.year != null &&
        currentCar.imageUrl != "" &&
        currentCar.price != null &&
        currentCar.location != "" &&
        currentCar.description != "";

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

    const changeHandler = (e) => {
        setCurrentCar((oldData) => ({
            ...oldData,
            [e.target.name]: e.target.type == "checkbox" ? e.target.checked : e.target.value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (!isFormValid) {
            setError([...error, "All fields are mandatory!"]);
            return;
        }

        if (currentCar.price < 0) {
            setError([...error, "Price cannot be below 0!"]);
            return;
        }

        if (currentCar.mileage < 0) {
            setError([...error, "Mileage cannot be below 0!"]);
            return;
        }

        if (currentCar.year < 1900 || currentCar.year > 2023) {
            setError([...error, "Year must be between 1900 and 2023!"]);
            return;
        }

        carService
            .editCar(params.carId, currentCar)
            .then((res) => {
                navigate(`/catalog/${currentCar._id}/details`);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <section id="login" className="container">
            <h2 className="title">Edit Car</h2>
            {error && [...new Set(error)].map((e) => <div className="error">{e}</div>)}

            <form className="form">
                <label htmlFor="manufacturer">
                    <b>Manufacturer</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter Manufacturer"
                    name="manufacturer"
                    defaultValue={currentCar.manufacturer}
                    onChange={changeHandler}
                    required
                />
                <label htmlFor="model">
                    <b>Model</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter Model"
                    name="model"
                    defaultValue={currentCar.model}
                    onChange={changeHandler}
                    required
                />

                <label htmlFor="category">
                    <b>Category</b>
                </label>
                <select
                    type="text"
                    name="category"
                    defaultValue={currentCar.category}
                    onChange={changeHandler}
                    required
                >
                    <option value="">--- Select Category ---</option>
                    <option value="Electric Car">Electric Car</option>
                    <option value="Cabriolet / Roadster">Cabriolet / Roadster</option>
                    <option value="Estate Car">Estate Car</option>
                    <option value="Saloon">Saloon</option>
                    <option value="Small Car">Small Car</option>
                    <option value="Sports Car / Coupe">Sports Car / Coupe</option>
                    <option value="SUV / Off-road Vehicle / Truck">SUV / Off-road Vehicle / Truck</option>{" "}
                    <option value="Van / Minibus">Van / Minibus</option>
                    <option value="Other">Other</option>
                </select>

                <label htmlFor="mileage">
                    <b>Mileage</b>
                </label>
                <input
                    type="number"
                    placeholder="Enter Mileage"
                    name="mileage"
                    defaultValue={currentCar.mileage}
                    onChange={changeHandler}
                    min={0}
                    required
                />
                <label htmlFor="year">
                    <b>Year</b>
                </label>
                <input
                    type="number"
                    placeholder="Enter Year"
                    name="year"
                    defaultValue={currentCar.year}
                    onChange={changeHandler}
                    min={1900}
                    max={2023}
                    required
                />
                <label htmlFor="imageUrl">
                    <b>Image URL</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter Image URL"
                    name="imageUrl"
                    defaultValue={currentCar.imageUrl}
                    onChange={changeHandler}
                    required
                />
                <label htmlFor="price">
                    <b>Price</b>
                </label>
                <input
                    type="number"
                    placeholder="Enter Price"
                    name="price"
                    defaultValue={currentCar.price}
                    onChange={changeHandler}
                    min={0}
                    required
                />
                <label htmlFor="location">
                    <b>Location</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter Location"
                    name="location"
                    defaultValue={currentCar.location}
                    onChange={changeHandler}
                    required
                />
                <label htmlFor="description">
                    <b>Description</b>
                </label>
                <textarea
                    id="description"
                    name="description"
                    defaultValue={currentCar.description}
                    onChange={changeHandler}
                    rows={10}
                />
                <button onClick={submitHandler} className="btn" type="submit">
                    Edit
                </button>
            </form>
        </section>
    );
}
