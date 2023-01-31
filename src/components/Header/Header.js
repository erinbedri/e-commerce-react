import React from "react";

import "./header.css";

export default function Header() {
    return (
        <header id="header" className="container">
            <div className="header-wrapper">
                <div className="header-logo">
                    <a href="#">
                        <h1>
                            C <i className="fa-solid fa-car" /> RS
                        </h1>
                    </a>
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
                    <a href="#">
                        <i className="fa-solid fa-heart" />
                    </a>
                    <a href="#">
                        <i className="fa-solid fa-user" />
                    </a>
                    <a href="#">Logout</a>
                    {/* Logged out user */}
                    <a href="#">Sign In</a>
                    <a href="#">Sign Up</a>
                </div>
            </div>
        </header>
    );
}
