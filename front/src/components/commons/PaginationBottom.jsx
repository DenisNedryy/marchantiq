import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export function PaginationBottom({ pageLength = 7, currentPage = 1, route = "/items/furniture", rangeSize = 6 }) {
    const [pagesArray, setPagesArray] = useState([]);

    useEffect(() => {
        const myArray = getPageRange(currentPage, pageLength, rangeSize);
        setPagesArray(myArray);
    }, [currentPage, pageLength, rangeSize]);

    function getPageRange(currentPage, totalPages, rangeSize = 6) {
        const half = Math.floor(rangeSize / 2);
        let start = Math.max(1, currentPage - half);
        let end = currentPage + half;

        if (end > totalPages) {
            end = totalPages;
            start = Math.max(1, end - rangeSize + 1); 
        }

        const rangeArr = [];

        for (let i = start; i <= end; i++) {
            rangeArr.push(i);
        }

        if (start > 1) {
            if (start > 2) rangeArr.unshift('...');
            rangeArr.unshift(1);
        }
        if (end < totalPages) {
            if (end < totalPages - 1) rangeArr.push('...');
            rangeArr.push(totalPages);
        }

        return rangeArr;
    }

    return (
        <div className="paginationBottom">
            <div className="cell arrow"><i className="fa-solid fa-angle-left" /></div>
            {pagesArray.map((page, index) => (
                <ul key={index}>
                    {page === '...' ? (
                        <li className="cell">...</li>
                    ) : (
                        <NavLink to={`${route}?page=${page}`}>
                            <li className={`${Number(page) === Number(currentPage) ? "cell currentPage" : "cell"}`}>{page}</li>
                        </NavLink>
                    )}
                </ul>
            ))}
            <div className="cell arrow"><i className="fa-solid fa-angle-right" /></div>
        </div>
    );
}
