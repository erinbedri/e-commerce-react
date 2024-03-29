import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import "./login.css";
import * as authService from "../../../services/authService";
import { AuthContext } from "../../../contexts/AuthContext";
import SectionTitle from "../../common/SectionTitle/SectionTitle";

export default function Login() {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const { state } = useLocation();

    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const changeHandler = (e) => {
        setFormData((oldData) => ({
            ...oldData,
            [e.target.name]: e.target.type == "checkbox" ? e.target.checked : e.target.value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        authService
            .login(formData.email, formData.password)
            .then((authData) => {
                if (authData.code == 403) {
                    setError(authData.message);
                    return;
                }

                userLogin(authData);
                if (state) {
                    navigate(state.prev);
                } else {
                    navigate("/");
                }
            })
            .catch(() => {
                console.log("error");
            });
    };

    return (
        <section id="login" className="container">
            <SectionTitle title={"Sign In"} />

            {error && <div className="error">{error}</div>}

            <form className="form" onSubmit={submitHandler}>
                <label htmlFor="email">
                    <b>Email</b>
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    required
                />
                <label htmlFor="password">
                    <b>Password</b>
                </label>
                <input
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={formData.password}
                    onChange={changeHandler}
                    required
                />
                <button className="btn" type="submit">
                    Login
                </button>
                <span className="login-link">
                    Not registered?{" "}
                    <Link to="/register" className="link">
                        Sign up
                    </Link>{" "}
                    instead.
                </span>
            </form>
        </section>
    );
}
