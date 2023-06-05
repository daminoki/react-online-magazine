import React from "react";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Slider.module.scss';

function Slider() {
    return (
        <Carousel showStatus={false} showArrows={true} autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} >
            <div className='p-40'>
                <div className={styles.wrapper}>
                    <div className={styles['info-wrapper']}>
                        <img className={styles.logo} src='./img/slider-logo.png' alt="logo" width={100} heigth={40} />
                        <h2 className={styles.title}>Stan Smith<span>, Forever!</span></h2>
                        <a className={styles['buy-button']} href="#main-goods-section">КУПИТЬ</a>
                    </div>
                    <img width={640} height={300} src="./img/slider-one.png" alt="Sneakers" />
                </div>
            </div>
            <div className='p-40'>
                <div className={styles.wrapper}>
                    <div className={styles['info-wrapper']}>
                        <img className={styles.logo} src='./img/slider-logo.png' alt="logo" width={100} heigth={40} />
                        <h2 className={styles.title}>Stan Smith<span>, Forever!</span></h2>
                        <a className={styles['buy-button']} href="#main-goods-section">КУПИТЬ</a>
                    </div>
                    <img width={640} height={300} src="./img/slider-one.png" alt="Sneakers" />
                </div>
            </div>
            <div className='p-40'>
                <div className={styles.wrapper}>
                    <div className={styles['info-wrapper']}>
                        <img className={styles.logo} src='./img/slider-logo.png' alt="logo" width={100} heigth={40} />
                        <h2 className={styles.title}>Stan Smith<span>, Forever!</span></h2>
                        <a className={styles['buy-button']} href="#main-goods-section">КУПИТЬ</a>
                    </div>
                    <img width={640} height={300} src="./img/slider-one.png" alt="Sneakers" />
                </div>
            </div>
        </Carousel>
    )
}

export default Slider;