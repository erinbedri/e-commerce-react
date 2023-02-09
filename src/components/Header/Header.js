import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import "./header.css";
import { AuthContext } from "../../contexts/AuthContext";
import Weather from "../Weather/Weather";

export default function Header() {
    const { user } = useContext(AuthContext);

    return (
        <header id="header" className="container">
            <div className="header-wrapper">
                <div className="header-logo">
                    <NavLink to="/">
                        <img src={require("../../images/cars_logo.png")} alt="logo" />
                    </NavLink>
                </div>

                <Weather />

                <div className="header-controls">
                    <NavLink to="/" activeclassname="active">
                        Home
                    </NavLink>
                    <NavLink to="/catalog" end activeclassname="active">
                        Catalog
                    </NavLink>
                    {user.accessToken ? (
                        <>
                            <NavLink to="/catalog/car/add" activeclassname="active">
                                Sell Car
                            </NavLink>
                            <NavLink to="/catalog/owner" activeclassname="active">
                                My Cars
                            </NavLink>
                            <NavLink to="/logout" activeclassname="active">
                                Logout
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login">Sign In</NavLink>
                            <NavLink to="/register">Sign Up</NavLink>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

/*
                            <NavLink to="#">
                                <i className="fa-solid fa-heart" />
                            </NavLink>
                            <NavLink to="#">
                                <i className="fa-solid fa-user" />
                            </NavLink>
*/
