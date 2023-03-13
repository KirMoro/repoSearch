import React  from "react";
import './Pagination.css';
import {useSelector} from "react-redux";

interface Props {
    repositoriesPerPage: number;
    currentPage: number;
    setPaginate: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({ repositoriesPerPage , currentPage, setPaginate}) => {
    const pageNumbers: number[] = [];
    const totalPages = useSelector(state => state.search.items)

    for (let i = 1; i <= Math.ceil(totalPages.length / repositoriesPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <div className="pagination">
            <ul className="pagination__list">
                {
                    pageNumbers.map(number => (
                        <li key={number}>
                            <a href="#"
                               className={`${
                                   number === currentPage ? "paginator__selected-item" : ""
                               }`}
                               onClick={() => setPaginate(number)}>{number}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
