import React from 'react';
import AuthDetails from '../components/AuthDetails';
import SignIn from '../components/SignIn';

function UserSignIn(props) {
    return (
        <>
            <SignIn />
            <AuthDetails authUser={props.authUser} location={props.location} />
        </>
    )
}

export default UserSignIn;