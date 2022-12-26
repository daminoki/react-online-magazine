import React from "react";
import styles from './Drawer.module.scss';

function Drawer({ onClickClose, items, onRemove }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <h2 className="mb-30">Корзина
                <img onClick={onClickClose} className="removeBtn" src="./img/button-remove.svg" alt="Remove" />
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
                    <button className={styles.greenButton}>Оформить заказ
                    <img src="./img/arrow.svg" alt="arrow" />
                    </button>
                </div>
                </>
                    )
                    : (
                <div className={styles.cartEmpty}>
                    <img className="" width={120} height={120} src="./img/empty-cart.png" alt="Empty cart" />
                    <h2>Корзина пустая</h2>
                    <p className="">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
                    <button className={styles.greenButton}>
                        <img src="./img/arrow.svg" alt="Arrow" />Вернуться назад
                    </button> 
                </div>
                    )
                }

            </div>
        </div>
    )
}

export default Drawer;