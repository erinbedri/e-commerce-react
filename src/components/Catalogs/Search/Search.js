import React from "react";

import "./search.css";

export default function Search({ handleSearch }) {
    return (
        <form className="search">
            <div>
                <input
                    type="search"
                    name="search"
                    className="search-input"
                    placeholder="Search..."
                    onChange={handleSearch}
                />
                <button type="submit" disabled style={{ display: "none" }} aria-hidden="true"></button>
            </div>
        </form>
    );
}
