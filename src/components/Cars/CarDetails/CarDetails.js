import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, NavLink, useNavigate, useLocation } from "react-router-dom";

import "./car-details.css";
import * as carService from "../../../services/carService";
import { AuthContext } from "../../../contexts/AuthContext";
import { formatDate } from "../../../utils/formatDate";

export default function CarDetails() {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const { user } = useContext(AuthContext);

    const [currentCar, setCurrentCar] = useState({});
    const [isLiked, setIsLiked] = useState();
    const [likeId, setLikeId] = useState();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        carService
            .getOne(params.carId)
            .then((res) => {
                if (!res._id) {
                    navigate("/404");
                }

                setCurrentCar(res);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        carService
            .getAllLikes(user._id)
            .then((res) => {
                const like = res.find((like) => like._ownerId === user._id && currentCar._id === like.likedCar);
                if (like) {
                    setIsLiked(true);
                    setLikeId(like._id);
                } else {
                    setIsLiked(false);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [isLiked]);

    const likeHandler = () => {
        if (isLiked) {
            carService.deleteLike(likeId);
            setIsLiked(false);
        } else {
            const likeData = {
                _ownerId: user._id,
                likedCar: currentCar._id,
            };
            carService
                .addLike(likeData)
                .then((res) => {
                    if (res._id) {
                        setIsLiked(true);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    if (isLoading) {
        return <div id="loader"></div>;
    }

    return (
        <section id="details" className="container">
            <h2 className="title">
                {currentCar.year} {currentCar.manufacturer} {currentCar.model}
            </h2>
            <div className="details-wrapper">
                <div className="details-text">
                    <h2>
                        <u>Basics</u>
                    </h2>
                    <span>
                        <b>Manufacturer: </b>
                        {currentCar.manufacturer}
                    </span>
                    <span>
                        <b>Model : </b>
                        {currentCar.model}
                    </span>
                    <span>
                        <b>Category: </b>
                        {currentCar.category}
                    </span>

                    <h2>
                        <u>Details & Features</u>
                    </h2>
                    <span>
                        <b>Mileage: </b>
                        {Number(currentCar.mileage).toLocaleString()} km
                    </span>
                    <span>
                        <b>Year: </b>
                        {currentCar.year}
                    </span>
                    <span>
                        <b>Price: </b>
                        EUR {Number(currentCar.price).toLocaleString()}
                    </span>
                    <span>
                        <b>Location: </b>
                        {currentCar.location}
                    </span>
                    <span className="with-line-breaks">
                        <b>Description: </b> {currentCar.description}
                    </span>
                    <span>
                        <b>Online Since: </b>
                        {formatDate(currentCar._createdOn)}
                    </span>
                    <span>
                        <b>Last Updated: </b>
                        {currentCar._updatedOn ? formatDate(currentCar._updatedOn) : "No changes have been made yet"}
                    </span>

                    <h2>
                        <u>Seller's Info</u>
                    </h2>
                    <span>
                        <b>Contact Person: </b>
                        {user.accessToken ? (
                            `${currentCar.fname} ${currentCar.lname}`
                        ) : (
                            <NavLink to={`/login`} state={{ prev: location.pathname }}>
                                Login to reveal
                            </NavLink>
                        )}
                    </span>
                    <span>
                        <b>Telephone Number: </b>
                        {user.accessToken ? (
                            currentCar.telNumber
                        ) : (
                            <NavLink to={`/login`} state={{ prev: location.pathname }}>
                                Login to reveal
                            </NavLink>
                        )}
                    </span>
                </div>
                <div className="details-img">
                    <img src={currentCar.imageUrl} alt="car" />
                    {user.accessToken ? (
                        <div className="likeBtn">
                            <i onClick={likeHandler} className={`fa-solid fa-star ${isLiked ? "liked" : "notLiked"}`} />
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>

            {user.accessToken && user._id == currentCar._ownerId ? (
                <div className="car-details-controls">
                    <Link to={`/catalog/${currentCar._id}/edit`}>
                        <button className="btn">Edit</button>
                    </Link>
                    <Link to={`/catalog/${currentCar._id}/delete`}>
                        <button className="btn">Delete</button>
                    </Link>
                </div>
            ) : (
                ""
            )}
        </section>
    );
}
