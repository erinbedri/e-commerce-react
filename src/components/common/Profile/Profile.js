import React, { useState, useEffect } from "react";

import "./profile.css";
import { getUser } from "../../../services/userService";

export default function Profile() {
    const [userDetails, setUserDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getUser().then((res) => {
            setUserDetails(res);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <div id="loader"></div>;
    }

    return (
        <section className="container">
            <h2 className="title">Profile</h2>

            <div className="profile-details">
                <i className="fa-solid fa-circle-user" />
                <p>
                    <b>First Name:</b> {userDetails.fname}
                </p>
                <p>
                    <b>Last Name:</b> {userDetails.lname}
                </p>
                <p>
                    <b>Email:</b> {userDetails.email}
                </p>
                <p>
                    <b>Telephone Number:</b> {userDetails.telNumber}
                </p>
            </div>
        </section>
    );
}
