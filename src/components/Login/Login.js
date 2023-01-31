import React from "react";

import "./login.css";

export default function Login() {
    return (
        <section id="login" className="container">
            <h2 className="title">Sign In</h2>
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
                <label htmlFor="psw">
                    <b>Password</b>
                </label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    required
                />
                <button className="btn" type="submit">
                    Login
                </button>
                <span className="login-link">
                    Not registered? <a href="#">Sign up</a> instead.
                </span>
            </form>
        </section>
    );
}
