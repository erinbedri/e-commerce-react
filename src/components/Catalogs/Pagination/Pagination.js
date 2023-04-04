import "./pagination.css";

import React from "react";

export default function Pagination({
    handleFirstPage,
    handlePreviousPage,
    currentPage,
    totalPages,
    showNextPageController,
    showPreviousPageController,
    handleNextPage,
    handleLastPage,
    handlePageSelector,
    pageSize,
}) {
    return (
        <div className="pagination-controls">
            {showPreviousPageController && <i onClick={handleFirstPage} className="fa-solid fa-angles-left" />}
            {showPreviousPageController && <i onClick={handlePreviousPage} className="fa-solid fa-chevron-left" />}

            <h3>
                Page {currentPage} of {totalPages}
            </h3>

            {showNextPageController && <i onClick={handleNextPage} className="fa-solid fa-chevron-right" />}
            {showNextPageController && <i onClick={handleLastPage} className="fa-solid fa-angles-right" />}

            {currentPage === 1 && (
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
    );
}
