import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false);

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

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClickClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="react-online-magazine/img/search-icon.svg" alt="Search" />
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        
        <div className="cards">
          {
          items.map((obj) => (
            <Card 
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