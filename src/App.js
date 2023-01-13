import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import Pagination from './components/Pagination';
import CardPopup from './components/CardPopup';
import { getItems, updateItems } from './api';

export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [totalCount, setTotalCount] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [cardPopupOpened, setCardPopupOpened] = React.useState(false);
  const [currentItem, setCurrentItem] = React.useState([]);
  const [itemsPerPage] = React.useState(8);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

  const searchParams = {
    search: searchValue
  }

  const fetchItems = async () => {
    const { data: { items, count } } = await getItems({ params: searchParams });
    setItems(items);
    setTotalCount(count);
    setFavorites(items.filter((item) => item.isFavorite));
    setCartItems(items.filter((item) => item.isAdded));
  }

  React.useEffect(() => {
    async function fetchData() {
      await fetchItems()
      setIsLoading(false);
    }

    fetchData();
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    fetchItems();
  };

  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
    fetchItems();
  }

  const onAddToCart = async (item) => {
    await updateItems(item.id, item);
    await fetchItems();
  }
  
  const onRemoveCartItem = async (item) => {
    await updateItems(item.id, item);
    await fetchItems();
  }

  const onFavorite = async (item) => {
    // loading for favorites btn true
    await updateItems(item.id, item);
    await fetchItems();
    // loading for favorites btn false
  } 

  const isItemAdded = (title) => {
    return cartItems.some((item) => item.title === title);
  }
  
  const handleCardClick = (item) => {
    setCardPopupOpened(true);
    setCurrentItem(item);
  }


  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, setCartOpened, setCartItems, onAddToCart, onFavorite }}>
      <div className="wrapper clear">
        <Drawer items={cartItems} onClickClose={() => setCartOpened(false)} onRemove={onRemoveCartItem} opened={cartOpened} />
        <Header onClickCart={() => setCartOpened(true)} />
        
        <Route path="/" exact>
          <Home 
            items={currentItems}
            cartItems={cartItems}
            searchValue={searchValue}
            handleSearchInput={handleSearchInput}
            onAddToCart={onAddToCart}
            onFavorite={onFavorite}
            isLoading={isLoading}
            handleCardClick={handleCardClick}
          />
          <Pagination 
            paginate ={paginate} 
            totalCount={totalCount} 
            isLoading={isLoading} 
            currentPage={currentPage} 
            itemsPerPage={itemsPerPage} 
          />
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

      <CardPopup currentItem={currentItem} opened={cardPopupOpened} handleClickClose={(item) => setCardPopupOpened(false)} />
    </AppContext.Provider>
  );
}

export default App;
