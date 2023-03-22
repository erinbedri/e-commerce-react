import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./NotFound.css";
import { AuthContext } from "../../../contexts/AuthContext";

export default function NotFound() {
    const { user } = useContext(AuthContext);

    console.log(user);

    return (
        <section id="not-found" className="container">
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>

            <div className="not-found-links">
                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>

                {user.accessToken ? (
                    <>
                        <Link to="/catalog/owner">My Cars</Link>
                        <Link to="/logout">Logout</Link>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </div>
        </section>
    );
}
