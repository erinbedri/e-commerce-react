import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <h2>There has been an error!</h2>
            <p style={{ marginTop: "1rem" }}>
                Go back to{" "}
                <Link to={"/"}>
                    <b>home</b>
                </Link>
            </p>
        </div>
    );
}
