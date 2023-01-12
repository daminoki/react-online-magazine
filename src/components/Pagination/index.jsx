import React from "react";
import styles from './Pagination.module.scss';

function Pagination ({ totalCount, paginate, isLoading, currentPage, itemsPerPage }) {
    const pageNumbers =[];
    for (let i = 1; i <= Math.ceil(totalCount / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (
        <nav>
            <ul className={styles.pagination}>
                {`${isLoading ? "" : "Страницы"}`}
                {pageNumbers.map(number => (
                    <li key={number}>
                       <button 
                        className={currentPage === number ? styles.current : styles.pageItem}
                        onClick={() => paginate(number)}
                        >
                            {number}
                        </button>         
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;