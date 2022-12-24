import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    fetch('https://63a57933318b23efa794782b.mockapi.io/items').then(res => {
      return res.json();
    }).then(json => {
      setItems(json);
    })
  }, []);

  const onAddToCart = (item) => {
   const cartItem = cartItems.find(i => i?.title === item.title)
   cartItem
   ? setCartItems(prev => [...prev.filter(i => i !== cartItem)])
   : setCartItems(prev => [...prev, item]);
  }

  const handleSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClickClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : `Все кроссовки`}</h1>
          <div className="search-block d-flex">
            <img src="./img/search-icon.svg" alt="Search" />
            <input type="search" onChange={handleSearchInput} placeholder="Поиск..."></input>
          </div>
        </div>
        
        <div className="cards">
          {
          items.map((obj) => (
            <Card
              key={obj.id}
              id={obj.id}
              title={obj.title} 
              price={obj.price} 
              imageUrl={obj.imgUrl}
              onClickAdd={(item) => onAddToCart(item)}
            />
          ))
          }          
        </div>

      </div>
    </div>
  );
}

export default App;