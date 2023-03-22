import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

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
                                <div className="tooltip">
                                    <i className="fa-solid fa-square-parking" />
                                    <span class="tooltiptext">My Cars</span>
                                </div>
                            </NavLink>
                            <NavLink to="/favourites" activeclassname="active">
                                <div className="tooltip">
                                    <i className="fa-solid fa-star" />
                                    <span class="tooltiptext">Favourites</span>
                                </div>
                            </NavLink>
                            <NavLink to="/profile" activeclassname="active">
                                <div className="tooltip">
                                    <i className="fa-solid fa-user" />
                                    <span class="tooltiptext">Profile</span>
                                </div>
                            </NavLink>
                            <NavLink to="/logout" activeclassname="active">
                                <div className="tooltip">
                                    <i className="fa-solid fa-right-from-bracket" />
                                    <span class="tooltiptext">Logout</span>
                                </div>
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
