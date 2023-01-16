import React, { useEffect } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthDetails = () => {
    const [authUser, setAuthUser] = React.useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            alert('Вы вышли из приложения')
        }).catch(error => alert("Возникла ошибка при выходе из приложения"))
    }

    return (
        <div>
            {
            authUser ? 
            <>
            <p>{`Вы вошли в приложение под логином ${authUser.email}`}</p>
            <button onClick={userSignOut}>Выйти из приложения</button>
            </> 
            :
            <p>Вы вышли из приложения</p>
            }
        </div>
    )
}

export default AuthDetails;