import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    axios.get('https://63a57933318b23efa794782b.mockapi.io/items').then(res => {
      setItems(res.data[0].items);
    });

    axios.get(`https://63a57933318b23efa794782b.mockapi.io/items/1/cart`).then(res => {
      setCartItems(res.data);
    });
    
    axios.get(`https://63a57933318b23efa794782b.mockapi.io/items/1/favorites`).then(res => {
      setFavorites(res.data);
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

  const onFavorite = async (item) => {
    setItems(prev => prev.map(initialItem => {
      if (initialItem.id === item.id) {
        initialItem.isFavorite = !initialItem.isFavorite;
      }
      return initialItem;
    }));

    if (item.isFavorite) {
      await axios.post(`https://63a57933318b23efa794782b.mockapi.io/items/1/favorites`, item);
      await axios.get(`https://63a57933318b23efa794782b.mockapi.io/items/1/favorites`).then(res => {
        setFavorites(res.data);
      });
      await axios.put(`https://63a57933318b23efa794782b.mockapi.io/items/1`, { id: 1, items })
    } else {
      const itemToDelete = favorites.find(fi => fi.title === item.title)
      await axios.delete(`https://63a57933318b23efa794782b.mockapi.io/items/1/favorites/${itemToDelete.id}`)
      await axios.get(`https://63a57933318b23efa794782b.mockapi.io/items/1/favorites`).then(res => {
        setFavorites(res.data);
      });
      await axios.put(`https://63a57933318b23efa794782b.mockapi.io/items/1`, { id: 1, items })
    }
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClickClose={() => setCartOpened(false)} onRemove={onRemoveCartItem} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <Route path="/" exact>
        <Home 
        items={items} 
        searchValue={searchValue}
        handleSearchInput={handleSearchInput}
        onAddToCart={onAddToCart}
        onFavorite={onFavorite}
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites items={favorites} />
      </Route>
    </div>
  );
}

export default App;