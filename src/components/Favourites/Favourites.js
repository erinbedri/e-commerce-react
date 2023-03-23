import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import LikedItem from "../CarItem/LikedItem";
import * as carServices from "../../services/carService";

export default function Favourites() {
    const { user } = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(true);
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        carServices.getAllLikes(user._id).then((res) => {
            console.log(res);
            setFavourites(res);
            setIsLoading(!isLoading);
        });
    }, []);

    if (isLoading) {
        return <div id="loader"></div>;
    }

    console.log("favourites ", favourites);

    return (
        <section id="catalog" className="container">
            {favourites.length > 0 ? (
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
                    {favourites.map((c) => (
                        <Link to={`/catalog/${c.likedCar}/details`} key={c._id} className="catalog-link">
                            <LikedItem {...c} />
                        </Link>
                    ))}
                </div>
            ) : (
                <>
                    <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
                        You have no cars in your favourites list!
                    </h3>
                    <p style={{ textAlign: "center", marginTop: "1rem" }}>
                        <Link to={"/catalog"}>
                            <b>Browse cars</b>
                        </Link>{" "}
                        now.
                    </p>
                </>
            )}
        </section>
    );
}
