import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import * as carService from "../../services/carService";

export default function CarAdd() {
    const [auth, setAuth] = useLocalStorage("auth", {});

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        manufacturer: "",
        model: "",
        category: "",
        mileage: "",
        year: "",
        imageUrl: "",
        price: "",
        location: "",
        description: "",

        fname: auth.fname,
        lname: auth.lname,
        telNumber: auth.telNumber,
    });

    const isFormValid =
        formData.manufacturer &&
        formData.model &&
        formData.category &&
        formData.mileage &&
        formData.year &&
        formData.imageUrl &&
        formData.price &&
        formData.location &&
        formData.description;

    const [error, setError] = useState("");

    const changeHandler = (e) => {
        setFormData((oldData) => ({
            ...oldData,
            [e.target.name]:
                e.target.type == "checkbox" ? e.target.checked : e.target.value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (isFormValid) {
            carService
                .addCar(formData)
                .then((res) => {
                    if (res._ownerId) {
                        navigate(`/catalog/${res._id}/details`);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            setError("All fields are mandatory!");
            return;
        }
    };

    return (
        <section id="login" className="container">
            <h2 className="title">Add Car</h2>
            {error && <div className="error">{error}</div>}

            <form className="form">
                <label htmlFor="manufacturer">
                    <b>Manufacturer</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter Manufacturer"
                    name="manufacturer"
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
                    onChange={changeHandler}
                    required
                />
                <label htmlFor="category">
                    <b>Category</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter Category"
                    name="category"
                    onChange={changeHandler}
                    required
                />
                <label htmlFor="mileage">
                    <b>Mileage</b>
                </label>
                <input
                    type="number"
                    placeholder="Enter Mileage"
                    name="mileage"
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
                    onChange={changeHandler}
                    required
                />
                <label htmlFor="description">
                    <b>Description</b>
                </label>
                <textarea
                    id="description"
                    name="description"
                    onChange={changeHandler}
                    rows={10}
                />
                <button onClick={submitHandler} className="btn" type="submit">
                    Add
                </button>
            </form>
        </section>
    );
}
