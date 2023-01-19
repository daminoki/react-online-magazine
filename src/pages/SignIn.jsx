import React from 'react';
import { Link } from 'react-router-dom';
import AuthDetails from '../components/AuthDetails';
import SignIn from '../components/SignIn';

function UserSignIn({ authUser, location }) {
    return (
        <>
        <div style={{
            display: "flex",
            "align-items": "center",
            gap: "10px",
            "max-width": "460px",
            margin: "0 auto",
            padding: "20px"
        }}>
                <Link to='/'>
                    <button style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer"        
                    }}>
                        <img src='./img/black-arrow.svg' alt="Назад" width={24} height={24}></img>
                    </button>
                </Link>
                <p>Вернуться назад</p>
                </div>
        {authUser ?
            <AuthDetails authUser={authUser} location={location} />
        :
            <>
                <SignIn />
                <AuthDetails authUser={authUser} location={location} />
            </>
        }
        </>
    )
}

export default UserSignIn;