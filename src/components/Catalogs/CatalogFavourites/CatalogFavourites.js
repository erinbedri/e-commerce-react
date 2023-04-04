import React, { useEffect, useState, useContext } from "react";

import { AuthContext } from "../../../contexts/AuthContext";
import * as carServices from "../../../services/carService";
import CarList from "../../Cars/CarList/CarList";
import useLoading from "../../../hooks/useLoading";
import Error from "../../common/Error/Error";

export default function Favourites() {
    const { isLoading, loading } = useLoading(true);
    const [isError, setIsError] = useState(false);

    const [favourites, setFavourites] = useState([]);

    const { user } = useContext(AuthContext);

    const [sortBy, setSortBy] = useState("manufacturer");
    const [orderBy, setOrderBy] = useState("");

    useEffect(() => {
        carServices
            .getAllLikes(user._id)
            .then((res) => {
                loading();
                setFavourites(res);
            })
            .catch(() => {
                setIsError(true);
            });
    }, []);

    const handleSortBy = (e) => {
        setSortBy(e.target.innerText.toLowerCase() || e.target.parentElement.innerText.toLowerCase());
        setOrderBy((oldOrderBy) => (oldOrderBy === "" ? "%20desc" : ""));
    };

    if (isLoading) {
        return <div id="loader"></div>;
    }

    if (isError) {
        return <Error />;
    }

    return <CarList cars={favourites} handleSortBy={handleSortBy} likedItem={true} />;
}
