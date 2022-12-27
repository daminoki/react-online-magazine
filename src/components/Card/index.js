import React from 'react';
import styles from './Card.module.scss';

function Card({ card, onClickAdd, onClickFavorite }) {
    const [isAdded, setIsAdded] = React.useState(card.isAdded);
    const [isFavorite, setIsFavorited] = React.useState(card.isFavorite);

    const handleClick = () => {
        setIsAdded(!isAdded);
        onClickAdd(card);
    }

    const handleFavoriteClick = () => {
        setIsFavorited(!isFavorite);
    }

    const isFirstRender = React.useRef(true)

    React.useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        // rewrite card.isFavorite with state isFavorite that changed
        onClickFavorite({ ...card, isFavorite: isFavorite});
    }, [isFavorite]);

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <button onClick={handleFavoriteClick}>
                    <img src={isFavorite ? "./img/card-liked.svg" : "./img/card-unliked.svg"} alt="Unliked" />
                </button>
            </div>
            <div className="d-flex flex-column align-center">
                <img width={133} height={112} src={`./img/sneakers/${card.image}.png`} alt="" />
                <h5>{card.title}</h5>
            </div>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{card.price} руб.</b>
                </div>
                <img className={styles.plus} onClick={handleClick} src={isAdded ? "./img/button-checked.svg" : "./img/button-plus.svg"} alt="Add" />
            </div>
        </div>
    );
};

export default Card;