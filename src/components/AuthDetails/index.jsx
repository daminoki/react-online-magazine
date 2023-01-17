import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from 'firebase/auth';
import styles from './AuthDetails.module.scss';

const AuthDetails = ({ authUser, location}) => {

    const userSignOut = () => {
        signOut(auth).then(() => {
            alert('Вы вышли из приложения')
        }).catch(error => alert("Возникла ошибка при выходе из приложения"))
    }
    return (
        <div className={styles.wrapper}>
            {authUser &&
                <div className="d-flex flex-column align-center">
                    <p>{`Вы вошли в приложение под логином ${authUser.email}`}</p>
                    <button className={styles['button-exit']} onClick={userSignOut}>Выйти из приложения</button>
                </div> 
            }

            {(!authUser && location === '/sign-up') &&
                <p className={styles['auth-description']}>Уже есть аккаунт? 
                    <Link className={styles.link} to="sign-in">
                        Войдите
                    </Link>
                </p>
            }

            {(!authUser && location === '/sign-in') &&
                <p className={styles['auth-description']}>Еще не зарегистрированы? 
                    <Link className={styles.link} to="sign-up">
                        Зарегистрируйтесь
                    </Link>
                </p>
            }
        </div>
    )
}

export default AuthDetails;