import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import Pagination from './components/Pagination';
import CardPopup from './components/CardPopup';
import { getItems, updateItem } from './api';
import UserSignUp from './pages/SignUp';
import UserSignIn from './pages/SignIn';
import { auth } from "./firebase";
import { onAuthStateChanged } from 'firebase/auth';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

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
  const [authUser, setAuthUser] = React.useState(null);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

  const location = useLocation();

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
    await updateItem(item.id, item);
    await fetchItems();
  }
  
  const onRemoveCartItem = async (item) => {
    await updateItem(item.id, item);
    await fetchItems();
  }

  const onFavorite = async (item) => {
    await updateItem(item.id, item);
    await fetchItems();
  } 

  const isItemAdded = (title) => {
    return cartItems.some((item) => item.title === title);
  }
  
  const handleCardClick = (item) => {
    setCardPopupOpened(true);
    setCurrentItem(item);
  }

  React.useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
            setAuthUser(user);
        } else {
            setAuthUser(null);
        }
    });

    return () => {
        listen();
    }
}, []);

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, setCartOpened, setCartItems, onAddToCart, onFavorite }}>
      <div className="wrapper clear">
        <Drawer 
          items={cartItems} 
          onClickClose={() => setCartOpened(false)} 
          onRemove={onRemoveCartItem} 
          opened={cartOpened} 
          updateItems={fetchItems}
          authUser={authUser}
          handleOrderClick={() => setCartOpened(false)}
        />
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
            authUser={authUser}
          />
          <Pagination 
            paginate ={paginate} 
            totalCount={totalCount} 
            isLoading={isLoading} 
            currentPage={currentPage} 
            itemsPerPage={itemsPerPage} 
          />
        </Route>

        {/* <ProtectedRoute
          path="/favorites"
          authUser={authUser}
          component={
            <Favorites
              onAddToCart={onAddToCart}
              onFavorite={onFavorite} 
            />}
        /> */}

        <Route path="/favorites">
          <Favorites 
            onAddToCart={onAddToCart}
            onFavorite={onFavorite}
          />
        </Route>

        <Route path="/orders" exact>
          <Orders />
        </Route>

        <Route path="/sign-up" exact>
          <UserSignUp authUser={authUser} location={location.pathname} />
        </Route>

        <Route path="/sign-in" exact>
          <UserSignIn authUser={authUser} location={location.pathname} />
        </Route>
      </div>

      <CardPopup 
        currentItem={currentItem} 
        opened={cardPopupOpened} 
        handleClickClose={(item) => setCardPopupOpened(false)} 
      />
    </AppContext.Provider>
  );
}

export default App;
