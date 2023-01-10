import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import Pagination from './components/Pagination';

export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [totalCount, setTotalCount] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(0);

  const searchParams = {
    p: 1,
    l: 8,
    search: ""
  }

  const fetchItems = async () => {
    const { data: { items, count } } = await axios.get(`https://63a57933318b23efa794782b.mockapi.io/items`, { params: searchParams } );
    setItems(items);
    setTotalCount(count);
  }

  React.useEffect(() => {
    async function fetchData() {
      const [ cartResponse, favoritesResponse, itemsResponse ] = await Promise.all([
        axios.get(`https://63a57933318b23efa794782b.mockapi.io/cart`), 
        axios.get(`https://63a57933318b23efa794782b.mockapi.io/favorites`),
        fetchItems()
      ])

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
    }

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const paginate = (pageNumber) => {
    searchParams.p = pageNumber;
    setCurrentPage(pageNumber)
    fetchItems();
  };

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
      alert('Не удалось добавить в корзину');
    }
  }
  
  const onRemoveCartItem = (id) => {
    axios.delete(`https://63a57933318b23efa794782b.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(i => i.id !== id));
  }

  const onFavorite = async (item) => {
    try { 
        if (favorites.find(favItem => favItem.title === item.title)) {
          axios.delete(`https://63a57933318b23efa794782b.mockapi.io/favorites/${item.id}`)
          setFavorites(prev => prev.filter(i => i.title !== item.title));
        } else {
          const { data } = await axios.post(`https://63a57933318b23efa794782b.mockapi.io/favorites`, item);
          setFavorites(prev => [...prev, data]);
        }
    } catch (error) {
        alert('Не удалось добавить в закладки');
    }
  } 

  const isItemAdded = (title) => {
    return cartItems.some((item) => item.title === title);
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, setCartOpened, setCartItems, onAddToCart, onFavorite }}>
      <div className="wrapper clear">
        <Drawer items={cartItems} onClickClose={() => setCartOpened(false)} onRemove={onRemoveCartItem} opened={cartOpened} />
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
          <Pagination totalCount={totalCount} paginate={paginate} isLoading={isLoading} currentPage={currentPage} />
        </Route>

        <Route path="/favorites" exact>
          <Favorites 
          onAddToCart={onAddToCart}
          onFavorite={onFavorite}
          />
        </Route>

        <Route path="/orders" exact>
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
