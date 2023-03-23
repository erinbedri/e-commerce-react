import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./catalog.css";
import * as carService from "../../../services/carService";
import CarItem from "../../Cars/CarItem/CarItem";
import useLoading from "../../../hooks/useLoading";

export default function Catalog() {
    const { isLoading, loading } = useLoading(true);
    const [cars, setCars] = useState([]);

    const [pageSize, setPageSize] = useState(5);
    const [collectionSize, setCollectionSize] = useState(0);
    const totalPages = Math.ceil(collectionSize / pageSize);
    const [currentPage, setCurrentPage] = useState(1);
    const [offset, setOffset] = useState(0);
    const [showPreviousPageController, setShowPreviousPageController] = useState(false);
    const [showNextPageController, setShowNextPageController] = useState(true);

    const [searchParam, setSearchParam] = useState("");
    const [sortBy, setSortBy] = useState("manufacturer");
    const [orderBy, setOrderBy] = useState("");

    useEffect(() => {
        carService
            .getAll(searchParam, sortBy, orderBy, offset, pageSize)
            .then((res) => {
                loading();
                setCars(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [searchParam, sortBy, orderBy, pageSize, currentPage]);

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

    useEffect(() => {
        if (currentPage > 1) {
            setShowPreviousPageController(true);
        } else {
            setShowPreviousPageController(false);
        }
    }, [currentPage]);

    useEffect(() => {
        if (currentPage == totalPages) {
            setShowNextPageController(false);
        } else {
            setShowNextPageController(true);
        }
    }, [currentPage]);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((oldPage) => oldPage - 1);
            setOffset((oldOffset) => oldOffset - pageSize);
        }
    };

    const handleFirstPage = () => {
        setCurrentPage(1);
        setOffset(0);
    };

    const handleNextPage = () => {
        if (totalPages > currentPage) {
            setCurrentPage((oldPage) => oldPage + 1);
            setOffset((oldOffset) => oldOffset + pageSize);
        }
    };

    const handleLastPage = () => {
        setCurrentPage(totalPages);
        setOffset((totalPages - 1) * pageSize);
    };

    const handlePageSelector = (e) => {
        setPageSize(e.target.value);
    };

    const handleSortBy = (e) => {
        setSortBy(e.target.innerText.toLowerCase() || e.target.parentElement.innerText.toLowerCase());
        setOrderBy((oldOrderBy) => (oldOrderBy == "" ? "%20desc" : ""));
    };

    const handleSearch = (e) => {
        setSearchParam(e.target.value.toLowerCase());
    };

    if (isLoading) {
        return <div id="loader"></div>;
    }

    return (
        <>
            <form className="search">
                <div>
                    <input
                        type="search"
                        name="search"
                        className="search-input"
                        placeholder="Search..."
                        onChange={handleSearch}
                    />
                    <button type="submit" disabled style={{ display: "none" }} aria-hidden="true"></button>
                </div>
            </form>

            <section id="catalog" className="container">
                {cars.length > 0 ? (
                    <div className="catalog-list">
                        <div className="catalog-header">
                            <span></span>
                            <span onClick={handleSortBy}>
                                <i className="fa-solid fa-sort" /> Manufacturer
                            </span>
                            <span onClick={handleSortBy}>
                                <i className="fa-solid fa-sort" /> Model
                            </span>
                            <span onClick={handleSortBy}>
                                <i className="fa-solid fa-sort" /> Category
                            </span>
                            <span onClick={handleSortBy}>
                                <i className="fa-solid fa-sort" /> Mileage
                            </span>
                            <span onClick={handleSortBy}>
                                <i className="fa-solid fa-sort" /> Year
                            </span>
                            <span onClick={handleSortBy}>
                                <i className="fa-solid fa-sort" /> Price
                            </span>
                            <span onClick={handleSortBy}>
                                <i className="fa-solid fa-sort" /> Location
                            </span>
                        </div>

                        {cars.map((c) => (
                            <Link to={`/catalog/${c._id}/details`} key={c._id} className="catalog-link">
                                <CarItem {...c} />
                            </Link>
                        ))}
                    </div>
                ) : (
                    <>
                        <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
                            There are no cars in the cataloq right now!
                        </h3>
                        <p style={{ textAlign: "center", marginTop: "1rem" }}>
                            <Link to={"/catalog/car/add"}>
                                <b>Sell cars</b>
                            </Link>{" "}
                            now.
                        </p>
                    </>
                )}

                <div className="pagination-controls">
                    {showPreviousPageController && <i onClick={handleFirstPage} className="fa-solid fa-angles-left" />}
                    {showPreviousPageController && (
                        <i onClick={handlePreviousPage} className="fa-solid fa-chevron-left" />
                    )}

                    <h3>
                        Page {currentPage} of {totalPages}
                    </h3>

                    {showNextPageController && <i onClick={handleNextPage} className="fa-solid fa-chevron-right" />}
                    {showNextPageController && <i onClick={handleLastPage} className="fa-solid fa-angles-right" />}

                    {currentPage == 1 && (
                        <select
                            name="pageSizeSelector"
                            id="pageSizeSelector"
                            className="pageSizeSelector"
                            onChange={handlePageSelector}
                            defaultValue={pageSize}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    )}
                </div>
            </section>
        </>
    );
}
