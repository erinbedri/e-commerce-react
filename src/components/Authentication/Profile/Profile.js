import React, { useState, useEffect } from "react";

import "./profile.css";
import { getUser } from "../../../services/userService";
import SectionTitle from "../../common/SectionTitle/SectionTitle";

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
            <SectionTitle title={"Profile"} />

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
