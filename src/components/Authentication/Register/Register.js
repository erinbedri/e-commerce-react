import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./register.css";
import * as authService from "../../../services/authService";

export default function Register() {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        email: "",
        fname: "",
        lname: "",
        telNumber: "",
        password: "",
        repeatPassword: "",
    });

    const changeHandler = (e) => {
        setFormData((oldData) => ({
            ...oldData,
            [e.target.name]: e.target.type == "checkbox" ? e.target.checked : e.target.value,
        }));
    };

    const isFormValid = Boolean(
        formData.email &&
            formData.fname &&
            formData.lname &&
            formData.telNumber &&
            formData.password &&
            formData.repeatPassword
    );

    const submitHandler = (e) => {
        e.preventDefault();

        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters!");
            return;
        }

        if (formData.password != formData.repeatPassword) {
            setError("Passwords do not match!");
            return;
        }

        if (isFormValid) {
            authService
                .register(formData.email, formData.password, formData.fname, formData.lname, formData.telNumber)
                .then((res) => {
                    if (res.accessToken) {
                        navigate("/login");
                    } else {
                        setError(res.message);
                    }
                });
        } else {
            setError("All fields are mandatory!");
            return;
        }
    };

    return (
        <section id="register" className="container">
            <h2 className="title">Sign Up</h2>
            {error && <div className="error">{error}</div>}

            <form className="form" onSubmit={submitHandler}>
                <label htmlFor="email">
                    <b>Email</b>
                </label>
                <input type="email" placeholder="Enter Email" name="email" onChange={changeHandler} required />

                <label htmlFor="fname">
                    <b>First Name</b>
                </label>
                <input type="text" placeholder="Enter First Name" name="fname" onChange={changeHandler} required />

                <label htmlFor="lname">
                    <b>Last Name</b>
                </label>
                <input type="text" placeholder="Enter Last Name" name="lname" onChange={changeHandler} required />

                <label htmlFor="telNumber">
                    <b>Telephone Number</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter Telephone Number"
                    name="telNumber"
                    onChange={changeHandler}
                    required
                />

                <label htmlFor="password">
                    <b>Password</b>
                </label>
                <input type="password" placeholder="Enter Password" name="password" onChange={changeHandler} required />

                <label htmlFor="repeatPassword">
                    <b>Confirm Password</b>
                </label>
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="repeatPassword"
                    onChange={changeHandler}
                    required
                />

                <button className="btn" type="submit" disabled={!isFormValid}>
                    Register
                </button>

                <span className="register-link">
                    Already registered?{" "}
                    <Link to="/login" className="link">
                        Sign ip
                    </Link>{" "}
                    instead.
                </span>
            </form>
        </section>
    );
}
