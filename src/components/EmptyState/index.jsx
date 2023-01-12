import React from "react";
import styles from './EmptyState.module.scss';
import { Link } from 'react-router-dom';

function EmptyState({ img, title, subtitle }) {
    return (
            <div className={styles.wrapper}>
                <img src={img} alt="Эмодзи" width={60} height={60} />
                <h5 className={styles.title}>{title}</h5>
                <p className={styles.subtitle}>{subtitle}</p>
                <Link to="/">
                    <button className={styles.greenButton}>
                        <img src="./img/arrow.svg" alt="Arrow" />Вернуться назад
                    </button> 
                </Link>
            </div>
    )
};

export default EmptyState;