import React from "react";
import styles from './Drawer.module.scss';
import Info from "../Info/Info";
import { AppContext } from '../../App'

function Drawer({ onClickClose, items, onRemove }) {
    const { setCartItems } = React.useContext(AppContext);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);

    const onClickOrder = () => {
        setIsOrderComplete(true); 
        setCartItems([]);
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <h2 className="mb-30">Корзина
                <img onClick={onClickClose} className={styles.removeBtn} src="./img/button-remove.svg" alt="Remove" />
                </h2>

                {
                    (items.length > 0) 
                    ? (
                <>
                <div className={styles.items}>
                    {
                        items.map((item) => {
                            return <div key={item.id} className={styles.cartItem}>
                                        <div style={{ backgroundImage: `url(./img/sneakers/${item.image}.png)` }} className={styles.cartItemImg}>
                                        </div>
                                        <div className="mr-20 flex">
                                            <p className="mb-5">{item.title}</p>
                                            <b>{item.price} руб.</b>
                                        </div>
                                        <img onClick={() => onRemove(item.id)} className={styles.removeBtn} src="./img/button-remove.svg" alt="Remove" />
                                    </div>
                        })
                    }
                </div>
                <div className={styles.cartTotalBlock}>
                    <ul>
                    <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>21 498 руб.</b>
                    </li>
                    <li>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1074 руб.</b>
                    </li>
                    </ul>
                    <button onClick={onClickOrder} className={styles.greenButton}>Оформить заказ
                    <img src="./img/arrow.svg" alt="arrow" />
                    </button>
                </div>
                </>
                    )
                    : (
                       <Info
                            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
                            description={isOrderComplete ? "text" : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ" }
                            image="./img/empty-cart.png" 
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Drawer;