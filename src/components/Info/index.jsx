import React from 'react'
import styles from './Info.module.scss'
import { AppContext } from '../../App'

const Info = ({ title, description, image  }) => {
    const { setCartOpened } = React.useContext(AppContext);

    return (
        <div>
            <div className={styles.cartEmpty}>
                <img width={120} src={image} alt="Empty cart" />
                <h2>{title}</h2>
                <p className="">{description}</p>
                <button onClick={() => setCartOpened(false)} className={styles.greenButton}>
                    <img src="./img/arrow.svg" alt="Arrow" />Вернуться назад
                </button> 
            </div>
        </div>
    )
}

export default Info;