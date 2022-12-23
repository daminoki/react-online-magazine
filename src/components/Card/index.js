import React from 'react';
import styles from './Card.module.scss';

function Card({ imageUrl, title, price, onClickAdd, onClickFavorite }) {
    const [isAdded, setIsAdded] = React.useState();

    const handleClick = () => {
        setIsAdded(!isAdded);
        onClickAdd({ imageUrl, title, price });
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src="/img/unliked.svg" alt=" " />
            </div>
            <div className="d-flex flex-column align-center">
                <img width={133} height={112} src={imageUrl} alt="" />
                <h5>{title}</h5>
            </div>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img className={styles.plus} onClick={handleClick} src={isAdded ? "/img/button-checked.svg" : "/img/button-plus.svg"} alt="Add" />
            </div>
        </div>
    );
};

export default Card;