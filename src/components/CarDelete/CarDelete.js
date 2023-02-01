import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import "./delete-car.css";
import * as carService from "../../services/carService";

export default function CarDelete() {
    const [currentCar, setCurrentCar] = useState({});

    const params = useParams();

    const navigate = useNavigate();

    const [error, setError] = useState("");

    const deleteHandler = () => {
        console.log("delete");
        carService
            .deleteCar(currentCar._id)
            .then((res) => {
                if (res.code == "404") {
                    setError(res.message);
                    return;
                }
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        carService
            .getOne(params.carId)
            .then((res) => {
                if (res.code == "404") {
                    setError(res.message);
                    return;
                }

                setCurrentCar(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section id="car-delete" className="container">
            <h2 className="title">
                Are you sure you want to permanently delete{" "}
                {currentCar.manufacturer} {currentCar.model}?
            </h2>
            {error && <div className="error">{error}</div>}

            {!error && (
                <>
                    <button onClick={deleteHandler} className="btn">
                        Yes
                    </button>
                    <Link to={`/catalog/${currentCar._id}/details`}>
                        <button className="btn">No</button>
                    </Link>
                </>
            )}
        </section>
    );
}
