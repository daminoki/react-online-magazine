import React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';

function Header(props) {
    const { cartItems } = React.useContext(AppContext);
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

    return (
        <header className="d-flex justify-between  align-center p-40">
            <Link to="/">
                <div className="d-flex align-center">
                    <img className="mr-15" width={40} height={40} src="./img/logo.svg" alt="" />
                    <div>
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p className="opacity-5">Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className="headerLeft">
                <li>
                    <Link to="/sign-up">
                        <img className="cu-p" src='./img/user.svg' width={18} height={18} alt="Пользователь" />
                    </Link>
                </li>
                <li className="d-flex">
                    <img onClick={props.onClickCart} className="cu-p mr-10" width={18} height={18} src="./img/cart.svg" alt="Корзина" />
                    <span>{new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', trailingZeroDisplay: 'stripIfInteger' }).format(totalPrice)}</span>
                </li>
                <li>
                    <Link to="/favorites">
                        <img width={18} height={18} className="favorites" src="./img/favorites.svg" alt="Закладки" />
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <img width={20} height={20} src="./img/orders-icon.svg" alt="Заказы" />
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;