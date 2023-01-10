import React from 'react' 
import styles from './Card.module.scss'
import { AppContext } from '../../App'

function Card({ card, onClickAdd, onClickFavorite, added = false }) {
    const [isFavorite, setIsFavorite] = React.useState(card.isFavorite);
    const { isItemAdded } = React.useContext(AppContext);

    const handleClick = () => {
        onClickAdd(card);
    }

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    }

    const isFirstRender = React.useRef(true);

    React.useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        onClickFavorite({ ...card, isFavorite: isFavorite});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFavorite]);

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <button onClick={handleFavoriteClick}>
                    {onClickFavorite && <img src={isFavorite ? "./img/card-liked.svg" : "./img/card-unliked.svg"} alt="Unliked" />}
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
                {onClickAdd && <img className={styles.plus} onClick={handleClick} src={isItemAdded(card.title) ? "./img/button-checked.svg" : "./img/button-plus.svg"} alt="Add" />}
            </div>
        </div>
    );
};

export default Card;