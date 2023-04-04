import React, { useEffect, useContext, useState } from "react";

import * as carService from "../../../services/carService";
import { AuthContext } from "../../../contexts/AuthContext";
import useLoading from "../../../hooks/useLoading";
import Error from "../../common/Error/Error";
import CatalogList from "../../Cars/CarList/CarList";

export default function CatalogOwner() {
    const { isLoading, loading } = useLoading(true);
    const [isError, setIsError] = useState(false);

    const [cars, setCars] = useState([]);

    const { user } = useContext(AuthContext);

    const [sortBy, setSortBy] = useState("manufacturer");
    const [orderBy, setOrderBy] = useState("");

    useEffect(() => {
        carService
            .getAll("", sortBy, orderBy)
            .then((res) => {
                loading();
                setCars(res.filter((c) => c._ownerId === user._id));
            })
            .catch(() => {
                setIsError(true);
            });
    }, [sortBy, orderBy]);

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

    return <CatalogList cars={cars} handleSortBy={handleSortBy} ownerStyle={false} />;
}
