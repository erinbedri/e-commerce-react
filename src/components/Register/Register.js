import React from "react";

import "./register.css";

export default function Register() {
    return (
        <section id="register" className="container">
            <h2 className="title">Sign Up</h2>
            <form className="form">
                <label htmlFor="email">
                    <b>Email</b>
                </label>
                <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    required
                />
                <label htmlFor="fname">
                    <b>First Name</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter First Name"
                    name="fname"
                    required
                />
                <label htmlFor="lname">
                    <b>Last Name</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lname"
                    required
                />
                <label htmlFor="telNumber">
                    <b>Telephone Number</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter Telephone Number"
                    name="telNumber"
                    required
                />
                <label htmlFor="password">
                    <b>Password</b>
                </label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    required
                />
                <label htmlFor="repeatPassword">
                    <b>Confirm Password</b>
                </label>
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="repeatPassword"
                    required
                />
                <button className="btn" type="submit">
                    Register
                </button>
                <span className="register-link">
                    Already registered?
                    <a href="#">Sign ip</a> instead.
                </span>
            </form>
        </section>
    );
}
