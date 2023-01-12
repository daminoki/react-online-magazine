import React from 'react';
import styles from "./CardPopup.module.scss"

function CardPopup({ currentItem, opened, handleClickClose }) {
    const rating = (parseFloat(currentItem.rating) / 5) * 100

    return (
    <div className={`${styles.overlay} ${opened && styles['overlay-visible']}`}>
        <div className={styles.container}>
            <img src={`./img/sneakers/${currentItem.image}.png`} alt="Кроссовки" width={240} height={200}></img>
            <div className={styles['info-wrapper']}>
                <h5 className={styles['item-title']}>{currentItem.title}</h5>
                <p className={styles['item-price']}>{new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', trailingZeroDisplay: 'stripIfInteger' }).format(currentItem.price)}</p>
                <div className={styles['rating-wrapper']}>
                    <p className={styles['item-rating']}>Оценка: {+currentItem.rating * 1}</p>
                    <div className={styles['rating-stars-wrapper']}>
                        <div className={styles['rating-empty']}></div>
                        <div className={styles['rating-full']} style={{ width: `${rating}%`}}></div>
                    </div>
                </div>
                <p className={styles['item-description']}>{currentItem.description}</p>
            </div>
            <button onClick={handleClickClose} className={styles['close-button']}>
                <img className={styles['close-img']} src="./img/close-icon-white.svg" alt="Закрыть"></img>
            </button>
        </div>
    </div>
    );
}

export default CardPopup;