function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30">Корзина
        <img className="removeBtn" src="img/button-remove.svg" alt="Remove" />
        </h2>

        <div className="items">
          <div className="cartItem">
            <div style={{ backgroundImage: 'url(/img/sneakers/1.svg)' }} className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="img/button-remove.svg" alt="Remove" />
          </div>

          <div className="cartItem d-flex align-center">
            <div style={{ backgroundImage: 'url(/img/sneakers/1.svg)' }} className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="img/button-remove.svg" alt="Remove" />
          </div>
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
            <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>

      <header className="d-flex justify-between  align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" alt="" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="" />
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div class="search-block d-flex">
            <img src="/img/search-icon.svg" alt="Search" />
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        
        <div className="cards">
        <div className="card">
          <div>
            <img className="favorite" src="/img/unliked.svg" alt=" " />
          </div>
          <img width={133} height={112} src="/img/sneakers/1.svg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
               <img width={11} height={11} src="/img/plus.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/2.svg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
               <img width={11} height={11} src="/img/plus.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/3.svg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
               <img width={11} height={11} src="/img/plus.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/4.svg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
               <img width={11} height={11} src="/img/plus.svg" alt="" />
            </button>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default App;
