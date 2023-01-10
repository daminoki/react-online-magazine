import React from 'react';
import styles from "./CardPopup.module.scss"

function CardPopup({ currentItem, opened, handleClickClose }) {
    console.log(currentItem)
    return (
    <div className={`${styles.overlay} ${opened && styles['overlay-visible']}`}>
        <div className={styles.container}>
            <img src={`./img/sneakers/${currentItem.image}.png`} alt="Кроссовки" width={240} height={200}></img>
            <div>
                <h5>{currentItem.title}</h5>
                <span>Price:</span>
                <b>{currentItem.price} руб.</b>
                <p>Rating: {currentItem.rating}/5</p>
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