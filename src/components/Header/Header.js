import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import "./header.css";
import { AuthContext } from "../../contexts/AuthContext";

export default function Header() {
    const { user } = useContext(AuthContext);

    return (
        <header id="header" className="container">
            <div className="header-wrapper">
                <div className="header-logo">
                    <Link to="/">
                        <img src="%PUBLIC_URL%/cars_logo.png" alt="logo" /> Here
                    </Link>
                </div>

                <div className="header-controls">
                    {user.accessToken ? (
                        <>
                            <NavLink to="#" activeclassname="active">
                                <i className="fa-solid fa-heart" />
                            </NavLink>
                            <NavLink to="#">
                                <i className="fa-solid fa-user" />
                            </NavLink>
                            <NavLink to="/">Catalog</NavLink>
                            <NavLink to="/catalog/car/add">Add Car</NavLink>
                            <NavLink to="/catalog/owner">My Cars</NavLink>
                            <NavLink to="/logout">Logout</NavLink>
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
