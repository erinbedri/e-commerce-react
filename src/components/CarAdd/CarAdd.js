import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./car-add.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import * as carService from "../../services/carService";

export default function CarAdd() {
    const [auth, setAuth] = useLocalStorage("auth", {});
    const navigate = useNavigate();
    const [error, setError] = useState([]);

    const [formError, setFormError] = useState({});

    const [formData, setFormData] = useState({
        manufacturer: "",
        model: "",
        category: "",
        mileage: null,
        year: null,
        imageUrl: "",
        price: null,
        location: "",
        description: "",

        fname: auth.fname,
        lname: auth.lname,
        telNumber: auth.telNumber,
    });

    const isFormValid =
        formData.manufacturer != "" &&
        formData.model != "" &&
        formData.category != "" &&
        formData.mileage != null &&
        formData.year != null &&
        formData.imageUrl != "" &&
        formData.price != null &&
        formData.location != "" &&
        formData.description != "";

    const blurHandler = (e) => {
        if (e.target.value == "") {
            console.log(e.target.name);
            setFormError((errors) => ({
                ...errors,
                [e.target.name]: `"${e.target.name}" field cannot be empty`,
            }));
        } else {
            console.log("else");
            setFormError((errors) => ({
                ...errors,
                [e.target.name]: "",
            }));
        }
    };

    const changeHandler = (e) => {
        setFormData((oldData) => ({
            ...oldData,
            [e.target.name]: e.target.type == "checkbox" ? e.target.checked : e.target.value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (formData.price < 0) {
            setFormData([...error, "Price cannot be below 0!"]);
            return;
        }

        if (formData.mileage < 0) {
            setError([...error, "Mileage cannot be below 0!"]);
            return;
        }

        if (formData.year < 1900 || formData.year > 2023) {
            setError([...error, "Year must be between 1900 and 2023!"]);
            return;
        }

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
            setError([...error, "All fields are mandatory!"]);
            return;
        }
    };

    console.log(formError);

    return (
        <section id="car-add" className="container">
            <h2 className="title">Add Car</h2>

            <form className="form">
                <label htmlFor="manufacturer" className={formError.manufacturer ? "form-error-label" : ""}>
                    <b>Manufacturer</b>
                </label>
                <input
                    type="text"
                    name="manufacturer"
                    placeholder="Enter Manufacturer"
                    onChange={changeHandler}
                    onBlur={blurHandler}
                    className={formError.manufacturer ? "form-error-input" : ""}
                    required
                />
                <p className="form-error-message">{formError.manufacturer ? formError.manufacturer : ""}</p>

                <label htmlFor="model" className={formError.model ? "form-error-label" : ""}>
                    <b>Model</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter Model"
                    name="model"
                    onBlur={blurHandler}
                    onChange={changeHandler}
                    className={formError.model ? "form-error-input" : ""}
                    required
                />
                <p className="form-error-message">{formError.model ? formError.model : ""}</p>

                <label htmlFor="category" className={formError.category ? "form-error-label" : ""}>
                    <b>Category</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter Category"
                    name="category"
                    onChange={changeHandler}
                    onBlur={blurHandler}
                    className={formError.category ? "form-error-input" : ""}
                    required
                />
                <p className="form-error-message">{formError.category ? formError.category : ""}</p>

                <label htmlFor="mileage" className={formError.mileage ? "form-error-label" : ""}>
                    <b>Mileage</b>
                </label>
                <input
                    type="number"
                    placeholder="Enter Mileage"
                    name="mileage"
                    onChange={changeHandler}
                    onBlur={blurHandler}
                    className={formError.mileage ? "form-error-input" : ""}
                    min={0}
                    required
                />
                <p className="form-error-message">{formError.mileage ? formError.mileage : ""}</p>

                <label htmlFor="year" className={formError.year ? "form-error-label" : ""}>
                    <b>Year</b>
                </label>
                <input
                    type="number"
                    placeholder="Enter Year"
                    name="year"
                    onChange={changeHandler}
                    onBlur={blurHandler}
                    className={formError.year ? "form-error-input" : ""}
                    min={1900}
                    max={2023}
                    required
                />
                <p className="form-error-message">{formError.year ? formError.year : ""}</p>

                <label htmlFor="imageUrl" className={formError.imageUrl ? "form-error-label" : ""}>
                    <b>Image URL</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter Image URL"
                    name="imageUrl"
                    onChange={changeHandler}
                    onBlur={blurHandler}
                    className={formError.imageUrl ? "form-error-input" : ""}
                    required
                />
                <p className="form-error-message">{formError.imageUrl ? formError.imageUrl : ""}</p>

                <label htmlFor="price" className={formError.price ? "form-error-label" : ""}>
                    <b>Price</b>
                </label>
                <input
                    type="number"
                    placeholder="Enter Price"
                    name="price"
                    onChange={changeHandler}
                    onBlur={blurHandler}
                    className={formError.price ? "form-error-input" : ""}
                    min={0}
                    required
                />
                <p className="form-error-message">{formError.price ? formError.price : ""}</p>

                <label htmlFor="location" className={formError.location ? "form-error-label" : ""}>
                    <b>Location</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter Location"
                    name="location"
                    onChange={changeHandler}
                    onBlur={blurHandler}
                    className={formError.location ? "form-error-input" : ""}
                    required
                />
                <p className="form-error-message">{formError.location ? formError.location : ""}</p>

                <label htmlFor="description" className={formError.description ? "form-error-label" : ""}>
                    <b>Description</b>
                </label>
                <textarea
                    id="description"
                    name="description"
                    placeholder="Enter Description"
                    onChange={changeHandler}
                    onBlur={blurHandler}
                    className={formError.description ? "form-error-input" : ""}
                    rows={10}
                />
                <p className="form-error-message">{formError.description ? formError.description : ""}</p>

                <button onClick={submitHandler} className="btn" type="submit">
                    Add
                </button>
            </form>
        </section>
    );
}
