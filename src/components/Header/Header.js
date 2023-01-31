import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

export default function Header() {
    return (
        <header id="header" className="container">
            <div className="header-wrapper">
                <div className="header-logo">
                    <Link to="/">
                        <h1>
                            C <i className="fa-solid fa-car" /> RS
                        </h1>
                    </Link>
                </div>

                {/*
                <div class="header-nav">
                    <a href="#"><span>ALL</span></a>
                    <a href="#"><span>MEN</span></a>
                    <a href="#"><span>WOMEN</span></a>
                </div>
                */}

                <div className="header-controls">
                    {/* Logged in user */}
                    <Link to="#">
                        <i className="fa-solid fa-heart" />
                    </Link>
                    <Link to="#">
                        <i className="fa-solid fa-user" />
                    </Link>
                    <Link to="/catalog/car/add">Add Car</Link>
                    <Link to="#">Logout</Link>

                    {/* Logged out user */}
                    <Link to="/login">Sign In</Link>
                    <Link to="/register">Sign Up</Link>
                </div>
            </div>
        </header>
    );
}
