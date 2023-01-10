import React from 'react';
import styles from "./CardPopup.module.scss"

function CardPopup({ opened, handleClickClose }) {
    return (
    <div className={`${styles.overlay} ${opened && styles['overlay-visible']}`}>
        <div className={styles.container}>
            <img src="./img/sneakers/9.png" alt="Кроссовки" width={280} height={250}></img>
            <div>
                <h5>Sneakers</h5>
                <span>Price:</span>
                <b>12999 руб.</b>
                <p>Rating: 5/5</p>
                <p>Description?</p>
            </div>
            <button onClick={handleClickClose} className={styles['close-button']}>
                <img className={styles['close-img']} src="./img/close-icon-white.svg" alt="Закрыть"></img>
            </button>
        </div>
    </div>
    );
}

export default CardPopup;