import React from "react";

export default function Advantage({ icon, title, text }) {
    return (
        <div className="desc-item">
            <i className={icon} />
            <div className="desc-text">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
}
