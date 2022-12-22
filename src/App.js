import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imgUrl: "/img/sneakers/1.svg"
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
    imgUrl: "/img/sneakers/2.svg"
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    imgUrl: "/img/sneakers/3.svg"
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    imgUrl: "/img/sneakers/4.svg"
  },
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search-icon.svg" alt="Search" />
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        
        <div className="cards">
          {
          arr.map((obj) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imgUrl}/>
          ))
          }          
        </div>

      </div>
    </div>
  );
}

export default App;