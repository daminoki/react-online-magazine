import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    axios.get('https://63a57933318b23efa794782b.mockapi.io/items').then(res => {
      setItems(res.data[0].items);
    });

    axios.get(`https://63a57933318b23efa794782b.mockapi.io/items/1/cart`).then(res => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = async (item) => {
    await axios.post(`https://63a57933318b23efa794782b.mockapi.io/items/1/cart`, item);
    axios.get(`https://63a57933318b23efa794782b.mockapi.io/items/1/cart`).then(res => {
      setCartItems(res.data);
    });
  }

  const onRemoveCartItem = (itemId) => {
    axios.delete(`https://63a57933318b23efa794782b.mockapi.io/items/1/cart/${itemId}`)
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  }

  const handleSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const onFavorite = (item) => {
    console.log(item);
    axios.post(`https://63a57933318b23efa794782b.mockapi.io/items/1/favorites`, item);
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClickClose={() => setCartOpened(false)} onRemove={onRemoveCartItem} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : `Все кроссовки`}</h1>
          <div className="search-block d-flex">
            <img src="./img/search-icon.svg" alt="Search" />
            <input className="search" type="search" value={searchValue} onChange={handleSearchInput} placeholder="Поиск..."></input>
          </div>
        </div>
        
        <div className="cards">
          {
          items
          .filter(item => item.title.toLowerCase().includes(searchValue))
          .map((obj) => (
            <Card
              key={obj.id}
              id={obj.id}
              title={obj.title} 
              price={obj.price} 
              image={obj.image}
              onClickAdd={(item) => onAddToCart(item)}
              onClickFavorite={(item) => onFavorite(item)}
            />
          ))
          }          
        </div>
      </div>
    </div>
  );
}

export default App;