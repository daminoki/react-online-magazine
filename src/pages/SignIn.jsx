import React from 'react';
import AuthDetails from '../components/AuthDetails';
import SignIn from '../components/SignIn';

function UserSignIn({ authUser, location }) {
    return (
        <>
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