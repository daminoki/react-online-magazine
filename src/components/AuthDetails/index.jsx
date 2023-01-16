import React from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthDetails = (props) => {

    const userSignOut = () => {
        signOut(auth).then(() => {
            alert('Вы вышли из приложения')
        }).catch(error => alert("Возникла ошибка при выходе из приложения"))
    }

    return (
        <div>
            {
            props.authUser ? 
            <>
            <p>{`Вы вошли в приложение под логином ${props.authUser.email}`}</p>
            <button onClick={userSignOut}>Выйти из приложения</button>
            </> 
            :
            <p>Зайдите в приложение или зарегистрируйтесь</p>
            }
        </div>
    )
}

export default AuthDetails;