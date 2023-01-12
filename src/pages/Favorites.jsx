import React from 'react'
import Card from '../components/Card'
import { AppContext } from '../App'
import EmptyState from '../components/EmptyState';

function Favorites({ onAddToCart, onFavorite }) {
const { favorites } = React.useContext(AppContext);

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Мои закладки</h1>
            </div>

            
                { 
                    favorites.length > 0 &&
                        <div className="cards">
                            {favorites.map((obj) => (
                                <Card
                                    key={obj.id}
                                    card={obj}
                                    onClickAdd={(item) => onAddToCart(item)}
                                    onClickFavorite={(item) => onFavorite(item)}
                                />
                            ))}
                        </div>
                }

                {
                    (!favorites.length) &&
                        <EmptyState 
                            img={`./img/cry-emodzi.png`}
                            title={`Закладок нет`}
                            subtitle={`Вы ничего не добавляли в закладки`}
                        />
                }          
        </div>
    );
}

export default Favorites;