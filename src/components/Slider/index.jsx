import React from "react";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Slider.module.scss';

function Slider() {
    return (
        <Carousel>
            <div className='p-20'>
                <div className={styles.wrapper}>
                    <div className={styles['info-wrapper']}>
                        <img src='./img/slider-logo.png' alt="logo" width={100} heigth={40} />
                        <h2>Stan Smith, Forever!</h2>
                        <button>КУПИТЬ</button>
                    </div>
                    <img src="./img/slider-one.png" alt="Sneakers" />
                </div>
            </div>
        </Carousel>
    )
}

export default Slider;