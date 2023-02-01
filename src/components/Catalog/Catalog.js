import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./catalog.css";
import * as carService from "../../services/carService";
import CarItem from "../CarItem/CarItem";

export default function Catalog() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService
            .getAll()
            .then((res) => {
                setCars(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section id="catalog" className="container">
            <div className="catalog-list">
                <div className="catalog-header">
                    <span />
                    <span>Manufacturer</span>
                    <span>Model</span>
                    <span>Category</span>
                    <span>Mileage</span>
                    <span>Year</span>
                    <span>Price</span>
                    <span>Location</span>
                </div>

                {cars.map((c) => (
                    <Link
                        to={`/catalog/${c._id}/details`}
                        key={c._id}
                        className="catalog-link"
                    >
                        <CarItem car={c} />
                    </Link>
                ))}
            </div>
        </section>
    );
}
