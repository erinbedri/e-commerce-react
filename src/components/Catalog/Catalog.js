import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./catalog.css";
import * as carService from "../../services/carService";
import CarItem from "../CarItem/CarItem";

export default function Catalog() {
    const [cars, setCars] = useState([]);
    const [pageSize, setPageSize] = useState(5);
    const [collectionSize, setCollectionSize] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [offset, setOffset] = useState(0);

    const totalPages = Math.ceil(collectionSize / pageSize);

    useEffect(() => {
        carService
            .getAll(offset, pageSize)
            .then((res) => {
                setCars(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [offset]);

    useEffect(() => {
        carService
            .getCollectionSize()
            .then((res) => {
                setCollectionSize(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const previousPageHandler = () => {
        if (currentPage > 1) {
            setCurrentPage((oldPage) => oldPage - 1);
            setOffset((oldOffset) => oldOffset - pageSize);
        }
    };

    const firstPageHandler = () => {
        setCurrentPage(1);
        setOffset(0);
    };

    const nextPageHandler = () => {
        if (totalPages > currentPage) {
            setCurrentPage((oldPage) => oldPage + 1);
            setOffset((oldOffset) => oldOffset + pageSize);
        }
    };

    const lastPageHandler = () => {
        setCurrentPage(totalPages);
        setOffset((totalPages - 1) * pageSize);
    };

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

            <div className="pagination-controls">
                <i
                    onClick={firstPageHandler}
                    className="fa-solid fa-angles-left"
                />
                <i
                    onClick={previousPageHandler}
                    className="fa-solid fa-chevron-left"
                />

                <h3>
                    Page {currentPage} of {totalPages}
                </h3>

                <i
                    onClick={nextPageHandler}
                    className="fa-solid fa-chevron-right"
                />
                <i
                    onClick={lastPageHandler}
                    className="fa-solid fa-angles-right"
                />
            </div>
        </section>
    );
}
