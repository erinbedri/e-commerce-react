import React from "react";
import { Link } from "react-router-dom";

import CarItem from "../CarItem/CarItem";

export default function CatalogList({ cars, handleSortBy }) {
    return (
        <section id="catalog" className="container">
            {cars.length > 0 ? (
                <div className="catalog-list">
                    <div className="catalog-header">
                        <span></span>
                        <span onClick={handleSortBy}>
                            <i className="fa-solid fa-sort" /> Manufacturer
                        </span>
                        <span onClick={handleSortBy}>
                            <i className="fa-solid fa-sort" /> Model
                        </span>
                        <span onClick={handleSortBy}>
                            <i className="fa-solid fa-sort" /> Category
                        </span>
                        <span onClick={handleSortBy}>
                            <i className="fa-solid fa-sort" /> Mileage
                        </span>
                        <span onClick={handleSortBy}>
                            <i className="fa-solid fa-sort" /> Year
                        </span>
                        <span onClick={handleSortBy}>
                            <i className="fa-solid fa-sort" /> Price
                        </span>
                        <span onClick={handleSortBy}>
                            <i className="fa-solid fa-sort" /> Location
                        </span>
                    </div>

                    {cars.map((c) => (
                        <Link to={`/catalog/${c._id}/details`} key={c._id} className="catalog-link">
                            <CarItem {...c} />
                        </Link>
                    ))}
                </div>
            ) : (
                <>
                    <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
                        There are no cars in this list right now!
                    </h3>
                    <p style={{ textAlign: "center", marginTop: "1rem" }}>
                        <Link to={"/catalog/car/add"}>
                            <b>Sell cars</b>
                        </Link>{" "}
                        now.
                    </p>
                </>
            )}
        </section>
    );
}
