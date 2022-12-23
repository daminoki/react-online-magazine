function Drawer({ onClickClose, items }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-30">Корзина
                <img onClick={onClickClose} className="removeBtn" src="./img/button-remove.svg" alt="Remove" />
                </h2>

                <div className="items">
                    {
                        items.map((item) => {
                            return <div key={item.id} className="cartItem">
                                        <div style={{ backgroundImage: `url(${item.imageUrl})` }} className="cartItemImg">
                                        </div>
                                        <div className="mr-20 flex">
                                            <p className="mb-5">{item.title}</p>
                                            <b>{item.price} руб.</b>
                                        </div>
                                        <img className="removeBtn" src="./img/button-remove.svg" alt="Remove" />
                                    </div>
                        })
                    }
                </div>
            
                <div className="cartTotalBlock">
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
                    <button className="greenButton">Оформить заказ
                    <img src="./img/arrow.svg" alt="arrow" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;