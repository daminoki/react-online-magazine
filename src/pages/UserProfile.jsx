import React from 'react';
import AuthDetails from '../components/AuthDetails';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';

function UserProfile(props) {
    return (
        <>
            <SignUp>

            </SignUp>
            <AuthDetails authUser={props.authUser} />
        </>
    );
}

export default UserProfile;