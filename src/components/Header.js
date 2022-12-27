import { Link } from 'react-router-dom';

function Header(props) {
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
                <li className="d-flex">
                    <img onClick={props.onClickCart} className ="cu-p mr-10" width={18} height={18} src="./img/cart.svg" alt="Корзина" />
                    <span>1205 руб.</span>
                </li>
                <li>
                    <Link to="/favorites">
                        <img className="favorites" src="./img/card-liked.svg" alt="Закладки" />
                    </Link>
                </li>
                <li>
                    <img width={18} height={18} src="./img/user.svg" alt="Пользователь" />
                </li>
            </ul>
        </header>
    );
};

export default Header;