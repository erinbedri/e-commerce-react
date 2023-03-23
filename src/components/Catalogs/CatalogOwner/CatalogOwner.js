import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";

import * as carService from "../../../services/carService";
import { AuthContext } from "../../../contexts/AuthContext";
import CarItem from "../../Cars/CarItem/CarItem";
import useLoading from "../../../hooks/useLoading";
import Error from "../../common/Error/Error";

export default function CatalogOwner() {
    const { isLoading, loading } = useLoading(true);
    const [isError, setIsError] = useState(false);

    const { user } = useContext(AuthContext);
    const [myCars, setMyCars] = useState([]);

    useEffect(() => {
        carService
            .getAllMyCars()
            .then((res) => {
                loading();
                setMyCars(res.filter((c) => c._ownerId === user._id));
            })
            .catch(() => {
                setIsError(true);
            });
    }, []);

    if (isLoading) {
        return <div id="loader"></div>;
    }

    if (isError) {
        return <Error />;
    }

    return (
        <section id="catalog" className="container">
            {myCars.length > 0 ? (
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
                            <CarItem {...c} />
                        </Link>
                    ))}
                </div>
            ) : (
                <>
                    <h3 style={{ textAlign: "center", marginTop: "2rem" }}>You have no cars in your collection!</h3>
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
