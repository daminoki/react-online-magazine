import Card from '../components/Card';

function Home({ items, searchValue, handleSearchInput, onAddToCart, onFavorite }) {
    return (
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
                    card={obj}
                    onClickAdd={(item) => onAddToCart(item)}
                    onClickFavorite={(item) => onFavorite(item)}
                    />
                ))
                }          
            </div>
      </div>
    );
}

export default Home;