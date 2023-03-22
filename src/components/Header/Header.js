import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./header.css";
import { AuthContext } from "../../contexts/AuthContext";
import Weather from "../Weather/Weather";

export default function Header() {
    const { user } = useContext(AuthContext);
    const [isActive, setActive] = useState("");

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
                        <span onClick={() => setActive("")}>Home</span>
                    </NavLink>
                    <NavLink to="/catalog" end activeclassname="active">
                        <span onClick={() => setActive("")}>Catalog</span>
                    </NavLink>
                    {user.accessToken ? (
                        <>
                            <NavLink to="/catalog/car/add" activeclassname="active">
                                <span onClick={() => setActive("")}>Sell Car</span>
                            </NavLink>
                            <NavLink to="/catalog/owner" activeclassname="active">
                                <div className="tooltip">
                                    <i
                                        className="fa-solid fa-square-parking"
                                        style={isActive === "My Cars" ? { color: "#ca162b" } : {}}
                                        onClick={() => setActive("My Cars")}
                                    />
                                    <span className="tooltiptext">My Cars</span>
                                </div>
                            </NavLink>
                            <NavLink to="/catalog/favourites" activeclassname="active">
                                <div className="tooltip">
                                    <i
                                        className="fa-solid fa-star"
                                        style={isActive === "Favourites" ? { color: "#ca162b" } : {}}
                                        onClick={() => setActive("Favourites")}
                                    />
                                    <span className={`tooltiptext`}>Favourites</span>
                                </div>
                            </NavLink>
                            <NavLink to="/profile" activeclassname="active">
                                <div className="tooltip">
                                    <i
                                        className="fa-solid fa-user"
                                        style={isActive === "Profile" ? { color: "#ca162b" } : {}}
                                        onClick={() => setActive("Profile")}
                                    />
                                    <span className="tooltiptext">Profile</span>
                                </div>
                            </NavLink>
                            <NavLink to="/logout" activeclassname="active">
                                <div className="tooltip">
                                    <i className="fa-solid fa-right-from-bracket" />
                                    <span className="tooltiptext">Logout</span>
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
