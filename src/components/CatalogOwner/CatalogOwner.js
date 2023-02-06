import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";

import * as carService from "../../services/carService";
import { AuthContext } from "../../contexts/AuthContext";
import CarItem from "../CarItem/CarItem";

export default function CatalogOwner() {
    const { user } = useContext(AuthContext);

    const [myCars, setMyCars] = useState([]);

    useEffect(() => {
        carService
            .getAllMyCars(user._id)
            .then((res) => {
                setMyCars(res);
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

                {myCars.map((c) => (
                    <Link to={`/catalog/${c._id}/details`} key={c._id} className="catalog-link">
                        <CarItem car={c} />
                    </Link>
                ))}
            </div>
        </section>
    );
}
