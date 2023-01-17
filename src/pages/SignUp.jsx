import React from 'react';
import AuthDetails from '../components/AuthDetails';
import SignUp from '../components/SignUp';

function UserSignUp(props) {
    return (
        <>
            <SignUp />
            <AuthDetails authUser={props.authUser} location={props.location} />
        </>
    );
}

export default UserSignUp;