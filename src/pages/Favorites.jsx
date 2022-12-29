import React from 'react'
import Card from '../components/Card'
import { AppContext } from '../App'

function Favorites({ onAddToCart, onFavorite }) {
const { favorites } = React.useContext(AppContext);

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Мои закладки</h1>
            </div>

            <div className="cards">
                {
                favorites
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

export default Favorites;