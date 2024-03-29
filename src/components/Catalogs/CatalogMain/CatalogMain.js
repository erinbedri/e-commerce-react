import React, { useEffect, useState } from "react";

import "./catalog-main.css";
import * as carService from "../../../services/carService";
import useLoading from "../../../hooks/useLoading";
import Error from "../../common/Error/Error";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";
import CarList from "../../Cars/CarList/CarList";

export default function CatalogMain() {
    const { isLoading, loading } = useLoading(true);
    const [isError, setIsError] = useState(false);

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
            .catch(() => {
                setIsError(true);
            });
    }, [searchParam, sortBy, orderBy, pageSize, currentPage]);

    useEffect(() => {
        carService
            .getCollectionSize()
            .then((res) => {
                setCollectionSize(res);
            })
            .catch(() => {
                setIsError(true);
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
        if (currentPage === totalPages) {
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
        setOrderBy((oldOrderBy) => (oldOrderBy === "" ? "%20desc" : ""));
    };

    const handleSearch = (e) => {
        setSearchParam(e.target.value.toLowerCase());
    };

    if (isLoading) {
        return <div id="loader"></div>;
    }

    if (isError) {
        return <Error />;
    }

    return (
        <>
            <Search handleSearch={handleSearch} />

            <CarList cars={cars} handleSortBy={handleSortBy} />

            {cars.length > 0 && (
                <Pagination
                    handleFirstPage={handleFirstPage}
                    handlePreviousPage={handlePreviousPage}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    showNextPageController={showNextPageController}
                    showPreviousPageController={showPreviousPageController}
                    handleNextPage={handleNextPage}
                    handleLastPage={handleLastPage}
                    handlePageSelector={handlePageSelector}
                    pageSize={pageSize}
                />
            )}
        </>
    );
}
