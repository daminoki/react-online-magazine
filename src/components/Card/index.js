import styles from './Card.module.scss';

function Card(props) {
    return (
        <div className={styles.card}>
            <div>
                <img className={styles.favorite} src="/img/unliked.svg" alt=" " />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src={"/img/plus.svg"} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Card;