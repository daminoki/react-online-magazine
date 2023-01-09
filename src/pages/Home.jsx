import Card from '../components/Card'
import CardSkeleton from '../components/CardSkeleton'
import React from 'react'
import { AppContext } from '../App'

function Home({ 
    items,
    searchValue, 
    handleSearchInput, 
    onAddToCart, 
    onFavorite,
    isLoading
}) {

    const renderItems = () => {
        return (
            isLoading
            ? [...Array(12)].map((item, index) => (
                    <CardSkeleton key={index} />
                ))
            : items.filter(item => item.title.toLowerCase().includes(searchValue))
                .map((obj, index) => (
                    <Card
                        key={index}
                        card={obj}
                        onClickAdd={(item) => onAddToCart(item)}
                        onClickFavorite={(item) => onFavorite(item)}
                    />
                ))
        )
    }

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
                {renderItems()}          
            </div>
      </div>
    );
} 

export default Home;



