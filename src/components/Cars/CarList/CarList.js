import React from "react";
import { Link } from "react-router-dom";

import CarItem from "../CarItem/CarItem";
import LikedItem from "../CarItem/LikedItem";

export default function CatalogList({ cars, handleSortBy, likedItem }) {
    return (
        <section id="catalog" className="container">
            {cars.length > 0 ? (
                <div className="catalog-list">
                    <div className="catalog-header">
                        <span></span>
                        <span onClick={handleSortBy}>
                            {!likedItem && <i className="fa-solid fa-sort" />} Manufacturer
                        </span>
                        <span onClick={handleSortBy}>{!likedItem && <i className="fa-solid fa-sort" />} Model</span>
                        <span onClick={handleSortBy}>{!likedItem && <i className="fa-solid fa-sort" />} Category</span>
                        <span onClick={handleSortBy}>{!likedItem && <i className="fa-solid fa-sort" />} Mileage</span>
                        <span onClick={handleSortBy}>{!likedItem && <i className="fa-solid fa-sort" />} Year</span>
                        <span onClick={handleSortBy}>{!likedItem && <i className="fa-solid fa-sort" />} Price</span>
                        <span onClick={handleSortBy}>{!likedItem && <i className="fa-solid fa-sort" />} Location</span>
                    </div>

                    {cars.map((c) => (
                        <>
                            {likedItem ? (
                                <Link to={`/catalog/${c.likedCar}/details`} className="catalog-link">
                                    <LikedItem likedCar={c.likedCar} key={c.likedCar} />
                                </Link>
                            ) : (
                                <Link to={`/catalog/${c._id}/details`} className="catalog-link">
                                    <CarItem {...c} key={c._id} />
                                </Link>
                            )}
                        </>
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
