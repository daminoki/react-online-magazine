import React from "react";
import styles from './Pagination.module.scss';

function Pagination ({ totalCount, paginate }) {
    const pageNumbers =[];

    for (let i = 1; i <= Math.ceil(totalCount / 8); i++) {
        pageNumbers.push(i);
    }


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