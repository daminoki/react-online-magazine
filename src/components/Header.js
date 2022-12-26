function Header(props) {
    return (
        <header className="d-flex justify-between  align-center p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} src="./img/logo.svg" alt="" />
                <div>
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex align-center">
                <li className="d-flex mr-30">
                    <img onClick={props.onClickCart} className ="cu-p" width={18} height={18} src="./img/cart.svg" alt="" />
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img src="./img/card-unliked.svg" alt="Favorites" />
                </li>
                <li>
                    <img width={18} height={18} src="./img/user.svg" alt="" />
                </li>
            </ul>
        </header>
    );
};

export default Header;