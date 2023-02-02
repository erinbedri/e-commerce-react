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
    const [sortBy, setSortBy] = useState("manufacturer");
    const [orderBy, setOrderBy] = useState("");

    useEffect(() => {
        carService
            .getAll(sortBy, orderBy, offset, pageSize)
            .then((res) => {
                setCars(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [offset, pageSize, sortBy, orderBy]);

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

    const selectHandler = (e) => {
        setPageSize(e.target.value);
    };

    const sortByHandler = (e) => {
        setSortBy(
            e.target.innerText.toLowerCase() ||
                e.target.parentElement.innerText.toLowerCase()
        );
        setOrderBy((oldOrderBy) => (oldOrderBy == "" ? "%20desc" : ""));
    };

    return (
        <section id="catalog" className="container">
            <div className="catalog-list">
                <div className="catalog-header">
                    <span />
                    <span onClick={sortByHandler}>
                        <i className="fa-solid fa-sort" /> Manufacturer
                    </span>
                    <span onClick={sortByHandler}>
                        <i className="fa-solid fa-sort" /> Model
                    </span>
                    <span onClick={sortByHandler}>
                        <i className="fa-solid fa-sort" /> Category
                    </span>
                    <span onClick={sortByHandler}>
                        <i className="fa-solid fa-sort" /> Mileage
                    </span>
                    <span onClick={sortByHandler}>
                        <i className="fa-solid fa-sort" /> Year
                    </span>
                    <span onClick={sortByHandler}>
                        <i className="fa-solid fa-sort" /> Price
                    </span>
                    <span onClick={sortByHandler}>
                        <i className="fa-solid fa-sort" /> Location
                    </span>
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

                {currentPage == 1 && (
                    <select
                        name="pageSizeSelector"
                        id="pageSizeSelector"
                        className="pageSizeSelector"
                        onChange={selectHandler}
                        defaultValue={pageSize}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                )}
            </div>
        </section>
    );
}
