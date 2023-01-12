import React from "react";
import styles from './Drawer.module.scss';
import Info from "../Info";
import { AppContext } from '../../App';
import axios from 'axios';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); 

function Drawer({ onClickClose, items, onRemove, opened }) {
    const { cartItems, setCartItems } = React.useContext(AppContext);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [orderId, setOrderId] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

    React.useEffect(() => {
        if (opened) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      }, [opened]);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const {data} = await axios.post('https://63a57933318b23efa794782b.mockapi.io/orders', {
                items: cartItems,
            });
            setOrderId(data.id);
            setIsOrderComplete(true); 
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://63a57933318b23efa794782b.mockapi.io/cart/' + item.id);
                await delay(1000);
            }

        } catch (error) {
            alert('Ошибка при создании заказа');
        }
        setIsLoading(false);
    }

    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
            <div className={`${styles.drawer}`}>
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
                                            <b>{new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', trailingZeroDisplay: 'stripIfInteger' }).format(item.price)}</b>
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
                        <b>{totalPrice} руб.</b>
                    </li>
                    <li>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>{Math.round(totalPrice * 0.05)} руб.</b>
                    </li>
                    </ul>
                    <button disabled={isLoading} onClick={onClickOrder} className={styles.greenButton}>Оформить заказ
                    <img src="./img/arrow.svg" alt="arrow" />
                    </button>
                </div>
                </>
                    )
                    : (
                       <Info
                            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
                            description={isOrderComplete ? `Ваш заказ №${orderId} скоро будет передан курьерской доставкой` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ" }
                            image={isOrderComplete ? "./img/complete-order.jpg" : "./img/empty-cart.png"}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Drawer;