import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(`https://63a57933318b23efa794782b.mockapi.io/cart`);
      const favoritesResponse = await axios.get(`https://63a57933318b23efa794782b.mockapi.io/favorites`);
      const itemsResponse = await axios.get('https://63a57933318b23efa794782b.mockapi.io/items');

      setIsLoading(false);

      setItems(itemsResponse.data);
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
    }

    fetchData();
  }, []);

  const handleSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const onAddToCart = async (item) => {
    try {
      if (cartItems.find(i => i.title === item.title)) {
        axios.delete(`https://63a57933318b23efa794782b.mockapi.io/cart/${item.id}`);
        setCartItems(prev => prev.filter(i => i.title !== item.title))
      } else {
        const { data } = await axios.post(`https://63a57933318b23efa794782b.mockapi.io/cart`, item);
        setCartItems(prev => [...prev, data]);
      }
    } catch (error) {
      alert('error!');
    }
  }
  
  const onRemoveCartItem = (id) => {
    axios.delete(`https://63a57933318b23efa794782b.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(i => i.id !== id));
  }

  const onFavorite = async (item) => {
    try { 
        if (favorites.find(favItem => favItem.id === item.id)) {
          axios.delete(`https://63a57933318b23efa794782b.mockapi.io/favorites/${item.id}`)
          setFavorites(prev => prev.filter(i => i.id !== item.id));
        } else {
          const { data } = await axios.post(`https://63a57933318b23efa794782b.mockapi.io/favorites`, item);
          setFavorites(prev => [...prev, data]);
        }
    } catch (error) {
        alert('Не удалось добавить в закладки');
    }
  } 

  const isItemAdded = (title) => {
    console.log(cartItems)
    return cartItems.some((item) => item.title === title);
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded }}>
      <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClickClose={() => setCartOpened(false)} onRemove={onRemoveCartItem} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <Route path="/" exact>
        <Home 
        items={items} 
        cartItems={cartItems}
        searchValue={searchValue}
        handleSearchInput={handleSearchInput}
        onAddToCart={onAddToCart}
        onFavorite={onFavorite}
        isLoading={isLoading}
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites 
        onAddToCart={onAddToCart}
        onFavorite={onFavorite}
         />
      </Route>
    </div>
    </AppContext.Provider>
  );
}

export default App;
