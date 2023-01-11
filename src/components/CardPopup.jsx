import React from 'react';
import styles from "./CardPopup.module.scss"

function CardPopup({ currentItem, opened, handleClickClose }) {
    const rating = (parseFloat(currentItem.rating) / 5) * 120

    return (
    <div className={`${styles.overlay} ${opened && styles['overlay-visible']}`}>
        <div className={styles.container}>
            <img src={`./img/sneakers/${currentItem.image}.png`} alt="Кроссовки" width={240} height={200}></img>
            <div>
                <h5>{currentItem.title}</h5>
                <span>Price: </span>
                <b>{new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', trailingZeroDisplay: 'stripIfInteger' }).format(currentItem.price)}</b>
                <div className={styles['rating-wrapper']}>
                    <p>Rating: {currentItem.rating}/5</p>
                    <div className={styles['rating-stars-wrapper']}>
                        <div className={styles['rating-empty']}></div>
                        <div className={styles['rating-full']} style={{ width: `${rating}px`}}></div>
                    </div>
                </div>
            </div>
            <button onClick={handleClickClose} className={styles['close-button']}>
                <img className={styles['close-img']} src="./img/close-icon-white.svg" alt="Закрыть"></img>
            </button>
        </div>
    </div>
    );
}

export default CardPopup;