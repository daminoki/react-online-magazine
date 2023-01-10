import React from "react";
import styles from './Pagination.module.scss';

function Pagination ({ itemsPerPage, totalItems, paginate }) {
    const pageNumbers =[1,2,3];

    // for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    //     pageNumbers.push(i);
    // }

    return (
        <nav>
            <ul className={styles.pagination}>
                Страницы
                {pageNumbers.map(number => (
                    <li key={number}>
                       <button className={styles.pageItem} onClick={() => paginate(number)}>
                            {number}
                        </button>         
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;